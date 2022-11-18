const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, makeInMemoryStore, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const pino = require('pino')
const fdl = require("caliph-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const hx = require('hxz-api')
const xfar = require('xfarr-api')
const os = require('os')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const FormData = require("form-data");
const ms = require('parse-ms')
const toMs = require('ms')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { onGoing, dadu, asupan } = require("./FuncBot/otakudesu.js")
const { smsg, formatp, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./FuncBot/myfunc')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./FuncBot/lvlfunction")
const speedofbot = require("performance-now")
const { color, mylog, infolog } = require("./FuncBot/color");
const premium = require("./FuncBot/premium");
const { isLimit, limitAdd, getDeposit, addDeposit, kurangDeposit, getLimit, giveLimit, addlistml, kuranglistml, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./FuncBot/limit");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./FuncBot/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./FuncBot/respon');
const Dym = require("didyoumean");
const { convertSaldo } = require("./FuncBot/dana");
const { initialize, getStatus, getStatusByNumber, logout } = require('./buglog.js')
const { csrfGenerator, listProduct, isProductValid, getDetailProduct, getQrCode, convertGopay } = require("./FuncBot/gopay");

let Manik = fs.readFileSync('./media/Manik.jpg')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}
 
global.targt = ''
global.jwbb = ''
global.teksft = ''
global.called = false
global.Prefix = 'Multi'
global.ownerNumber = '6281236167286'
global.botName = '4K Sanzz - Md' 
global.owner = ['6281236167286']
global.ownerName = 'Own-4KSanzz'
global.packName = 'Sanzz' 
global.author = '4K Sanzz✓'
global.sessionName = 'ManikQr'
global.limitawal = { premium: "∞", free: 5}
global.thumb = fs.readFileSync('./media/Manik.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')
global.hargadmff = 1261
global.hargadmml = 1700
// FITUR TOPUP OTOMATIS 
global.merchant = 'M221101PAZJ5903YO' 
global.secret = 'fcc9c3922337cd1443c071dbd3d356daebe4f908632e293241c31e8ac014c46f'
global.signature = 'ad488c46183fa32611f547ffbc5e4e10'
//CARA AKTIFIN:
//1. DAFTAR DI APIGAMES.UD
//2. AMBIL MERCHANT ID DAN SECRET KEY
//3. DAFTAR DI UNIPIN
//4. HUBUNGKAN AKUN UNIPIN DENGAN APIGANES DI BAGIAN KONEKSI
//5. BUAT SIGNATURE DENGAN TOOLS ENCRYPT MD5 MERCHANTID+SECRETKEY
//6 PASANG DIATAS SITU DAJ SELESAI.
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
let judullist = []
let trennama = db.others.trennama = []
let trenemail = db.others.trenemail =[]
let trenpw = db.others.trenpw =[]
let daftarlist = []
let lolkey = 'SadTeams'
let antiyt = JSON.parse(fs.readFileSync('./database/antiyt.json'));
let antitele = JSON.parse(fs.readFileSync('./database/antitele.json'));
let antibitly = JSON.parse(fs.readFileSync('./database/antibitly.json'));
let akinator = JSON.parse(fs.readFileSync('./database/akinator.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let money = JSON.parse(fs.readFileSync('./uang.json'));
let deposit = JSON.parse(fs.readFileSync('./deposit.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let simin = JSON.parse(fs.readFileSync('./database/simi.json'))
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let list = {
  "ff": {
    "FF5": {
    "nama": "5 Diamond",
    "hargaid": 900,
    "harga":"Rp900",
    },
        "FF10": {
    "nama": "10 Diamond",
    "hargaid": 1800,
    "harga":"Rp1.800",
    },
        "FF15": {
    "nama": "15 Diamond",
    "hargaid": 2700,
    "harga":"Rp2.700",
    },
        "FF20": {
    "nama": "20 Diamond",
    "hargaid": 3000,
    "harga":"Rp3.000",
    },
        "FF25": {
    "nama": "25 Diamond",
    "hargaid": 3900,
    "harga":"Rp3.900",
    },
        "FF30": {
    "nama": "30 Diamond",
    "hargaid": 4800,
    "harga":"Rp4.800",
    },
        "FF40": {
    "nama": "40 Diamond",
    "hargaid": 6000,
    "harga":"Rp6.000",
    },
        "FF50": {
    "nama": "50 Diamond",
    "hargaid": 7200,
    "harga":"Rp7.200",
    },
        "FF55": {
    "nama": "55 Diamond",
    "hargaid": 8100,
    "harga":"Rp8.100",
    },
        "FF60": {
    "nama": "60 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
        "FF70": {
    "nama": "70 Diamond",
    "hargaid": 9900,
    "harga":"Rp9.900",
    },
        "FF75": {
    "nama": "75 Diamond",
    "hargaid": 10800,
    "harga":"Rp10.800",
    },
"FF80": {
"nama": "80 Diamond",	
"hargaid":11700,
"harga":"Rp11.700",
},
"FF90": {
"nama": "90 Diamond",	
"hargaid":12900,
"harga":"Rp12.900",
},
"FF95": {
"nama": "95 Diamond",	
"hargaid":13800,
"harga":"Rp13.800",	
},
"FF100": {
"nama": "100 Diamond",	
"hargaid": 14400,
"harga":"Rp14.400",
},
"FF120": {
"nama": "120 Diamond",	
"hargaid":17100,
"harga":"Rp17.100",
},
"FF130": {
"nama": "130 Diamond",	
"hargaid":18900,
"harga":"Rp18.900",
},
"FF140": {
"nama": "140 Diamond",	
"hargaid":19800,
"harga":"Rp19.800",	
},
"FF145": {
"nama": "145 Diamond",	
"hargaid":20700,
"harga":"Rp20.700",
},
"FF150": {
"nama": "150 Diamond",	
"hargaid":21600,
"harga":"Rp21.600",
},
"FF160": {
"nama": "160 Diamond",	
"hargaid":22800,
"harga":"Rp22.800",
},
"FF180": {
"nama": "180 Diamond",	
"hargaid":25800,
"harga":"Rp25.800",
},
"FF190": {
"nama": "190 Diamond",	
"hargaid":27000,
"harga":"Rp27.000",
},
"FF200": {
"nama": "200 Diamond",	
"hargaid":28800,
"harga":"Rp28.800",
},
"FF210": {
"nama": "210 Diamond",	
"hargaid":29700,
"harga":"Rp29.700",
},
"FFM": {
"nama": "Member Mingguan",
"hargaid":30000,
"harga":"Rp30.000",
},
"FF250": {
"nama": "250 Diamond",	
"hargaid":35700,
"harga":"Rp35.700",
},
"FF280": {
"nama": "280 Diamond",	
"hargaid":39600,
"harga":"Rp39.600",
},
"FF300": {
"nama": "300 Diamond",	
"hargaid":42600,
"harga":"Rp42.600",
},
"FF355": {
"nama": "355 Diamond",	
"hargaid":49900,
"harga":"Rp49.900",
},
"FF350": {
"nama": "350 Diamond",	
"hargaid":49500,
"harga":"Rp49.500",
},
"FF375": {
"nama": "375 Diamond",	
"hargaid":52500,
"harga":"Rp52.500",
},
"FF400": {
"nama": "400 Diamond",	
"hargaid":56400,
"harga":"Rp56.400",
},
"FF405": {
"nama": "405 Diamond",	
"hargaid":56700,
"harga":"Rp56.700",
},
"FF425": {
"nama": "425 Diamond",	
"hargaid":59400,
"harga":"Rp59.400",
},
"FF475": {
"nama": "475 Diamond",	
"hargaid":66600,
"harga":"Rp66.600",
},
"FF500": {
"nama": "500 Diamond",	
"hargaid":70200,
"harga":"Rp70.200",
},
"FF510": {
"nama": "510 Diamond",	
"hargaid": 72000,
"harga":"Rp72.000",
},
"FF515": {
"nama": "515 Diamond",	
"hargaid": 72300,
"harga":"Rp72.300",
},

"FF512": {
"nama": "512+3 Diamond",	
"hargaid":72300,
"harga":"Rp72.300",
},
"FF545": {
"nama": "545 Diamond",	
"hargaid":76500,
"harga":"Rp76.500",
},
"FF565": {
"nama": "565 Diamond",	
"hargaid":79200,
"harga":"Rp79.200",	
},
"FF600": {
"nama": "600 Diamond",	
"hargaid":84600,
"harga":"Rp84.600",
},
"FF635": {
"nama": "635 Diamond",	
"hargaid": 89100,
"harga":"Rp89.100",
},
"FF645": {
"nama": "645 Diamond",	
"hargaid":90900,
"harga":"Rp90.900",
},
"FF655": {
"nama": "655 Diamond",	
"hargaid":92100,
"harga":"Rp92.100",
},
"FF720": {
"nama": "720 Diamond",	
"hargaid": 99000,
"harga":"Rp99.000",
},
"FF700": {
"nama": "700 Diamond",	
"hargaid":99000,
"harga":"Rp99.000",
},
"FF770": {
"nama": "770 Diamond",	
"hargaid":106200,
"harga":"Rp106.200",	
},
"FF790": {
"nama": "790 Diamond",	
"hargaid": 108900,
"harga":"Rp108.900",
},
"FF800": {
"nama": "800 Diamond",	
"hargaid": 110700,
"harga":"Rp110.700",
},
"FF860": {
"nama": "860 Diamond",	
"hargaid": 118800,
"harga":"Rp118.800",
},
"FF930": {
"nama": "930 Diamond",	
"hargaid":128700,
"harga":"Rp128.700",
},
"FF1000": {
"nama": "1000 Diamond",	
"hargaid":138600,
"harga":"Rp138.600",	
},
"FF1050": {
"nama": "1050 Diamond",	
"hargaid":145800,
"harga":"Rp145.800",
},
"FF1075": {
"nama": "1075 Diamond",	
"hargaid":148500,
"harga":"Rp148.500",
},
"FF1080": {
"nama": "1080 Diamond",	
"hargaid":149400,
"harga":"Rp149.400",
},
"FFB": {
"nama": "Member Bulanan",
"hargaid":150000,
"harga":"Rp150.000",
},
"FF1200": {
"nama": "1200 Diamond",	
"hargaid":166800,
"harga":"Rp166.800",
},
"FF1215": {
"nama": "1215 Diamond",	
"hargaid":16830,
"harga":"Rp168.300",
},
"FF1300": {
"nama": "1300 Diamond",	
"hargaid":180900,
"harga":"Rp180.900",
},
"FF1440": {
"nama": "1440 Diamond",	
"hargaid":198000,
"harga":"Rp198.000",
},
"FF1450": {
"nama": "1450 Diamond",	
"hargaid":199800,
"harga":"Rp199.800",
},
"FF1490": {
"nama": "1490 Diamond",	
"hargaid":205200,
"harga":"Rp205.200",
},
"FF1510": {
"nama": "1510 Diamond",	
"hargaid":207900,
"harga":"Rp207.900",
},
"FF1580": {
"nama": "1580 Diamond",	
"hargaid":217800,
"harga":"Rp217.800",
},
"FF1795": {
"nama": "1795 Diamond",	
"hargaid":247500,
"harga":"Rp247.500",
},
"FF1800": {
"nama": "1800, Diamond",	
"hargaid": 248400,
"harga":"Rp248.400",
},
"FF2000": {
"nama": "2000 Diamond",	
"hargaid":270000,
"harga":"Rp270.000",
},
"FF2140": {
"nama": "2140 Diamond",	
"hargaid": 289800,
"harga":"Rp289.800",
},
"FF2190": {
"nama": "2190 Diamond",	
"hargaid": 297000,
"harga":"Rp297.000",
},
"FF2210": {
"nama": "2210 Diamond",	
"hargaid": 299700,
"harga":"Rp299.700",
},
"FF2280": {
"nama": "2280 Diamond",	
"hargaid": 309600,
"harga":"Rp309.600",
},
"FF2355": {
"nama": "2355 Diamond",	
"hargaid": 319500,
"harga":"Rp319.500",
},
"FF2720": {
"nama": "2720 Diamond",	
"hargaid": 369000,
"harga":"Rp369.000",
},
"FF4000": {
"nama": "4000 Diamond",	
"hargaid": 540000,
"harga":"Rp540.000",
},
"FF77290": {
"nama": "7290 Diamond",	
"hargaid": 990000,
"harga":"Rp990.000",
},
},
};
let listml = {
  "ml": {
    "UPMBL5": {
    "nama": "5 Diamond",
    "hargaid": 1700,
    "harga":"Rp1.700",
    },
        "UPMBL12": {
    "nama": "12 Diamond",
    "hargaid": 4000,
    "harga":"Rp4.000",
    },
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "UPMBL19": {
    "nama": "19 Diamond",
    "hargaid": 7000,
    "harga":"Rp7.000",
    },
        "UPMBL28": {
    "nama": "28 Diamond",
    "hargaid": 10500,
    "harga":"Rp10.500",
    },
        "UPMBL36": {
    "nama": "36 Diamond",
    "hargaid": 13000,
    "harga":"Rp13.000",
    },
        "UPMBL44": {
    "nama": "44 Diamond",
    "hargaid": 15000,
    "harga":"Rp15.000",
    },
        "UPMBL59": {
    "nama": "59 Diamond",
    "hargaid": 18500,
    "harga":"Rp18.500",
    },
        "UPMBL74": {
    "nama": "74 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "UPMBL85": {
    "nama": "85 Diamond",
    "hargaid": 26500,
    "harga":"Rp26.500",
    },
        "UPMBL170": {
    "nama": "170 Diamond",
    "hargaid": 51500,
    "harga":"Rp51.500",
    },
        "UPMBL185": {
    "nama": "185 Diamond",
    "hargaid": 56500,
    "harga":"Rp56.500",
    },
        "UPMBL222": {
    "nama": "222 Diamond",
    "hargaid": 67500,
    "harga":"Rp67.500",
    },
        "UPMBL240": {
    "nama": "240 Diamond",
    "hargaid": 72500,
    "harga":"Rp72.500",
    },
        "UPMBL296": {
    "nama": "296 Diamond",
    "hargaid": 89500,
    "harga":"Rp89.500",
    },
        "UPMBL370": {
    "nama": "370 Diamond",
    "hargaid": 111500,
    "harga":"Rp111.500",
    },
        "UPMBL408": {
    "nama": "408 Diamond",
    "hargaid": 123500,
    "harga":"Rp123.500",
    },
        "UPMBL568": {
    "nama": "568 Diamond",
    "hargaid": 167500,
    "harga":"Rp167.500",
    },
        "UPMBL875": {
    "nama": "875 Diamond",
    "hargaid": 256500,
    "harga":"Rp256.500",
    },
        "UPMBL1159": {
    "nama": "1159 Diamond",
    "hargaid": 333500,
    "harga":"Rp333.500",
    },
        "UPMBL2010": {
    "nama": "2010 Diamond",
    "hargaid": 555.500,
    "harga":"Rp555.500",
    },
        "UPMBL4830": {
    "nama": "4830 Diamond",
    "hargaid": 1322500,
    "harga":"Rp1322.500",
    },
 },
};
let listmlbb = {
  "ml": {
    "ZIDMBL17": {
    "nama": "17 Diamond",
    "hargaid": 4500,
    "harga":"Rp4.500",
    },
        "ZIDMBL34": {
    "nama": "34 Diamond",
    "hargaid": 9000,
    "harga":"Rp9.000",
    },
    "ZIDMBL50": {
    "nama": "50 Diamond",
    "hargaid": 13500,
    "harga":"Rp13.500",
    },
        "ZIDMBL66": {
    "nama": "66 Diamond",
    "hargaid": 18000,
    "harga":"Rp18.000",
    },
        "ZIDMBL74": {
    "nama": "74 Diamond",
    "hargaid": 20000,
    "harga":"Rp20.000",
    },
        "ZIDMBL83": {
    "nama": "83 Diamond",
    "hargaid": 22500,
    "harga":"Rp22.500",
    },
        "ZIDMBL184": {
    "nama": "184 Diamond",
    "hargaid": 5000,
    "harga":"Rp50.000",
    },
        "ZIDMBL366": {
    "nama": "366 Diamond",
    "hargaid": 100000,
    "harga":"Rp100.000",
    },
        "ZIDMBL758": {
    "nama": "758 Diamond",
    "hargaid": 200000,
    "harga":"Rp200.000",
    },
 },
}

const stire = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
module.exports = Manik = async (Manik, m, mentioned, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const args = chath.split(' ')
        const command = chath.toLowerCase().split(' ')[0] || ''
        const isCmd = command.startsWith(prefix)
        const pushname = m.pushName || "No Name"
        const botNumber = await Manik.decodeJid(Manik.user.id)
        const isManik = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = chath.slice(command.length + 1, chath.length)
        const from = m.chat
        const sender = m.sender
        const isGroup = m.isGroup
        const tanggal = moment().format("ll")
        const jam = moment().format("HH:mm:ss z")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await Manik.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiYt = isGroup ? antiyt.includes(from) : false
        const isAntiTele = isGroup ? antitele.includes(from) : false
        const isAntiBitly = isGroup ? antibitly.includes(from) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isUser = pendaftar.includes(sender)
    	const isPremium = isManik ? true : premium.checkPremiumUser(m.sender, _premium)
        moment.tz.setDefault("Asia/Jakarta").locale("id");
        const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const { ownerNumber, botName, gamewaktu, limitCount } = setting
		const isSami = simin.includes(from)
		const conn = Manik
		//FAKE REPLY EX : { quoted: fake }
	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6283102650464-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Hallo* _${pushname} 👋_\n	╰≻ ${command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": "ManikBot", "caption": `©AryaManik`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Manik.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/Manik.jpg')}, text, { sendEphemeral: true, contextInfo: { mentions: memberr } }) : Manik.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/Manik.jpg')}, text, { sendEphemeral: true, quoted: m, contextInfo: { mentions: memberr } })
}
const reply = (teks) => {
			Manik.sendMessage(from, { text: teks }, { quoted: m })
}
const reply2 = (teks) => {
Manik.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botName}`,"body": `4K Sanzz OFFICIAL Goup`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Manik.jpg`),"sourceUrl": "https://chat.whatsapp.com/C2byToeUfSo1gOXfLurPQn"}}}, { quoted: m, contextInfo: { externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: '',
  title: '4KSanzzBot',
  body: 'By 4K Sanzz',
  thumbnail: global.thumb,
  sourceUrl: 'ɑ'
  }}})
}       
const reply1 = (teks) => {
Manik.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botName}`,"body": `Follow Instagram 4K Sanzz`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/Manik.jpg`),"sourceUrl": "https://instagram.com/4k.sanz"}}}, { quoted: m})
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
depo: '0',
}
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('wame' in chats)) chats.wame = false
} else global.db.chats[m.chat] = {
mute: false,
wame: false,
}
} catch (err) {
console.error(err)
}
	    
if (!Manik.public) {
if (!m.key.fromMe) return
}
function ngelistisi(){
let list = '';
list += `${judullist[0]}\n`;
daftarlist.forEach(function (item, index){
index = index+1;
list += `${index}. ${item}\n`
});
return list;
}

function ngelisttugas(){
let list = '';
list += "Daftar tugas : \n"
tugas.forEach(function (item, index){
index = index+1;
list += `${index}. ${item}\n`
});
return list;
}
const casinoSave = (db, obj, session) => {
var mine = db
const dbdir = `./database/${session}.json`
fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}
const setCasino = (session) => {
const dbdir = `./database/${session}.json`
if (!fs.existsSync(dbdir)) {
const objcas = {
status: true,
turn: 'Z',
session: session,
Z: null,
Y: null,
nominal: null,
}
casinoSave(dbdir, objcas, session)
return objcas
} else {
const read = JSON.parse(fs.readFileSync(dbdir))
return read
}
}

const deleteCasino = (from) => {
return fs.unlinkSync('./database/' + from + '.json')
}
async function akiStart() {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=Imanmpa`)
		  return data
		}
		
		async function akiAnswer(server, frontaddr, session, signature, step, answer) {
	          var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=Imanmpa&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
	          return data
	        }
		
		async function akiBack(server, frontaddr, session, signature, step, answer) {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=Imanmpa&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
		  return data
		}
		
		async function akiEnd(server, session, signature, step) {
		  var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/end?apikey=Imanmpa&server=${server}&session=${session}&signature=${signature}&step=${step}`)
		  return data
		}
async function addCountCmdUser(nama, sender, u) {
         var posi = null
         var pos = null
         Object.keys(u).forEach((i) => {
            if (u[i].jid === sender) {
               posi = i
            }
          })
         if (posi === null) {
            u.push({jid: sender, db: [{nama: nama, count: 0}]})
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          Object.keys(u).forEach((i) => {
             if (u[i].jid === sender) {
               posi = i
             }
          })
         }
         if (posi !== null) {
         Object.keys(u[posi].db).forEach((i) => {
            if (u[posi].db[i].nama === nama) {
               pos = i
            }
          })
         if (pos === null) {
           u[posi].db.push({nama: nama, count: 1})
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          } else {
           u[posi].db[pos].count += 1
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          }
         }
        }
async function payment(jid, from, msg = { conversation: "Test" }, currency = "IDR", value = 5000) {
  const paymentTest = {
    amount: {
      currencyCode: currency,
      offset: 5000,
      value: value
    },
    expiryTimestamp: 0,
    amount1000: 10000 * 1000,
    currencyCodeIso4217: currency,
    requestFrom: from,
    noteMessage: msg
  }
  await Manik.relayMessage(jid, { requestPaymentMessage: paymentTest }, {}) 
  return paymentTest
}
        async function getPosiCmdUser(sender, _db) {
         var posi = null
         Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
             posi = i
          }
         })
          return posi
        }
function monospace(string) {
            return '```' + string + '```'
        }
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		const nebal = (angka) => {
                   return Math.floor(angka)
                }
        async function addCountCmd(nama, sender, _db) {
         addCountCmdUser(nama, sender, _cmdUser)
          var posi = null
            Object.keys(_db).forEach((i) => {
               if (_db[i].nama === nama) {
                 posi = i
               }
            })
            if (posi === null) {
              _db.push({nama: nama, count: 1})
              fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
            _db[posi].count += 1
            fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
          }
        }
        
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
const buttonsDefault = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6281236167286` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/4k.sanz` } },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `🛒 Shop Menu`, id: `${prefix}topupmenu` } },
			{ quickReplyButton: { displayText: `📜 Dashboard`, id: `${prefix}dashboard` } }
		]
const buttonsFirst = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6281236167286` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/4k.sanz` } },
			{ quickReplyButton: { displayText: `📝 Menu`, id: `${prefix}menu` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `📜 Dashboard`, id: `${prefix}dashboard` } }
		]
const buttonsAnon = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6281236167286` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/4k.sanz` } },
			{ quickReplyButton: { displayText: `📱 Search`, id: `${prefix}search` } },
			{ quickReplyButton: { displayText: `📲 Skip`, id: `${prefix}skip` } }
		]

		const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})
  return Manik.relayWAMessage(po, {waitForAck: true})
}

global.mess = {
success: 'Berhasil.',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
done: 'Done',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}

	if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		}
if (m.message) {
if (!m.isGroup && isCmd && !m.key.fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !m.key.fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}
}

