import cheerio from 'cheerio'
import got from 'got'
import didyoumean from '../tools/didyoumean.js'
import { ScraperError } from '../utils.js'
import {
  JadwalSholat,
  JadwalSholatArgsSchema,
  JadwalSholatItem,
  JadwalSholatItemSchema,
  JadwalSholatSchema
} from './types.js'

export const listJadwalSholat: Promise<JadwalSholatItem[]> = (async () => got('https://raw.githubusercontent.com/BochilTeam/scraper/master/data/jadwal-sholat.json').json<JadwalSholatItem[]>())()
export default async function jadwalsholat (
  kota: string
): Promise<JadwalSholat> {
  JadwalSholatArgsSchema.parse(arguments)

  const listJadwal: JadwalSholatItem[] = await listJadwalSholat
  const cities = listJadwal.map(item => item.kota)
  const prediction = didyoumean(kota, cities)
  const precisionPredection = didyoumean(kota, cities, { threshold: 0.85 })[0]
  if (!precisionPredection) {
    throw new ScraperError(
      `Did you mean ${prediction.map(item => item.query).join(', ')}?\n\nList of cities: ${cities.join(', ')}`
    )
  }
  const jadwal = listJadwal[precisionPredection.index]
  JadwalSholatItemSchema.parse(jadwal)

  const today = await got(
    `https://www.jadwalsholat.org/adzan/ajax/ajax.daily1.php?id=${jadwal.value}`
  ).text()
  const sholatToday: JadwalSholat['today'] = {}
  const $ = cheerio.load(today)
  $('table > tbody > tr')
    .filter('.table_light, .table_dark')
    .each(function () {
      const el = $(this).find('td')
      const sholat = el.eq(0).text()
      const time = el.eq(1).text()
      sholatToday[sholat] = time
    })
  const data = await got(
    `https://jadwalsholat.org/jadwal-sholat/monthly.php?id=${jadwal.value}`
  ).text()
  const list: JadwalSholat['list'] = []
  const $$ = cheerio.load(data)
  $$('table.table_adzan > tbody > tr')
    .filter('.table_light, .table_dark')
    .each(function () {
      const el = $$(this).find('td')
      const date = el.eq(0).text().trim()
      const imsyak = el.eq(1).text().trim()
      const shubuh = el.eq(2).text().trim()
      const terbit = el.eq(3).text().trim()
      const dhuha = el.eq(4).text().trim()
      const dzuhur = el.eq(5).text().trim()
      const ashr = el.eq(6).text().trim()
      const magrib = el.eq(7).text().trim()
      const isyak = el.eq(8).text().trim()
      list.push({
        date,
        imsyak,
        shubuh,
        terbit,
        dhuha,
        dzuhur,
        ashr,
        magrib,
        isyak
      })
    })

  const result = {
    date: $$('tr.table_title > td > h2.h2_edit').text().trim(),
    today: sholatToday,
    list
  }
  return JadwalSholatSchema.parse(result)
}