const levelRole = getLevelingLevel(m.sender)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
	
 // Anti link yt
        if (isGroup && isAntiYt && !isManik && !isAdmins && isBotAdmins) {
            if (chath.match(/(youtu.be\/)/gi)) {
                reply(`*「 YOUTUBE LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link youtube, maaf kamu akan di kick`)
                await Manik.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
        }
        // Anti link tele
        if (isGroup && isAntiTele && !isManik && !isAdmins && isBotAdmins) {
            if (chath.match(/(t.me\/)/gi)) {
                reply(`*「 TELEGRAM LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link telegram, maaf kamu akan di kick`)
                await Manik.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
        }
        // Anti bitly
        if (isGroup && isAntiBitly && !isManik && !isAdmins && isBotAdmins) {
            if (chath.match(/(bit.ly\/)/gi)) {
                reply(`*「 BIT.LY LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link bit.ly, maaf kamu akan di kick`)
                await Manik.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
        }
if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               m.reply(`*「 GROUP LINK DETECTOR 」*\n\n Bot Mendeteksi Anda Telah Mengirim Link Group\nMaaf Anda Akan Di Kick! `)
               if (isAdmins) return reply(`Admin Mah Bebas Bro`)
               if (isManik) return reply(`Owner Mah Bebas Bro`)
               let sianj = m.sender
               await Manik.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  
	if (db.chats[m.chat].wame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`Bot must be admin first`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
               if (isAdmins) return reply(`Admin Mah Bebas Bro`)
               if (isManik) return reply(`Owner Mah Bebas Bro`)
        Manik.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (db.chats[m.chat].mute && !isAdmins && !isManik) {
      return
      }
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Manik.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Manik.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Manik.ev.emit('messages.upsert', msg)
        }	    
      	if (('family100'+m.chat in _family100) && !isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Manik.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, Manik.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Manik.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Manik.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    Manik.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Manik.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Manik.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Manik.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Manik.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Manik.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Manik.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Manik.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Manik.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        const addMonUser = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money += amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    const moneyAdd = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money -= amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    const getMonUser = (sender) => {
        let fiendh = false
      for (let potonlmt of money) {
        if (potonlmt.id === sender) {
           global.userPoton = potonlmt.money
          fiendh = true
          return global.userPoton
        }
      }
      //function adven
      if (fiendh === false) {
        let obj = { id: sender, money: 0 }
        money.push(obj)
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
      }
        // Auto Write Database Akinator Every 1 Minutes
               setInterval(() => {
                  fs.writeFileSync('./database/akinator.json', JSON.stringify(akinator, null, 2))
               }, 30 * 1000)

               // Akinator
               if (!isGroup && akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4"].includes(chath)) {
                 var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                 var jwb = (await akiAnswer(server, frontaddr, session, signature, step, chath)).result
                 if (jwb.hasOwnProperty('name')) {
                   var img = await getBuffer(jwb.image)
                   var cpt = `*HASIL DITEMUKAN*\n\nNama : ${jwb.name}\nDeskripsi : ${jwb.description}`
                   Manik.sendMessage(from, { image: img, caption: cpt }, { quoted: m })
                   .then( res => {
                     delete akinator[sender.split("@")[0]]
                   })
                   return
                 }
                 /* if (chath == "5") {
                   var bhasil = (await akiBack(server, frontaddr, session, signature, step, chath)).result
                   var bques = bhasil.question
                   var bstep = bhasil.step
                   var bteks = `${question}\n\n`
                   bteks += `0 - Ya\n`
                   bteks += `1 - Tidak\n`
                   bteks += `2 - Tidak Tahu\n`
                   bteks += `3 - Mungkin\n`
                   bteks += `4 - Mungkin Tidak`
                   Manik.sendMessage(from, { text: bteks }, { quoted: m }).then( res => {
                     var baki = akinator[sender.split("@")[0]]
                     baki.question = bques
                     baki.step = bstep
                     akinator[sender.split("@")[0]] = baki
                   })
                 } else {*/
                   var jques = jwb.question
                   var jstep = jwb.step
                   var jteks = `${jques}\n\n`
                   jteks += `0 - Ya\n`
                   jteks += `1 - Tidak\n`
                   jteks += `2 - Tidak Tahu\n`
                   jteks += `3 - Mungkin\n`
                   jteks += `4 - Mungkin Tidak`
                   Manik.sendMessage(from, { text: jteks }, { quoted: m }).then( res => {
                     var jaki = akinator[sender.split("@")[0]]
                     jaki.question = jques
                     jaki.step = jstep
                     akinator[sender.split("@")[0]] = jaki
                   })
                 // }
               }
        
        if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
            var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
            if (get_data_respon.isImage === false) {
            Manik.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
            } else {
            buff = await getBuffer(get_data_respon.image_url)
              Manik.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
            }
        }
        
	    if (fs.existsSync(`./database/${from}.json`)) {
          var casinoo = setCasino(`${from}`)
          if (sender == `${casinoo.Y}@s.whatsapp.net` && chath.toLowerCase() == 'n') {
          Manik.sendMessage(from, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y} Membatalkan Game`, mentions: [casinoo.Y+"@s.whatsapp.net"] }, {quoted: m })
          deleteCasino(from)
          }
        if (sender == `${casinoo.Y}@s.whatsapp.net` && chath.toLowerCase() == 'y') {
          var angka1 = await randomNomor(10, 20)
          var angka2 = await randomNomor(10, 20)
          if (angka1 > angka2) {
          starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        Manik.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"]}, {quoted: m })
            await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            await kurangBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            deleteCasino(from)
        } else if (angka1 < angka2) {
           starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
        Manik.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net"] }, {quoted: m })
        await addBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        deleteCasino(from)
          } else if (angka1 = angka2) {
        starGame =  `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
            Manik.sendMessage(from, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net" ]}, { quoted: m })
            deleteCasino(from)
        }
    }
}

        switch(command) {          
case prefix+'menu': case prefix+'help':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                anu = `*── 「 4K Sanzz - MD 」 ──*
                
    _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
  
  Library : *Baileys-MD*.
  Prefix : ( ${prefix} )
  TypeMenu : ( All Menu )
  Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
  Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
  
  Status Anda : ${isManik ? 'Owner' : isPremium ? 'Premium' : 'Free'}
  Limit Harian : ${isManik ? '∞' : isPremium ? '∞' : global.db.users[m.sender].limit}
  Limit Game : ${cekGLimit(sender, gcount, glimit)}
  Total Pengguna : ${pendaftar.length}
  
  *Ⓟ* = Premium Fitur
  *Ⓛ* = Limit Fitur

  *──── 「  Notes - Catatan 」 ────*

  Note : Jika kamu bukan premium, dan kamu menggunakan fitur premium, maka bot tidak akan merespon kamu, jika kamu premium makan bot akan merespon kamu || If you are not premium, and you use premium features, the bot will not respond to you, if you are premium the bot will respond to you
  
  Kamu ingin menjadi premium? agar limit unlimited dan bisa menambahkan bot ke group? silahkan ketik #buypremium 🎻
  
  Anda mau menambahkan bot ini ke group? silahkan sewa bot, untuk sewa bot silahkan ketik #sewa 💫
  
  Kami juga menjual jasa jadibot (tinggal scan), owner, fitur, dan lain lain, kamu yang atur, kamu tinggal scan qr, kamu akan menjadi owner dan kamu bebas mengubah bot mu sesuka hati, hanya 25k/tahun, Minat? silahkan ketik #jadibot 🚧
  ${readmore}
   *｢  TOPUP MENU OTOMATIS  ｣*
  ● ${prefix}topup
  ● ${prefix}topupff
  ● ${prefix}topupml
  ● ${prefix}topupml2
  ● ${prefix}listdml2
  ● ${prefix}listdmff
  ● ${prefix}listdmml
  ● ${prefix}topupff2
  ● ${prefix}listdmff2
  ● ${prefix}mlsmile (Owner Only)
  ● ${prefix}mydepo
  ● ${prefix}deposit
  ● ${prefix}topdeposit
    
  *｢ JASA SUNTIK SOSMED ｣*
  ● ${prefix}order ( cara order) 
  ● ${prefix}followers [jum|targ] 
  ● ${prefix}view [jum|link] 
  ● ${prefix}like [jum|link] 
  ● ${prefix}cekstatus [id] 
  ● ${prefix}prichlist 
  
 *｢  ANONYMOUS MENU  ｣*  	
 ● ${prefix}anonymous
 ● ${prefix}start
 ● ${prefix}next
 ● ${prefix}stop
 ● ${prefix}sendprofile
 ● ${prefix}author
 ● ${prefix}bug
 ● ${prefix}menfes
 
  *｢ STORE MENU ｣*
 ● ${prefix}item
 ● ${prefix}additem
 ● ${prefix}delitem
 ● ${prefix}changeitem
 ● proses
 ● done
 
  *｢ LESSON MENU ｣*    
 ● ${prefix}addtugas
 ● ${prefix}resettugas
 ● ${prefix}outputtugas
 ● ${prefix}hapustugas
 ● ${prefix}addjudultugas
 ● ${prefix}tambah
 ● ${prefix}kali
 ● ${prefix}kurang
 ● ${prefix}bagi
 
  *｢  BANK & PAYMENT  ｣*
 ● ${prefix}topbalance
 ● ${prefix}buylimit
 ● ${prefix}buyglimit
 ● ${prefix}transfer
 ● ${prefix}checklimit
 ● ${prefix}balance
 
 *｢  GROUP MENU  ｣*
 ● ${prefix}linkgroup
 ● ${prefix}antilink [enable/disable]
 ● ${prefix}ephemeral [option]
 ● ${prefix}setppgc [image]
 ● ${prefix}setname [text]
 ● ${prefix}setdesc [text]
 ● ${prefix}group [option]
 ● ${prefix}editinfo [option]
 ● ${prefix}add @tag
 ● ${prefix}kick @tag
 ● ${prefix}hidetag [text]
 ● ${prefix}tagall [text]
 ● ${prefix}promote @tag
 ● ${prefix}demote @tag
 ● ${prefix}vote [text]
 ● ${prefix}devote
 ● ${prefix}upvote
 ● ${prefix}cekvote
 ● ${prefix}hapusvote         
 
 *｢  OWNER MENU  ｣*    
 ● ${prefix}chat [option]
  ● ${prefix}getcase [name]
 ● ${prefix}join [link]
 ● ${prefix}leave
 ● ${prefix}setbotpp
 ● ${prefix}block @user
 ● ${prefix}unblock @user
 ● ${prefix}bcgroup
 ● ${prefix}bcall
 ● ${prefix}self
 ● ${prefix}public
 ● ${prefix}setcmd
 ● ${prefix}listcmd
 ● ${prefix}delcmd
 ● ${prefix}lockcmd
 ● ${prefix}addmsg
 ● ${prefix}listmsg
 ● ${prefix}getmsg
 ● ${prefix}delmsg
 
 *｢  MAIN MENU  ｣*  
 ● ${prefix}ping
 ● ${prefix}owner
 ● ${prefix}donate
 ● ${prefix}menu
 ● ${prefix}delete
 ● ${prefix}chatinfo
 ● ${prefix}quoted
 ● ${prefix}listpc
 ● ${prefix}listgc
 ● ${prefix}listonline
 ● ${prefix}report     
 ● ${prefix}dashboard
 ● ${prefix}rules
  
 *｢ MOVIE MENU ｣*    
 ● ${prefix}drakorongoing
 ● ${prefix}lk21 query
 ● ${prefix}wattpad url_wattpad
 ● ${prefix}wattpadsearch query
 ● ${prefix}cerpen
 ● ${prefix}ceritahoror
 
 *｢ RANDOM TEXT MENU ｣*    
 ● ${prefix}quotes
 ● ${prefix}quotesdiLan
 ● ${prefix}quotesanime
 ● ${prefix}quotesimage
 ● ${prefix}faktaunik
 ● ${prefix}katabijak
 ● ${prefix}pantun
 ● ${prefix}bucin
 ● ${prefix}randomnama
  
 *｢  WIBU MENU  ｣*  
 ● ${prefix}'
 ● ${prefix}manga
 ● ${prefix}anime 
 ● ${prefix}videoanime
 ● ${prefix}husbu
 ● ${prefix}waifu Ⓟ
 ● ${prefix}milf
 ● ${prefix}neko
 ● ${prefix}kanna
 ● ${prefix}sagiri
 ● ${prefix}hentai Ⓟ
 ● ${prefix}cosplay
 ● ${prefix}wallnime
 ● ${prefix}kusonime
 ● ${prefix}megumin
 ● ${prefix}otakudesu
 ● ${prefix}doujindesu
 ● ${prefix}storyanime
 ● ${prefix}nakanomiku
 ● ${prefix}nakanonino
 ● ${prefix}nakanoitsuki
 ● ${prefix}otakuongoing
 ● ${prefix}nhentai *code*
 ● ${prefix}nekopoi *link*
 ● ${prefix}nekopoisearch
 
  *｢  FUN GAME MENU  ｣*  	
 ● ${prefix}piatu
 ● ${prefix}holoh
 ● ${prefix}jadian
 ● ${prefix}jodohku
 ● ${prefix}delttt
 ● ${prefix}tictactoe
 ● ${prefix}family100
 ● ${prefix}tebak [option]
 ● ${prefix}math [mode]
 ● ${prefix}suitpvp [@tag]
 ● ${prefix}casino
 ● ${prefix}delcasino
 ● ${prefix}akinator
 ● ${prefix}cancelakinator
  
 *｢  DOWNLOAD MENU  ｣*
 ● ${prefix}tiktok [url]
 ● ${prefix}tiktokaudio [url]
 ● ${prefix}tiktoknowm [url]     
 ● ${prefix}instagram [url]
 ● ${prefix}twitter [url]
 ● ${prefix}twittermp3 [url]
 ● ${prefix}facebook [url]
 ● ${prefix}pinterestdl [url]
 ● ${prefix}ytmp3 [url]
 ● ${prefix}ytmp4 [url]
 ● ${prefix}getmusic [query]
 ● ${prefix}getvideo [query]
 ● ${prefix}umma [url]
 ● ${prefix}joox [query]
 ● ${prefix}soundcloud [url]
 ● ${prefix}ttnowm [url] 
 ● ${prefix}ttaudio [url]     
                
 *｢  TOOLS MENU  ｣*
 ● ${prefix}toimage
 ● ${prefix}removebg
 ● ${prefix}sticker
 ● ${prefix}emojimix
 ● ${prefix}tovideo
 ● ${prefix}togif
 ● ${prefix}tourl
 ● ${prefix}tovn
 ● ${prefix}tomp3
 ● ${prefix}toaudio
 ● ${prefix}ebinary
 ● ${prefix}dbinary

 *｢  RANDOM MENU  ｣*
 ● ${prefix}coffe
 ● ${prefix}quotesanime
 ● ${prefix}quotesdilan
 ● ${prefix}bucin
 ● ${prefix}katasenja
 ● ${prefix}puisi
 ● ${prefix}ppcp
 ● ${prefix}anime
 ● ${prefix}waifu
 ● ${prefix}husbu
 ● ${prefix}neko
 ● ${prefix}shinobu
 ● ${prefix}megumin
 ● ${prefix}loli

 *｢  SEARCH MENU  ｣*
 ● ${prefix}play [query]
 ● ${prefix}yts [query]
 ● ${prefix}google [query]
 ● ${prefix}gimage [query]
 ● ${prefix}pinterest [query]
 ● ${prefix}wallpaper [query]
 ● ${prefix}wikimedia [query]
 ● ${prefix}ytsearch [query]
 ● ${prefix}ringtone [query]
 ● ${prefix}nickff 
 ● ${prefix}nickml
 ● ${prefix}nickpubg
 ● ${prefix}nickdomino
  
 *｢  VOCAL MENU  ｣*  	
 ● ${prefix}halah
 ● ${prefix}hilih
 ● ${prefix}huluh
 ● ${prefix}heleh
 ● ${prefix}holoh
  
 *｢  AUDIO MENU  ｣*  	
 ● ${prefix}bass
 ● ${prefix}blown
 ● ${prefix}deep
 ● ${prefix}earrape
 ● ${prefix}fast
 ● ${prefix}fat
 ● ${prefix}nightcore
 ● ${prefix}reverse
 ● ${prefix}robot
 ● ${prefix}slow
 ● ${prefix}squirrel

 *｢  ISLAM MENU  ｣*  	
 ● ${prefix}iqra
 ● ${prefix}hadith
 ● ${prefix}alquran
 ● ${prefix}juzamma
 ● ${prefix}tafsirsurah
 
 *｢ CEK MENU ｣*  	
 ● ${prefix}goblokcek 
 ● ${prefix}jelekcek 
 ● ${prefix}rate
 ● ${prefix}haram
 ● ${prefix}gaycek
 ● ${prefix}lesbicek
 ● ${prefix}gantengcek 
 ● ${prefix}cantikcek
 ● ${prefix}begocek 
 ● ${prefix}suhucek
 ● ${prefix}pintercek
 ● ${prefix}jagocek
 ● ${prefix}nolepcek
 ● ${prefix}babicek
 ● ${prefix}bebancek
 ● ${prefix}baikcek
 ● ${prefix}jahatcek
 ● ${prefix}anjingcek
 ● ${prefix}haramcek
 ● ${prefix}pakboycek
 ● ${prefix}pakgirlcek
 ● ${prefix}sangecek 
 ● ${prefix}bapercek
 ● ${prefix}fakboycek
 ● ${prefix}alimcek
 ● ${prefix}suhucek
 ● ${prefix}fakgirlcek
 ● ${prefix}kerencek
 ● ${prefix}wibucek
 ● ${prefix}pasarkascek
 
  *｢  STALKING MENU  ｣*  	
 ● ${prefix}stalkig    _<nama>_
 ● ${prefix}stalkgithub    _<nama>_
 ● ${prefix}stalktwitter    _<nama>_
 ● ${prefix}mlstalk    _<nama>_

 *｢  PRIMBON MENU  ｣*  	
 ● ${prefix}nomorhoki
 ● ${prefix}artimimpi
 ● ${prefix}artinama
 ● ${prefix}ramaljodoh
 ● ${prefix}ramaljodohbali
 ● ${prefix}suamiistri
 ● ${prefix}ramalcinta
 ● ${prefix}cocoknama
 ● ${prefix}pasangan
 ● ${prefix}jadiannikah
 ● ${prefix}sifatusaha
 ● ${prefix}rezeki
 ● ${prefix}pekerjaan
 ● ${prefix}nasib
 ● ${prefix}penyakit
 ● ${prefix}tarot
 ● ${prefix}fengshui
 ● ${prefix}haribaik
 ● ${prefix}harisangar
 ● ${prefix}harisial
 ● ${prefix}nagahari
 ● ${prefix}arahrezeki
 ● ${prefix}peruntungan
 ● ${prefix}weton
 ● ${prefix}karakter
 ● ${prefix}keberuntungan
 ● ${prefix}memancing
 ● ${prefix}masasubur
 ● ${prefix}zodiak
 ● ${prefix}shio

 *｢  BOT MENU  ｣*  	
 ● ${prefix}antilink On/Off
 ● ${prefix}mute On/Off
 ● ${prefix}antiwame On/Off
 ● ${prefix}antiyt On/Off
 ● ${prefix}antitele On/Off
 ● ${prefix}antibitly On/Off
 
  *｢ Text Pro Me ｣*  	
 ● ${prefix}blackpink text
 ● ${prefix}neon text
 ● ${prefix}greenneon text
 ● ${prefix}advanceglow text
 ● ${prefix}futureneon text
 ● ${prefix}sandwriting text
 ● ${prefix}sandsummer text
 ● ${prefix}sandengraved text
 ● ${prefix}metaldark text
 ● ${prefix}neonlight text
 ● ${prefix}holographic text
 ● ${prefix}text1917 text
 ● ${prefix}minion text
 ● ${prefix}deluxesilver text
 ● ${prefix}newyearcard text
 ● ${prefix}bloodfrosted text
 ● ${prefix}halloween text
 ● ${prefix}jokerlogo text
 ● ${prefix}fireworksparkle text
 ● ${prefix}natureleaves text
 ● ${prefix}bokeh text
 ● ${prefix}toxic text
 ● ${prefix}strawberry text
 ● ${prefix}box3d text
 ● ${prefix}roadwarning text
 ● ${prefix}breakwall text
 ● ${prefix}icecold text
 ● ${prefix}luxury text
 ● ${prefix}cloud text
 ● ${prefix}summersand text
 ● ${prefix}horrorblood text
 ● ${prefix}thunder text
 ● ${prefix}pornhub text1 text2
 ● ${prefix}glitch text1 text2
 ● ${prefix}avenger text1 text2
 ● ${prefix}space text1 text2
 ● ${prefix}ninjalogo text1 text2
 ● ${prefix}marvelstudio text1 text2
 ● ${prefix}lionlogo text1 text2
 ● ${prefix}wolflogo text1 text2
 ● ${prefix}steel3d text1 text2
 ● ${prefix}wallgravity text1 text2

  *｢ Nsfw Anime ｣*  	
 ● ${prefix}chiisaihentai Ⓟ
 ● ${prefix}trap Ⓟ
 ● ${prefix}blowjob Ⓟ
 ● ${prefix}yaoi Ⓟ
 ● ${prefix}ecchi Ⓟ
 ● ${prefix}hentai Ⓟ
 ● ${prefix}ahegao Ⓟ
 ● ${prefix}hololewd Ⓟ
 ● ${prefix}sideoppai Ⓟ
 ● ${prefix}animefeets Ⓟ
 ● ${prefix}animebooty Ⓟ
 ● ${prefix}animethighss Ⓟ
 ● ${prefix}hentaiparadise Ⓟ
 ● ${prefix}animearmpits Ⓟ
 ● ${prefix}hentaifemdom Ⓟ
 ● ${prefix}lewdanimegirls Ⓟ
 ● ${prefix}biganimetiddies Ⓟ
 ● ${prefix}animebellybutton Ⓟ
 ● ${prefix}hentai4everyone Ⓟ

  *｢ Random Image ｣*  	
 ● ${prefix}bj Ⓟ
 ● ${prefix}ero Ⓟ
 ● ${prefix}ppcp
 ● ${prefix}cum Ⓟ
 ● ${prefix}feet Ⓟ
 ● ${prefix}yuri Ⓟ
 ● ${prefix}trap Ⓟ
 ● ${prefix}lewd Ⓟ
 ● ${prefix}feed Ⓟ
 ● ${prefix}eron Ⓟ
 ● ${prefix}solo Ⓟ
 ● ${prefix}gasm Ⓟ
 ● ${prefix}poke Ⓟ
 ● ${prefix}anal Ⓟ
 ● ${prefix}holo Ⓟ
 ● ${prefix}tits Ⓟ
 ● ${prefix}kuni Ⓟ
 ● ${prefix}kiss Ⓟ
 ● ${prefix}erok Ⓟ
 ● ${prefix}smug Ⓟ
 ● ${prefix}baka Ⓟ
 ● ${prefix}solog Ⓟ
 ● ${prefix}feetg Ⓟ
 ● ${prefix}lewdk Ⓟ
 ● ${prefix}waifu Ⓟ
 ● ${prefix}pussy Ⓟ
 ● ${prefix}femdom Ⓟ
 ● ${prefix}cuddle Ⓟ
 ● ${prefix}hentai Ⓟ
 ● ${prefix}eroyuri Ⓟ
 ● ${prefix}cum_jpg Ⓟ
 ● ${prefix}blowjob Ⓟ
 ● ${prefix}erofeet Ⓟ
 ● ${prefix}holoero Ⓟ
 ● ${prefix}classic Ⓟ
 ● ${prefix}erokemo Ⓟ
 ● ${prefix}fox_girl Ⓟ
 ● ${prefix}futanari Ⓟ
 ● ${prefix}lewdkemo Ⓟ
 ● ${prefix}wallpaper Ⓟ
 ● ${prefix}pussy_jpg Ⓟ
 ● ${prefix}kemonomimi Ⓟ
 ● ${prefix}nsfw_avatar Ⓟ
 ● ${prefix}ngif Ⓟ
 ● ${prefix}nsfw_neko_gif Ⓟ
 ● ${prefix}random_hentai_gif Ⓟ
  
  *｢ Photo Oxy ｣*  	
 ● ${prefix}shadow text
 ● ${prefix}cup text
 ● ${prefix}cup1 text
 ● ${prefix}romance text
 ● ${prefix}smoke text
 ● ${prefix}burnpaper text
 ● ${prefix}lovemessage text
 ● ${prefix}undergrass text
 ● ${prefix}love text
 ● ${prefix}coffe text
 ● ${prefix}woodheart text
 ● ${prefix}woodenboard text
 ● ${prefix}summer3d text
 ● ${prefix}wolfmetal text
 ● ${prefix}nature3d text
 ● ${prefix}underwater text
 ● ${prefix}goldenrose text
 ● ${prefix}summernature text
 ● ${prefix}letterleaves text
 ● ${prefix}glowingneon text
 ● ${prefix}fallleaves text
 ● ${prefix}flamming text
 ● ${prefix}harrypotter text
 ● ${prefix}carvedwood text
 ● ${prefix}tiktok text1 text2
 ● ${prefix}arcade8bit text1 text2
 ● ${prefix}battlefield4 text1 text2
 ● ${prefix}pubg text1 text2

  *｢ Ephoto 360 ｣*  	
 ● ${prefix}wetglass text
 ● ${prefix}multicolor3d text
 ● ${prefix}watercolor text
 ● ${prefix}luxurygold text
 ● ${prefix}galaxywallpaper text
 ● ${prefix}lighttext text
 ● ${prefix}beautifulflower text
 ● ${prefix}puppycute text
 ● ${prefix}royaltext text
 ● ${prefix}heartshaped text
 ● ${prefix}birthdaycake text
 ● ${prefix}galaxystyle text
 ● ${prefix}hologram3d text
 ● ${prefix}greenneon text
 ● ${prefix}glossychrome text
 ● ${prefix}greenbush text
 ● ${prefix}metallogo text
 ● ${prefix}noeltext text
 ● ${prefix}glittergold text
 ● ${prefix}textcake text
 ● ${prefix}starsnight text
 ● ${prefix}wooden3d text
 ● ${prefix}textbyname text
 ● ${prefix}writegalacy text
 ● ${prefix}galaxybat text
 ● ${prefix}snow3d text
 ● ${prefix}birthdayday text
 ● ${prefix}goldplaybutton text
 ● ${prefix}silverplaybutton text
 ● ${prefix}freefire text
 
 *Thx To:*
 ●All creator bot
 ●Tuhanku
 ●Ortuku
 ●Penyemangatku
 ●4K Sanzz~_~

 © DESIGN: Langz`
 Manik.sendMessage(m.chat, { caption: anu, image: { url: "./media/menu.jpg" }, templateButtons: buttonsDefault, footer: '  Own-4KSanzz√', mentions: [m.sender] })
break 
}
case prefix+'topupmenu':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                anu = `*── 「 4K SANZZ V1 」 ──*
                
    _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
  
  Library : *Baileys-MD*.
  Prefix : ( ${prefix} )
  TypeMenu : ( Single Menu )
  Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
  Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
  
  Status Anda : ${isManik ? 'Owner' : isPremium ? 'Premium' : 'Free'}
  Limit Harian : ${isManik ? '∞' : isPremium ? '∞' : global.db.users[m.sender].limit}
  Limit Game : ${cekGLimit(sender, gcount, glimit)}
  Total Pengguna : ${pendaftar.length}
  ${readmore}
   *｢  TOPUP MENU OTOMATIS  ｣*
  ● ${prefix}topup
  ● ${prefix}topupff
  ● ${prefix}topupml
  ● ${prefix}topupml2
  ● ${prefix}listdml2
  ● ${prefix}listdmff
  ● ${prefix}listdmml
  ● ${prefix}topupff2
  ● ${prefix}listdmff2
  ● ${prefix}mlsmile (Owner Only)
  ● ${prefix}mydepo
  ● ${prefix}deposit
  ● ${prefix}topdeposit
    
  *｢ STORE MENU ｣*
 ● ${prefix}item
 ● ${prefix}additem
 ● ${prefix}delitem
 ● ${prefix}changeitem
 ● proses
 ● done

  *｢ JASA SUNTIK SOSMED ｣*
  ● ${prefix}order ( cara order) 
  ● ${prefix}followers [jum|targ] 
  ● ${prefix}view [jum|link] 
  ● ${prefix}like [jum|link] 
  ● ${prefix}cekstatus [id] 
  ● ${prefix}prichlist 
  
  *Thx To:*
  ●All creator bot
  ●Tuhanku
  ●Ortuku
  ●Penyemangatku
  ●4K Sanzz~_~

 © DESIGN: 4K Sanzz`
 Manik.sendMessage(m.chat, { caption: anu, image: { url: "./media/menu.jpg" }, templateButtons: buttonsFirst, footer: '4KSanzz- By-Sanzz√', mentions: [m.sender] })
break 
}
case prefix+'jaksel':
const jaksel = await fetchJson(`https://api.lolhuman.xyz/api/randombahasa?apikey=Imanmpa&text=${text}`)
reply(jaksel.result)
break
case 'cantopen':
if (!isManik) reply(mess.owner)
payment(from,'Cant open chat', null, null, null)
break
case prefix+'ngtes':{
if (!isManik && !m.key.fromMe) return onlyOwner() 
try {
var ppimg = await Manik.profilePictureUrl(sender, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const ofrply = await getBuffer(ppimg)
const bugfc = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `Kok Fc Bang`, "jpegThumbnail": ofrply}}}
var bugreact = await Manik.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: m.id } } })
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO DEKK 🥶", 
"options": [
   {
"optionName": "VOTE YUK"
   }, 
   {
"optionName": "BERANI VOTE GK"
   }, 
   {
"optionName": "VOTE LAH SEMUA"
   }, 
   {
"optionName": "KATANYA WA KEBAL"
   }, 
   {
"optionName": "SALAM CREATOR BOT"
   }
], 
"selectableOptionsCount": 5
  }
}), { userJid: from, quoted: bugfc })
Manik.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
Manik.sendMessage(from, { text: "awowkwkwk" }, { quoted: bugreact });
}
break
//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Manik Only! ]━━━━━━━━━━━━━━━\\
case prefix+'settarget': {
global.targt = args.join(" ").split("|")[0];
global.jwbb = args.join(" ").split("|")[1];
global.teksft = args.join(" ").split("|")[2];
reply('succes')
break
}
case 'nihkan': {
//if (!m.isGroup) return reply(mess.group)
targetd = global.targt
jawbanbot = global.jwbb
teksfit = global.teksft
targetnya = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : targetd.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Manik.sendMessage(from, {text:jawbanbot}, {quoted:{
key: {
fromMe: false,
participant: targetnya
},
message: {
conversation: teksfit
}
}})
}
break
case "1204": 
Manik.sendMessage(from, { delete: {
  remoteJid: from,
  id: m.quoted.id,
  fromMe: false,
  participant: ''
}})
break
case '0612':
if (!isManik) reply(mess.owner)
                    let bugfc = {
                        key: {
                            fromMe: true,
                            participant: `0@s.whatsapp.net`,
                            ...({
                                remoteJid: ""
                            })
                        },
                        message: {
                            conversation: 'p'
                        }
                    }
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })
                    break
case prefix+'sendb':{
if (!isManik) reply(mess.owner)
                    Manik.sendMessage(`${text}@s.whatsapp.net`, {text: `hallo` })
                    break
}
case '0235':{
if (!isManik) reply(mess.owner)
                    let bugfc = {
                        key: {
                            fromMe: true,
                            participant: `0@s.whatsapp.net`,
                            ...({
                                remoteJid: ""
                            })
                        },
                        message: {
                            conversation: 'p'
                        }
                    }
                    Manik.sendMessage(from, {
                        text: 'p'
                    }, {
                        quoted: bugfc
                    })

                    break 
                    }
case 'hekhem':
Manik.sendMessage(m.chat, {audio: fs.readFileSync('./ara.mp3'), mimetype:'audio/mpeg', ptt:true })
break
case '00024':{
if (!isManik) reply(mess.owner)
const baileys = require("@adiwajshing/baileys")
let reactionMessage = baileys.proto.Message.ReactionMessage.create({ key: m.key, text: "" })
Manik.relayMessage(from, { reactionMessage }, { messageId: "ppppp" }) 
break 
}
case prefix+'tts':
let eng = text.split("|")[0]
let cap = text.split("|")[1]
  if (!q.includes("@")) return Manik.sendMessage(from, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ|ʜᴇʟʟᴏ`, text, {quoted: m})
 var dtt = `${cap}`
  reply(mess.wait)
  var ranm = getRandom('.mp3')
		var	rano = getRandom('.ogg')
				dtt.length > 300
         gtts.save(ranm, dtt, function() {
          exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
          fs.unlinkSync(ranm)
          buffer = fs.readFileSync(rano)
          if (err) return reply('error')
          Manik.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true})
          fs.unlinkSync(rano)
          })
          })
  break
case prefix+'shopeepay':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let noshp = text
if (isNaN(parseInt(noshp))) return reply(`${command} 6285737134572`)
const sections = [
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp10.000", rowId: `${prefix}cvspay ${noshp}|1`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp20.000", rowId: `${prefix}cvspay ${noshp}|2`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp25.000", rowId: `${prefix}cvspay ${noshp}|3`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp50.000", rowId: `${prefix}cvspay ${noshp}|4`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp60.000", rowId: `${prefix}cvspay ${noshp}|6`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp75.000", rowId: `${prefix}cvspay ${noshp}|7`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp100.000", rowId: `${prefix}cvspay ${noshp}|8`}
	]
    },
    {
	title: `Convert ShopeePay`,
	rows: [
	    {title: "Rp200.000", rowId: `${prefix}cvspay ${noshp}|10`}
	]
    },
]
let isian = `    
Silahkan Pilih Nominal Saldo E-wallet Yang Akan Anda Convert Ke Shopeepay!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Qris Pembayaran Dan Anda Harus Membayar Melalu Aplikasi E-wallet Yang Mendukung Qris, Pastikan Nominal Yang Anda Krimkan Harus Sama Dengan Nominal Yang Diminta!.

Jika Anda Sudah Melakukan Pembayaran, Silahkan Tunggu 1-5 Menit Dan Melakukan Pengecekan Secara Berkala Pada Saldo Anda!.`
const listMessage = {
  text: isian,
  footer: "Powered By @sanzz",
  title: "━━[ Nominal saldo Shopeepay ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await Manik.sendMessage(from, listMessage)
break
}
case prefix+'ovo':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let noshp = text
if (isNaN(parseInt(noshp))) return reply(`${command} 6281236167286`)
const sections = [
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp20.000", rowId: `${prefix}cvspay ${noshp}|11`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp25.000", rowId: `${prefix}cvspay ${noshp}|12`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp30.000", rowId: `${prefix}cvspay ${noshp}|13`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp40.000", rowId: `${prefix}cvspay ${noshp}|14`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp50.000", rowId: `${prefix}cvspay ${noshp}|15`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp60.000", rowId: `${prefix}cvspay ${noshp}|16`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp70.000", rowId: `${prefix}cvspay ${noshp}|17`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp75.000", rowId: `${prefix}cvspay ${noshp}|18`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp90.000", rowId: `${prefix}cvspay ${noshp}|19`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp100.000", rowId: `${prefix}cvspay ${noshp}|20`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp125.000", rowId: `${prefix}cvspay ${noshp}|21`}
	]
    },
     {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp150.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
    {
	title: `Convert Ovo`,
	rows: [
	    {title: "Rp200.000", rowId: `${prefix}cvspay ${noshp}|22`}
	]
    },
]
let isian = `    
Silahkan Pilih Nominal Saldo E-wallet Yang Akan Anda Convert Ke Ovo!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Qris Pembayaran Dan Anda Harus Membayar Melalu Aplikasi E-wallet Yang Mendukung Qris, Pastikan Nominal Yang Anda Krimkan Harus Sama Dengan Nominal Yang Diminta!.

Jika Anda Sudah Melakukan Pembayaran, Silahkan Tunggu 1-2 Menit Dan Melakukan Pengecekan Secara Berkala Pada Saldo Anda!.`
const listMessage = {
  text: isian,
  footer: "Powered By @",
  title: "━━[ Nominal saldo Ovo ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await Manik.sendMessage(from, listMessage)
break
}
case prefix+'cvspay':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
let cvnya = await convertSaldo(`${produkid}`, `${idff}`)
let byr = `*─ 「 CEK TRANSAKSIMU 」 ─*
     
_Berikut Adalah Transaksi Anda_
_》Saldo : ${cvnya.product}_
_》No Tujuan : ${idff}_
_》Total Tagihan : ${cvnya.tagihan}_
_》Id Trx : ${cvnya.order_id}_

Silahkan Scan Qris Diatas Untuk Melakukan Pembayaran
Saldo Akan Masuk Otomatis Dalam Waktu 1-5 Menit Setelah Melakukan Pembayaran!.`
Manik.sendMessage(m.chat, { image: { url: cvnya.img }, caption: `${byr}` }, { quoted: m })
break
}
//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Sanzz Only! ]━━━━━━━━━━━━━━━\\

//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Sanzz Only! ]━━━━━━━━━━━━━━━\\
case prefix+'topdeposit':{
                money.sort((a, b) => (a.money < b.money) ? 1 : -1)
                let top = '*── 「 TOP DEPOSIT 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (money.length < 10) total = money.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${money[i].id.split("@")[0]}\n=> Saldo : Rp${money[i].money}\n\n`
                    arrTop.push(money[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
case prefix+'mydepo':
let myde = `*─ 「 CHECK YOUR ACCOUNT 」 ─*
     
_Berikut Adalah Data Akun Anda_
_》Saldo User : Rp${getMonUser(sender)}_
_》Name : ${pushname}_
_》Id : ${sender.replace("@s.whatsapp.net", "")}_

Note: Jika Undefined Artinya Saldo Kamu Rp0
Saldo Hanya Bisa Untuk Topup Saja, Tidak Bisa Ditarik!.`
reply(myde)
break
case prefix+'deposit':
let depisi = `*─ 「 CARA DEPOSIT 」 ─*
     
_Berikut Adalah Cara Deposit User!._
_For Your Information, ManikBot Hanya Mendukung Deposit Melalui Ovo, Shopeepay, Dana, Qris Saja._

_》Gopay : Chat Owner
_》Dana : 081236167286
_》Pulsa Tri/Xl : Chat Owner_

_Jika Sudah Melakukan Transfer Harap Kirim Bukti Dengan Cara Mengirim Screenshot Dengan Caption, Contoh:_
${prefix}bukti JUMLAH|CATATAN
_Contoh:_
${prefix}bukti 10000|isi Saldo 6281236167286
Saldo Akan Masuk Ketika Owner Mengklik Tombol Acc Yang Dikirim Bot!.`
reply(depisi)
break
case prefix+'bukti':
let depo = text.split("|")[0]
let catatnya = text.split("|")[1]
if (isNaN(parseInt(depo))) return reply('Deposit Harus Berupa Angka!')
let bukti = `*─ 「 DEPOSIT USER 」 ─*
     
_Berikut Adalah Bukti Deposit Dari User_
_》Saldo awal : Rp${getMonUser(sender)}_
_》Deposit : Rp${depo}_
_》Id : ${sender.replace("@s.whatsapp.net", "")}_
_》Catatan : ${catatnya}_

Silahkan Segera Melakukan Pengisian Saldo User Jika Bukti Sudah Benar!.`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Manik.sendImage(`6287873670287@s.whatsapp.net`, media, `Bukti Dari: ${sender.replace("@s.whatsapp.net", "")}`, m)
let buttons = [
{ buttonId: prefix+`depoyes ${depo}|${m.sender}`, buttonText: { displayText: 'Acc' }, type: 1 },
{ buttonId: prefix+`depono`, buttonText: { displayText: 'salah' }, type: 1 }
]
Manik.sendButtonText(`6287873670287@s.whatsapp.net`, buttons, `${bukti}`, Manik.user.name, m)
}
break
case prefix+'depoyes':
if (!isManik) reply(mess.owner)
let jumbelah = text.split("|")[0] * 1
let siapah = text.split("|")[1]
addMonUser(siapah, jumbelah)
reply('Sukses')
let nbuttons = [
{ buttonId: prefix+`mydepo`, buttonText: { displayText: 'My Deposit' }, type: 1 },
{ buttonId: prefix+`topup`, buttonText: { displayText: 'TopUp' }, type: 1 }
]
Manik.sendButtonText(`${siapah}`, nbuttons, `Topup Anda Berhasil Di Acc, Silahkan Melakukan TopUp Dengan Mudah Hanya Di ManikBot!`, Manik.user.name, m)
break
case prefix+'depono':
if (!isManik) reply(mess.owner)
let umbelah = text.split("|")[0]
let iapah = text.split("|")[1]
reply('Deposit Tidak Akan Dilanjutkan')
Manik.sendMessage(`${iapah}`, {text: `Topup Anda Ditolak!, Mungkin Anda Melakukan Fake Topup Atau Kekeliruan Lain, Silahkan Chat Owner Jika Ada Masalah!.` })
break
case prefix+'topup':{
const sections = [
    {
	title: `Format: ${prefix}topupff id|jumlah`,
	rows: [
	    {title: "List Diamond Free Fire", rowId: `${prefix}listdmff`}
	]
    },
    {
	title: `Format: ${prefix}topupff2 id|jumlah`,
	rows: [
	    {title: "List Diamond Free Fire Server 2", rowId: `${prefix}listdmff2`}
	]
    },
   {
   	title: `Format: ${prefix}topupml id|server|jumlah`,
	rows: [
	    {title: "List Diamond Mobile Legends", rowId: `${prefix}listdmml`}
	]
    },
   {
   	title: `Format: ${prefix}topupml2 id|server|jumlah`,
	rows: [
	    {title: "List Diamond Mobile Legends Server 2", rowId: `${prefix}listdmml2`}
	]
    },
]
let isian = `    
_Berikut Adalah Data Akun Anda_
_》Saldo User : ${getMonUser(sender)}_
_》Name : ${pushname}_
_》Id : ${sender.replace("@s.whatsapp.net", "")}_

Note: Jika Undefined Artinya Saldo Kamu Rp0
Saldo Hanya Bisa Untuk Topup Saja, Tidak Bisa Ditarik!.`
const listMessage = {
  text: isian,
  footer: "Powered By @4K Sanzz",
  title: "━━[ List Topup 4K Sanzz ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await Manik.sendMessage(from, listMessage)
break
}
case prefix+'listdmff':
lisnya = `*── 「 DIAMOND FREE FIRE 」 ──*

_》${list.ff.FF5.nama} : ${list.ff.FF5.harga}_
_》${list.ff.FF10.nama} : ${list.ff.FF10.harga}_
_》${list.ff.FF15.nama} : ${list.ff.FF15.harga}_
_》${list.ff.FF20.nama} : ${list.ff.FF20.harga}_
_》${list.ff.FF25.nama} : ${list.ff.FF25.harga}_
_》${list.ff.FF30.nama} : ${list.ff.FF30.harga}_
_》${list.ff.FF40.nama} : ${list.ff.FF40.harga}_
_》${list.ff.FF50.nama} : ${list.ff.FF50.harga}_
_》${list.ff.FF55.nama} : ${list.ff.FF55.harga}_
_》${list.ff.FF60.nama} : ${list.ff.FF60.harga}_
_》${list.ff.FF70.nama} : ${list.ff.FF70.harga}_
_》${list.ff.FF75.nama} : ${list.ff.FF75.harga}_
_》${list.ff.FF80.nama} : ${list.ff.FF80.harga}_
_》${list.ff.FF90.nama} : ${list.ff.FF90.harga}_
_》${list.ff.FF95.nama} : ${list.ff.FF95.harga}_
_》${list.ff.FF100.nama} : ${list.ff.FF100.harga}_
_》${list.ff.FF120.nama} : ${list.ff.FF120.harga}_
_》${list.ff.FF130.nama} : ${list.ff.FF130.harga}_
_》${list.ff.FF140.nama} : ${list.ff.FF140.harga}_
_》${list.ff.FF145.nama} : ${list.ff.FF145.harga}_
_》${list.ff.FF150.nama} : ${list.ff.FF150.harga}_
_》${list.ff.FF160.nama} : ${list.ff.FF160.harga}_
_》${list.ff.FF180.nama} : ${list.ff.FF180.harga}_
_》${list.ff.FF190.nama} : ${list.ff.FF190.harga}_
_》${list.ff.FF200.nama} : ${list.ff.FF200.harga}_
_》${list.ff.FF210.nama} : ${list.ff.FF210.harga}_
_》${list.ff.FFM.nama} : ${list.ff.FFM.harga}_
_》${list.ff.FF250.nama} : ${list.ff.FF250.harga}_
_》${list.ff.FF280.nama} : ${list.ff.FF280.harga}_
_》${list.ff.FF300.nama} : ${list.ff.FF300.harga}_
_》${list.ff.FF355.nama} : ${list.ff.FF355.harga}_
_》${list.ff.FF350.nama} : ${list.ff.FF350.harga}_
_》${list.ff.FF375.nama} : ${list.ff.FF375.harga}_
_》${list.ff.FF400.nama} : ${list.ff.FF400.harga}_
_》${list.ff.FF405.nama} : ${list.ff.FF405.harga}_
_》${list.ff.FF425.nama} : ${list.ff.FF425.harga}_
_》${list.ff.FF475.nama} : ${list.ff.FF475.harga}_
_》${list.ff.FF500.nama} : ${list.ff.FF500.harga}_
_》${list.ff.FF510.nama} : ${list.ff.FF510.harga}_
_》${list.ff.FF515.nama} : ${list.ff.FF515.harga}_
_》${list.ff.FF512.nama} : ${list.ff.FF512.harga}_
_》${list.ff.FF545.nama} : ${list.ff.FF545.harga}_
_》${list.ff.FF565.nama} : ${list.ff.FF565.harga}_
_》${list.ff.FF600.nama} : ${list.ff.FF600.harga}_
_》${list.ff.FF635.nama} : ${list.ff.FF635.harga}_
_》${list.ff.FF645.nama} : ${list.ff.FF645.harga}_
_》${list.ff.FF655.nama} : ${list.ff.FF655.harga}_
_》${list.ff.FF720.nama} : ${list.ff.FF720.harga}_
_》${list.ff.FF700.nama} : ${list.ff.FF700.harga}_
_》${list.ff.FF770.nama} : ${list.ff.FF770.harga}_
_》${list.ff.FF790.nama} : ${list.ff.FF790.harga}_
_》${list.ff.FF800.nama} : ${list.ff.FF800.harga}_
_》${list.ff.FF860.nama} : ${list.ff.FF860.harga}_
_》${list.ff.FF930.nama} : ${list.ff.FF930.harga}_
_》${list.ff.FF1000.nama} : ${list.ff.FF1000.harga}_
_》${list.ff.FF1050.nama} : ${list.ff.FF1050.harga}_
_》${list.ff.FF1075.nama} : ${list.ff.FF1075.harga}_
_》${list.ff.FF1080.nama} : ${list.ff.FF1080.harga}_
_》${list.ff.FFB.nama} : ${list.ff.FFB.harga}_
_》${list.ff.FF1200.nama} : ${list.ff.FF1200.harga}_
_》${list.ff.FF1215.nama} : ${list.ff.FF1215.harga}_
_》${list.ff.FF1300.nama} : ${list.ff.FF1300.harga}_
_》${list.ff.FF1440.nama} : ${list.ff.FF1440.harga}_
_》${list.ff.FF1450.nama} : ${list.ff.FF1450.harga}_
_》${list.ff.FF1490.nama} : ${list.ff.FF1490.harga}_
_》${list.ff.FF1510.nama} : ${list.ff.FF1510.harga}_
_》${list.ff.FF1580.nama} : ${list.ff.FF1580.harga}_
_》${list.ff.FF1795.nama} : ${list.ff.FF1795.harga}_
_》${list.ff.FF1800.nama} : ${list.ff.FF1800.harga}_
_》${list.ff.FF2000.nama} : ${list.ff.FF2000.harga}_
_》${list.ff.FF2140.nama} : ${list.ff.FF2140.harga}_
_》${list.ff.FF2190.nama} : ${list.ff.FF2190.harga}_
_》${list.ff.FF2210.nama} : ${list.ff.FF2210.harga}_
_》${list.ff.FF2280.nama} : ${list.ff.FF2280.harga}_
_》${list.ff.FF2355.nama} : ${list.ff.FF2355.harga}_
_》${list.ff.FF2720.nama} : ${list.ff.FF2720.harga}_
_》${list.ff.FF4000.nama} : ${list.ff.FF4000.harga}_
_》${list.ff.FF77290.nama} : ${list.ff.FF77290.harga}_

Cara Pembelian:
${prefix}topupff ID|JUMLAH DIAMOND
Contoh:
${prefix}topupff 123456789|1450

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
reply(lisnya)
break
case prefix+'listdmml':
lisya = `*── 「 DIAMOND MOBILE LEGENDS 」 ──*

_》${listml.ml.UPMBL5.nama} : ${listml.ml.UPMBL5.harga}_
_》${listml.ml.UPMBL12.nama} : ${listml.ml.UPMBL12.harga}_
_》${listml.ml.UPMBL19.nama} : ${listml.ml.UPMBL19.harga}_
_》${listml.ml.UPMBL28.nama} : ${listml.ml.UPMBL28.harga}_
_》${listml.ml.UPMBL36.nama} : ${listml.ml.UPMBL36.harga}_
_》${listml.ml.UPMBL44.nama} : ${listml.ml.UPMBL44.harga}_
_》${listml.ml.UPMBL59.nama} : ${listml.ml.UPMBL59.harga}_
_》${listml.ml.UPMBL74.nama} : ${listml.ml.UPMBL74.harga}_
_》${listml.ml.UPMBL85.nama} : ${listml.ml.UPMBL85.harga}_
_》${listml.ml.UPMBL170.nama} : ${listml.ml.UPMBL170.harga}_
_》${listml.ml.UPMBL185.nama} : ${listml.ml.UPMBL185.harga}_
_》${listml.ml.UPMBL222.nama} : ${listml.ml.UPMBL222.harga}_
_》${listml.ml.UPMBL240.nama} : ${listml.ml.UPMBL240.harga}_
_》${listml.ml.UPMBL296.nama} : ${listml.ml.UPMBL296.harga}_
_》${listml.ml.UPMBL370.nama} : ${listml.ml.UPMBL370.harga}_
_》${listml.ml.UPMBL408.nama} : ${listml.ml.UPMBL408.harga}_
_》${listml.ml.UPMBL568.nama} : ${listml.ml.UPMBL568.harga}_
_》${listml.ml.UPMBL875.nama} : ${listml.ml.UPMBL875.harga}_
_》${listml.ml.UPMBL1159.nama} : ${listml.ml.UPMBL1159.harga}_
_》${listml.ml.UPMBL2010.nama} : ${listml.ml.UPMBL2010.harga}_
_》${listml.ml.UPMBL4830.nama} : ${listml.ml.UPMBL4830.harga}_

Cara Pembelian:
${prefix}topupml ID|SERVER|JUMLAH DIAMOND
Contoh:
${prefix}topupml 123456789|1450|74

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
reply(lisya)
break
case prefix+'listdmml2':
lisya = `*── 「 DIAMOND MOBILE LEGENDS 」 ──*

_》${listmlbb.ml.ZIDMBL17.nama} : ${listmlbb.ml.ZIDMBL17.harga}_
_》${listmlbb.ml.ZIDMBL34.nama} : ${listmlbb.ml.ZIDMBL34.harga}_
_》${listmlbb.ml.ZIDMBL50.nama} : ${listmlbb.ml.ZIDMBL50.harga}_
_》${listmlbb.ml.ZIDMBL66.nama} : ${listmlbb.ml.ZIDMBL66.harga}_
_》${listmlbb.ml.ZIDMBL74.nama} : ${listmlbb.ml.ZIDMBL74.harga}_
_》${listmlbb.ml.ZIDMBL83.nama} : ${listmlbb.ml.ZIDMBL83.harga}_
_》${listmlbb.ml.ZIDMBL184.nama} : ${listmlbb.ml.ZIDMBL184.harga}_
_》${listmlbb.ml.ZIDMBL366.nama} : ${listmlbb.ml.ZIDMBL366.harga}_
_》${listmlbb.ml.ZIDMBL758.nama} : ${listmlbb.ml.ZIDMBL758.harga}_

Cara Pembelian:
${prefix}topupml2 ID|SERVER|JUMLAH DIAMOND
Contoh:
${prefix}topupml2 123456789|1450|85

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Jika Saldo User Anda Terisi Dan Diamond Yang Anda Beli Akan Segera Masuk 3-5 Menit Proses.`
reply(lisya)
break
case prefix+'buypulsa':
let dokid = text.split("|")[0]
let cusid = text.split("|")[1]
if (isNaN(parseInt(cusid))) return reply('Nomor Hp Harus Berupa Angka!')

let anuni = await fetchJson(`https://trendtoday.my.id/api/transaction?username=manik729828YWOD&apikey=lq7ae3b7j6n0wgrz5arcqdh0c5o7cx&product=pulsa&nominal=${dokid}&id_costumer=${cusid}`)
let suksess = `*─ 「 LANJUTKAN PEMBAYARAN 」 ─*
                
_Silahkan Scan Qris Dan Transfer Sesuai Harga:_
_》Harga : Rp${anuni.amount}_
_》Provider : ${anuni.provider}_
_》Nomor : ${cusid} ( Pulsa )_
_》Code Trx : ${anuni.transaction_id}_

_Qr Scan Berlaku 5 Menit, Setelah 5 Menit Pesan Ini Akan Dihapus!._  

_Note: Pulsa Akan Otomatis Masuk Setelah Pembayaran Berhasil._`
let inina = await Manik.sendMessage(m.chat, { image: { url: anuni.qr_payment }, caption: `${suksess}` }, { quoted: m })
setTimeout(() => {
Manik.sendMessage(from, { delete:inina.key })
}, 500000)
break
case prefix+'mls':{
if (!isManik) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
if (isNaN(parseInt(prodc))) return reply(`Id Harus Berupa Angka!\n\nContoh: ${prefix}mlsmile 23456789|2848|9288`)
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
let data = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${prodc}/${prodc2}?apikey=Imanmpa`)
let buttons = [{ buttonId: prefix+`mlsy ${prodc}|${prodc2}|${prodcid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },]
if(`${data.status}` == 200) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${prodc} (${prodc2})_
_》NickName : ${data.result}_
_》Nama Item : ${prodcid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} else if(`${data.status}` !== 200) {
reply('Invalid id/Error')
	}
break
}
case prefix+'mlsy':{
if (!isManik) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
const axios = require('axios')
if (isNaN(parseInt(prodc))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=ML${prodcid}&tujuan=${prodcnya}&ref=${refer}`,
  headers: { }
};

axios(config)
.then(function (response) {
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${response.data.data.product_detail.price_rp}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${prodcid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi, Harap Tunggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
	reply(workid)
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
} 
case prefix+'mlsmile':
if (!isManik) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
if (isNaN(parseInt(prodc))) return reply(`Id Harus Berupa Angka!\n\nContoh: ${prefix}mlsmile 23456789|2848|9288`)
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${prodcnya}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`mlsmiley ${prodc}|${prodc2}|${prodcid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id Or Zone')
}else if (response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${prodc} (${prodc2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${prodcid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  reply(error);
});
break
case prefix+'mlsmiley':{
if (!isManik) reply('Fitur Topup Smile One Khusus Owner, Silahkan Melakukan Transaksi Dengan Owner!')
let prodc = text.split("|")[0]
let prodc2 = text.split("|")[1]
let prodcid = text.split("|")[2]
let prodcnya = `${prodc}${prodc2}`
let refer = randomNomor(001, 1000)
const axios = require('axios')
if (isNaN(parseInt(prodc))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(prodcid))) return reply('Jumlah Harus Berupa Angka!')
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=ML${prodcid}&tujuan=${prodcnya}&ref=${refer}`,
  headers: { }
};

axios(config)
.then(function (response) {
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${response.data.data.product_detail.price_rp}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${prodcid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi, Harap Tunggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
	reply(workid)
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}
case prefix+'topupff':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
if (isNaN(parseInt(idff))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(produkid))) return reply('Jumlah Harus Berupa Angka!')
let idharga = `FF${produkid}`
if (idharga == "FF5"){
global.hargadmff = 900
}
if (idharga == "FF10"){
global.hargadmff = 1800
}
if (idharga == "FF15"){
global.hargadmff = 2700
}
if (idharga == "FF20"){
global.hargadmff = 3000
}
if (idharga == "FF25"){
global.hargadmff = 3900
}
if (idharga == "FF30"){
global.hargadmff = 4800
}
if (idharga == "FF40"){
global.hargadmff = 6000
}
if (idharga == "FF50"){
global.hargadmff = 7200
}
if (idharga == "FF55"){
global.hargadmff = 8100
}
if (idharga == "FF60"){
global.hargadmff = 9000
}
if (idharga == "FF70"){
global.hargadmff = 9900
}
if (idharga == "FF75"){
global.hargadmff = 10800
}
if (idharga == "FF80"){	
global.hargadmff =11700
}
if (idharga == "FF90"){	
global.hargadmff =12900
}
if (idharga == "FF95"){	
global.hargadmff =13800
}	
if (idharga == "FF100"){	
global.hargadmff = 14400
}
if (idharga == "FF120"){	
global.hargadmff =17100
}
if (idharga == "FF130"){	
global.hargadmff =18900
}
if (idharga == "FF140"){	
global.hargadmff =19800
}	
if (idharga == "FF145"){	
global.hargadmff =20700
}
if (idharga == "FF150"){	
global.hargadmff =21600
}
if (idharga == "FF160"){	
global.hargadmff =22800
}
if (idharga == "FF180"){	
global.hargadmff =25800
}
if (idharga == "FF190"){	
global.hargadmff =27000
}
if (idharga == "FF200"){	
global.hargadmff =28800
}
if (idharga == "FF210"){	
global.hargadmff =29700
}
if (idharga == "FFM"){
global.hargadmff =30000
}
if (idharga == "FF250"){	
global.hargadmff =35700
}
if (idharga == "FF280"){	
global.hargadmff =39600
}
if (idharga == "FF300"){	
global.hargadmff =42600
}
if (idharga == "FF355"){	
global.hargadmff =49900
}
if (idharga == "FF350"){	
global.hargadmff =49500
}
if (idharga == "FF375"){	
global.hargadmff =52500
}
if (idharga == "FF400"){	
global.hargadmff =56400
}
if (idharga == "FF405"){	
global.hargadmff =56700
}
if (idharga == "FF425"){	
global.hargadmff =59400
}
if (idharga == "FF475"){	
global.hargadmff =66600
}
if (idharga == "FF500"){	
global.hargadmff =70200
}
if (idharga == "FF510"){	
global.hargadmff = 72000
}
if (idharga == "FF515"){	
global.hargadmff = 72300
}

if (idharga == "FF512"){
global.hargadmff =72300
}
if (idharga == "FF545"){	
global.hargadmff =76500
}
if (idharga == "FF565"){	
global.hargadmff =79200
}	
if (idharga == "FF600"){	
global.hargadmff =84600
}
if (idharga == "FF635"){	
global.hargadmff = 89100
}
if (idharga == "FF645"){	
global.hargadmff =90900
}
if (idharga == "FF655"){	
global.hargadmff =92100
}
if (idharga == "FF720"){	
global.hargadmff = 99000
}
if (idharga == "FF700"){	
global.hargadmff =99000
}
if (idharga == "FF770"){	
global.hargadmff =106200
}	
if (idharga == "FF790"){	
global.hargadmff = 108900
}
if (idharga == "FF800"){	
global.hargadmff = 110700
}
if (idharga == "FF860"){	
global.hargadmff = 118800
}
if (idharga == "FF930"){	
global.hargadmff =128700
}
if (idharga == "FF1000"){	
global.hargadmff =138600
}	
if (idharga == "FF1050"){	
global.hargadmff =145800
}
if (idharga == "FF1075"){	
global.hargadmff =148500
}
if (idharga == "FF1080"){	
global.hargadmff =149400
}
if (idharga == "FFB"){
global.hargadmff =150000
}
if (idharga == "FF1200"){	
global.hargadmff =166800
}
if (idharga == "FF1215"){	
global.hargadmff =16830
}
if (idharga == "FF1300"){	
global.hargadmff =180900
}
if (idharga == "FF1440"){	
global.hargadmff =198000
}
if (idharga == "FF1450"){	
global.hargadmff =199800
}
if (idharga == "FF1490"){	
global.hargadmff =205200
}
if (idharga == "FF1510"){	
global.hargadmff =207900
}
if (idharga == "FF1580"){	
global.hargadmff =217800
}
if (idharga == "FF1795"){	
global.hargadmff =247500
}
if (idharga == "FF1800"){	
global.hargadmff = 248400
}
if (idharga == "FF2000"){	
global.hargadmff =270000
}
if (idharga == "FF2140"){	
global.hargadmff = 289800
}
if (idharga == "FF2190"){	
global.hargadmff = 297000
}
if (idharga == "FF2210"){	
global.hargadmff = 299700
}
if (idharga == "FF2280"){	
global.hargadmff = 309600
}
if (idharga == "FF2355"){	
global.hargadmff = 319500
}
if (idharga == "FF2720"){	
global.hargadmff = 369000
}
if (idharga == "FF4000"){
global.hargadmff = 540000
}
if (idharga == "FF77290"){
global.hargadmff = 990000
}
if (getMonUser(sender) < global.hargadmff) {
 reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(getMonUser(sender) > global.hargadmff) {
var axios = require('axios');

var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/freefire?user_id=${idff}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`topupffyes ${idff}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id')
} else if(response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*
                
_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idff}_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( FreeFire )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  console.log(error);
});
}
break
}
case prefix+'topupffyes':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idff = text.split("|")[0]
let produkid = text.split("|")[1]
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `FF${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=FF${produkid}&tujuan=${idff}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
let idharga = `FF${produkid}`
if (idharga == "FF5"){
global.hargadmff = 900
}
if (idharga == "FF10"){
global.hargadmff = 1800
}
if (idharga == "FF15"){
global.hargadmff = 2700
}
if (idharga == "FF20"){
global.hargadmff = 3000
}
if (idharga == "FF25"){
global.hargadmff = 3900
}
if (idharga == "FF30"){
global.hargadmff = 4800
}
if (idharga == "FF40"){
global.hargadmff = 6000
}
if (idharga == "FF50"){
global.hargadmff = 7200
}
if (idharga == "FF55"){
global.hargadmff = 8100
}
if (idharga == "FF60"){
global.hargadmff = 9000
}
if (idharga == "FF70"){
global.hargadmff = 9900
}
if (idharga == "FF75"){
global.hargadmff = 10800
}
if (idharga == "FF80"){	
global.hargadmff =11700
}
if (idharga == "FF90"){	
global.hargadmff =12900
}
if (idharga == "FF95"){	
global.hargadmff =13800
}	
if (idharga == "FF100"){	
global.hargadmff = 14400
}
if (idharga == "FF120"){	
global.hargadmff =17100
}
if (idharga == "FF130"){	
global.hargadmff =18900
}
if (idharga == "FF140"){	
global.hargadmff =19800
}	
if (idharga == "FF145"){	
global.hargadmff =20700
}
if (idharga == "FF150"){	
global.hargadmff =21600
}
if (idharga == "FF160"){	
global.hargadmff =22800
}
if (idharga == "FF180"){	
global.hargadmff =25800
}
if (idharga == "FF190"){	
global.hargadmff =27000
}
if (idharga == "FF200"){	
global.hargadmff =28800
}
if (idharga == "FF210"){	
global.hargadmff =29700
}
if (idharga == "FFM"){
global.hargadmff =30000
}
if (idharga == "FF250"){	
global.hargadmff =35700
}
if (idharga == "FF280"){	
global.hargadmff =39600
}
if (idharga == "FF300"){	
global.hargadmff =42600
}
if (idharga == "FF355"){	
global.hargadmff =49900
}
if (idharga == "FF350"){	
global.hargadmff =49500
}
if (idharga == "FF375"){	
global.hargadmff =52500
}
if (idharga == "FF400"){	
global.hargadmff =56400
}
if (idharga == "FF405"){	
global.hargadmff =56700
}
if (idharga == "FF425"){	
global.hargadmff =59400
}
if (idharga == "FF475"){	
global.hargadmff =66600
}
if (idharga == "FF500"){	
global.hargadmff =70200
}
if (idharga == "FF510"){	
global.hargadmff = 72000
}
if (idharga == "FF515"){	
global.hargadmff = 72300
}

if (idharga == "FF512"){
global.hargadmff =72300
}
if (idharga == "FF545"){	
global.hargadmff =76500
}
if (idharga == "FF565"){	
global.hargadmff =79200
}	
if (idharga == "FF600"){	
global.hargadmff =84600
}
if (idharga == "FF635"){	
global.hargadmff = 89100
}
if (idharga == "FF645"){	
global.hargadmff =90900
}
if (idharga == "FF655"){	
global.hargadmff =92100
}
if (idharga == "FF720"){	
global.hargadmff = 99000
}
if (idharga == "FF700"){	
global.hargadmff =99000
}
if (idharga == "FF770"){	
global.hargadmff =106200
}	
if (idharga == "FF790"){	
global.hargadmff = 108900
}
if (idharga == "FF800"){	
global.hargadmff = 110700
}
if (idharga == "FF860"){	
global.hargadmff = 118800
}
if (idharga == "FF930"){	
global.hargadmff =128700
}
if (idharga == "FF1000"){	
global.hargadmff =138600
}	
if (idharga == "FF1050"){	
global.hargadmff =145800
}
if (idharga == "FF1075"){	
global.hargadmff =148500
}
if (idharga == "FF1080"){	
global.hargadmff =149400
}
if (idharga == "FFB"){
global.hargadmff =150000
}
if (idharga == "FF1200"){	
global.hargadmff =166800
}
if (idharga == "FF1215"){	
global.hargadmff =16830
}
if (idharga == "FF1300"){	
global.hargadmff =180900
}
if (idharga == "FF1440"){	
global.hargadmff =198000
}
if (idharga == "FF1450"){	
global.hargadmff =199800
}
if (idharga == "FF1490"){	
global.hargadmff =205200
}
if (idharga == "FF1510"){	
global.hargadmff =207900
}
if (idharga == "FF1580"){	
global.hargadmff =217800
}
if (idharga == "FF1795"){	
global.hargadmff =247500
}
if (idharga == "FF1800"){	
global.hargadmff = 248400
}
if (idharga == "FF2000"){	
global.hargadmff =270000
}
if (idharga == "FF2140"){	
global.hargadmff = 289800
}
if (idharga == "FF2190"){	
global.hargadmff = 297000
}
if (idharga == "FF2210"){	
global.hargadmff = 299700
}
if (idharga == "FF2280"){	
global.hargadmff = 309600
}
if (idharga == "FF2355"){	
global.hargadmff = 319500
}
if (idharga == "FF2720"){	
global.hargadmff = 369000
}
if (idharga == "FF4000"){
global.hargadmff = 540000
}
if (idharga == "FF77290"){
global.hargadmff = 990000
}
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmff}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( FreeFire )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda.\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "FF5"){
moneyAdd(m.sender, 900)
reply(workid)
}
if (idharga == "FF10"){
moneyAdd(m.sender, 1800)
reply(workid)
}
if (idharga == "FF15"){
moneyAdd(m.sender, 2700)
reply(workid)
}
if (idharga == "FF20"){
moneyAdd(m.sender, 3000)
reply(workid)
}
if (idharga == "FF25"){
moneyAdd(m.sender, 3900)
reply(workid)
}
if (idharga == "FF30"){
moneyAdd(m.sender, 4800)
reply(workid)
}
if (idharga == "FF40"){
moneyAdd(m.sender, 6000)
reply(workid)
}
if (idharga == "FF50"){
moneyAdd(m.sender, 7200)
reply(workid)
}
if (idharga == "FF55"){
moneyAdd(m.sender, 8100)
reply(workid)
}
if (idharga == "FF60"){
moneyAdd(m.sender, 9000)
reply(workid)
}
if (idharga == "FF70"){
moneyAdd(m.sender, 9900)
reply(workid)
}
if (idharga == "FF75"){
moneyAdd(m.sender, 10800)
reply(workid)
}
if (idharga == "FF80"){	
moneyAdd(m.sender,11700)
reply(workid)
}
if (idharga == "FF90"){	
moneyAdd(m.sender,12900)
reply(workid)
}
if (idharga == "FF95"){	
moneyAdd(m.sender,13800)
reply(workid)
}	
if (idharga == "FF100"){	
moneyAdd(m.sender, 14400)
reply(workid)
}
if (idharga == "FF120"){	
moneyAdd(m.sender,17100)
reply(workid)
}
if (idharga == "FF130"){	
moneyAdd(m.sender,18900)
reply(workid)
}
if (idharga == "FF140"){	
moneyAdd(m.sender,19800)
reply(workid)
}	
if (idharga == "FF145"){	
moneyAdd(m.sender,20700)
reply(workid)
}
if (idharga == "FF150"){	
moneyAdd(m.sender,21600)
reply(workid)
}
if (idharga == "FF160"){	
moneyAdd(m.sender,22800)
reply(workid)
}
if (idharga == "FF180"){	
moneyAdd(m.sender,25800)
reply(workid)
}
if (idharga == "FF190"){	
moneyAdd(m.sender,27000)
reply(workid)
}
if (idharga == "FF200"){	
moneyAdd(m.sender,28800)
reply(workid)
}
if (idharga == "FF210"){	
moneyAdd(m.sender,29700)
reply(workid)
}
if (idharga == "FFM"){
moneyAdd(m.sender,30000)
reply(workid)
}
if (idharga == "FF250"){	
moneyAdd(m.sender,35700)
reply(workid)
}
if (idharga == "FF280"){	
moneyAdd(m.sender,39600)
reply(workid)
}
if (idharga == "FF300"){	
moneyAdd(m.sender,42600)
reply(workid)
}
if (idharga == "FF355"){	
moneyAdd(m.sender,49900)
reply(workid)
}
if (idharga == "FF350"){	
moneyAdd(m.sender,49500)
reply(workid)
}
if (idharga == "FF375"){	
moneyAdd(m.sender,52500)
reply(workid)
}
if (idharga == "FF400"){	
moneyAdd(m.sender,56400)
reply(workid)
}
if (idharga == "FF405"){	
moneyAdd(m.sender,56700)
reply(workid)
}
if (idharga == "FF425"){	
moneyAdd(m.sender,59400)
reply(workid)
}
if (idharga == "FF475"){	
moneyAdd(m.sender,66600)
reply(workid)
}
if (idharga == "FF500"){	
moneyAdd(m.sender,70200)
reply(workid)
}
if (idharga == "FF510"){	
moneyAdd(m.sender, 72000)
reply(workid)
}
if (idharga == "FF515"){	
moneyAdd(m.sender, 72300)
reply(workid)
}

if (idharga == "FF512"){
moneyAdd(m.sender,72300)
reply(workid)
}
if (idharga == "FF545"){	
moneyAdd(m.sender,76500)
reply(workid)
}
if (idharga == "FF565"){	
moneyAdd(m.sender,79200)
reply(workid)
}	
if (idharga == "FF600"){	
moneyAdd(m.sender,84600)
reply(workid)
}
if (idharga == "FF635"){	
moneyAdd(m.sender, 89100)
reply(workid)
}
if (idharga == "FF645"){	
moneyAdd(m.sender,90900)
reply(workid)
}
if (idharga == "FF655"){	
moneyAdd(m.sender,92100)
reply(workid)
}
if (idharga == "FF720"){	
moneyAdd(m.sender, 99000)
reply(workid)
}
if (idharga == "FF700"){	
moneyAdd(m.sender,99000)
reply(workid)
}
if (idharga == "FF770"){	
moneyAdd(m.sender,106200)
reply(workid)
}	
if (idharga == "FF790"){	
moneyAdd(m.sender, 108900)
reply(workid)
}
if (idharga == "FF800"){	
moneyAdd(m.sender, 110700)
reply(workid)
}
if (idharga == "FF860"){	
moneyAdd(m.sender, 118800)
reply(workid)
}
if (idharga == "FF930"){	
moneyAdd(m.sender,128700)
reply(workid)
}
if (idharga == "FF1000"){	
moneyAdd(m.sender,138600)
reply(workid)
}	
if (idharga == "FF1050"){	
moneyAdd(m.sender,145800)
reply(workid)
}
if (idharga == "FF1075"){	
moneyAdd(m.sender,148500)
reply(workid)
}
if (idharga == "FF1080"){	
moneyAdd(m.sender,149400)
reply(workid)
}
if (idharga == "FFB"){
moneyAdd(m.sender,150000)
reply(workid)
}
if (idharga == "FF1200"){	
moneyAdd(m.sender,166800)
reply(workid)
}
if (idharga == "FF1215"){	
moneyAdd(m.sender,16830)
reply(workid)
}
if (idharga == "FF1300"){	
moneyAdd(m.sender,180900)
reply(workid)
}
if (idharga == "FF1440"){	
moneyAdd(m.sender,198000)
reply(workid)
}
if (idharga == "FF1450"){	
moneyAdd(m.sender,199800)
reply(workid)
}
if (idharga == "FF1490"){	
moneyAdd(m.sender,205200)
reply(workid)
}
if (idharga == "FF1510"){	
moneyAdd(m.sender,207900)
reply(workid)
}
if (idharga == "FF1580"){	
moneyAdd(m.sender,217800)
reply(workid)
}
if (idharga == "FF1795"){	
moneyAdd(m.sender,247500)
reply(workid)
}
if (idharga == "FF1800"){	
moneyAdd(m.sender, 248400)
reply(workid)
}
if (idharga == "FF2000"){	
moneyAdd(m.sender,270000)
reply(workid)
}
if (idharga == "FF2140"){	
moneyAdd(m.sender, 289800)
reply(workid)
}
if (idharga == "FF2190"){	
moneyAdd(m.sender, 297000)
reply(workid)
}
if (idharga == "FF2210"){	
moneyAdd(m.sender, 299700)
reply(workid)
}
if (idharga == "FF2280"){	
moneyAdd(m.sender, 309600)
reply(workid)
}
if (idharga == "FF2355"){	
moneyAdd(m.sender, 319500)
reply(workid)
}
if (idharga == "FF2720"){	
moneyAdd(m.sender, 369000)
reply(workid)
}
if (idharga == "FF4000"){
moneyAdd(m.sender, 540000)
reply(workid)
}
if (idharga == "FF77290"){
moneyAdd(m.sender, 990000)
reply(workid)
}
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}


case prefix+'topupml':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml = `${idml1}${idml2}`
let produkid = text.split("|")[2]
if (isNaN(parseInt(produkid))) return reply('Jumlah Harus Berupa Angka!')
if (isNaN(parseInt(idml1))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(idml2))) return reply('Server Harus Berupa Angka!')
let idharga = `UPMBL${produkid}`
if (idharga == "UPMBL5"){
global.hargadmml = 1700
}
if (idharga == "UPMBL12"){
global.hargadmml = 4000
}
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "UPMBL19"){
global.hargadmml = 7000
}
if (idharga == "UPMBL28"){
global.hargadmml = 13000
}
if (idharga == "UPMBL36"){
global.hargadmml = 21000
}
if (idharga == "UPMBL44"){
global.hargadmml = 15000
}
if (idharga == "UPMBL59"){
global.hargadmml = 18500
    }
if (idharga == "UPMBL74"){
global.hargadmml = 22500
    }
if (idharga == "UPMBL85"){
global.hargadmml = 26500
    }
if (idharga == "UPMBL170"){
global.hargadmml = 51500
    }
if (idharga == "UPMBL185"){
global.hargadmml = 56500
    }
if (idharga == "UPMBL222"){
global.hargadmml = 67500
    }
if (idharga == "UPMBL240"){
global.hargadmml = 72500
    }
if (idharga == "UPMBL296"){
global.hargadmml = 89500
    }
if (idharga == "UPMBL370"){
global.hargadmml = 111500
    }
if (idharga == "UPMBL408"){
global.hargadmml = 123500
    }
if (idharga == "UPMBL568"){
global.hargadmml = 167500
    }
if (idharga == "UPMBL875"){
global.hargadmml = 256500
    }
if (idharga == "UPMBL1159"){
global.hargadmml = 333500
    }
if (idharga == "UPMBL2010"){
global.hargadmml = 555.500
    }
if (idharga == "UPMBL4830"){
global.hargadmml = 1322500
    }
if (getMonUser(sender) < global.hargadmml) {
 reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(getMonUser(sender) > global.hargadmml) {
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`topupmlyes ${idml1}|${idml2}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id Or Zone')
}else if (response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idml1} (${idml2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  reply(error);
});
}
}
break
case prefix+'topupmlyes':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = `${text.split("|")[2]}`
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `UPMBL${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=${produkid}&tujuan=${idml}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
if (idharga == "UPMBL5"){
global.hargadmml = 1700
}
if (idharga == "UPMBL12"){
global.hargadmml = 4000
}
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "UPMBL19"){
global.hargadmml = 7000
}
if (idharga == "UPMBL28"){
global.hargadmml = 13000
}
if (idharga == "UPMBL36"){
global.hargadmml = 21000
}
if (idharga == "UPMBL44"){
global.hargadmml = 15000
}
if (idharga == "UPMBL59"){
global.hargadmml = 18500
    }
if (idharga == "UPMBL74"){
global.hargadmml = 22500
    }
if (idharga == "UPMBL85"){
global.hargadmml = 26500
    }
if (idharga == "UPMBL170"){
global.hargadmml = 51500
    }
if (idharga == "UPMBL185"){
global.hargadmml = 56500
    }
if (idharga == "UPMBL222"){
global.hargadmml = 67500
    }
if (idharga == "UPMBL240"){
global.hargadmml = 72500
    }
if (idharga == "UPMBL296"){
global.hargadmml = 89500
    }
if (idharga == "UPMBL370"){
global.hargadmml = 111500
    }
if (idharga == "UPMBL408"){
global.hargadmml = 123500
    }
if (idharga == "UPMBL568"){
global.hargadmml = 167500
    }
if (idharga == "UPMBL875"){
global.hargadmml = 256500
    }
if (idharga == "UPMBL1159"){
global.hargadmml = 333500
    }
if (idharga == "UPMBL2010"){
global.hargadmml = 555.500
    }
if (idharga == "UPMBL4830"){
global.hargadmml = 1322500
    }
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmml}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "UPMBL5"){
moneyAdd(m.sender, 1700)
reply(workid)
}
if (idharga == "UPMBL12"){
moneyAdd(m.sender, 4000)
reply(workid)
}
if (idharga == "ZIDMBL17"){
moneyAdd(m.sender, 4500)
reply(workid)
}
if (idharga == "UPMBL19"){
moneyAdd(m.sender, 7000)
reply(workid)
}
if (idharga == "UPMBL28"){
moneyAdd(m.sender, 10500)
reply(workid)
}
if (idharga == "UPMBL36"){
moneyAdd(m.sender, 13000)
reply(workid)
}
if (idharga == "UPMBL44"){
moneyAdd(m.sender, 15000)
reply(workid)
}
if (idharga == "UPMBL59"){
moneyAdd(m.sender, 18500)
reply(workid)
}
if (idharga == "UPMBL74"){
moneyAdd(m.sender, 22500)
reply(workid)
}
if (idharga == "UPMBL85"){
moneyAdd(m.sender, 26500)
reply(workid)
}
if (idharga == "UPMBL170"){
moneyAdd(m.sender, 51500)
reply(workid)
}
if (idharga == "UPMBL185"){
moneyAdd(m.sender, 56500)
reply(workid)
}
if (idharga == "UPMBL222"){
moneyAdd(m.sender, 67500)
reply(workid)
}
if (idharga == "UPMBL240"){
moneyAdd(m.sender, 72500)
reply(workid)
}
if (idharga == "UPMBL296"){
moneyAdd(m.sender, 89500)
reply(workid)
}
if (idharga == "UPMBL370"){
moneyAdd(m.sender, 111500)
reply(workid)
}
if (idharga == "UPMBL408"){
moneyAdd(m.sender, 123500)
reply(workid)
}
if (idharga == "UPMBL568"){
moneyAdd(m.sender, 167500)
reply(workid)
}
if (idharga == "UPMBL875"){
moneyAdd(m.sender, 256500)
reply(workid)
}
if (idharga == "UPMBL1159"){
moneyAdd(m.sender, 333500)
reply(workid)
}
if (idharga == "UPMBL2010"){
moneyAdd(m.sender, 555.500)
reply(workid)
}
if (idharga == "UPMBL4830"){
moneyAdd(m.sender, 1322500)
reply(workid)
}
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}
case prefix+'topupml2':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml = `${idml1}${idml2}`
let produkid = text.split("|")[2]
if (isNaN(parseInt(produkid))) return reply('Jumlah Harus Berupa Angka!')
if (isNaN(parseInt(idml1))) return reply('Id Harus Berupa Angka!')
if (isNaN(parseInt(idml2))) return reply('Server Harus Berupa Angka!')
let idharga = `ZIDMBL${produkid}`
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "ZIDMBL34"){
global.hargadmml = 9000
}
if (idharga == "ZIDMBL50"){
global.hargadmml = 13500
}
if (idharga == "ZIDMBL66"){
global.hargadmml = 18000
}
if (idharga == "ZIDMBL74"){
global.hargadmml = 20000
}
if (idharga == "ZIDMBL83"){
global.hargadmml = 22500
    }
if (idharga == "ZIDMBL184"){
global.hargadmml = 50000
    }
if (idharga == "ZIDMBL366"){
global.hargadmml = 100000
    }
if (idharga == "ZIDMBL758"){
global.hargadmml = 200000
    }
if (getMonUser(sender) < global.hargadmml) {
 reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(getMonUser(sender) > global.hargadmml) {
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`,
  headers: { }
};

axios(config)
.then(function (response) {
let buttons = [
{ buttonId: prefix+`topupml2yes ${idml1}|${idml2}|${produkid}`, buttonText: { displayText: 'Lanjutkan' }, type: 1 },
]
if (response.data.error_msg) {
reply('Invalid Id Or Zone')
}else if (response.data.message) {
Manik.sendButtonText(m.chat, buttons, `*── 「 CHECK ID OTOMATIS 」 ──*

_Silahkan Cek Data Berikut Ini:_
_》Id Game : ${idml1} (${idml2})_
_》NickName : ${response.data.data.username}_
_》Nama Item : ${produkid} Diamond ( Mlbb )_

Jika Data Sudah Benar Silahkan Klik Lanjutkan Dan Jika Data Salah Silahkan Mengetik Ulang Transaksi Anda!.`, Manik.user.name, m)
} 
})
.catch(function (error) {
  reply(error);
});
}
}
break
case prefix+'topupml2yes':{
if (isGroup) return reply('Fitur Ini Hanya Bisa Digunakan Di Private Chat!')
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = `${text.split("|")[2]}`
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
let idharga = `ZIDMBL${produkid}`
var axios = require('axios');
var config = {
  method: 'get',
  url: `https://v1.apigames.id/transaksi/http-get-v1?merchant=${global.merchant}&secret=${global.secret}&produk=${produkid}&tujuan=${idml}&ref=TRX${refid}`,
  headers: { }
};

axios(config)
.then(function (response) {
if (idharga == "ZIDMBL17"){
global.hargadmml = 4500
}
if (idharga == "ZIDMBL34"){
global.hargadmml = 9000
}
if (idharga == "ZIDMBL50"){
global.hargadmml = 13500
}
if (idharga == "ZIDMBL66"){
global.hargadmml = 18000
}
if (idharga == "ZIDMBL74"){
global.hargadmml = 20000
}
if (idharga == "ZIDMBL83"){
global.hargadmml = 22500
    }
if (idharga == "ZIDMBL184"){
global.hargadmml = 50000
    }
if (idharga == "ZIDMBL366"){
global.hargadmml = 100000
    }
if (idharga == "ZIDMBL758"){
global.hargadmml = 200000
    }
let workid = `*── 「 TOPUP SUKSES 」 ──*\n\n_》Harga : Rp${global.hargadmml}_\n_》NickName : ${response.data.data.sn}_\n_》Nama Item : ${produkid} Diamond ( Mlbb )_\n_》Trx Id : ${response.data.data.trx_id}_\n\n_Item Akan Segera Masuk Secara Otomatis Silahkan Melakukan Pengecekan Secara Berkala Pada Game Anda._\n\nNote: Jika Ada Kesalahan Id Atau NickName Bukan Tanggung Jawab Owner!.`
let workd = `*── 「 TOPUP GAGAL 」 ──*

Transaksi Anda Gagal, Saldo Sistem Belum terisi Saldo User Anda Tidak Akan Dipotong, Harap Tumggu Saldo Sistem Reset Setiap 6 Jam Sekali!.`
if(response.data.data.status == "Sukses"){
if (idharga == "ZIDMBL17"){
moneyAdd(m.sender, 4500)
reply(workid)
}
if (idharga == "ZIDMBL34"){
moneyAdd(m.sender, 9000)
reply(workid)
}
if (idharga == "ZIDMBL50"){
moneyAdd(m.sender, 13500)
reply(workid)
}
if (idharga == "ZIDMBL66"){
moneyAdd(m.sender, 18000)
reply(workid)
}
if (idharga == "ZIDMBL74"){
moneyAdd(m.sender, 20000)
reply(workid)
}
if (idharga == "ZIDMBL83"){
moneyAdd(m.sender, 22500)
reply(workid)
}
if (idharga == "ZIDMBL184"){
moneyAdd(m.sender, 50000)
reply(workid)
}
if (idharga == "ZIDMBL366"){
moneyAdd(m.sender, 100000)
reply(workid)
}
if (idharga == "ZIDMBL758"){
moneyAdd(m.sender, 200000)
reply(workid)
}
} else if(response.data.data.status == "Gagal"){
reply(workd)
}
})
break
}
//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server 1 Case Dan Fitur By Manik Only! ]━━━━━━━━━━━━━━━\\


//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server Dunia Games Case By Manik Only! ]━━━━━━━━━━━━━━━\\
case prefix+'listdmff2':
let topupp = `*── 「 DIAMOND FREE FIRE 」 ──*

_》5 Diamond : Rp1.261_
_》12 Diamond : Rp2.523_
_》70 Diamond : Rp12.614_
_》140 Diamond : Rp25.227_
_》355 Diamond : Rp63.068_
_》720 Diamond : Rp126.136_
_》1450 Diamond : Rp252.273_

Cara Pembelian:
${prefix}topupff2 ID|JUMLAH DIAMOND
Contoh:
${prefix}topupff2 123456789|1450

NOTE: Pembelian Akan Diproses Oleh Sistem Otomatis Ketika Anda Telah Melakukan Pembayaran Dan Diamond Akan Segera Masuk.
`
reply(topupp)
break

case prefix+'topupff2':{
let idff = text.split("|")[0]
let totaldm = text.split("|")[1]
let nopemu = sender.replace("@s.whatsapp.net", "")
var baseURL = "https://duniagames.co.id";
var axios = require('axios');
axios.get(`https://api.lolhuman.xyz/api/freefire/${idff}?apikey=Imanmpa`)
            .then(({data}) => {
reply('Tunggu Sebentar Kak, ImanBot Akan Cek Id Kakak')
            })
            .catch((err) => {
                reply('Id Atau NickName Tidak Ditemukan!')
            })
const topup = async(userId, zoneId, diamond, phone, game) => {
  if (!userId || !diamond || !phone || !game) return new Error();
  let cookie = await getCookie(baseURL);
  if (!cookie) return new Error("empty cookies");
  let res = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store?${getVal(diamond, game.toUpperCase())}&gameId=${userId}&product_ref=REG&product_ref_denom=AE`, null, {
    "headers": { 
      "cookie": cookie.join(" "),
      "origin": baseURL,
      "referer": baseURL
    }
  })
  if (res.status != 200) throw new Error(res.statusText);
  let res2 = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/transaction/store?inquiryId=${res.data.data.inquiryId}&phoneNumber=${phone}&transactionId=${res.data.data.transactionId}`, null, {
    "headers": { 
      "cookie": cookie.join(" "),
      "origin": baseURL,
      "referer": baseURL
    }
  })
if (res2.status != 200) throw new Error(res2.statusText);
let suksess = `*── 「 TOPUP OTOMATIS 」 ──*
                
_Silahkan Scan Qris Dan Transfer Sesuai Harga:_
_》Harga : Rp${res2.data.data.totalPrice}_
_》NickName : ${res2.data.data.userGameName}_
_》Nama Item : ${res.data.data.item.name} ( FreeFire )_
_》Code Trx : ${res2.data.data.transactionCode}_

_Qr Scan Berlaku 5 Menit, Setelah 5 Menit Pesan Ini Akan Dihapus!._  

_Note: Diamond Akan Otomatis Masuk Dalam 2-3 Menit Setelah Pembayaran Berhasil._`
let kirimk = await Manik.sendMessage(m.chat, { image: { url: res2.data.data.elisaConfig.qrCode }, caption: `${suksess}` }, { quoted: m })
setTimeout(() => {
Manik.sendMessage(from, { delete:kirimk.key })
}, 500000)
}
const getCookie = async(...args) => (await axios(...args)).headers["set-cookie"];
function getVal(dm, game) {
  let list = JSON.parse(fs.readFileSync("./duniagames.json"));
  if (!list[game]) return new Error("no game for '" + game + "'");
  return new URLSearchParams(list[game][dm]).toString();
}
let shop = await topup(`${idff}`, null, `${totaldm}`, `${nopemu}`, "freefire")
break
}
//━━━━━━━━━━━━━━━[ Fitur topup Otomatis server Dunia Games Case By Manik Only! ]━━━━━━━━━━━━━━━\\

case prefix+'say':
let idfc = args[1]
reply(idfc)
break
case 'modesimi':
          if (args.length < 1) return reply('1/0')
          if (Number(args[1]) === 1) {
          simin.push(from)
          fs.writeFileSync('./database/simi.json', JSON.stringify(simin))
          reply('Sukses mengaktifkan mode simi')
          } else if (Number(args[1]) === 0) {
          simin.splice(from, 1)
          fs.writeFileSync('./database/simi.json', JSON.stringify(simin))
          reply('Sukes menonaktifkan mode simi')
          } else {
          reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
          }
          break
case 'anone':{
let idml1 = text.split("|")[0]
let idml2 = text.split("|")[1]
let idml =`${idml1}${idml2}`
let produkid = text.split("|")[2]
let refdi = randomNomor(001, 1000)
let refid = `${refdi}`
reply(`https://v1.apigames.id/merchant/${global.merchant}/cek-username/mobilelegend?user_id=${idml}&signature=${global.signature}`)
break
}
//FITUR WITH TRENDTODAY BY MANIK DENGAN DISTRIBUTOR RAFLI RUSDIANA
case prefix+'myotp':
if (isGroup) return reply(mess.OnlyPM)
let senotp = sender.replace("@s.whatsapp.net", "")
let ininyaa = await fetchJson(`https://trendtoday.my.id/api/register?phone=${senotp}`)
if (ininyaa.status == 500){
reply('Server Error')
} else if (ininyaa.status == 200){
reply(ininyaa.message)
}
break
case prefix+'verification':
if (isGroup) return reply(mess.OnlyPM)
let versen = sender.replace("@s.whatsapp.net", "")
if (args.length == 1) return reply('Masukan Otp Nya!')
if (args[1].includes('+')) return reply(`Jangan menggunakan +`)
if (isNaN(parseInt(args[1]))) return reply('Otp Harus Berupa Angka!')
let statusnya = await fetchJson(`https://trendtoday.my.id/api/phone-verify?phone=${versen}&otp=${args[1]}`)
if (statusnya.status == 500){
reply('Server Error')
} else if (statusnya.status == 200){
reply(statusnya.message)
}
break
case prefix+'registration':
if (!q.includes("|")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama|Email|Password*\n\n_Contoh_\n\n${command.slice(1)} Arya|aryamanik000@gmail.com|aryamanik00`)
let trenpon = sender.replace("@s.whatsapp.net", "")
let trennma = text.split("|")[0]
let trenmail = text.split("|")[1]
let trenpew = text.split("|")[2]
let linkttd = await fetchJson(`http://trendtoday.my.id/api/complete-data?phone=${trenpon}&name=${trennma}&username=${pushname}&email=${trenmail}&password=${trenpew}`)
reply(linkttd.message)
break
//FITUR WITH TRENDTODAY BY MANIK DENGAN DISTRIBUTOR RAFLI RUSDIANA
		case prefix+'casino':
                 if (!isGroup)return reply(mess.OnlyGrup)
                 if (isGame(sender, isManik, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal`)
                 if (mentionUser.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
                 if (mentionUser.length > 2) return reply('Hanya bisa dengan 1 orang')
                 if (mentionUser[0] === sender) return reply(`Sad amat main sama diri sendiri`)
				 if (mentionUser[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                 if (fs.existsSync(`./database/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
                 if (args.length == 2) return reply('Masukan Nominal Nya')
                 if (args[2].includes('-')) return reply(`Jangan menggunakan -`)
                 if (isNaN(parseInt(args[2]))) return reply('Nominal Harus Berupa Angka!')
                 var anu = getBalance(sender, balance)
                 var ani = getBalance(mentionUser[0], balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 if (ani < args[2] || ani == 'undefined') return reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
                 var casinoo = setCasino(`${from}`)
                 casinoo.Z = sender.replace("@s.whatsapp.net", "")
                 casinoo.Y = mentionUser[0].split("@")[0]
                 casinoo.nominal = parseInt(args[2])
                 addCountCmd('#casino', sender, _cmd)
                 fs.writeFileSync(`./database/${from}.json`, JSON.stringify(casinoo, null, 2))
                 gameAdd(sender, glimit)
                 var starGame = `🎰 Memulai Game Casino 💰\n\n• @${sender.replace("@s.whatsapp.net", "")} Menantang ${args[1]}, dengan Nominal: *$ ${parseInt(args[2])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
                 Manik.sendMessage(from, { text: starGame, mentions: [sender, args[1].replace("@", "") + "@s.whatsapp.net"] }, { quoted: m })
                 break
            case prefix+'delcasino':
                 if (fs.existsSync('./database/'+from+'.json')) {
                 var csn = JSON.parse(fs.readFileSync('./database/'+from+'.json'))
		 if (csn.Z.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
                   reply('Berhasil Menghapus Sesi Casino')
		 } else if (csn.Y.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isAdmins) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isManik) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapu Sesi Casino')
		 } else {
	           reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
		 }
                 } else {
                  reply('Tidak ada sesi yang berlangsung')
                 }
                 break
//------------------< Premium >-------------------
       case prefix+'premium': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              if (!isManik || m.key.fromMe) return reply(mess.only.owner)
              if (args[1] === 'add') {
              if (m.message.extendedTextMessage != undefined) {
              mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
              premium.addPremiumUser(mentioned[0], args[3], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
        
              } else {
            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[3], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
}
              } else if (args[1] === 'del') {
              if (m.message.extendedTextMessage != undefined) {
              mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply('Sukses')
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply('Sukses')
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case prefix+'premiumcheck':
       case prefix+'cekpremium': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case prefix+'listprem':
       case prefix+'listpremium':          
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
                case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                    var limitPrib = global.db.users[m.sender].limit
                    reply(`Name: ${pushname}\nLimit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(m.sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
				break
	    case prefix+'family100':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
	if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Manik.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
case 'resize':
if (!isRegist) return onlyRegist()
if (isQuotedImage || isImage) {
if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
onlyWait()
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await atak.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await atak.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: ridho })
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
}
break
case 'whatanime':{
const FormData = require('form-data')
if (isImage || isQuotedImage) {       
let yoooo = await Manik.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(yoooo)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Manik.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: ridho})
})    .catch((err) => {                   
reply(mess.error.api)
})
} else if (isSticker || isQuotedSticker ) {
let yoooo = await Manik.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return reply('Gagal :V')   
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(ran)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return reply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Manik.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: ridho})
fs.unlinkSync(ran)
})
.catch((err) => {       
reply(mess.error.api)
})
})
} else {
reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break
            //Bank & Payment Menu
			case prefix+'topbalance':{
			    addCountCmd('#topbalance', sender, _cmd)
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getMoney(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buylimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                 if (mentionUser.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 addCountCmd('#transfer', sender, _cmd)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentionUser[0], parseInt(args[2]), balance)
                 mentions(`Sukses transfer balance sebesar $${args[2]} kepada @${mentionUser[0].split("@")[0]}`, [mentionUser[0]], true)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buygamelimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, listml)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
                case prefix+'akinator':
                if (isGroup) return reply(mess.OnlyPM)
                if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesain yg sebelumnya dulu atuh")
                var get_result = await akiStart()
                if (get_result.status == 200) {
                  var { server, frontaddr, session, signature, question, step } = get_result.result
                  const data = {}
                  data["server"] = server
                  data["frontaddr"] = frontaddr
                  data["session"] = session
                  data["signature"] = signature
                  data["question"] = question
                  data["step"] = step
                  var ini_txt = `${question}\n\n`
                  ini_txt += "0 - Ya\n"
                  ini_txt += "1 - Tidak\n"
                  ini_txt += "2 - Saya Tidak Tau\n"
                  ini_txt += "3 - Mungkin\n"
                  ini_txt += "4 - Mungkin Tidak"
                  Manik.sendMessage(from, { text: ini_txt }, { quoted: m }).then(() => {
                     akinator[sender.split('@')[0]] = data
                  })
                } else {
                  reply(mess.error.api)
                }
                break
            case prefix+'cancelakinator':
                if (isGroup) return reply(mess.OnlyPM)
                if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[sender.split("@")[0]]
                reply(`Sukses`)
                break
            case prefix+'tebak':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if (!text) reply(`Example : ${command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`)
                if (args[1] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Manik.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Manik.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Manik.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Manik.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, Manik.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Manik.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Manik.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) reply `There are still unfinished sessions!`
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Manik.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    Manik.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Manik.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case prefix+'afk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            let TicTacToe = require("./FuncBot/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) reply `You are still in the game`
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await Manik.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Manik.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command.slice(1)} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case prefix+'delttc': case prefix+'delttt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Manik.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else reply `?`
            } catch (e) {
            reply('error')
            }
            }
            break
            case prefix+'suitpvp': case prefix+'suit':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) reply `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await Manik.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Manik.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case prefix+'donasi': case prefix+'donate': case prefix+'sewabot': case prefix+'sewa': case prefix+'buypremium': case prefix+'jadibot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply(` LIST!\n\nHi ${pushname} \n\`\`\`GOPAY : CHAT OWNER\`\`\`\n\`\`\`DANA : CHAT OWNER\`\`\`\n\`\`\`PULSA : TANYA OWNER\`\`\`\nUntuk list harga silahkan chat🎳: wa.me//62895634865955 _^\n THX FOR YOU ! `)
            }
            break
            case prefix+'sc': case prefix+'script':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply('*Maaf, ini sc private milik Owner, Sc ini dijual, untuk harga silahkan chat Owner Bot 🎻*')
            }
            break
            case prefix+'chat':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            
                if (!isManik) reply(mess.owner)
                if (!q) reply `Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`
                if (args[1] === 'mute') {
                    Manik.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unmute') {
                    Manik.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'archive') {
                    Manik.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unarchive') {
                    Manik.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'read') {
                    Manik.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unread') {
                    Manik.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'delete') {
                    Manik.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break 
            case prefix+'mathquiz': case prefix+'math':{
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) reply `There are still unfinished sessions!`
                let { genMath, modes } = require('./src/math')
                if (!text) reply `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Manik.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case prefix+'mysoulmate':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) reply(mess.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: ments})
            }
            break
            case prefix+'couple':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: menst})
            }
            break
            case prefix+'join':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                if (!text) reply `Masukkan Link Group`
                if (!isUrl(args[1]) && !args[1].includes('whatsapp.com')) reply `Link Invalid`
                reply('Segera Tuan')
                let result = args[1].split('https://chat.whatsapp.com/')[1]
                await Manik.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                await Manik.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case prefix+'kick':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'add':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'promote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'demote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'block':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isManik) reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'unblock':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isManik) reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Manik.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case prefix+'setname': case prefix+'setsubject':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
                if (!text) reply `Text ?`
                await Manik.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setdesc': case prefix+'setdesk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
                if (!text) reply `Text ?`
                await Manik.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setppbot': case prefix+'setbotpp':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                if (!quoted) reply `Send/Reply Image With Caption ${command}`
                if (!/image/.test(mime)) reply `Send/Reply Image With Caption ${command}`
                if (/webp/.test(mime)) reply `Send/Reply Image With Caption ${command}`
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                await Manik.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case prefix+'setppgroup': case prefix+'setgrouppp': case prefix+'setgcpp': case prefix+'setppgrup': case prefix+'setppgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isAdmins) reply(mess.admin)
                if (!quoted) reply `Send/Reply Image With Caption ${command}`
                if (!/image/.test(mime)) reply `Send/Reply Image With Caption ${command}`
                if (/webp/.test(mime)) reply `Send/Reply Image With Caption ${command}`
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                await Manik.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case prefix+'grupinfo': case prefix+'groupinfo':
try{
 var pic = await Manik.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
Manik.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case prefix+'tagall': case prefix+'tag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `≻ @${mem.id.split('@')[0]}\n`
                }
                Manik.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case prefix+'hidetag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) reply(mess.group)
            if (!isAdmins) reply(mess.admin)
            Manik.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break

	    case prefix+'style': case prefix+'styletext':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		            db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./FuncBot/scraper')
		if (!text) reply `Text Mana?`
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `≻ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case prefix+'vote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) reply(mess.group)
            if (m.chat in vote) reply `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) reply `Enter Reason for Vote, Example: *${command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
• Total: ${vote[m.chat][1].length}

 [ DEVOTE ]
• Total: ${vote[m.chat][2].length}

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Manik.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Manik.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case prefix+'upvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) reply(mess.group)
            if (!(m.chat in vote)) reply `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) reply `You have Voted`
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Manik.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Manik.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case prefix+'devote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) reply(mess.group)
            if (!(m.chat in vote)) reply `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) reply `You have Voted`
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Manik.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Manik.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case prefix+'cekvote':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) reply(mess.group)
if (!(m.chat in vote)) reply `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes
`
Manik.sendTextWithMentions(m.chat, teks_vote, m)
break
		case prefix+'deletevote': case prefix+'delvote': case prefix+'hapusvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) reply(mess.group)
            if (!(m.chat in vote)) reply `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case prefix+'group': case prefix+'grup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
                if (args[1] === 'close'){
                    await Manik.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'open'){
                    await Manik.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: prefix+'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Group Mode`, Manik.user.name, m)

             }
            }
            break
            case prefix+'editinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
             if (args[1] === 'open'){
                await Manik.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[1] === 'close'){
                await Manik.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: prefix+'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Mode Edit Info`, Manik.user.name, m)

            }
            }
            break
                        case prefix+'antiyt':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiYt) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antiyt.push(from)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antiyt.indexOf(from)
            antiyt.splice(anu, 1)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube nonaktif')
            }
            break
        case prefix+'antitele':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiTele) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antitele.push(from)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antitele.indexOf(from)
            antitele.splice(anu, 1)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram nonaktif')
            }
            break
            case prefix+'antibitly':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiBitly) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antibitly.push(from)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antibitly.indexOf(from)
            antibitly.splice(anu, 1)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly nonaktif')
        }
        break
case prefix+'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK ACTIIVED IN GROUP```')
						Manik.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[1] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK NOT ACTIVE IN GROUP```')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case prefix+'antiwame':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
                if (args[1] === "on") {
                if (db.chats[m.chat].wame) return reply(`Already Activated`)
                db.chats[m.chat].wame = true
                reply(`Anti Wa.me Activated!`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].wame) return reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'antiwame on', buttonText: { displayText: 'ENABLE' }, type: 1 },
                        { buttonId: prefix+'antiwame off', buttonText: { displayText: 'DISABLE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, Manik.user.name, m)
                }
             }
             break
             // Menu Search
        case prefix+'nickff':{
        const axios = require('axios')
if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 646675175`)
            axios.get(`https://api.lolhuman.xyz/api/freefire/${args[1]}?apikey=Imanmpa`)
            .then(({data}) => {
            let epep = `*🔎 CHECK NICK FREE FIRE 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(epep)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickml':{
        const axios = require('axios')
 var args1 = q.split("/")[0]
            var args2 = q.split("/")[1]                
            if (!q.includes("/")) return reply(`Gunakan dengan cara ${command} *id/server*\n\n_Contoh_\n\n${command} 617243212/8460`)
            axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args1}/${args2}?apikey=Imanmpa`)
            .then(({data}) => {
            let emel = `*🔎 CHECK NICK MOBILE LEGENDS 🔍*

ID : ${args[1]}
Nick : ${data.result}`
reply(emel)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickpubg':{
        const axios = require('axios')
            if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 5217933016`)
            axios.get(`https://api.lolhuman.xyz/api/pubg/${args[1]}?apikey=Imanmpa`)
            .then(({data}) => {
            let pubg = `*🔎 CHECK NICK PUBG 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(pubg)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickdomino':{
        const axios = require('axios')
               if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 291756557`)
            axios.get(`https://api.lolhuman.xyz/api/higghdomino/${args[1]}?apikey=Imanmpa`)
            .then(({data}) => {
            let domino = `*🔎 CHECK NICK HIGGS DOMINO 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(domino)
            limitAdd(sender, limit)
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
					   case prefix+'mute':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isAdmins) reply(mess.admin)
                if (args[1] === "on") {
                if (db.chath[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${Manik.user.name} has been muted in this group !`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${Manik.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'mute on', buttonText: { displayText: 'MUTE' }, type: 1 },
                        { buttonId: prefix+'mute off', buttonText: { displayText: 'UNMUTE' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `Mute Bot`, Manik.user.name, m)
                }
             }
             break
             case prefix+'rules':
             rulesBot = `

 # RULES BOT

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

4. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

Owner  BOTZ:
wa.me/62895634865955
`
             reply(rulesBot)
             break
            case prefix+'linkgroup': case prefix+'grouplink': case prefix+'gclink': case prefix+'linkgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                let response = await Manik.groupInviteCode(m.chat)
                Manik.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case prefix+'ephemeral':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) reply(mess.botAdmin)
                if (!isAdmins) reply(mess.admin)
                if (!text) reply `Enter the enable/disable value, For Example ${prefix}ephemeral enable`
                if (args[1] === 'enable') {
                    await Manik.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'disable') {
                    await Manik.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case prefix+'delete': case prefix+'del':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) reply `The message was not sent by a bot!`
                Manik.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case prefix+'bcgc': case prefix+'bcgroup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                if (!text) reply `Where is the text?\n\nExample : ${command} hello guys, am back`
                let getGroups = await Manik.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/LKmg719N6Fo2CigYLfNMIL'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      manixgans = fs.readFileSync('./media/Manik.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      Manik.send5ButImg(i, txt, Manik.user.name, manixgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case prefix+'bc': case prefix+'broadcast': case prefix+'bcall':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                if (!text) reply `Where is the text?\n\nExample : ${command} halo`
                let anu = await stire.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/LKmg719N6Fo2CigYLfNMIL'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      manixgans = fs.readFileSync('./media/Manik.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      Manik.send5ButImg(yoi, txt, `${ownerName}`, manixgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case prefix+'chatinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) reply `The message was not sent by a bot!`
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `≻ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━≻ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ≻ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                Manik.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case prefix+'q': case prefix+'quoted':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await Manik.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case prefix+'listpc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                 let anu = await stire.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `❏ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = stire.messages[i].array[0].pushName
                     teks += `≻ *Name :* ${nama}\n≻ *User :* @${i.split('@')[0]}\n≻ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Manik.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case prefix+'listgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                 let anu = await stire.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `❏ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Manik.groupMetadata(i)
                     teks += `≻ *Name :* ${metadata.subject}\n≻ *Owner :* @${metadata.owner.split('@')[0]}\n≻ *ID :* ${metadata.id}\n≻ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n≻ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Manik.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case prefix+'listonline': case prefix+'onlinelist': case prefix+'liston':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    let id = args && /\d+\-\d+@g.us/.test(args[1]) ? args[1] : m.chat
                    let online = [...Object.keys(stire.presences[id]), botNumber]
                    Manik.sendText(m.chat, 'Online List:\n\n' + online.map(v => '≻ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case prefix+'sticker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!quoted) reply `Balas Video/Image Dengan Caption ${command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Manik.sendImageAsSticker(m.chat, media, m, { packName: global.packName, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Manik.sendVideoAsSticker(m.chat, media, m, { packName: global.packName, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply `Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case prefix+'ebinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) reply `Kirim/reply text dengan caption ${command}`
            let { eBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case prefix+'dbinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) reply `Kirim/reply text dengan caption ${command}`
            let { dBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case prefix+'emojimix': {
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.reply(`Example : ${command} 🗿+😄`)
				if (!emoji2) return m.reply(`Example : ${command} 😄+🗿`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
				for (let res of anu.results) {
				    let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				    await fs.unlinkSync(encmedia)
				}
	 		   }
	  		  break
			case prefix+'emojimix2': {
	  		  if (!text) return m.reply(`Example : ${command} 🗿`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
				for (let res of anu.results) {
		  	  let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		 	   await fs.unlinkSync(encmedia)
				}
	  		  }
	  		  break
	        
            case prefix+'toimage': case prefix+'toimg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) reply `Reply Image`
                if (!/webp/.test(mime)) reply `balas stiker dengan caption *${command}*`
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Manik.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case prefix+'tomp4': case prefix+'tovideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) reply `Reply Image`
                if (!/webp/.test(mime)) reply `balas stiker dengan caption *${command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Manik.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'toaud': case prefix+'toaudio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`
            if (!quoted) reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            Manik.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case prefix+'tomp3':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (/document/.test(mime)) reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`
            if (!quoted) reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            Manik.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Manik.user.name}.mp3`}, { quoted : m })
            }
            break
            case prefix+'tovn': case prefix+'toptt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) reply `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`
            if (!quoted) reply `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`
            let media = await quoted.download()
            let { toPTT } = require('./FuncBot/converter')
            let audio = await toPTT(media, 'mp4')
            Manik.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case prefix+'togif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) reply `Reply Image`
                if (!/webp/.test(mime)) reply `balas stiker dengan caption *${command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Manik.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case prefix+'tourl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./FuncBot/uploader')
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
	    if (!quoted) reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (!/image/.test(mime)) reply `Kirim/Reply Image Dengan Caption ${command}`
	    if (/webp/.test(mime)) reply `Kirim/Reply Image Dengan Caption ${command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Manik.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Manik.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case prefix+'yts': case prefix+'ytsearch':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) reply `Example : ${command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `≻ No : ${no++}\n≻ Type : ${i.type}\n≻ Video ID : ${i.videoId}\n≻ Title : ${i.title}\n≻ Views : ${i.views}\n≻ Duration : ${i.timestamp}\n≻ Upload At : ${i.ago}\n≻ Author : ${i.author.name}\n≻ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Manik.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case prefix+'google':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) reply `Example : ${command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `≻ *Title* : ${g.title}\n`
                teks += `≻ *Description* : ${g.snippet}\n`
                teks += `≻ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case prefix+'gimage': case prefix+'googleimage':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        if (!text) reply `Example : ${command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case prefix+'play': case prefix+'ytplay':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!text) return m.reply(`Example : ${command} story wa anime`)
                m.reply('wait')
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                	{ urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://instagram.com/4k.sanz` } },
                    { quickReplyButton: { displayText: `𝐀𝐮𝐝𝐢𝐨`, id: `${prefix}ytmp3 ${anu.url}` } },
                    { quickReplyButton: { displayText: `𝐕𝐢𝐝𝐞𝐨`, id: `${prefix}ytmp4 ${anu.url}` } }
                ]
                let buttonMessage = {
                    image : { url: anu.thumbnail },
                    caption : `YOUTUBE PLAY`,
                    footer : `⊳ Title : ${anu.title}
⊳ Ext : Search
⊳ ID : ${anu.videoId}
⊳ Duration : ${anu.timestamp}
⊳ Viewers : ${anu.views}
⊳ Upload At : ${anu.ago}
⊳ Author : ${anu.author.name}
⊳ Channel : ${anu.author.url}
⊳ Description : ${anu.description}
⊳ Url : ${anu.url}`,
                    templateButtons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(from, buttonMessage, { quoted: m })
                console.log(anu)
      	      }
      	      break
	    case prefix+'ytmp3':{
				addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let { yta } = require('./FuncBot/y2mate')
                if (!text) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[2] ? args[2] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                Manik.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
       	     }
        	    break
            case prefix+'ytmp4':{
				addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let { ytv } = require('./FuncBot/y2mate')
                if (!text) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[2] ? args[2] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                Manik.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
        	    }
        	    break
	    case prefix+'getmusic':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) reply `Example : ${command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) reply `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) reply `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                Manik.sendImage(m.chat, thumbnail, `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP3\nâž£ Resolusi : ${args[2] || '128kbps'}`, m)
                Manik.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case prefix+'getvideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) reply `Example : ${command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) reply `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) reply `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                Manik.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP4\nâž£ Resolusi : ${args[2] || '360p'}` }, { quoted: m })
            }
            break
            case prefix+'pinterest':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { pinterest } = require('./FuncBot/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Manik.sendMessage(m.chat, { image: { url: result }, caption: '✓Media Url : '+result }, { quoted: m })
            }
            break
case prefix+'waifu':{
const axios = require('axios')
reply('Fitur ini Khusus Premium 🛎️')
if (!isPremium && global.db.users[m.sender].premium)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
sendFile(m.chat, data.url, 'Ni Cewe 2D Lu')
})
break
}
case prefix+'cry':case prefix+'kill':case prefix+'hug':case prefix+'pat':case prefix+'lick':case prefix+'kiss':case prefix+'bite':case prefix+'yeet':case prefix+'neko':case prefix+'bully':case prefix+'bonk':case prefix+'wink':case prefix+'poke':case prefix+'nom':case prefix+'slap':case prefix+'waifu':case prefix+'smile':case prefix+'wave':case prefix+'awoo':case prefix+'blush':case prefix+'smug':case prefix+'glomp':case prefix+'happy':case prefix+'dance':case prefix+'cringe':case prefix+'cuddle':case prefix+'highfive':case prefix+'shinobu':case prefix+'megumin':case prefix+'handhold':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
reply('Loading...')
const axios = require('axios')
axios.get(`https://api.waifu.pics/sfw/${command.slice(1)}`)
.then(({data}) => {
Manik.sendMessage(from,{ image: { url: data.url}, caption: mess.done})
})
}
break			
	    case prefix+'couple': case prefix+'ppcp':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Manik.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Manik.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case prefix+'coffee': case prefix+'kopi':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wallpaper':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) reply `Titlenya mana?`
		let { wallpaper } = require('./FuncBot/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `≻ Title : ${result.title}\n≻ Category : ${result.type}\n≻ Detail : ${result.source}\n≻ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wikimedia':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) reply `Titlenya mana?`
		let { wikimedia } = require('./FuncBot/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `≻ Title : ${result.title}\n≻ Source : ${result.source}\n≻ Media Url : ${result.image}`,
                    footer: Manik.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'mode': case prefix+'set':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        const buttons = [
{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttonMessage = {
text: "Pilih Salah Satu",
footerText: 'Hello Owner',
buttons: buttons,
headerType: 1
}
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break            
            case prefix+'yatim':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) reply(mess.group)
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `Cieee Yatim Baru

 @${ytm.split('@')[0]}`
            let ments = [oi, ytm]
            let buttons = [
                        { buttonId: prefix+'yatim', buttonText: { displayText: 'Yatim' }, type: 1 }
                    ]
                     Manik.sendButtonText(m.chat, buttons, mty, Manik.user.name, m, {mentions: ments})
}
break
case prefix+'piatu':
case prefix+'piyatu':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) reply(mess.group)
            let member = participants.map(u => u.id)
            let bh = m.sender
            let bra = member[Math.floor(Math.random() * member.length)]
            let bruh = `Cieee Piatu Baru

 @${bra.split('@')[0]}`
            let ments = [bh, bra]
            let buttons = [
                        { buttonId: prefix+'piatu', buttonText: { displayText: 'Piatu' }, type: 1 }
                    ]
                     Manik.sendButtonText(m.chat, buttons, bruh, Manik.user.name, m, {mentions: ments})
}
break
            case prefix+'quotesanime': case prefix+'quoteanime':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { quotesAnime } = require('./FuncBot/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
                // Ephoto 360 //
                case prefix+'wetglass':case prefix+'multicolor3d':case prefix+'watercolor':case prefix+'luxurygold':case prefix+'galaxywallpaper':case prefix+'lighttext':case prefix+'beautifulflower':case prefix+'puppycute':case prefix+'royaltext':case prefix+'heartshaped':case prefix+'birthdaycake':case prefix+'galaxystyle':case prefix+'hologram3d':case prefix+'greenneon':case prefix+'glossychrome':case prefix+'greenbush':case prefix+'metallogo':case prefix+'noeltext':case prefix+'glittergold':case prefix+'textcake':case prefix+'starsnight':case prefix+'wooden3d':case prefix+'textbyname':case prefix+'writegalacy':case prefix+'galaxybat':case prefix+'snow3d':case prefix+'birthdayday':case prefix+'goldplaybutton':case prefix+'silverplaybutton':case prefix+'freefire':{
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                               if (!text) reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command.slice(1)}?apikey=Imanmpa&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'ttlogo':case prefix+'arcade8bit':case prefix+'battlefield4':case prefix+'pubg':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command.slice(1)}?apikey=Imanmpa&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            // Photo Oxy //
            case prefix+'shadow':case prefix+'cup':case prefix+'cup1':case prefix+'romance':case prefix+'smoke':case prefix+'burnpaper':case prefix+'lovemessage':case prefix+'undergrass':case prefix+'love':case prefix+'coffe':case prefix+'woodheart':case prefix+'woodenboard':case prefix+'summer3d':case prefix+'wolfmetal':case prefix+'nature3d':case prefix+'underwater':case prefix+'goldenrose':case prefix+'summernature':case prefix+'letterleaves':case prefix+'glowingneon':case prefix+'fallleaves':case prefix+'flamming':case prefix+'harrypotter':case prefix+'carvedwood':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command.slice(1)}?apikey=Imanmpa&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'pornhub':case prefix+'glitch':case prefix+'avenger':case prefix+'space':case prefix+'ninjalogo':case prefix+'marvelstudio':case prefix+'lionlogo':case prefix+'wolflogo':case prefix+'steel3d':case prefix+'wallgravity':{
            if (!text) reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command.slice(1)}?apikey=Imanmpa&text1=ImanBot&text2=Official`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'jodohku':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) reply(mess.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: ments})
            }
            break
        case prefix+'menfess':
			case prefix+'menfes':
			case prefix+'confes':
			case prefix+'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${command} nomer|pengirim|pesan\n\nContoh ${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*ImanBot*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
					{ urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://instagram.com/imannn17n` } },
                    { quickReplyButton: { displayText: `𝐓𝐞𝐫𝐢𝐦𝐚 𝐌𝐞𝐧𝐟𝐞𝐬𝐬`, id: `${prefix}menfesconfirm ${m.sender}` } },
                    { quickReplyButton: { displayText: `𝐊𝐢𝐫𝐢𝐦 𝐌𝐞𝐧𝐟𝐞𝐬𝐬𝐦𝐮`, id: `${prefix}Menfess` } }
                		]
					Manik.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\n©ImanBot` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break

			case prefix+'menfesconfirm':
 				 Manik.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
            case prefix+'jadian':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) reply(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian 💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, jawab, Manik.user.name, m, {mentions: menst})
            }
            break
                // Textprome //
                case prefix+'blackpink':case prefix+'neon':case prefix+'greenneon':case prefix+'advanceglow':case prefix+'futureneon':case prefix+'sandwriting':case prefix+'sandsummer':case prefix+'sandengraved':case prefix+'metaldark':case prefix+'neonlight':case prefix+'holographic':case prefix+'text1917':case prefix+'minion':case prefix+'deluxesilver':case prefix+'newyearcard':case prefix+'bloodfrosted':case prefix+'halloween':case prefix+'jokerlogo':case prefix+'fireworksparkle':case prefix+'natureleaves':case prefix+'bokeh':case prefix+'toxic':case prefix+'strawberry':case prefix+'box3d':case prefix+'roadwarning':case prefix+'breakwall':case prefix+'icecold':case prefix+'luxury':case prefix+'cloud':case prefix+'summersand':case prefix+'horrorblood':case prefix+'thunder':{
                if (!text) reply('Textnya Mana Kak?')
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command.slice(1)}?apikey=Imanmpa&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'bj':case prefix+'ero':case prefix+'cum':case prefix+'feet':case prefix+'yuri':case prefix+'trap':case prefix+'lewd':case prefix+'feed':case prefix+'eron':case prefix+'solo':case prefix+'gasm':case prefix+'poke':case prefix+'anal':case prefix+'holo':case prefix+'tits':case prefix+'kuni':case prefix+'kiss':case prefix+'erok':case prefix+'smug':case prefix+'baka':case prefix+'solog':case prefix+'feetg':case prefix+'lewdk':case prefix+'waifu':case prefix+'pussy':case prefix+'femdom':case prefix+'cuddle':case prefix+'hentai':case prefix+'eroyuri':case prefix+'cum_jpg':case prefix+'blowjob':case prefix+'erofeet':case prefix+'holoero':case prefix+'classic':case prefix+'erokemo':case prefix+'fox_girl':case prefix+'futanari':case prefix+'lewdkemo':case prefix+'wallpaper':case prefix+'pussy_jpg':case prefix+'kemonomimi':case prefix+'nsfw_avatar':{
            	reply('Fitur ini khusus Premium 🎉\nIngin membeli Premium? Silahkan kirim #buypremium 🎻')
if (!isPremium && global.db.user[m.sender].premium)
                reply (mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/${command.slice(1)}?apikey=Imanmpa`}, caption: `Sudah Jadi 🎳 ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'chiisaihentai':case prefix+'trap':case prefix+'blowjob':case prefix+'yaoi':case prefix+'ecchi':case prefix+'ahegao':case prefix+'hololewd':case prefix+'sideoppai':case prefix+'animefeets':case prefix+'animebooty':case prefix+'animethighss':case prefix+'hentaiparadise':case prefix+'animearmpits':case prefix+'hentaifemdom':case prefix+'lewdanimegirls':case prefix+'biganimetiddies':case prefix+'animebellybutton':case prefix+'hentai4everyone':{
            	reply('Fitur ini khusus Premium 🎉\nIngin membeli Premium? Silahkan kirim #buypremium 🎻')
  if (!isPremium && global.db.user[m.sender].premium)
                reply (mess.wait)
                reply(mess.wait)
                Manik.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command.slice(1)}?apikey=Imanmpa`}, caption: `You Limit -10 ${command.slice(1)}📸` }, { quoted: m })
            }
            break
	    case prefix+'nomerhoki': case prefix+'nomorhoki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!Number(text)) reply(`Example : ${command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nomor HP :* ${anu.message.nomer_hp}\n≻ *Angka Shuzi :* ${anu.message.angka_shuzi}\n≻ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n≻ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case prefix+'artimimpi': case prefix+'tafsirmimpi':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Mimpi :* ${anu.message.mimpi}\n≻ *Arti :* ${anu.message.arti}\n≻ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case prefix+'ramalanjodoh': case prefix+'ramaljodoh':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalanjodohbali': case prefix+'ramaljodohbali':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'suamiistri':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Suami :* ${anu.message.suami.nama}\n≻ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n≻ *Nama Istri :* ${anu.message.istri.nama}\n≻ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalancinta': case prefix+'ramalcinta':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Sisi Positif :* ${anu.message.sisi_positif}\n≻ *Sisi Negatif :* ${anu.message.sisi_negatif}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artinama':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Arti :* ${anu.message.arti}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'kecocokannama': case prefix+'cocoknama':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} Manik, 28, 10, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Life Path :* ${anu.message.life_path}\n≻ *Destiny :* ${anu.message.destiny}\n≻ *Destiny Desire :* ${anu.message.destiny_desire}\n≻ *Personality :* ${anu.message.personality}\n≻ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case prefix+'kecocokanpasangan': case prefix+'cocokpasangan': case prefix+'pasangan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik|Dini`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendImage(m.chat,  anu.message.gambar, `≻ *Nama Anda :* ${anu.message.nama_anda}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan}\n≻ *Sisi Positif :* ${anu.message.sisi_positif}\n≻ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case prefix+'jadianpernikahan': case prefix+'jadiannikah':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Tanggal Pernikahan :* ${anu.message.tanggal}\n≻ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case prefix+'sifatusaha':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!ext)reply `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case prefix+'rejeki': case prefix+'rezeki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Rezeki :* ${anu.message.rejeki}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'pekerjaan': case prefix+'kerja':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Pekerjaan :* ${anu.message.pekerjaan}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalannasib': case prefix+'ramalnasib': case prefix+'nasib':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Analisa :* ${anu.message.analisa}\n≻ *Angka Akar :* ${anu.message.angka_akar}\n≻ *Sifat :* ${anu.message.sifat}\n≻ *Elemen :* ${anu.message.elemen}\n≻ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case prefix+'potensipenyakit': case prefix+'penyakit':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Analisa :* ${anu.message.analisa}\n≻ *Sektor :* ${anu.message.sektor}\n≻ *Elemen :* ${anu.message.elemen}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artitarot': case prefix+'tarot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendImage(m.chat, anu.message.image, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Simbol Tarot :* ${anu.message.simbol_tarot}\n≻ *Arti :* ${anu.message.arti}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'fengshui':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik, 1, 2005\n\nNote : ${command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tahun_lahir}\n≻ *Gender :* ${anu.message.jenis_kelamin}\n≻ *Angka Kua :* ${anu.message.angka_kua}\n≻ *Kelompok :* ${anu.message.kelompok}\n≻ *Karakter :* ${anu.message.karakter}\n≻ *Sektor Baik :* ${anu.message.sektor_baik}\n≻ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case prefix+'haribaik':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Kala Tinantang :* ${anu.message.kala_tinantang}\n≻ *Info :* ${anu.message.info}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harisangar': case prefix+'taliwangke':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Info :* ${anu.message.info}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harinaas': case prefix+'harisial':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Hari Naas :* ${anu.message.hari_naas}\n≻ *Info :* ${anu.message.catatan}\n≻ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case prefix+'nagahari': case prefix+'harinaga':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'arahrejeki': case prefix+'arahrezeki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Arah Rezeki :* ${anu.message.arah_rejeki}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'peruntungan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} Manik, 28, 10, 2005, 2022\n\nNote : ${command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'weton': case prefix+'wetonjawa':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} 28, 10, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Tanggal :* ${anu.message.tanggal}\n≻ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n≻ *Watak Hari :* ${anu.message.watak_hari}\n≻ *Naga Hari :* ${anu.message.naga_hari}\n≻ *Jam Baik :* ${anu.message.jam_baik}\n≻ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case prefix+'sifat': case prefix+'karakter':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} Manik, 28, 10, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case prefix+'keberuntungan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply(`Example : ${command} Manik, 28, 10, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case prefix+'memancing':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Tanggal :* ${anu.message.tgl_memancing}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'masasubur':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} 12, 1, 2022, 28\n\nNote : ${command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'zodiak': case prefix+'zodiac':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${prefix+ command} 28 10 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Zodiak :* ${anu.message.zodiak}\n≻ *Nomor :* ${anu.message.nomor_keberuntungan}\n≻ *Aroma :* ${anu.message.aroma_keberuntungan}\n≻ *Planet :* ${anu.message.planet_yang_mengitari}\n≻ *Bunga :* ${anu.message.bunga_keberuntungan}\n≻ *Warna :* ${anu.message.warna_keberuntungan}\n≻ *Batu :* ${anu.message.batu_keberuntungan}\n≻ *Elemen :* ${anu.message.elemen_keberuntungan}\n≻ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'shio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                Manik.sendText(m.chat, `≻ *Hasil :* ${anu.message}`, m)
            }
            break
           

case prefix+'gcbot': case prefix+'gc': case prefix+'bot':
reply('*Join To Group Official Bot : https://chat.whatsapp.com/JwVolgwCnAHEqshe6rr6DT*')
break
case prefix+'ttnowm':
case prefix+'tiktoknowm':
			case prefix+'tiktok':
			case prefix+'tt':
			    if (!text) return m.reply('masukkan link nya')
				let p = await fdl.downloader.tiktok(q)
				let nih = ` *TIKTOK DOWNLOADER BY IMANBOT*

©️ *Creator:* Iman Official
📌 *Title:* ${p.title}
👤 *Author:* ${p.author}

Thank You
				`
				let buttons = [
                    {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.nowm },
                    caption: nih,
                    title: 'TIKTOK DOWNLOADER',
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
            
			    break
case prefix+'ttaudio':
			case prefix+'tiktokmp3': 
			case prefix+'tiktokaudio': {
				if (!text) return m.reply('masukkan link nya')
				let aud = await fdl.downloader.tiktok(text)
				let cap = ` *TIKTOK AUDIO*

©️ *Creator:* 4K Sanzz
📌 *Title:* ${aud.title}
👤 *Author:* ${aud.author}

Thank You
				`
				conn.sendMessage(from, { caption: cap, image: {url: aud.thumbnail}})
				conn.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: m })
				}
				break
            case prefix+'joox': case prefix+'jooxdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply('Titel Mana Kak?')
                reply('Fitur Eror Males Fix')
            }
            break
            case prefix+'soundcloud': case prefix+'scdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply('Titel Mana Kak?')
                reply('Gatau Bisa Apa Gak')
                let anu = await fetchJson(api('xteam', '/dl/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Manik.sendImage(m.chat, anu.result.thumb, `âž£ Title : ${anu.result.title}\nâž£ Url : ${isUrl(text)[0]}`)
                Manik.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: m })
            }
            break
case prefix+'twtdl': case prefix+'twt': case prefix+'twitterdl': case prefix+'twitter':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Twitter(q).then(async data => {
let txt = ('p')
Manik.sendMessage(m.chat,{ video: { url: data.medias[1].url}},txt,m)})

break
case prefix+'facebook': case prefix+'fb': case prefix+'fbdl': case prefix+'facebookdl':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Facebook(q).then(async data => {
let txt = `*FACEBOOK DOWNLOADER*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `* Type :* ${data.medias[0].extension}\n`
txt += `*Quality :* ${data.medias[0].quality}\n`
txt += `*Size :* ${data.medias[0].formattedSize}\n`
txt += `*Url :* ${data.url}`
sendFile(m.chat,data.medias[0].url,txt,msg)
})

break

case prefix+'ig': case prefix+'igdl': case prefix+'instagram': case prefix+'instagramdl':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
 reply(mess.wait)
xfar.Instagram(q).then(async data => {
let txt = `*Instagram Downloader*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `*Url Source :* ${data.url}\n\n`
txt += `*Tunggu sebentar kak, media sedang di kirim..*`
 reply(txt).then(async res => {
for (let i of data.medias) {
sendFile(m.chat, i.url, '', res)
}
})
})
break
case 'beetunha':
const hahahe = {
  method: 'GET',
  url: 'https://anime-quotes1.p.rapidapi.com/api/available/anime',
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
  }
};
let requestt = require('request')
requestt(hahahe, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case prefix+'ipdomain':
    reply(mess.wait)
    const driphacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(driphacker, function (error, response, body) {
      if (error) throw new Error(error);
       reply(body);
      console.log(body);
    });
    break
    case prefix+'ip':
      reply(mess.wait)
      const dripsba = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
        headers: {
          'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
          useQueryString: true
        }
      };
      let bhudhi = require('request')
      bhudhi(dripsba, function (error, response, body) {
        if (error) throw new Error(error);
        reply(body);
        console.log(body);
      });
break
case prefix+'ceknomor':
  reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case prefix+'veriphone':
  reply(mess.wait)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
	        case prefix+'pindl': case prefix+'pinterestdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply('Link Mana Kak?')
                reply('Eror Bodo Males Fix Buka Github')
            }
            break
            case prefix+'umma': case prefix+'ummadl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!text) reply `Example : ${command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./FuncBot/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: ' Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: ' Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
≻ Title : ${anu.title}
≻ Author : ${anu.author.name}
≻ Like : ${anu.like}
≻ Caption : ${anu.caption}
≻ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: Manik.user.name,
			buttons,
			headerType: 4
		    }
		    Manik.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Manik.sendMessage(m.chat, { image: { url }, caption: `≻ Title : ${anu.title}\n≻ Author : ${anu.author.name}\n≻ Like : ${anu.like}\n≻ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case prefix+'ringtone':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!text) reply `Example : ${command} black rover`
        let { ringtone } = require('./FuncBot/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Manik.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case prefix+'iqra':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		oh = `Example : ${command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		Manik.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case prefix+'juzamma':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (args[1] === 'pdf') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[1] === 'docx') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[1] === 'pptx') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[1] === 'xlsx') {
		reply(mess.wait)
		Manik.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case prefix+'hadis': case prefix+'hadist':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) reply `Contoh:
${command} bukhari 1
${command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) reply `Hadis yang ke berapa?\n\ncontoh:\n${command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[1]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case prefix+'alquran':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		Manik.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case prefix+'tafsirsurah':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) reply `Contoh penggunaan:\n${command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await Manik.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Manik.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case prefix+'setcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) reply `Reply Pesan!`
                if (!m.quoted.fileSha256) reply `SHA256 Hash Missing`
                if (!text) reply `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) reply `You have no permission to change this sticker command`
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case prefix+'delcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) reply `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) reply `You have no permission to delete this sticker command`              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case prefix+'listcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Manik.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                if (!m.quoted) reply `Reply Message!`
                if (!m.quoted.fileSha256) reply `SHA256 Hash Missing`
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) reply `Hash not found in database`
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case prefix+'addmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) reply `Reply Message Yang Ingin Disave Di Database`
                if (!text) reply `Example : ${command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) reply `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case prefix+'igstalk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if(q) m.reply('Username nya mana?')
fetchJson(api('anto','/api/igstalk',{username:q},'apikey')).then(async i =>{
let woi = `*「 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 」*

_Username : ${i.username}_
_Nickname : ${i.fullname}_
_Source : https://instagram.com/${q}_
_Verified : ${i.verified}_
_Followers : ${i.followers}_
_Following : ${i.follow}_
_Categori : ${i.category}_
_Bio : ${i.bio}_`
sendFile(m.chat ,i.thumbnail,woi, m)
})
}
break
            case prefix+'getmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) reply `Example : ${command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) reply `'${text}' tidak terdaftar di list pesan`
                Manik.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case prefix+'listmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `≻ *Name :* ${i.nama}\n≻ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case prefix+'delmsg': case prefix+'deletemsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case prefix+'anonymous':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				
                Manik.sendMessage(m.chat, { caption: `Halo ${pushname}👋, berikut perintah anonymous chat bot

🗒️ ${prefix}anonymous - _melihat perintah yang ada_
🔎 ${prefix}search - _mencari teman bicara_
⏩ ${prefix}skip - _mencari teman lain_
❌ ${prefix}stop - _berhenti sesi chatting_
💌 ${prefix}sendprofile - _mengirim kontak pribadi anda ke teman chat_
⚠️ ${prefix}bug - _mengirim laporan ke pemilik bot_
🔮 ${prefix}owner - _kirim kontak pemilik bot_
👤 ${prefix}author - _kirim kontak pembuat bot_
———————————————————
Note: Owner Tidak Bertanggung Jawab Jika Ada Masalah Antara Pengguna Bot`, image: { url: "./media/anonymous.jpg" }, templateButtons: buttonsAnon, footer: 'LanhBotz', mentions: [m.sender] })
			break
			}
case prefix+'sendprofile': case prefix+'sendcontact':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await Manik.profilePictureUrl(room.b)
                let status = await Manik.fetchStatus(room.b)
                let msg = await Manik.sendImage(room.a, profile, `Name : ${await Manik.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                Manik.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case prefix+'stop': case prefix+'keluar': case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Manik.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                break
            }
            case prefix+'search': case prefix+'mulai': case prefix+'start':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, Manik.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Manik.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Manik.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, Manik.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, Manik.user.name, m)
                }
                break
            }
            case prefix+'next': case prefix+'skip':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Manik.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Manik.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Manik.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, Manik.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await Manik.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, Manik.user.name, m)
                }
                break
            }
            case prefix+'public':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                Manik.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case prefix+'self':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isManik) reply(mess.owner)
                Manik.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case prefix+'owner': case prefix+'creator':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Sanzz;;;'
    + 'FN:Sanzz\n'
    + 'ORG:Sanzz;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6281236167286:+62 859-6034-8665\n' 
    + 'item1.X-ABLabel:Jika ingin Ngobrol dengan owner silahkan chat nomor di atas!\n'
    + 'item2.EMAIL;type=INTERNET:4ksanzz@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/4k.sanz\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Indonesia;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
Manik.sendMessage(m.chat, { contacts: { displayName: 'Arya Manik√', contacts: [{ vcard }] } }, { quoted: m })
            }
            break            
            case prefix+'author':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Sanzz;;;'
    + 'FN:Sanzz\n'
    + 'ORG:Sanzz;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6281236167286:+62 859-6034-8665\n' 
    + 'item1.X-ABLabel:Kalo mau bertanya tentang bot silahkan chat nomor tersebut!\n'
    + 'item2.EMAIL;type=INTERNET:4ksanzz@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/4k.sanz\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Indonesia;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
Manik.sendMessage(m.chat, { contacts: { displayName: '4K Sanzz', contacts: [{ vcard }] } }, { quoted: m })
reply('Hai Kak Ini Adalah Nomor Author Saya')
            }
            break            
                    case prefix+'bug': case prefix+'report':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    	if(!text) reply `Enter The Bug Example\n\n${command.slice(1)} Menu Error `
                    	Manik.sendMessage(`6287873670287@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
case prefix+'tes': case prefix+'test': case prefix+'alive': case prefix+'bot': case prefix+'robot': case prefix+'Manik': case prefix+'doge':{
                anu = `Hi ${pushname}👋`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/Manik.jpg')},
                            hydratedFooterText: `LangBotz`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/4k.sanz'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Group',
                                    url: 'https://chat.whatsapp.com/C2byToeUfSo1gOXfLurPQn'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Command',
                                    id: `${prefix}allmenu`
                                }
                                }]
                        }
                    }
                }), { userJid: m.chat })
                Manik.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
             case prefix+'sendbuffer':{
try{
 await reply('Tunggu sebentar...')
 Manik.sendImage(m.chat, isUrl(q)[0], mess.done, m)
} catch (err){
 reply(err)
console.log(err)
}
}
break

//================================>ADD FITUR BY 4K Sanzz<================================//
case prefix+'loli':
       case prefix+'husbu':
       case prefix+'milf':
       case prefix+'cosplay':
       case prefix+'wallml':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Hikari.github.io`)
              let wipu = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command.slice(1)}.json`)
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              lolis = await getBuffer(wipi)
              Manik.sendImage(m.chat, lolis, `Nih Kak`, m)
              break
            case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': 
            if (!m.quoted && !text) reply `Send/reply text with caption ${command}`
            ter = command[2].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case prefix+'manga':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) reply `Example : ${command} black rover`
              reply('Tunggu Ya Kakak, Sanzz Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=Imanmpa&query=${text}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              Manik.sendImage(m.chat, buff, `${ini_txt}`, m)
         break
         case prefix+'anime':
             if (!text) reply `Example : ${command} black rover`
             reply('Tunggu Ya Kakak, ImanBot Carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=Imanmpa&query=${text}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             Manik.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
             break
      case prefix+'kusonime':
             if (!text) reply `Example : ${command} black rover`
             reply('Tunggu Ya Kakak, ImanBot carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=Imanmpa&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             Manik.sendImage(m.chat, ini_buffer, `${ini_txt}`, m)
             break
       case prefix+'otakudesu':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) reply `Example : ${command} black rover`
             reply('Tunggu Ya Kakak, Imanbot Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=Imanmpa&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
              case prefix+'neko':
       case prefix+'kanna':
       case prefix+'sagiri':
       case prefix+'megumin':
       case prefix+'wallnime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak??, ImanBot')
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=Imanmpa`)
              Manik.sendImage(m.chat, buff, `Nih Kak`, m)
              break
       
       
    
              break
       case prefix+'nakanoitsuki':
       case prefix+'nakanonino':
       case prefix+'nakanomiku':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply(mess.wait)
              res = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${command.slice(1)}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              Manik.sendImage(m.chat, random, `Nih Kak`, m)
              break
              case prefix+'lolkey':
       case prefix+'cekapikey':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) reply `Example : ${command} Textnya Mana Kak😡`
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
              teks = `*YOUR APIKEY*\n\n➸ Username= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              reply(teks)
              break
       case prefix+'storyanime':
              case prefix+'videoanime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak, ImanBot')
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=Imanmpa`)
              Manik.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', caption: `Nih Kak` }, { quoted: m })
              break
              case prefix+'doujindesu':
             if (!text) reply `Example : ${command} Textnya Mana Kak😡`
             reply('Tunggu Ya Kakak, ImanBot carikan')
             try {
             doujinnya = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${text}&apiKey=administrator`)
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             Manik.sendImage(m.chat, buffer, xixixai, m)
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
             case prefix+'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
              Manik.sendImage(m.chat, buff, ot, m)
break

case prefix+'quotes':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=Imanmpa`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n● ${author}*`)
    break
case prefix+'quotesanime':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=Imanmpa`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    anime = quotes.anime
    episode = quotes.episode
    reply(`_${quote}_\n\n*● ${char}*\n*● ${anime} ${episode}*`)
    break
case prefix+'quotesdilan':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=Imanmpa`)
    reply(get_result.result)
   break
    break
case prefix+'quotesimage':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=Imanmpa`)
    Manik.sendImage(m.chat, buff, `ImanBot - By ©ImanOfficial`, m)
 break
case prefix+'faktaunik':
case prefix+'katabijak':
case prefix+'pantun':
case prefix+'bucin':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=Imanmpa`)
   reply(get_result.result)
        break;
    break
case prefix+'randomnama':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=Imanmpa`)
   reply(anu.result)
        break;
    break
       // Movie & Story
case prefix+'lk21':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${command} Transformer`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=Imanmpa&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Link : ${get_result.link}\n`
    ini_txt += `Genre : ${get_result.genre}\n`
    ini_txt += `Views : ${get_result.views}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Tahun : ${get_result.tahun}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
    ini_txt += `Location : ${get_result.location}\n`
    ini_txt += `Date Release : ${get_result.date_release}\n`
    ini_txt += `Language : ${get_result.Language}\n`
    ini_txt += `Link Download : ${get_result.link_dl}`
    thumbnail = await getBuffer(get_result.thumbnail)
    Manik.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'drakorongoing':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=Imanmpa`)
    get_result = get_result.result
    ini_txt = "Ongoing Drakor\n\n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n`
        ini_txt += `Year : ${x.category}\n`
        ini_txt += `Total Episode : ${x.total_episode}\n`
        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'wattpad':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
    ini_url = args[1]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=Imanmpa&url=${ini_url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Motify date : ${get_result.modifyDate}\n`
    ini_txt += `Create date: ${get_result.createDate}\n`
    ini_txt += `Word : ${get_result.word}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Vote : ${get_result.vote}\n`
    ini_txt += `Reader : ${get_result.reader}\n`
    ini_txt += `Pages : ${get_result.pages}\n`
    ini_txt += `Description : ${get_result.desc}\n\n`
    ini_txt += `Story : \n${get_result.story}`
    thumbnail = await getBuffer(get_result.photo)
    Manik.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'wattpadsearch':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${command} Tere Liye`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=Imanmpa&query=${query}`)
    get_result = get_result.result
    ini_txt = "Wattpad Seach : \n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Url : ${x.url}\n`
        ini_txt += `Part : ${x.parts}\n`
        ini_txt += `Motify date : ${x.modifyDate}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `Coment count: ${x.commentCount}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'cerpen':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=Imanmpa`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   reply(titid)
    break
case prefix+'ceritahoror':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=Imanmpa`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Story :\n${get_result.story}\n`
    buff = await getBuffer(get_result.thumbnail)
    Manik.sendImage(m.chat, buff, `${ini_txt}`, m)
        break
    case prefix+'bisakah':
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 🙉','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Manik.sendMessage(m.chat, { text: keh }, { quoted: m })
					break

case prefix+'kapan':
case prefix+'kapankah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					kapankah = body.slice(1)
					const kapan =['Besok','YNTKTS','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Manik.sendMessage(m.chat, { text: koh }, { quoted: m })
					break

					
case prefix+'apakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','YNTKTS','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak 🙀','Haha mna mungkin 😎']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Manik.sendMessage(m.chat, { text: kah }, { quoted: m })
					break
					
case prefix+'bagaimanakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					Manik.sendMessage(m.chat, { text: mana }, { quoted: m })
					break
					


case prefix+'goblokcek': case prefix+'jelekcek': case prefix+'rate':case prefix+'haram':case prefix+'gaycek':
case prefix+'lesbicek':case prefix+'gantengcek': case prefix+'cantikcek':case prefix+'begocek': case prefix+'suhucek':case prefix+'pintercek':
case prefix+'jagocek':case prefix+'nolepcek':case prefix+'babicek':case prefix+'bebancek':case prefix+'baikcek':
case prefix+'jahatcek':case prefix+'anjingcek':case prefix+'haramcek':case prefix+'pakboycek':
case prefix+'pakgirlcek':case prefix+'sangecek': case prefix+'bapercek':case prefix+'fakboycek':case prefix+'alimcek':case prefix+'suhucek':
case prefix+'fakgirlcek':case prefix+'kerencek':case prefix+'wibucek':case prefix+'pasarkascek':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
Manik.sendMessage(m.chat, { text: yn }, { quoted: m })
break

case prefix+'readmore': case prefix+'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  reply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break

case prefix+'berkas':
case prefix+'pile':
if (m.isGroup) reply (mess.private)
if (!isManik) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari file apa kak*")
sendfile = `${q}`
anuu = fs.readFileSync(sendfile)
Manik.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted:m})                  
///Manik.sendMessage(m.chat, anuu, document, {mimetype: "application/octet-stream", filename: `${q}`, quoted: m})
break 

case prefix+'getcase':
if (!isManik) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Manik.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply (`${getCase(q)}`)
break

case prefix+'getidgc':
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
break
    

case prefix+'hu':
case prefix+'culik':
if (!m.isGroup) return reply(mess.group)
         if (!isManik) return reply(mess.owner)
  if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
  let pantek = []
  for (let i of groupMembers) {
      pantek.push(i.jid)
  }
  await Manik.groupParticipantsUpdate(m.chat, [pantek], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 // Manik.groupAdd(q, pantek)
  break
case prefix+'stalkig':
                    if (args.length == 0) return reply(`Example: ${command} jessnolimit`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=Imanmpa`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    Manik.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})
                    break
                case prefix+'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${command} LoL-Human`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=Imanmpa`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    await Manik.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case prefix+'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${command} jokowi`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=Imanmpa`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    await Manik.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                
                case prefix+'shortlink':
                    if (args.length == 0) return reply(`Example: ${command} https://api.lolhuman.xyz`)
                    ini_link = args[1]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=Imanmpa&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case prefix+'spamsms':
                if (!isPremium && !m.key.fromMe && !isManik) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${command} 08303030303030`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=Imanmpa&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=Imanmpa&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=Imanmpa&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=Imanmpa&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=Imanmpa&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=Imanmpa&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=Imanmpa&nomor=${text}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=Imanmpa&nomor=${text}`)
                    reply("Success")
                    break
                    case prefix+'limit+': 
if (!global.db.users[m.sender].limit < 1) return reply(`S u k s e s Menambah Limit`) // respon ketika limit habis
db.users[m.sender].limit += 1
break
case prefix+'checklimit': 
reply(`Limit Kamu : *${global.db.users[m.sender].limit}*`)
break
case prefix+'react':
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!text) reply `Example : ${command} Emot Mana Kak😡`
const reactionMessage = {
    react: {
        text: `${text}`,
        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
}

 Manik.sendMessage(m.chat, reactionMessage)
 break
 
        // Menu Store
        case prefix+'item':
        if (!m.isGroup) return reply(mess.group)
                    if (!m.isGroup) return reply(mess.OnlyGrup)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
const listMessage = {
  text: `${ucapanWaktu} ${pushname} 👋\n\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!\n🗓 Tanggal : ${tanggal}\n🕰 Jam : ${moment().format("HH:mm:ss z")} `,
  footer: "Powered By @4K Sanzz",
  buttonText: "Click Here!",
  sections: [{
                    title: groupName, rows: arr_rows
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
               break
        
        case prefix+'additem':
        if (!m.isGroup) return reply(mess.group)
            if (!m.isGroup) return reply(mess.OnlyGrup)
            if (!isAdmins && !isManik) return reply('Only Admins')
            var args1 = text.split("@")[0]
            var args2 = text.split("@")[1]                
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
              let media = await Manik.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            break
        case prefix+'delitem':
        if (!m.isGroup) return reply(mess.group)
            if (!m.isGroup) return reply(mess.OnlyGrup)
            if (!isAdmins && !isManik) return reply('Only Admins')
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
            break
        case prefix+'changeitem': case prefix+'change':
            if (!m.isGroup) return reply(mess.OnlyGrup)
            if (!isAdmins && !isManik) return reply('Only Admins')
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
                let media = await Manik.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
              const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
            break

        case prefix+'tambah':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one + nilai_two}`)
            break
        case prefix+'kurang':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one - nilai_two}`)
            break
        case prefix+'kali':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one * nilai_two}`)
            break
        case prefix+'bagi':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one / nilai_two}`)
            break
        case 'cekproses':
            if (!isGroup) return
            if (!isManik && !groupAdmins) return
            if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
            if (!m.quoted.text) {
            reply('Catatannya mana?')
            }
            if (m.quoted.text) {
            let catad = m.quoted.text
            let nimb = quoted.sender
            let prses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} sedang di proses!`
            mentions(prses, [nimb], true)
            }
            break
        case 'proses':
            if (!m.isGroup) return
            if (!isManik && !groupAdmins) return
            if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
            if (!text) return reply('Masukan Catatan Pelanggan\nContoh: proses 11 Diamond Ml | Id 12345678(1234)')
            let numb = m.sender
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${text}\n\nPesanan @${numb.split("@")[0]} sedang di proses!`
            mentions(proses, numb, true)
            m.quoted.copyNForward(`6285737134572@s.whatsapp.net`, true)
            Manik.sendMessage(`6285737134572@s.whatsapp.net`, {text: proses })
            break
        case 'done':
            if (!isManik) return
            if (args.length == 1) return reply('Masukan Nomor Pelanggan\nContoh: done 62xxx|catatan')
            if (args.length == 2) return reply('Masukan Catatan Transaksi')
            if (args[1].includes('+')) return reply(`Jangan menggunakan +`)
            if (isNaN(parseInt(args[1]))) return reply('Harus Berupa Angka!')
            let numbb = `${args[1]}@s.whatsapp.net`             
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n${args[2]}\n\nTerimakasih @${numbb.split("@")[0]} Next Order ya🙏`
            Manik.sendMessage(`${args[1]}@s.whatsapp.net`, {text: sukses })
            break
            case prefix+'react':
                      if (!isManik) return reply('Manik Aja')
                      if (!isQuotedMsg) return reply(`Balas pesannya`)
                      if (args.length < 2) return reply(`Masukkan 1 emoji`)
                      if (!isEmoji(args[1])) return reply(`Itu bukan emoji!`)
                      if (isEmoji(args[1]).length > 1) return reply(`Satu aja emojinya`)
                      var reactMsg = { reactionMessage: {
                          key: {
                            remoteJid: m.chat,
                            fromMe: m.quotedMsg.fromMe,
                            id: m.quotedMsg.id,
                            participant: m.quotedMsg.sender
                          },
                          text: args[1]
                        }
                      }
                      Manik.sendMessageFromContent(m.chat, reactMsg)
                      break
          case prefix+'addjudultugas':
          if (args.length === 0) return reply(`Buat list dengan judul\n\nContoh : ${prefix}addjudultugas | <judul tugas>`);
          if (judullist.length > 0) return reply(`Mohon untuk reset tugas terlebih dahulu dengan command ${prefix}resettugas`);
          const isijudullist = q.split(`|`)[1];
          const judulin = judullist.push(isijudullist);
          if (judulin) return reply(`Tugas sudah ditambahkan, untuk menambahkan tugas menggunakan command ${prefix}addtugas | <nama tugas>`);
          break;
        
        case prefix+'addtugas':
          if (args.length === 0) return reply(`Tambah daftar Tugas dengan isi\n\nContoh : ${prefix}addtugas | <nama tugas>`);
          if (judullist.length === 0) return reply(`Mohon untuk membuat judul Tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
          const isilist = q.split(`|`)[1];
          const isiin = daftarlist.push(isilist);
          if (isiin) {
            const isidaftar = ngelistisi();
            reply(isidaftar);
          }
          break;
        
        case prefix+'hapustugas':
          if (args.length === 0) return reply(`Hapus item pada List dengan nomor item\n\nContoh : ${prefix}hapustugas 1`);
          if (daftarlist.length === 0) return reply(`Tambah daftar tugas dengan isi\n\nContoh : ${prefix}addtugas | <nama tugas>`);
          if (judullist.length === 0) return reply(`Mohon untuk membuat judul tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
          var i = args[1];
          i--;
          const hapusinlist = daftarlist.splice(i, 1);
          if (hapusinlist){
            reply(`Item dengan nomor ${args} telah dihapus !`);
            const isidaftar = ngelistisi();
            reply(isidaftar);
          }
          break;

        case prefix+'listtugas':
          if (daftarlist.length === 0) return reply(`Tambah daftar tugas dengan isi\n\nContoh : ${prefix}addtugas | <ini tugas>`);
          if (judullist.length === 0) return reply(`Mohon untuk membuat judul tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
          const isidaftar = ngelistisi();
          reply(isidaftar);
          break;

        case prefix+'resettugas':
          while (daftarlist.length) { 
            daftarlist.pop(); 
          }
          while (judullist.length) { 
            judullist.pop(); 
          }
          if (daftarlist.length === 0 && judullist.length === 0) return reply(`tugas sudah di reset !`);
          break;
          case prefix+'dashboard':
	                    addCountCmd('#dashboard', sender, _cmd)
                            var posi = await getPosiCmdUser(sender, _cmdUser)
                            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
                            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
                            var posi = await getPosiCmdUser(sender, _cmdUser)
                            var jumlahCmd = _cmd.length
                            if (jumlahCmd > 10) jumlahCmd = 10
                            var jumlah = _cmdUser[posi].db.length
                            if (jumlah > 5) jumlah = 5
                            var totalUser = 0
                            for (let x of _cmdUser[posi].db) {
                              totalUser = totalUser + x.count
                            }
                            var total = 0
                            for (let o of _cmd) {
                              total = total + o.count
                            }
                            var teks = `*IMAN BOT DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
                            teks += `*Most Command Global*\n`
                            for (let u = 0; u < jumlahCmd; u ++) {
                              teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
                            }
                            teks += `\n*Most Command User*\n`
                            for (let i = 0; i < jumlah; i ++) {
                              teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
                            }
                            reply(teks)
                            break
                            case prefix+'clearerr':
                            let eror = JSON.parse(fs.readFileSync('./error.json'))
eror.splice(0)
fs.writeFileSync('./error.json', JSON.stringify(eror))
reply`Done`
break
case prefix+'simi':{
const axios = require('axios')
          res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=id`)
          pp = res.data.success
          reply(res.data.success)
          break 
          }
          case prefix+'order':
			case prefix+'caraorder': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let capp = `*Hallo _${m.pushName}_ Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|Aryamanik___\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`
				conn.sendMessage(from, {text: capp}, {quoted:m})
				}
				break
          case prefix+'followers': case prefix+'follower': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let juma = q.split('|')[0] ? q.split('|')[0]: q
				let targtt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targtt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|aryamanik___`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=follower`)
				list = []
				textplus = `${juma}|${targtt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©4KSanzowner bot)\nAffis Junianto (owner smm)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
               break
					}
					
			case prefix+'like':{
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahhh = q.split('|')[0] ? q.split('|')[0]: q
				let targettt = q.split('|')[1] ? q.split('|')[1]: ''
				if (targettt.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|aryamanik___`)

				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=like`)
				list = []
				textplus = `${jumlahhh}|${targettt}`
            for (let L of fetaa.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©4KSanzz (owner bot)\nAffis Junianto (owner smm)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
				}
				break
case prefix+'view': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`Link atau Usernamenya mana?`)
				let jumlahh = q.split('|')[0] ? q.split('|')[0]: q
				let targett = q.split('|')[1] ? q.split('|')[1]: ''
				if (targett.length < 1) return m.reply(`Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(1)} 500|aryamanik___`)

				fetta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=view`)
				list = []
				textplus = `${jumlahh}|${targett}`
            for (let L of fetta.data) {
                list.push({
                        title: `*${L.nama}*`,
    					rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
    					description: `\n${L.desc}`
                    })
                }
const listMessage = {
  text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
  footer: "©4KSanzz (owner bot)\nAffis Junianto(owner smm)",
  buttonText: "Click Here!",
  sections: [{
                    title: "Sosmed Store",
  				rows: list
                }],
                listType: 1
}

const sendMsg = await Manik.sendMessage(m.chat, listMessage)
				break
}
case prefix+'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`*Cara order followers*\n\n*Example :* _${command} jumlah|username tanpa (@)_\n*Example :* _${command} 500|aryamanik___\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
				let jumlah = q.split('|')[0] ? q.split('|')[0]: q
				let targ = q.split('|')[1] ? q.split('|')[1]: ''
				let idny = q.split('|')[2] ? q.split('|')[2]: ''

				feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
				if (feta.status == false) {
  				m.reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
				} else {
  				let idpes = feta.data.order_id
  				let cap = `Hay *${m.pushName} 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! MENGGUNAKAN QRIS.\n\n*Id Pesanan Anda :* ${feta.data.order_id}\n*Target :* ${targ}\n*Jumlah Pesanan :* ${jumlah}\n*Total Harga Pesanan :* Rp ${feta.data.amount}\n*Status Orderan :* ${feta.data.status}\n\n_Info lebih lanjut klik button dibawah._`
  				buto = [{
    				buttonId: `cekstatus ${feta.data.order_id}`,
    				buttonText: {
      				displayText: 'Check Status'
    				},
    				type: 1
  				}]
  				conn.sendMessage(from, {
    				caption: cap, image: {
      				url: feta.data.qris
    				}, buttons: buto, footer: `©4K Sanzz`
  				})
				}
				console.log(feta)
				}
				break
case prefix+'listharga':
			case prefix+'prichlist':
			case prefix+'pricelist': {
				feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=pricelist&type=semua`)
				list = '*List Harga Layanan*\n\n'
				for (let L of feta.data) {
 				 list += `name : ${L.nama}\ndesc : ${L.desc}\nmin : ${L.min}\nmax : ${L.max}\nharga : ${L.price}\nid : ${L.id_layanan}\n\n`
				}
				conn.sendMessage(from, {text: list}, {quoted:m})
				console.log(feta)
				}
				break
case 'chekstatus':
			case 'cekstatus': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply('idnya mana bang')
				seta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=status&order_id=${q}`)
				//console.log(seta)
				if (seta.status == false) {
  				var captionnye = `\nid order tidak di temukan`
				} else {
  				var captionnye = `\n*Status Orderan Anda*\n\nTarget : ${seta.data.target}\nStatus : ${seta.data.status}\nFollowers Default : ${seta.data.start_count}\nOn Process : ${seta.data.kurang}\nTotal Order : ${seta.data.total_order}\nTanggal Pesan : ${seta.data.tanggal_pesan}\nJumlah Pembayaran : ${seta.data.amount}\nId Pesanan : ${seta.data.order_id}\n\nTerimakasih sudah membeli followers dari kami, ditunggu next ordernya!`
				}
				var copynye = `${q}`
				const menuButa = [{
  				index: 1,
  				urlButton: {
    				displayText: `Copy Id Here`,
    				url: 'https://www.whatsapp.com/otp/copy/'+copynye
  				}},
				{urlButton: {
    				displayText: `Panel Smm`,
    				url: 'https://ampibismm.my.id'
  				}},
  				{
    				quickReplyButton: {
      				displayText: `Check Status Again`,
      			id: `cekstatus ${q}`
    				}
  				},
				]
				await conn.sendMessage(from, {
  				text: `${captionnye}`, templateButtons: menuButa, footer: `Copy id pesanan anda dibawah ini\n\nampibismm.my.id\n©AryaManik`
				}, {
  				quoted: m
				})
				}
				break
			case prefix+'komisi':
				if (!isManik) return reply('Manik Aja')
				komisi = await fetchJson(`http://ampibismm.my.id/api/json?bot=true&action=profile&api_key=aryamanik`)
				let reskomisi = `Hallo owner Berikut komisi anda\n\n*Name :* ${komisi.data.name}\n*Full Name :* ${komisi.data.full_name}\n*Komisi :* ${komisi.data.komisi}`
				conn.sendMessage(from, {text: reskomisi }, {quoted:fake})
				break
			case prefix+'tk': case prefix+'tarikkomisi': {
				if (!isManik) return reply('Manik Aja')
				//if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return m.reply(`jumlahnya berapa? min 10000`)
				fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=listwallet`)
				list = []
					for (let L of fetaa.data) {
					let no = 1
					list.push({
    					buttonText: {displayText: L.wallet},
    					buttonId: `${prefix}tarikkomisikunci ${q}|${L.wallet}`,
    					type: `${no++}`
  					})
				}
				let nyobb = list
				conn.sendMessage(from, {text:`*PILLIH E-WALLET*\nPilih jenis wallet yang ingin anda gunakan!`, title: 'WALLET', footer: '©AryaManik', buttons: nyobb})
				}
				break
			case prefix+'tarikkomisikunci':
				if (!isManik) return reply('Manik Aja')
				if (args.length < 1) return m.reply('jumlahnya berapa bang')
				let juml = q.split('|')[0] ? q.split('|')[0]: q
				let walle = q.split('|')[1] ? q.split('|')[1]: ''
				if (walle.length < 1) return m.reply(`Jumlah dan Target harus di isi!`)
				tarikom = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=aryamanik&action=withdraw&amount=${juml}&wallet=${walle}&nomor=${smm.nomor}&an=${smm.atasnama}`)
				conn.sendMessage(from, {text: `${tarikom.data.msg}`}, {quoted:m})
				break

//================================>ADD FITUR BY 4K Sanzz<================================//

default:
if (isSami && body != undefined){
const axios = require('axios')
          res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=id`)
          pp = res.data.success
          reply(res.data.success)
          }
	if (isCmd) {		
		            reply(`Maaf kak fitur ${command} tidak terdaftar di list ${prefix+'menu'}`)
		          }
if (budy.startsWith('=>')) {
if (!isManik) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isManik) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isManik) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Manik.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
let eror = JSON.parse(fs.readFileSync('./error.json'))
eror.push(`${util.format(err)}`)
fs.writeFileSync('./error.json', JSON.stringify(eror))
}
} 