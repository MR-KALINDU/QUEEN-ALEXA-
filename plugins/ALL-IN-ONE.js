const _0x36f12a = (function () {
  let _0x386a8c = true
  return function (_0x1586b1, _0x5cd55b) {
    const _0x108673 = _0x386a8c
      ? function () {
          if (_0x5cd55b) {
            const _0x1870af = _0x5cd55b.apply(_0x1586b1, arguments)
            return (_0x5cd55b = null), _0x1870af
          }
        }
      : function () {}
    return (_0x386a8c = false), _0x108673
  }
})()
;(function () {
  _0x36f12a(this, function () {
    const _0x17fbc0 = new RegExp('function *\\( *\\)'),
      _0x5be86c = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x1e59e8 = _0x461918('init')
    !_0x17fbc0.test(_0x1e59e8 + 'chain') || !_0x5be86c.test(_0x1e59e8 + 'input')
      ? _0x1e59e8('0')
      : _0x461918()
  })()
})()
const config = require('../config'),
  { cmd, commands } = require('../lib/command'),
  { fetchJson } = require('../lib/functions'),
  hiru = require('../lib/news'),
  Esana = require('@sl-code-lords/esana-news'),
  derana = require('../lib/news'),
  wabetainfo = require('@sl-code-lords/wabetainfo')
var pkg = require('../package.json')
;(pkg.author != 'Kalindu Gaweshana' || pkg.name != 'QUEEN-ALEXA-MD') &&
  console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
const _0xb779d9 = {}
_0xb779d9.pattern = 'wabeta'
_0xb779d9.react = '\uD83E\uDE80'
_0xb779d9.desc = 'Whatsapp beta news'
_0xb779d9.category = 'search'
_0xb779d9.use = '.wabeta'
_0xb779d9.filename = __filename
cmd(
  _0xb779d9,
  async (
    _0x378fc4,
    _0x518363,
    _0x329acc,
    {
      from: _0x5b1e35,
      l: _0x392b25,
      quoted: _0x4fd615,
      body: _0x498c53,
      isCmd: _0x405a59,
      command: _0x1f0ec6,
      args: _0x2e822a,
      q: _0x5bcd8b,
      isGroup: _0x20c0e0,
      sender: _0x524b35,
      senderNumber: _0x54c055,
      botNumber2: _0x18a57c,
      botNumber: _0x2462d3,
      pushname: _0x43d749,
      isMe: _0x46b711,
      isOwner: _0x5c1a4c,
      groupMetadata: _0x29d344,
      groupName: _0x517643,
      participants: _0x84b0b1,
      groupAdmins: _0x1200a8,
      isBotAdmins: _0x1f04e5,
      isAdmins: _0x471bcb,
      reply: _0x2b7515,
    }
  ) => {
    try {
      const _0x21c6f6 = await wabetainfo.latest(),
        _0x3153b5 = '' + _0x21c6f6.title,
        _0x5aa07c = '' + _0x21c6f6.date,
        _0x610d46 = '' + _0x21c6f6.platform,
        _0xc56375 = '' + _0x21c6f6.url,
        _0x4255bf = '' + _0x21c6f6.fulldesc,
        _0xd0eaff = '' + _0x21c6f6.faq.question,
        _0xe60dbc = '' + _0x21c6f6.faq.answer,
        _0xb4f38f = { url: _0x21c6f6.image }
      const _0x52d055 = {
        image: _0xb4f38f,
        caption:
          '*\uD83D\uDCDA ᴛɪᴛʟᴇ :* ' +
          _0x3153b5 +
          '\n\n*\uD83D\uDCC5 ᴅᴀᴛᴇ :* ' +
          _0x5aa07c +
          '\n\n*\uD83D\uDCE1 ᴘʟᴀᴛꜰᴏʀᴍ :* ' +
          _0x610d46 +
          '\n\n*\uD83D\uDD87️ ᴜʀʟ :* ' +
          _0xc56375 +
          '\n\n*\uD83D\uDCD1 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ' +
          _0x4255bf +
          '\n\n*QUEEN ALEXA WHATSAPP BOT*',
      }
      const _0x4a01db = { quoted: _0x518363 }
      await _0x378fc4.sendMessage(_0x5b1e35, _0x52d055, _0x4a01db)
    } catch (_0x4b3a0e) {
      console.log(_0x4b3a0e)
    }
  }
)
const _0x14ab90 = {}
_0x14ab90.pattern = 'wabetaall'
_0x14ab90.react = '\uD83E\uDE80'
_0x14ab90.desc = 'Whatsapp beta news'
_0x14ab90.category = 'search'
_0x14ab90.use = '.wabetaall'
_0x14ab90.filename = __filename
cmd(
  _0x14ab90,
  async (
    _0x136aad,
    _0x7b7c6c,
    _0x3c28ec,
    {
      from: _0x4acbda,
      l: _0x5aca73,
      quoted: _0x3ee7fb,
      body: _0x16907c,
      isCmd: _0xf9739b,
      command: _0x179d6c,
      args: _0x588304,
      q: _0x186950,
      isGroup: _0x13e6bc,
      sender: _0x1dbf00,
      senderNumber: _0x416fcd,
      botNumber2: _0x2bc6e1,
      botNumber: _0x4ad8bd,
      pushname: _0x21fdb5,
      isMe: _0x37b26a,
      isOwner: _0x381bb3,
      groupMetadata: _0x4c0f45,
      groupName: _0x3d8b51,
      participants: _0x63d3d,
      groupAdmins: _0x3899ea,
      isBotAdmins: _0x5f3767,
      isAdmins: _0x3fcb3e,
      reply: _0xb2b0,
    }
  ) => {
    try {
      const _0x30f6f7 = await wabetainfo.articlelist()
      let _0x555dcb =
          '*\uD83D\uDC83\u2665️ Wa Beta Info\uD83D\uDC83\u2665️*\n\n',
        _0x5ba412 = 1
      for (let _0x12e05b of _0x30f6f7) {
        _0x555dcb +=
          '\uD83D\uDCD1No : ' +
          _0x5ba412++ +
          '\n*\uD83D\uDCDAtitle :* ' +
          _0x12e05b.title +
          '\n*\uD83D\uDCC5 Date:* ' +
          _0x12e05b.date +
          '\n*\uD83D\uDCE1 Platform :* ' +
          _0x12e05b.platform +
          '\n*\uD83D\uDCAD Desc:* ' +
          _0x12e05b.shortdesc +
          '\n*\uD83D\uDD87️ url :* ' +
          _0x12e05b.url +
          '\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
      }
      _0x555dcb += '*QUEEN ALEXA WHATSAPP BOT*'
      const _0x41c10d = {
        url: 'https://telegra.ph/file/e848545de0e98c132a269.jpg',
      }
      const _0x49b333 = {
        image: _0x41c10d,
        caption: _0x555dcb,
      }
      const _0xfd84c0 = { quoted: _0x7b7c6c }
      _0x136aad.sendMessage(_0x4acbda, _0x49b333, _0xfd84c0)
    } catch (_0x352834) {
      console.log(_0x352834)
    }
  }
)
const _0x35f625 = {}
_0x35f625.pattern = 'nasa'
_0x35f625.react = '\u2728'
_0x35f625.desc = 'latest nasa news'
_0x35f625.category = 'search'
_0x35f625.use = '.nasa'
_0x35f625.filename = __filename
cmd(
  _0x35f625,
  async (
    _0x1d6e30,
    _0x42757,
    _0x48150b,
    {
      from: _0x4bb554,
      l: _0x52fa6b,
      quoted: _0x13f5ec,
      body: _0xa9f2c6,
      isCmd: _0x5138a2,
      command: _0x56e217,
      args: _0x79d264,
      q: _0x22b774,
      isGroup: _0x594509,
      sender: _0x2f5ad5,
      senderNumber: _0x203002,
      botNumber2: _0x4afb23,
      botNumber: _0x11918c,
      pushname: _0x2f5fa3,
      isMe: _0x2d2632,
      isOwner: _0x347a6f,
      groupMetadata: _0x169f38,
      groupName: _0x508c9d,
      participants: _0x44190b,
      groupAdmins: _0x343dce,
      isBotAdmins: _0x26740a,
      isAdmins: _0x165f24,
      reply: _0xa1b41,
    }
  ) => {
    try {
      const _0xfac830 = await fetchJson(
          'https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk'
        ),
        _0x442f93 = '' + _0xfac830.url,
        _0x58343a = '' + _0xfac830.title,
        _0x4b186a = '' + _0xfac830.date,
        _0x28ba64 = '' + _0xfac830.explanation,
        _0x26759e = { url: _0x442f93 }
      const _0x2828f4 = {
        image: _0x26759e,
        caption:
          '*ᴛɪᴛʟᴇ :* ' +
          _0x58343a +
          '\n\n*ᴅᴀᴛᴇ :* ' +
          _0x4b186a +
          '\n\n*ᴇxᴘʟᴀɴᴀᴛɪᴏɴ :* ' +
          _0x28ba64 +
          '\n\n*QUEEN ALEXA WHATSAPP BOT*',
      }
      const _0x315ba4 = { quoted: _0x42757 }
      await _0x1d6e30.sendMessage(_0x4bb554, _0x2828f4, _0x315ba4)
    } catch (_0x5b6dc9) {
      console.log(_0x5b6dc9)
    }
  }
)
const _0x5cd4fc = {}
_0x5cd4fc.pattern = 'hirunews'
_0x5cd4fc.react = '\uD83D\uDDDE️'
_0x5cd4fc.desc = 'hirutv news'
_0x5cd4fc.category = 'search'
_0x5cd4fc.use = '.hirunews'
_0x5cd4fc.filename = __filename
cmd(
  _0x5cd4fc,
  async (
    _0x53a129,
    _0x8515b,
    _0x24e324,
    {
      from: _0x422a80,
      l: _0x10ce5b,
      quoted: _0x536e4f,
      body: _0x1efb09,
      isCmd: _0xe58f67,
      command: _0xbd09e3,
      args: _0x2aef75,
      q: _0x42aee8,
      isGroup: _0x3e8afa,
      sender: _0x1385d1,
      senderNumber: _0xfe1dbd,
      botNumber2: _0x110610,
      botNumber: _0x5bca57,
      pushname: _0x5f01da,
      isMe: _0x1e2f69,
      isOwner: _0x49bbab,
      groupMetadata: _0xe84f39,
      groupName: _0x22a27b,
      participants: _0x32f275,
      groupAdmins: _0x4e6532,
      isBotAdmins: _0x29fe46,
      isAdmins: _0x54ea85,
      reply: _0x58acd8,
    }
  ) => {
    try {
      const _0x392812 = await hiru.latestHiru(),
        _0x48a2cc = { url: _0x392812.img }
      const _0x29a883 = {
        image: _0x48a2cc,
        caption:
          '*' +
          _0x392812.title +
          '*\n\n' +
          _0x392812.desc +
          '\n\n' +
          _0x392812.link +
          '\n\n*QUEEN ALEXA WHATSAPP BOT*',
      }
      const _0x46059a = { quoted: _0x8515b }
      await _0x53a129.sendMessage(_0x422a80, _0x29a883, _0x46059a)
    } catch (_0x526da2) {
      console.log(_0x526da2)
    }
  }
)
const _0x80f3d3 = {}
_0x80f3d3.pattern = 'derananews'
_0x80f3d3.react = '\uD83D\uDDDE️'
_0x80f3d3.desc = 'Ada derana News news'
_0x80f3d3.category = 'search'
_0x80f3d3.use = '.hirunews'
_0x80f3d3.filename = __filename
cmd(
  _0x80f3d3,
  async (
    _0x37450c,
    _0x3823c1,
    _0x9dbe33,
    {
      from: _0x4904d5,
      l: _0x51c276,
      quoted: _0x3b16a3,
      body: _0x2b1d1c,
      isCmd: _0x20a56a,
      command: _0x2a611d,
      args: _0x199b5d,
      q: _0x151c12,
      isGroup: _0x3badf8,
      sender: _0xda1328,
      senderNumber: _0x34f6cc,
      botNumber2: _0x5eddbf,
      botNumber: _0x6fcb17,
      pushname: _0x552825,
      isMe: _0x2a56c3,
      isOwner: _0x49d5f5,
      groupMetadata: _0x3067fe,
      groupName: _0x3f62c0,
      participants: _0x2349ae,
      groupAdmins: _0x17008a,
      isBotAdmins: _0x1d4098,
      isAdmins: _0x1140ca,
      reply: _0x138dfa,
    }
  ) => {
    try {
      const _0x5643e4 = await derana.latestDerana(),
        _0x1dde7e = { url: _0x5643e4.img }
      const _0x23eeaa = {
        image: _0x1dde7e,
        caption:
          '*' +
          _0x5643e4.title +
          '*\n\n' +
          latest_hiru_derana.desc +
          '\n\n' +
          latest_hiru_derana.link +
          '\n\n*QUEEN ALEXA WHATSAPP BOT*',
      }
      const _0x3c5b9e = { quoted: _0x3823c1 }
      await _0x37450c.sendMessage(_0x4904d5, _0x23eeaa, _0x3c5b9e)
    } catch (_0x1879e0) {
      console.log(_0x1879e0)
    }
  }
)
const _0x54776e = {}
_0x54776e.pattern = 'esana'
_0x54776e.react = '\uD83D\uDDDE️'
_0x54776e.desc = 'Helakuru  news'
_0x54776e.category = 'search'
_0x54776e.use = '.esana'
_0x54776e.filename = __filename
cmd(
  _0x54776e,
  async (
    _0x488f59,
    _0x4aa608,
    _0x536d68,
    {
      from: _0x3e0076,
      l: _0xbed85,
      quoted: _0x504e03,
      body: _0x2c6c5e,
      isCmd: _0x3b8619,
      command: _0x3a5df0,
      args: _0x304226,
      q: _0x47139d,
      isGroup: _0x4f792b,
      sender: _0x186332,
      senderNumber: _0x3b4ac2,
      botNumber2: _0x4dfedf,
      botNumber: _0x4ad6c9,
      pushname: _0x581cf7,
      isMe: _0x59e425,
      isOwner: _0x8fb9c5,
      groupMetadata: _0xb75db9,
      groupName: _0x3d1023,
      participants: _0x1e89c6,
      groupAdmins: _0x2f6876,
      isBotAdmins: _0x25edfc,
      isAdmins: _0x44f5f2,
      reply: _0x263c85,
    }
  ) => {
    try {
      var _0x572d5e = new Esana()
      const _0x2a8504 = await _0x572d5e.latest_id(),
        _0x547d10 = _0x2a8504.results.news_id,
        _0x2cae1f = await _0x572d5e.news(_0x547d10),
        _0x419827 = { url: _0x2cae1f.results.COVER }
      const _0x5a1a1d = {
        image: _0x419827,
        caption:
          '*' +
          _0x2cae1f.results.TITLE +
          '*\n\n' +
          _0x2cae1f.results.PUBLISHED +
          '\n\n' +
          _0x2cae1f.results.DESCRIPTION +
          '\n\n' +
          _0x2cae1f.results.URL +
          '\n\n*QUEEN ALEXA WHATSAPP BOT*',
      }
      const _0x22de60 = { quoted: _0x4aa608 }
      await _0x488f59.sendMessage(_0x3e0076, _0x5a1a1d, _0x22de60)
    } catch (_0x313202) {
      console.log(_0x313202)
    }
  }
)
function _0x461918(_0xbb4432) {
  function _0x4124f9(_0x242a26) {
    if (typeof _0x242a26 === 'string') {
      return function (_0x273b2b) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x242a26 / _0x242a26).length !== 1 || _0x242a26 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x4124f9(++_0x242a26)
  }
  try {
    if (_0xbb4432) {
      return _0x4124f9
    } else {
      _0x4124f9(0)
    }
  } catch (_0x11b965) {}
}





const _0x13e02a = (function () {
  let _0x186fc0 = true
  return function (_0x18e384, _0xb51fbd) {
    const _0x33037c = _0x186fc0
      ? function () {
          if (_0xb51fbd) {
            const _0x1e3beb = _0xb51fbd.apply(_0x18e384, arguments)
            return (_0xb51fbd = null), _0x1e3beb
          }
        }
      : function () {}
    return (_0x186fc0 = false), _0x33037c
  }
})()
const _0x1e8561 = _0x13e02a(this, function () {
  return _0x1e8561
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x1e8561)
    .search('(((.+)+)+)+$')
})
_0x1e8561()
const _0x1f5d2f = (function () {
  let _0x7bd5cf = true
  return function (_0xc178f8, _0x4e8abb) {
    const _0x47dc6f = _0x7bd5cf
      ? function () {
          if (_0x4e8abb) {
            const _0x4b24bf = _0x4e8abb.apply(_0xc178f8, arguments)
            return (_0x4e8abb = null), _0x4b24bf
          }
        }
      : function () {}
    return (_0x7bd5cf = false), _0x47dc6f
  }
})()
;(function () {
  _0x1f5d2f(this, function () {
    const _0x5bf554 = new RegExp('function *\\( *\\)'),
      _0x2dad39 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x58fe87 = _0x3d4578('init')
    if (
      !_0x5bf554.test(_0x58fe87 + 'chain') ||
      !_0x2dad39.test(_0x58fe87 + 'input')
    ) {
      _0x58fe87('0')
    } else {
      _0x3d4578()
    }
  })()
})()
const config = require('../config'),
  fg = require('api-dylux')
const { cmd, commands } = require('../lib/command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  apkdl = require('../lib/apkdl'),
  { mods } = require('fouadwa-scraper'),
  axios = require('axios'),
  cheerio = require('cheerio'),
  fetch = (..._0x290724) =>
    import('node-fetch').then(({ default: _0x1bbe24 }) =>
      _0x1bbe24(..._0x290724)
    ),
  { SinhalaSub } = require('@sl-code-lords/movie-dl')
var APKDL_DESC = ''
global.LANG === 'SI'
  ? (APKDL_DESC = 'Playstore එකෙන් APK එක download කරගන්න.')
  : (APKDL_DESC = 'Download APK from playstore.')
var N_FOUND = ''
global.LANG === 'SI'
  ? (N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*')
  : (N_FOUND = "*I couldn't find anything :(*")
var imgmsg = ''
global.LANG === 'SI'
  ? (imgmsg = '```කරුණාකර වචන කිහිපයක් ලියන්න!```')
  : (imgmsg = '```Please write a few words!```')
var pkg = require('../package.json')
;(pkg.author != 'Kalindu Gaweshana' || pkg.name != 'QUEEN-ALEXA-MD') &&
  console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
const _0x4f9239 = {}
_0x4f9239.pattern = 'apk'
_0x4f9239.react = '\uD83D\uDCDA'
_0x4f9239.desc = APKDL_DESC
_0x4f9239.category = 'download'
_0x4f9239.use = '.apk whatsapp'
_0x4f9239.filename = __filename
cmd(
  _0x4f9239,
  async (
    _0x440e35,
    _0x4a09da,
    _0x447de9,
    {
      from: _0x23b115,
      l: _0x18d38a,
      quoted: _0x508f7c,
      body: _0x1b59e5,
      isCmd: _0xcf8d38,
      command: _0x55cc85,
      args: _0x1c4696,
      q: _0x4b6f22,
      isGroup: _0x576d22,
      sender: _0x543e6d,
      senderNumber: _0x354958,
      botNumber2: _0x7d8830,
      botNumber: _0x9e000d,
      pushname: _0x17d28b,
      isMe: _0x13a246,
      isOwner: _0x10fa4f,
      groupMetadata: _0x5a46d8,
      groupName: _0x4264a2,
      participants: _0x139dc6,
      groupAdmins: _0x5b73dd,
      isBotAdmins: _0x4958c2,
      isAdmins: _0x2994f3,
      reply: _0x5b4817,
    }
  ) => {
    try {
      const _0x128c01 = { text: imgmsg }
      const _0x4cf3b1 = { quoted: _0x4a09da }
      if (!_0x4b6f22) {
        return await _0x440e35.sendMessage(_0x23b115, _0x128c01, _0x4cf3b1)
      }
      const _0x2d43fb = await apkdl.search(_0x4b6f22),
        _0x217c30 = _0x2d43fb,
        _0x2b06c0 = { text: N_FOUND }
      const _0x2c14f2 = { quoted: _0x4a09da }
      if (_0x217c30.length < 1) {
        return await _0x440e35.sendMessage(_0x23b115, _0x2b06c0, _0x2c14f2)
      }
      const _0x510a4b = await apkdl.download(_0x217c30[0].id)
      var _0xb5400f = []
      for (var _0x739639 = 0; _0x739639 < _0x217c30.length; _0x739639++) {
        _0xb5400f.push({
          title: _0x217c30[_0x739639].name + '\n',
          description: '',
          rowId: global.PREFIX + 'dapk ' + _0x217c30[_0x739639].id,
        })
      }
      const _0x166aaa = {
        title:
          '\uD835\uDDE5\uD835\uDDD8\uD835\uDDE6\uD835\uDDE8\uD835\uDDDF\uD835\uDDE7\uD835\uDDE6 \uD835\uDDD9\uD835\uDDE5\uD835\uDDE2\uD835\uDDE0 \uD835\uDDE3\uD835\uDDDF\uD835\uDDD4\uD835\uDDEC\uD835\uDDE6\uD835\uDDE7\uD835\uDDE2\uD835\uDDE5\uD835\uDDD8',
        rows: _0xb5400f,
      }
      const _0x263877 = _0x166aaa,
        _0x260b50 = [_0x263877],
        _0x3d4a11 = {
          text:
            '*\uD83D\uDDF3 QUEEN-ALEXA APK Downloader*\n\n*\uD83D\uDCDA Requested APP:* ' +
            _0x4b6f22,
          footer: 'QUEEN-ALEXA \u2022 MULTI DEVICE',
          title: 'Result from playstore.',
          buttonText: '\uD83D\uDD22 Reply below number',
          sections: _0x260b50,
        }
      return await _0x440e35.listMessage2(
        _0x23b115,
        _0x3d4a11,
        _0x4a09da,
        _0x4a09da
      )
    } catch (_0x8547fc) {
      _0x5b4817(N_FOUND), _0x18d38a(_0x8547fc)
    }
  }
)
const _0x1c651b = {}
_0x1c651b.pattern = 'dapk'
_0x1c651b.react = '\uD83D\uDCF1'
_0x1c651b.desc = APKDL_DESC
_0x1c651b.use = '.apk whatsapp'
_0x1c651b.filename = __filename
cmd(
  _0x1c651b,
  async (
    _0x377f6c,
    _0xf78592,
    _0x4a91fb,
    {
      from: _0x1ca0c4,
      l: _0x19b245,
      quoted: _0x1e1fe6,
      body: _0x1e43bf,
      isCmd: _0x20e164,
      command: _0x3a475f,
      args: _0xa1fe93,
      q: _0x50ae64,
      isGroup: _0x6843a9,
      sender: _0x554bc9,
      senderNumber: _0x3806da,
      botNumber2: _0x7f3755,
      botNumber: _0x2bd901,
      pushname: _0x193a3c,
      isMe: _0x32fab9,
      isOwner: _0x156f46,
      groupMetadata: _0x2413af,
      groupName: _0x1e35f9,
      participants: _0x563f90,
      groupAdmins: _0x3273b8,
      isBotAdmins: _0x3bdbb0,
      isAdmins: _0x30061b,
      reply: _0x76675a,
    }
  ) => {
    try {
      const _0x188156 = { text: '*Need app name !!*' }
      const _0x863740 = { quoted: _0xf78592 }
      if (!_0x50ae64) {
        return await _0x377f6c.sendMessage(_0x1ca0c4, _0x188156, _0x863740)
      }
      const _0x550f8f = await apkdl.search(_0x50ae64),
        _0x4f549d = _0x550f8f,
        _0x5577c7 = { quoted: _0xf78592 }
      if (_0x4f549d.length < 1) {
        return await _0x377f6c.sendMessage(
          _0x1ca0c4,
          { text: '*Not found !!*' },
          _0x5577c7
        )
      }
      const _0x30d01f = await apkdl.download(_0x4f549d[0].id)
      let _0x241e59 =
        '*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n*\uD83D\uDD0E QUEEN-ALEXA Search Engine*\n*\uD83D\uDEF0️ Engine : APK SAERCH* \n*\uD83D\uDCE1 Based site : Official Playstore*\n*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n\n*\uD83D\uDCDA Name :* ' +
        _0x30d01f.name +
        '\n\n*\uD83D\uDC68‍\uD83D\uDCBB Developer :* ' +
        _0x30d01f.package +
        '\n\n*\u2B06️ Last update :* ' +
        _0x30d01f.lastup +
        '\n\n*\uD83D\uDC89 Size :* ' +
        _0x30d01f.size +
        '\n\n QUEEN-ALEXA \u2022 MULTI DEVICE\n'
      const _0x5c07ab = { url: _0x30d01f.icon }
      const _0x1737f8 = {
        image: _0x5c07ab,
        caption: _0x241e59,
      }
      const _0x2e032a = { quoted: _0xf78592 }
      await _0x377f6c.sendMessage(_0x1ca0c4, _0x1737f8, _0x2e032a)
      const _0x5bbda1 = { text: '*This APK too big !!*' }
      const _0x303a1a = { quoted: _0xf78592 }
      if (_0x30d01f.size.includes('GB')) {
        return await _0x377f6c.sendMessage(_0x1ca0c4, _0x5bbda1, _0x303a1a)
      }
      const _0x334900 = { url: _0x30d01f.dllink }
      const _0x38b50f = { quoted: _0xf78592 }
      let _0x29c4ad = await _0x377f6c.sendMessage(
        _0x1ca0c4,
        {
          document: _0x334900,
          mimetype: 'application/vnd.android.package-archive',
          fileName: _0x30d01f.name + '.' + 'apk',
          caption: '',
        },
        _0x38b50f
      )
      const _0x50ef55 = {
        text: '\uD83D\uDCC1',
        key: _0x29c4ad.key,
      }
      const _0x4380c6 = { react: _0x50ef55 }
      await _0x377f6c.sendMessage(_0x1ca0c4, _0x4380c6)
    } catch (_0x37787e) {
      _0x76675a(N_FOUND), _0x19b245(_0x37787e)
    }
  }
)
function _0x3d4578(_0x2d07b5) {
  function _0x297dd9(_0x4809f6) {
    if (typeof _0x4809f6 === 'string') {
      return function (_0x1514a9) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x4809f6 / _0x4809f6).length !== 1 || _0x4809f6 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x297dd9(++_0x4809f6)
  }
  try {
    if (_0x2d07b5) {
      return _0x297dd9
    } else {
      _0x297dd9(0)
    }
  } catch (_0x28bd03) {}
}
;(function () {
  let _0x3b3e4d
  try {
    const _0x19b196 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x3b3e4d = _0x19b196()
  } catch (_0x3472af) {
    _0x3b3e4d = window
  }
  _0x3b3e4d.setInterval(_0x3d4578, 4000)
})()




const _0x309128 = (function () {
  let _0x20c10f = true
  return function (_0x1dc44e, _0x2cb4b5) {
    const _0x4e4efc = _0x20c10f
      ? function () {
          if (_0x2cb4b5) {
            const _0x1c025a = _0x2cb4b5.apply(_0x1dc44e, arguments)
            return (_0x2cb4b5 = null), _0x1c025a
          }
        }
      : function () {}
    return (_0x20c10f = false), _0x4e4efc
  }
})()
;(function () {
  _0x309128(this, function () {
    const _0xae241 = new RegExp('function *\\( *\\)')
    const _0x29e96b = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x4ffbc6 = _0x58d3b1('init')
    !_0xae241.test(_0x4ffbc6 + 'chain') || !_0x29e96b.test(_0x4ffbc6 + 'input')
      ? _0x4ffbc6('0')
      : _0x58d3b1()
  })()
})()
const config = require('../config'),
  { cmd, commands } = require('../lib/command'),
  {
    getBuffer,
    getGroupAdmins,
    ffmpeg,
    parseMention,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    downloadAndSaveMediaMessage,
  } = require('../lib/functions'),
  getRandom = (_0xb6d3a) => {
    return '' + Math.floor(Math.random() * 10000) + _0xb6d3a
  },
  fs = require('fs'),
  { translate } = require('@vitalets/google-translate-api'),
  { TelegraPh } = require('../lib/scraper'),
  { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter'),
  util = require('util'),
  { exec } = require('child_process')
var N_FOUND = ''
global.LANG === 'SI'
  ? (N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*')
  : (N_FOUND = "*I couldn't find anything :(*")
var t_desc = ''
global.LANG === 'SI'
  ? (t_desc = 'වචන වෙනත් භාෂාවන්ට පරිවර්තනය කිරිම.')
  : (t_desc = 'Translate words to another languages.')
var stickerDesc = ''
global.LANG === 'SI'
  ? (stickerDesc = 'රූපයෙන් හෝ වීඩියෝවෙන් ස්ටිකරයක් සාදන්න.')
  : (stickerDesc = 'Make sticker from image or video.')
var errStic = ''
global.LANG === 'SI'
  ? (errStic = '*කරුණාකර මට පින්තූරයක් හෝ වීඩියෝවක් හෝ වෙනත් ස්ටිකරයක් දෙන්න!*')
  : (errStic = '*Please give me picture or video or another sticker!*')
var takesdec = ''
global.LANG === 'SI'
  ? (takesdec = 'ස්ටිකරය ලබාගෙන ස්ටිකරයේ නම වෙනස් කරන්න')
  : (takesdec = 'Get Sticker And Change sticker name')
var urldec = ''
global.LANG === 'SI'
  ? (urldec = 'පින්තුරයක් direct ලින්ක් එකක් කිරිම.')
  : (urldec = 'Convert image into url.')
var nonAnim = ''
global.LANG === 'SI'
  ? (nonAnim = 'ඔබට animated ස්ටිකර් රූපයට පරිවර්තනය කළ නොහැක!')
  : (nonAnim = "You can't convert animated stickers to image!")
var to4to = ''
global.LANG === 'SI'
  ? (to4to = 'ස්ටිකරය රූපයට පරිවර්තනය කරන්න.')
  : (to4to = 'Convert sticker to image.')
var pkg = require('../package.json')
;(pkg.author != 'Kalindu Gaweshana' || pkg.name != 'QUEEN-ALEXA-MD') &&
  console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
const _0x4917b7 = {}
_0x4917b7.pattern = 'tr'
_0x4917b7.react = '\uD83D\uDC78'
_0x4917b7.alias = ['translate']
_0x4917b7.desc = t_desc
_0x4917b7.category = 'convert'
_0x4917b7.use = '.tr en'
_0x4917b7.filename = __filename
cmd(
  _0x4917b7,
  async (
    _0x57528a,
    _0x228171,
    _0x37d26d,
    {
      from: _0x21d5f4,
      l: _0xbd3140,
      quoted: _0x2c00b0,
      body: _0x5fc683,
      isCmd: _0xde860c,
      command: _0xef071,
      args: _0x424fd1,
      q: _0x448fbc,
      isGroup: _0x4ac881,
      sender: _0x491065,
      senderNumber: _0x2c292b,
      botNumber2: _0x1cdc53,
      botNumber: _0x3ab04e,
      pushname: _0x27d784,
      isMe: _0x342803,
      isOwner: _0x11eecd,
      groupMetadata: _0x1cd657,
      groupName: _0x5092af,
      participants: _0x12eca1,
      groupAdmins: _0x1300f2,
      isBotAdmins: _0x1f6c63,
      isAdmins: _0x47a816,
      reply: _0xb54c2b,
    }
  ) => {
    try {
      if (!_0x448fbc && !_0x228171.quoted) {
        return await _0x228171.reply(
          '*Please Give Me Text. Example: _.trt en Who are you_*'
        )
      }
      const _0x5187b6 = require('translatte')
      let _0x5ea453 = _0x448fbc ? _0x448fbc.split(' ')[0].toLowerCase() : 'en'
      !_0x228171.quoted
        ? (_0x448fbc = _0x448fbc.replace(_0x5ea453, ''))
        : (text = _0x228171.quoted.q)
      const _0x1d5bad = {
        from: 'auto',
        to: _0x5ea453,
      }
      var _0x23096d = await _0x5187b6(_0x448fbc, _0x1d5bad)
      if ('text' in _0x23096d) {
        return await _0x228171.reply('*Translated text:*\n' + _0x23096d.text)
      }
    } catch (_0x341e52) {
      _0xb54c2b(N_FOUND)
      _0xbd3140(_0x341e52)
    }
  }
)
const _0x53c88b = {}
_0x53c88b.pattern = 'sticker'
_0x53c88b.alias = ['s']
_0x53c88b.react = '\uD83E\uDD39‍\u2642️'
_0x53c88b.desc = stickerDesc
_0x53c88b.category = 'convert'
_0x53c88b.use = '.sticker <reply to any image/video.>'
_0x53c88b.filename = __filename
cmd(
  _0x53c88b,
  async (
    _0x228676,
    _0x5c05a7,
    _0x2f56de,
    {
      from: _0x4f9d69,
      l: _0x2f9596,
      quoted: _0x184e5b,
      body: _0x912e9a,
      isCmd: _0x275610,
      command: _0x43fe4e,
      args: _0x30fbd2,
      q: _0x516938,
      isGroup: _0x5dfddf,
      sender: _0x286092,
      senderNumber: _0x9113bd,
      botNumber2: _0x45ed2a,
      botNumber: _0x13c963,
      pushname: _0x58a266,
      isMe: _0x503118,
      isOwner: _0x461ee9,
      groupMetadata: _0x4eda08,
      groupName: _0x5ea555,
      participants: _0x101ac3,
      groupAdmins: _0x579e2b,
      isBotAdmins: _0x50e2ea,
      isAdmins: _0x2094af,
      reply: _0x3d494e,
    }
  ) => {
    if (!_0x5c05a7.quoted) {
      return _0x5c05a7.reply('*Mention any Image or video.*')
    }
    let _0x3b09d8 = _0x5c05a7.quoted.type
    pack =
      '\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84 \uD83D\uDC78\u2665️\n\nᵛ2 |  KALINDU_ˣ \uD83D\uDCAD'
    author = global.STICKER_NAME
    if (_0x5c05a7.quoted) {
      let _0x50ceb6 = await _0x5c05a7.quoted.download(),
        _0x17b9de = new Sticker(_0x50ceb6, {
          pack: pack,
          author: author,
          type: _0x516938.includes('--crop' || '-c')
            ? StickerTypes.CROPPED
            : StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 75,
          background: 'transparent',
        })
      const _0x30a159 = await _0x17b9de.toBuffer(),
        _0x41344c = {}
      return (
        (_0x41344c.sticker = _0x30a159),
        _0x228676.sendMessage(_0x5c05a7.chat, _0x41344c, { quoted: _0x5c05a7 })
      )
    } else {
      if (/video/.test(_0x3b09d8)) {
        if ((_0x184e5b.msg || _0x5c05a7.quoted).seconds > 20) {
          return _0x5c05a7.reply('Cannot fetch videos longer than *20 Seconds*')
        }
        let _0x15bc1e = await _0x184e5b.download()
        const _0x4656bc = {
          pack: pack,
          author: author,
          type: StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 70,
          background: 'transparent',
        }
        let _0x52ca1b = new Sticker(_0x15bc1e, _0x4656bc)
        const _0x49a4e8 = await _0x52ca1b.toBuffer(),
          _0x27289a = {}
        return (
          (_0x27289a.sticker = _0x49a4e8),
          _0x228676.sendMessage(_0x5c05a7.chat, _0x27289a, {
            quoted: _0x5c05a7,
          })
        )
      } else {
        _0x5c05a7.reply(errStic)
      }
    }
  }
)
const _0x24805c = {}
_0x24805c.pattern = 'take'
_0x24805c.alias = ['steal']
_0x24805c.react = '\uD83E\uDD39‍\u2642️'
_0x24805c.desc = takesdec
_0x24805c.category = 'convert'
_0x24805c.use = '.take <reply to any image/video.>'
_0x24805c.filename = __filename
cmd(
  _0x24805c,
  async (
    _0x58b40a,
    _0x489be2,
    _0x5dcdd6,
    {
      from: _0x362f79,
      text: _0x37be48,
      l: _0x2979dd,
      quoted: _0x83b41e,
      body: _0x367d6a,
      isCmd: _0x4e0453,
      command: _0x34c1df,
      args: _0x129de0,
      q: _0x2302da,
      isGroup: _0x1cccc8,
      sender: _0xc7fffd,
      senderNumber: _0x30ca24,
      botNumber2: _0x183d33,
      botNumber: _0x25f3cd,
      pushname: _0xabcc64,
      isMe: _0xddfbab,
      isOwner: _0x28b809,
      groupMetadata: _0x3b5765,
      groupName: _0x59b23d,
      participants: _0x73bcf7,
      groupAdmins: _0x2b5e3b,
      isBotAdmins: _0x4eb72e,
      isAdmins: _0x360522,
      reply: _0xf4871f,
    }
  ) => {
    if (!_0x489be2.quoted) {
      return _0x489be2.reply('*Mention any Image or video Sir.*')
    }
    let _0x4bf152 = _0x489be2.quoted.type
    var _0xf5d58b, _0x559171
    _0x2302da
      ? ((anu = _0x2302da.split('|')),
        (_0xf5d58b =
          anu[0] !== ''
            ? anu[0]
            : _0x489be2.pushName +
              '\u2665️\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84 \uD83D\uDC78\u2665️\nᵛ2 |  KALIDU_ˣ \uD83D\uDCAD'),
        (_0x559171 = anu[1] !== '' ? anu[1] : 'KALINDU_x'))
      : ((_0xf5d58b = _0x489be2.pushName), (_0x559171 = '\u2665️'))
    let _0x3e3703 = await _0x489be2.quoted.download(),
      _0x566451 = new Sticker(_0x3e3703, {
        pack: _0xf5d58b,
        author: _0x559171,
        type: _0x2302da.includes('--crop' || '-c')
          ? StickerTypes.CROPPED
          : StickerTypes.FULL,
        categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
        id: '12345',
        quality: 75,
        background: 'transparent',
      })
    const _0x5212c5 = await _0x566451.toBuffer(),
      _0x1d485e = {}
    return (
      (_0x1d485e.sticker = _0x5212c5),
      _0x58b40a.sendMessage(_0x489be2.chat, _0x1d485e, { quoted: _0x489be2 })
    )
  }
)
const _0x5ce5e5 = {}
_0x5ce5e5.pattern = 'attp'
_0x5ce5e5.react = '\uD83C\uDF41'
_0x5ce5e5.desc = 'Attp Sticker.'
_0x5ce5e5.category = 'convert'
_0x5ce5e5.use = '.attp Hi'
_0x5ce5e5.filename = __filename
cmd(
  _0x5ce5e5,
  async (
    _0x1cb17c,
    _0x3bdeb7,
    _0x34d1e2,
    {
      from: _0x8c82aa,
      l: _0x39e914,
      quoted: _0x5aeaff,
      body: _0x17f928,
      isCmd: _0x196cb4,
      command: _0x4a6d0b,
      args: _0x4294a7,
      q: _0x1764bb,
      isGroup: _0x3e3c3e,
      sender: _0x4e8009,
      senderNumber: _0x3f1319,
      botNumber2: _0x343337,
      botNumber: _0x59695d,
      pushname: _0x43dec4,
      isMe: _0x2cba4,
      isOwner: _0x5da3af,
      groupMetadata: _0xf20299,
      groupName: _0x365de8,
      participants: _0x323137,
      groupAdmins: _0x357ded,
      isBotAdmins: _0x45ca95,
      isAdmins: _0x2c3a7c,
      reply: _0xf09cb0,
    }
  ) => {
    if (!_0x1764bb) {
      return _0x3bdeb7.reply('*Give Me A Text*')
    }
    pack = 'QUEEN-ALEXA \u2714️'
    author = 'Kalindu\nMADE BY QUEEN-ALEXA \uD83C\uDF8A'
    let _0x3f4eaa =
        'https://legend-army-api-54a6b8bcefe4.herokuapp.com/api/maker/attp?text=' +
        _0x1764bb +
        '&apikey=8dfg24th',
      _0x385cc6 = new Sticker(_0x3f4eaa, {
        pack: pack,
        author: author,
        type: _0x1764bb.includes('--crop' || '-c')
          ? StickerTypes.CROPPED
          : StickerTypes.FULL,
        categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
        id: '12345',
        quality: 75,
        background: 'transparent',
      })
    const _0x30da74 = await _0x385cc6.toBuffer(),
      _0x48c8fe = { sticker: _0x30da74 }
    const _0x2feca1 = { quoted: _0x3bdeb7 }
    return _0x1cb17c.sendMessage(_0x8c82aa, _0x48c8fe, _0x2feca1)
  }
)
const _0x20dec9 = {}
_0x20dec9.pattern = 'url'
_0x20dec9.react = '\uD83D\uDD87️'
_0x20dec9.desc = urldec
_0x20dec9.use = '.url <Reply to Image>'
_0x20dec9.category = 'convert'
_0x20dec9.filename = __filename
cmd(
  _0x20dec9,
  async (
    _0xc83483,
    _0x29eb1a,
    _0x859919,
    {
      from: _0xb069f0,
      l: _0x14d44f,
      quoted: _0x4aa08e,
      body: _0x56c1fa,
      isCmd: _0x4daf68,
      command: _0x1522e8,
      args: _0x1742b2,
      q: _0x2e8198,
      isGroup: _0x36ab0c,
      sender: _0xdf4294,
      senderNumber: _0x296121,
      botNumber2: _0x403c4e,
      botNumber: _0x571b64,
      pushname: _0x544e13,
      isMe: _0x3ab0ba,
      isOwner: _0x3e9154,
      groupMetadata: _0x17c93a,
      groupName: _0x35b7c6,
      participants: _0x58b352,
      groupAdmins: _0x5cdf06,
      isBotAdmins: _0x271d71,
      isAdmins: _0x10ef5f,
      reply: _0x4181e7,
    }
  ) => {
    try {
      if (!_0x29eb1a.quoted) {
        return await _0x29eb1a.reply('*Reply To Any Image/Video To Get Url*')
      }
      let _0x191cd0 = _0x29eb1a.quoted.type
      if (_0x191cd0 != 'videoMessage' && _0x191cd0 != 'imageMessage') {
        return await _0x29eb1a.reply('Uhh Please, Reply To An Image/Video')
      }
      let _0x2d540a = await _0xc83483.downloadAndSaveMediaMessage(
          _0x29eb1a.quoted
        ),
        _0x265619 = await TelegraPh(_0x2d540a)
      return (
        await _0xc83483.sendMessage(_0xb069f0, {
          text:
            '*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n*QUEEN-ALEXA UPLOADING SYSTEM*\n*\uD83D\uDCE1 ᴇɴɢɪɴᴇ : ᴛᴇʟᴇɢʀᴀᴘʜ*\n*\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC*\n*Here is URL of your media.*\n\n' +
            util.format(_0x265619),
        }),
        await fs.unlinkSync(_0x2d540a)
      )
    } catch (_0x516928) {
      console.log(_0x516928)
    }
  }
)
const _0x3ecf8b = {}
_0x3ecf8b.pattern = 'photo'
_0x3ecf8b.react = '\u267B️'
_0x3ecf8b.desc = to4to
_0x3ecf8b.category = 'convert'
_0x3ecf8b.use = '<reply to any gif>'
_0x3ecf8b.filename = __filename
cmd(
  _0x3ecf8b,
  async (
    _0x2986df,
    _0x2a6b2c,
    _0x21354d,
    {
      from: _0x6f4d0c,
      l: _0xcee22,
      quoted: _0x40c5f7,
      body: _0x3bb652,
      isCmd: _0x473a4c,
      command: _0x23a0d3,
      args: _0x32dac7,
      q: _0xadf36b,
      isGroup: _0x4ab5d6,
      sender: _0x4264f0,
      senderNumber: _0x263ee0,
      botNumber2: _0x3ee24c,
      botNumber: _0x30dbb9,
      pushname: _0x4344f2,
      isMe: _0x573269,
      isOwner: _0x1990f2,
      groupMetadata: _0x1c038e,
      groupName: _0x5e5cb1,
      participants: _0x200b30,
      groupAdmins: _0x2f3722,
      isBotAdmins: _0xbb9a43,
      isAdmins: _0x1fc9cb,
      reply: _0x4a9762,
    }
  ) => {
    const _0x5e22c2 = (_0x90c066) => {
      return '' + Math.floor(Math.random() * 10000) + _0x90c066
    }
    if (!_0x2a6b2c.quoted) {
      return _0x2a6b2c.reply('_Reply to Any Sticker._')
    }
    let _0x2f105c = _0x2a6b2c.quoted.type
    if (_0x2f105c == 'imageMessage' || _0x2f105c == 'stickerMessage') {
      let _0x27d463 = await _0x2986df.downloadAndSaveMediaMessage(
          _0x2a6b2c.quoted
        ),
        _0x4ab214 = await _0x5e22c2('.png')
      exec('ffmpeg -i ' + _0x27d463 + ' ' + _0x4ab214, (_0xbed6c) => {
        let _0x107f94 = fs.readFileSync(_0x27d463)
        const _0x408e5e = { image: _0x107f94 }
        _0x2986df.sendMessage(_0x2a6b2c.chat, _0x408e5e, { quoted: _0x2a6b2c })
        fs.unlink(_0x27d463, (_0x1db358) => {
          if (_0x1db358) {
            return console.error(
              'File Not Deleted from From TOPHOTO AT : ',
              _0x27d463,
              '\n while Error : ',
              _0x1db358
            )
          } else {
            return console.log(
              'File deleted successfully in TOPHOTO  at : ',
              _0x27d463
            )
          }
        })
      })
    } else {
      return _0x2a6b2c.reply(nonAnim)
    }
  }
)
function _0x58d3b1(_0x14f657) {
  function _0x10e7af(_0x53763e) {
    if (typeof _0x53763e === 'string') {
      return function (_0x54dba6) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x53763e / _0x53763e).length !== 1 || _0x53763e % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x10e7af(++_0x53763e)
  }
  try {
    if (_0x14f657) {
      return _0x10e7af
    } else {
      _0x10e7af(0)
    }
  } catch (_0x276d88) {}
}


      




       const _0x5e0b62 = (function () {
    let _0x382a8b = true
    return function (_0x197a23, _0x36e742) {
      const _0x908e0a = _0x382a8b
        ? function () {
            if (_0x36e742) {
              const _0x575fae = _0x36e742.apply(_0x197a23, arguments)
              return (_0x36e742 = null), _0x575fae
            }
          }
        : function () {}
      return (_0x382a8b = false), _0x908e0a
    }
  })(),
  _0x1e86b4 = _0x5e0b62(this, function () {
    return _0x1e86b4
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1e86b4)
      .search('(((.+)+)+)+$')
  })
_0x1e86b4()
const _0xd8888e = (function () {
  let _0x5e77c1 = true
  return function (_0x3eaa76, _0x58a62e) {
    const _0x47fe3a = _0x5e77c1
      ? function () {
          if (_0x58a62e) {
            const _0x334058 = _0x58a62e.apply(_0x3eaa76, arguments)
            return (_0x58a62e = null), _0x334058
          }
        }
      : function () {}
    return (_0x5e77c1 = false), _0x47fe3a
  }
})()
;(function () {
  _0xd8888e(this, function () {
    const _0x259dd4 = new RegExp('function *\\( *\\)'),
      _0x165d53 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x4ed75f = _0x4d13ce('init')
    if (
      !_0x259dd4.test(_0x4ed75f + 'chain') ||
      !_0x165d53.test(_0x4ed75f + 'input')
    ) {
      _0x4ed75f('0')
    } else {
      _0x4d13ce()
    }
  })()
})()
const config = require('../config'),
  { DBM } = require('postgres_dbm'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  { cmd, commands } = require('../lib/command')
var OWNEONLY = ''
;(function () {
  let _0x1c8007
  try {
    const _0xd4ba9d = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x1c8007 = _0xd4ba9d()
  } catch (_0x3ad98a) {
    _0x1c8007 = window
  }
  _0x1c8007.setInterval(_0x4d13ce, 4000)
})()
global.LANG === 'SI'
  ? (OWNEONLY = '*මෙය owner command එකකි !!*')
  : (OWNEONLY = '*This Command Only For Bot Owner !!!*')
var N_FOUND = ''
global.LANG === 'SI'
  ? (N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*')
  : (N_FOUND = "*I couldn't find anything :(*")
const _0x2da69a = {}
_0x2da69a.pattern = 'get'
_0x2da69a.react = '\u2699️'
_0x2da69a.alias = ['check']
_0x2da69a.desc = 'Get Bot Settings'
_0x2da69a.category = 'owner'
_0x2da69a.use = '.get ALIVE_MESSAGE'
_0x2da69a.filename = __filename
cmd(
  _0x2da69a,
  async (
    _0x505c75,
    _0x4431cc,
    _0x307002,
    {
      from: _0x4e12b0,
      l: _0xabda2,
      quoted: _0x3567e9,
      body: _0xd1541,
      isCmd: _0x2fa401,
      command: _0x3d5a4c,
      args: _0x138d73,
      q: _0xf6cb80,
      isGroup: _0x473072,
      sender: _0x294437,
      senderNumber: _0x583058,
      botNumber2: _0x5dd9a1,
      botNumber: _0x365973,
      pushname: _0x58f551,
      isMe: _0x52f5dc,
      isOwner: _0x3bceb7,
      groupMetadata: _0x1ea6d6,
      groupName: _0x5832d7,
      participants: _0x3dec21,
      groupAdmins: _0x187b81,
      isBotAdmins: _0x3f3dfa,
      isAdmins: _0x2e6ee4,
      reply: _0x5303b6,
    }
  ) => {
    try {
      if (!_0x3bceb7) {
        return _0x4431cc.reply('' + OWNEONLY)
      }
      try {
        const _0x4c5128 = { db: global.POSTGRESQL_URL }
        const _0x35e44e = _0x4c5128,
          _0x1d0019 = new DBM(_0x35e44e),
          _0x234645 = await _0x1d0019.get(_0xf6cb80),
          _0x4ce3b3 = { text: _0x234645 },
          _0x2ad949 = { quoted: _0x4431cc }
        const _0x2dd666 = _0x2ad949
        await _0x505c75.sendMessage(_0x4e12b0, _0x4ce3b3, _0x2dd666)
      } catch (_0x33653f) {
        _0x5303b6('*No added Data in Database*'), _0xabda2(_0x33653f)
      }
    } catch (_0x165431) {
      _0x5303b6(N_FOUND), _0xabda2(_0x165431)
    }
  }
)
const _0x3c6104 = {}
_0x3c6104.pattern = 'set'
_0x3c6104.react = '\u2699️'
_0x3c6104.desc = 'Set Dtabse'
_0x3c6104.category = 'owner'
_0x3c6104.use = '.set ALIVE_MESSAGE=HI'
_0x3c6104.filename = __filename
cmd(
  _0x3c6104,
  async (
    _0x1dfcda,
    _0xdfb8d5,
    _0x2f3903,
    {
      from: _0x50cfe4,
      l: _0x45a73b,
      quoted: _0x7190ea,
      body: _0x6c78ef,
      isCmd: _0x2b848b,
      command: _0x49b9fe,
      args: _0x20ca4f,
      q: _0x5e9a12,
      isGroup: _0x4ce0a9,
      sender: _0x2290de,
      senderNumber: _0x3448e5,
      botNumber2: _0x47a0da,
      botNumber: _0xc6fac9,
      pushname: _0xfe44e7,
      isMe: _0x4d700f,
      isOwner: _0x5dd5af,
      groupMetadata: _0x10b8c1,
      groupName: _0x6c3722,
      participants: _0x54a7ca,
      groupAdmins: _0x5f4c96,
      isBotAdmins: _0x41e6cd,
      isAdmins: _0x5710bd,
      reply: _0x150003,
    }
  ) => {
    try {
      if (!_0x5dd5af) {
        return _0xdfb8d5.reply('' + OWNEONLY)
      }
      try {
        if (!_0x5e9a12) {
          return _0xdfb8d5.reply(
            '*Please add Valid Database Var with Text*  Ex -: ```.setup ALIVE_MESSAGE=Hii QUEEN-ALEXA User How Are you Im Alive```\n\n️ *Dont add space befor and after the "=" Symbol*'
          )
        }
        if (_0x5e9a12.split('=')[0].endsWith(' ')) {
          return _0xdfb8d5.reply(' *Dont Add space After the "=" Symbol*')
        }
        if (_0x5e9a12.split('=')[1].startsWith(' ')) {
          return _0xdfb8d5.reply('*Dont add Space before the "=" Symbol*')
        }
        const _0x41cd41 = _0x5e9a12.split('=')[0],
          _0x38aa0a = _0x5e9a12.split('=')[1]
        if (!_0x41cd41 && !_0x38aa0a) {
          _0xdfb8d5.reply(
            ' *Sorry ... Text in Error ! Please Add Valid Database Updating Message*'
          )
        }
        const _0x1292e6 = { db: global.POSTGRESQL_URL }
        const _0x1a5bf1 = _0x1292e6,
          _0x3ebb7e = new DBM(_0x1a5bf1)
        await _0x3ebb7e.insert(_0x41cd41, _0x38aa0a)
        const _0x4d08c2 = { quoted: _0xdfb8d5 }
        const _0x2b56ab = _0x4d08c2
        await _0x1dfcda.sendMessage(
          _0xdfb8d5.chat,
          { text: '*Database*  ```' + _0x41cd41 + '```  *Updated*' },
          _0x2b56ab
        )
      } catch (_0x8efcc7) {
        _0xdfb8d5.reply('*Error Accurated !!*\n\n' + _0x8efcc7)
        _0x45a73b(_0x8efcc7)
      }
    } catch (_0x423683) {
      _0x150003(N_FOUND)
      _0x45a73b(_0x423683)
    }
  }
)
const _0x100eb0 = {}
_0x100eb0.pattern = 'setuplist'
_0x100eb0.react = '\u2699️'
_0x100eb0.alias = ['listsetup']
_0x100eb0.desc = 'Database Tools List'
_0x100eb0.category = 'owner'
_0x100eb0.use = '.setuplist'
_0x100eb0.filename = __filename
cmd(
  _0x100eb0,
  async (
    _0x4de8e0,
    _0x37fc5a,
    _0x316410,
    {
      from: _0x119b17,
      l: _0x2413b7,
      quoted: _0x209f77,
      body: _0x953015,
      isCmd: _0x1667d6,
      command: _0x140c9f,
      args: _0x5d09f4,
      q: _0x19c810,
      isGroup: _0x40baf5,
      sender: _0x554d3f,
      senderNumber: _0x427e70,
      botNumber2: _0x44780f,
      botNumber: _0x3b98c8,
      pushname: _0x392563,
      isMe: _0x3905b4,
      isOwner: _0x33fa8d,
      groupMetadata: _0x37bfe3,
      groupName: _0x58d663,
      participants: _0x342476,
      groupAdmins: _0x20a3e4,
      isBotAdmins: _0x44e340,
      isAdmins: _0x4e755f,
      reply: _0x3e0274,
    }
  ) => {
    try {
      if (!_0x33fa8d) {
        return _0x37fc5a.reply('' + OWNEONLY)
      }
      let _0x31a923 =
        "QUEEN ALEXA 2.0 DATABASE SET UP LIST \uD83E\uDDD1‍\uD83D\uDCBB\n\n 1.```ALIVE_IMAGE``` - Add direct link of Image \n\n 2. ```ALIVE_MESSAGE``` - Add your Alive message \n\n 3.```OWNER_NUMBER``` - Add your Mobile Number \n\n 4.```OWNER_NAME``` - Add your Name ( Bot Owner )\n\n 5.```S_PACK_NAME``` - Add a pack name for Bot made Stickers\n\n 6.```S_OWNER_NAME``` - Add a owner name for Bot made Stickers\n\n 7.```OPENAI_KEY``` - Add Your OpenAI Key\n\n  *Instructions for Using Database Commands \u2757*\n\nEx -: ```.setup ALIVE_MESSAGE=Hii How Are you Im Alive```\n\n *\uD83D\uDEAB Dont Add space After the '=' Symbol*\n️ *\uD83D\uDEAB Dont Add space before the '=' Symbol*\n\n*QUEEN-ALEX \u2022 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*"
      await _0x4de8e0.sendMessage(_0x37fc5a.chat, {
        text: _0x31a923,
        quoted: _0x37fc5a,
      })
    } catch (_0x321b73) {
      _0x3e0274(N_FOUND), _0x2413b7(_0x321b73)
    }
  }
)
const _0x195123 = {}
_0x195123.pattern = 'apply'
_0x195123.react = ''
_0x195123.alias = ['appl']
_0x195123.desc = 'Databse'
_0x195123.category = 'owner'
_0x195123.use = '.apply <mesntion text>'
_0x195123.filename = __filename
cmd(
  _0x195123,
  async (
    _0x4aff49,
    _0x31c326,
    _0x419e4a,
    {
      from: _0x427142,
      l: _0x3c2643,
      quoted: _0x36d048,
      body: _0x5a8836,
      isCmd: _0x415ef7,
      command: _0x2443b0,
      args: _0xcc9ed9,
      q: _0x13d73c,
      isGroup: _0x394d84,
      sender: _0x39954f,
      senderNumber: _0x3b22ce,
      botNumber2: _0xd0e47f,
      botNumber: _0x4bdb79,
      pushname: _0x4c00e9,
      isMe: _0x440cc2,
      isOwner: _0x14c0fd,
      groupMetadata: _0x123c4b,
      groupName: _0x3665e4,
      participants: _0x55bb29,
      groupAdmins: _0x22a94f,
      isBotAdmins: _0x31321e,
      isAdmins: _0x3a4bdc,
      reply: _0x483678,
    }
  ) => {
    try {
      if (!_0x31c326.quoted) {
        return _0x31c326.reply('*Mention any *')
      }
      const _0x485510 = [
          {
            title: 'Owner settings',
            rows: [
              {
                title: 'OWNER NUMBER',
                description: '',
                rowId: global.PREFIX + 'ownnum ' + _0x31c326.quoted.msg,
              },
              {
                title: 'OWNER NAME',
                description: '',
                rowId: global.PREFIX + 'ownname ' + _0x31c326.quoted.msg,
              },
              {
                title: 'STICKER_NAME',
                description: '',
                rowId: global.PREFIX + 'STICKER_NAME ' + _0x31c326.quoted.msg,
              }, 
            ],
          },
        ],
        _0x3b1f2d = {}
      return (
        (_0x3b1f2d.text =
          '*\u2699️ QUEEN-ALEXAU BOT SETTINGS \u2699️* \n\n _change Settings what you want ..._ '),
        (_0x3b1f2d.footer = 'QUEEN-ALEXA \u2022 MULTI DEVICE'),
        (_0x3b1f2d.title = 'Result from playstore.'),
        (_0x3b1f2d.buttonText = '\uD83D\uDD22 Reply below number'),
        (_0x3b1f2d.sections = _0x485510),
        (butmsg = _0x3b1f2d),
        await _0x4aff49.listMessage(_0x427142, butmsg, _0x31c326, _0x31c326)
      )
    } catch (_0x28a9bf) {
      _0x483678(N_FOUND)
      _0x3c2643(_0x28a9bf)
    }
  }
)
const _0x321d45 = {}
_0x321d45.pattern = 'ownnum'
_0x321d45.react = ''
_0x321d45.desc = ''
_0x321d45.category = 'owner'
_0x321d45.use = '.'
_0x321d45.dontAddCommandList = true
_0x321d45.filename = __filename
cmd(
  _0x321d45,
  async (
    _0x1766f7,
    _0x1611fe,
    _0x3238ec,
    {
      from: _0x14a2a4,
      l: _0x5b8cfb,
      quoted: _0x26aa2f,
      body: _0x28514a,
      isCmd: _0x49b45b,
      command: _0x13970c,
      args: _0x270c21,
      q: _0x52b97c,
      isGroup: _0x462f5e,
      sender: _0x3b4b07,
      senderNumber: _0x202bcb,
      botNumber2: _0x2d3a96,
      botNumber: _0x1ef562,
      pushname: _0x2aa8d2,
      isMe: _0x32fc86,
      isOwner: _0x4b1476,
      groupMetadata: _0x4df067,
      groupName: _0x3c59d2,
      participants: _0x1d66c1,
      groupAdmins: _0x5db8fd,
      isBotAdmins: _0x2dd229,
      isAdmins: _0x3db176,
      reply: _0x32a38e,
    }
  ) => {
    try {
      try {
        const _0x245df4 = 'OWNER_NUMBER',
          _0x2a6837 = { db: global.POSTGRESQL_URL }
        const _0x40504f = _0x2a6837,
          _0x1b6be2 = new DBM(_0x40504f)
        await _0x1b6be2.insert(_0x245df4, _0x52b97c)
        const _0x2d4754 = { quoted: _0x1611fe }
        const _0x457a50 = _0x2d4754
        await _0x1766f7.sendMessage(
          _0x1611fe.chat,
          { text: '*Database*  ```' + _0x245df4 + '```  *Updated*' },
          _0x457a50
        )
      } catch (_0x6e8521) {
        _0x1611fe.reply('*Error Accurated !!*\n\n' + _0x6e8521),
          _0x5b8cfb(_0x6e8521)
      }
    } catch (_0x30e70b) {
      _0x32a38e(N_FOUND), _0x5b8cfb(_0x30e70b)
    }
  }
)
const _0x432b91 = {}
_0x432b91.pattern = 'STICKER_NAME'
_0x432b91.react = ''
_0x432b91.desc = ''
_0x432b91.category = 'owner'
_0x432b91.use = '.'
_0x432b91.dontAddCommandList = true
_0x432b91.filename = __filename
cmd(
  _0x432b91,
  async (
    _0x30b413,
    _0x14346f,
    _0x23352b,
    {
      from: _0x5bb867,
      l: _0x136de9,
      quoted: _0x47ff49,
      body: _0x4171c6,
      isCmd: _0x41a41a,
      command: _0x3f101c,
      args: _0x4cf671,
      q: _0x197eed,
      isGroup: _0x138aa8,
      sender: _0x5b2e65,
      senderNumber: _0x45fcc3,
      botNumber2: _0x5f32a6,
      botNumber: _0x5c87f4,
      pushname: _0x47c863,
      isMe: _0xc48714,
      isOwner: _0x49c7ad,
      groupMetadata: _0x4c1955,
      groupName: _0x56f174,
      participants: _0x6f0c40,
      groupAdmins: _0x48e8dc,
      isBotAdmins: _0x1c25dd,
      isAdmins: _0xac7211,
      reply: _0x1ed253,
    }
  ) => {
    try {
      try {
        const _0x1b3bad = 'STICKER_NAME',
          _0x156876 = { db: global.POSTGRESQL_URL }
        const _0x1deff5 = _0x156876,
          _0x591e65 = new DBM(_0x1deff5)
        await _0x591e65.insert(_0x1b3bad, _0x197eed)
        const _0x1b6b0f = { quoted: _0x14346f }
        const _0x3baa48 = _0x1b6b0f
        await _0x30b413.sendMessage(
          _0x14346f.chat,
          { text: '*Database*  ```' + _0x1b3bad + '```  *Updated*' },
          _0x3baa48
        )
      } catch (_0x610a7a) {
        _0x14346f.reply('*Error Accurated !!*\n\n' + _0x610a7a),
          _0x136de9(_0x610a7a)
      }
    } catch (_0x372fe2) {
      _0x1ed253(N_FOUND)
      _0x136de9(_0x372fe2)
    }
  }
)
const _0x289022 = {}
_0x289022.pattern = 'ownname'
_0x289022.react = ''
_0x289022.desc = ''
_0x289022.category = 'owner'
_0x289022.use = '.'
_0x289022.dontAddCommandList = true
_0x289022.filename = __filename
cmd(
  _0x289022,
  async (
    _0x2dee46,
    _0xf799f8,
    _0x5a727c,
    {
      from: _0x3f509a,
      l: _0x4e9fe8,
      quoted: _0x4c7109,
      body: _0x44c5d3,
      isCmd: _0x764dfb,
      command: _0x4a86a6,
      args: _0x11548f,
      q: _0x48dc1d,
      isGroup: _0x2fce44,
      sender: _0x13c497,
      senderNumber: _0x29255e,
      botNumber2: _0x2b281b,
      botNumber: _0x3eec7f,
      pushname: _0xa8d9a9,
      isMe: _0x325a4f,
      isOwner: _0x2db7cc,
      groupMetadata: _0x3bba38,
      groupName: _0x3533e3,
      participants: _0x76ac8c,
      groupAdmins: _0x154bd3,
      isBotAdmins: _0x3b8333,
      isAdmins: _0x1e9c4b,
      reply: _0x13eabd,
    }
  ) => {
    try {
      try {
        const _0x58d691 = 'OWNER_NAME',
          _0x138393 = { db: global.POSTGRESQL_URL }
        const _0x3e0138 = _0x138393,
          _0x514ad3 = new DBM(_0x3e0138)
        await _0x514ad3.insert(_0x58d691, _0x48dc1d)
        const _0x79f372 = { quoted: _0xf799f8 }
        const _0x55a3b7 = _0x79f372
        await _0x2dee46.sendMessage(
          _0xf799f8.chat,
          { text: '*Database*  ```' + _0x58d691 + '```  *Updated*' },
          _0x55a3b7
        )
      } catch (_0x5db322) {
        _0xf799f8.reply('*Error Accurated !!*\n\n' + _0x5db322)
        _0x4e9fe8(_0x5db322)
      }
    } catch (_0x307aa8) {
      _0x13eabd(N_FOUND), _0x4e9fe8(_0x307aa8)
    }
  }
)
const _0x2c4d21 = {}
_0x2c4d21.pattern = 'star'
_0x2c4d21.react = '\u2B50'
_0x2c4d21.alias = ['raiting', 'R']
_0x2c4d21.desc = 'Rate Us'
_0x2c4d21.category = 'owner'
_0x2c4d21.use = '.setuplist'
_0x2c4d21.filename = __filename
cmd(
  _0x2c4d21,
  async (
    _0x3ec5cf,
    _0x48ffeb,
    _0x4689bb,
    {
      from: _0x2c1899,
      l: _0x2e21a7,
      quoted: _0xaf294e,
      body: _0x50aaf1,
      isCmd: _0x49ad9e,
      command: _0x136a34,
      args: _0x2c0c51,
      q: _0x24b020,
      isGroup: _0x279e4a,
      sender: _0x197b43,
      senderNumber: _0x139e56,
      botNumber2: _0xb4f2d1,
      botNumber: _0x7f5bf6,
      pushname: _0x2c8df9,
      isMe: _0x5422a8,
      isOwner: _0x58fae7,
      groupMetadata: _0x529584,
      groupName: _0x4089d2,
      participants: _0x55a332,
      groupAdmins: _0x58a058,
      isBotAdmins: _0x39b891,
      isAdmins: _0x1eee86,
      reply: _0x2031f7,
    }
  ) => {
    try {
      const _0x37c37a = { db: global.POSTGRESQL_URL }
      const _0x56a4b2 = _0x37c37a,
        _0x1bf4e7 = new DBM(_0x56a4b2),
        _0x1eb2a2 = await _0x1bf4e7.get('stars1'),
        _0x5b30f0 = await _0x1bf4e7.get('stars2'),
        _0x4dc9ab = await _0x1bf4e7.get('stars3'),
        _0x1204d8 = await _0x1bf4e7.get('stars4'),
        _0x3d5777 = await _0x1bf4e7.get('stars5')
      let _0x247425 =
        'QUEEN ALEXA MD\n\n1.\u2B50\u2B50\u2B50\u2B50\u2B50 = ' +
        _0x3d5777 +
        '\n2.\u2B50\u2B50\u2B50\u2B50 = ' +
        _0x1204d8 +
        '\n3.\u2B50\u2B50\u2B50 = ' +
        _0x4dc9ab +
        '\n4.\u2B50\u2B50 = ' +
        _0x5b30f0 +
        '\n5.\u2B50 = ' +
        _0x1eb2a2 +
        '\n\n*QUEEN-ALEXA \u2022 MULTI DEVICE*'
      await _0x3ec5cf.sendMessage(_0x48ffeb.chat, {
        text: _0x247425,
        quoted: _0x48ffeb,
      })
    } catch (_0x26b16a) {
      _0x2031f7(N_FOUND), _0x2e21a7(_0x26b16a)
    }
  }
)
function _0x4d13ce(_0x5b3dd7) {
  function _0x597f99(_0x3b4273) {
    if (typeof _0x3b4273 === 'string') {
      return function (_0x343da2) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x3b4273 / _0x3b4273).length !== 1 || _0x3b4273 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x597f99(++_0x3b4273)
  }
  try {
    if (_0x5b3dd7) {
      return _0x597f99
    } else {
      _0x597f99(0)
    }
  } catch (_0x3370ed) {}
}







    const _0x46d984 = (function () {
    let _0x221eb9 = true
    return function (_0x3e0807, _0x92397f) {
      const _0xa5ec1d = _0x221eb9
        ? function () {
            if (_0x92397f) {
              const _0x2bf30a = _0x92397f.apply(_0x3e0807, arguments)
              return (_0x92397f = null), _0x2bf30a
            }
          }
        : function () {}
      return (_0x221eb9 = false), _0xa5ec1d
    }
  })(),
  _0x3c14c1 = _0x46d984(this, function () {
    return _0x3c14c1
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3c14c1)
      .search('(((.+)+)+)+$')
  })
_0x3c14c1()
const _0x50b5a2 = (function () {
  let _0x5e9f2f = true
  return function (_0x4ff160, _0x4e800b) {
    const _0x5d8aa8 = _0x5e9f2f
      ? function () {
          if (_0x4e800b) {
            const _0xb100b2 = _0x4e800b.apply(_0x4ff160, arguments)
            return (_0x4e800b = null), _0xb100b2
          }
        }
      : function () {}
    return (_0x5e9f2f = false), _0x5d8aa8
  }
})()
;(function () {
  _0x50b5a2(this, function () {
    const _0x4d03be = new RegExp('function *\\( *\\)'),
      _0x423de4 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x1331cc = _0x4b4d17('init')
    !_0x4d03be.test(_0x1331cc + 'chain') || !_0x423de4.test(_0x1331cc + 'input')
      ? _0x1331cc('0')
      : _0x4b4d17()
  })()
})()
const config = require('../config'),
  { cmd, commands } = require('../lib/command'),
  fg = require('api-dylux'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  vm = require('vm'),
  { mediafireDl } = require('mfiredlcore-vihangayt'),
  { PornHub } = require('pornhub.js'),
  { subsearch, subdl } = require('@sl-code-lords/si-subdl'),
  cnapsave = require('snapsave')
var N_FOUND = ''
global.LANG === 'SI'
  ? (N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*')
  : (N_FOUND = "*I couldn't find anything :(*")
var spotify_dec = ''
global.LANG === 'SI'
  ? (spotify_dec = 'spotify වෙතින් ගීත බාගන්න')
  : (spotify_dec = 'Download Spotify Songs')
var FBDEC = ''
global.LANG === 'SI'
  ? (FBDEC = 'Facebook වෙතින් ගීත බාගන්න')
  : (FBDEC = 'Download facebook videos (HD or SD)')
var TIKTOK_DEC = ''
global.LANG === 'SI'
  ? (TIKTOK_DEC = 'Tiktok videos බාගතකරන්න.')
  : (TIKTOK_DEC = 'Download tiktok videos.')
var INSTA_DEC = ''
global.LANG === 'SI'
  ? (INSTA_DEC = 'ඉන්සටග්‍රෑම් image post හෝ videos බාගතකරන්න..')
  : (INSTA_DEC = 'Download instagram image post or videos..')
var MF_DEC = ''
global.LANG === 'SI'
  ? (MF_DEC = 'Mediafire files බාගත කරන්න.')
  : (MF_DEC = 'Download Mediafire Files')
var NEED_MEDIAFIRE = ''
global.LANG === 'SI'
  ? (NEED_MEDIAFIRE = '*කරුණාකර මට Mediafire link එකක් දෙන්න!*')
  : (NEED_MEDIAFIRE = '*Please give me a Mediafire link!*')
var OVER_WA_FILE = ''
global.LANG === 'SI'
  ? (OVER_WA_FILE = '*මෙම ගොනු ප්‍රමාණය ඉතා විශාලයි*')
  : (OVER_WA_FILE = '*This file size is Too Big*')
var G_DRIVE = ''
global.LANG === 'SI'
  ? (G_DRIVE = 'Google Drive files බාගත කරන්න.')
  : (G_DRIVE = 'Download Google Drive Files')
var NEED_GDRIVE = ''
global.LANG === 'SI'
  ? (NEED_GDRIVE = '*කරුණාකර මට Google Drive link එකක් දෙන්න!*')
  : (NEED_GDRIVE = '*Please give me a Google Drive link!*')
var pkg = require('../package.json')
;(pkg.author != 'Kalindu Gaweshana' || pkg.name != 'QUEEN-ALEXA-MD') &&
  console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
const _0x895b2a = {}
_0x895b2a.pattern = 'spotify'
_0x895b2a.react = '\uD83C\uDFA7'
_0x895b2a.desc = spotify_dec
_0x895b2a.use = '.Spotify <music Link>'
_0x895b2a.category = 'download'
_0x895b2a.filename = __filename
cmd(
  _0x895b2a,
  async (
    _0x1e445f,
    _0x1921d2,
    _0x130943,
    {
      from: _0xa388c5,
      l: _0x47f5b8,
      quoted: _0x431732,
      body: _0x3f516b,
      isCmd: _0xa7cde,
      command: _0x415916,
      args: _0x37e105,
      q: _0x4b7516,
      isGroup: _0x5ef055,
      sender: _0x3f0117,
      senderNumber: _0x22e4c6,
      botNumber2: _0x5e77cf,
      botNumber: _0x301745,
      pushname: _0x3cd205,
      isMe: _0x5ede5d,
      isOwner: _0x378cd5,
      groupMetadata: _0x2f619c,
      groupName: _0x222956,
      participants: _0xee2ac0,
      groupAdmins: _0x4cbaa5,
      isBotAdmins: _0x59783b,
      isAdmins: _0x4754ed,
      reply: _0xd5c621,
    }
  ) => {
    try {
      if (!_0x4b7516) {
        return _0x1921d2.reply('*Please give spotify video url !!*')
      }
      const _0xb7f508 = await fetchJson(
          'https://api.lolhuman.xyz/api/spotify?apikey=3aa1d7a01f5080c604188279&url=' +
            _0x4b7516
        ),
        _0x26a2e0 = '' + _0xb7f508.result.id,
        _0x487f70 = '' + _0xb7f508.result.title,
        _0x18b7b5 = '' + _0xb7f508.result.artists,
        _0x5687bf = '' + _0xb7f508.result.duration,
        _0x1e299a = '' + _0xb7f508.result.thumbnail,
        _0x575eef = '' + _0xb7f508.result.link,
        _0xf5052a = { url: _0x1e299a }
      const _0x3a2cf6 = {
        image: _0xf5052a,
        caption:
          '*\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84 \uD835\uDE82\uD835\uDE7F\uD835\uDE7E\uD835\uDE83\uD835\uDE78\uD835\uDE75\uD835\uDE88 \uD835\uDE73\uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE74\uD835\uDE81*\n\n*ᴛɪᴛʟᴇ :* ' +
          _0x487f70 +
          '\n\n*\u200B\uD83C\uDDEE\u200B\u200B\uD83C\uDDE9\u200B :* ' +
          _0x26a2e0 +
          '\n\n*\u200B\uD83C\uDDE6\u200B\u200B\uD83C\uDDF7\u200B\u200B\uD83C\uDDF9\u200B\u200B\uD83C\uDDEE\u200B\u200B\uD83C\uDDF8\u200B\u200B\uD83C\uDDF9\u200B\u200B\uD83C\uDDF8\u200B :* ' +
          _0x18b7b5 +
          '\n\n*\u200B\uD83C\uDDE9\u200B\u200B\uD83C\uDDFA\u200B\u200B\uD83C\uDDF7\u200B\u200B\uD83C\uDDE6\u200B\u200B\uD83C\uDDF9\u200B\u200B\uD83C\uDDEE\u200B\u200B\uD83C\uDDF4\u200B\u200B\uD83C\uDDF3\u200B :* ' +
          _0x5687bf +
          '\n\n*QUEEN-ALEXA-MD*',
      }
      const _0x44c7fa = { quoted: _0x1921d2 }
      await _0x1e445f.sendMessage(_0xa388c5, _0x3a2cf6, _0x44c7fa)
      const _0x30cf67 = { url: _0x575eef }
      const _0x208939 = {
        audio: _0x30cf67,
        mimetype: 'audio/mpeg',
      }
      const _0x10037f = { quoted: _0x1921d2 }
      await _0x1e445f.sendMessage(_0xa388c5, _0x208939, _0x10037f)
    } catch (_0x2abb39) {
      _0xd5c621(N_FOUND), console.log(_0x2abb39)
    }
  }
)
async function savefrom(_0x9c2c31) {
  let _0x442ea4 = new URLSearchParams({
      sf_url: encodeURI(_0x9c2c31),
      sf_submit: '',
      new: 2,
      lang: 'id',
      app: '',
      country: 'id',
      os: 'Windows',
      browser: 'Chrome',
      channel: ' main',
      'sf-nomad': 1,
    }),
    { data: _0xc0385 } = await axios({
      url: 'https://en.savefrom.net/391GA/',
      method: 'POST',
      data: _0x442ea4,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://id.savefrom.net',
        referer: 'https://id.savefrom.net/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
      },
    }),
    _0x3ac329 = '[]["filter"]["constructor"](b).call(a);'
  _0xc0385 = _0xc0385.replace(
    _0x3ac329,
    '\ntry {\ni++;\nif (i === 2) scriptResult = ' +
      _0x3ac329.split('.call')[0] +
      '.toString();\nelse (\n' +
      _0x3ac329.replace(/;/, '') +
      '\n);\n} catch {}'
  )
  const _0x109908 = {
    scriptResult: '',
    i: 0,
  }
  let _0x33eedc = _0x109908
  vm.createContext(_0x33eedc)
  new vm.Script(_0xc0385).runInContext(_0x33eedc)
  return JSON.parse(
    _0x33eedc.scriptResult
      .split('window.parent.sf.videoResult.show(')?[1]
      .split(');')?.[0]
  )
}
const _0x50f4b0 = {}
_0x50f4b0.pattern = 'tiktok'
_0x50f4b0.alias = ['ttdl']
_0x50f4b0.react = '\uD83C\uDFF7️'
_0x50f4b0.desc = TIKTOK_DEC
_0x50f4b0.category = 'download'
_0x50f4b0.use = '.tiktok <Tiktok link>'
_0x50f4b0.filename = __filename
cmd(
  _0x50f4b0,
  async (
    _0x349c1b,
    _0x4a6f36,
    _0x100a67,
    {
      from: _0x10324a,
      l: _0x11c6a8,
      quoted: _0x51693a,
      body: _0x369b0d,
      isCmd: _0x406ed6,
      command: _0x786d59,
      args: _0x59d1e0,
      q: _0x507cd1,
      isGroup: _0x53ae40,
      sender: _0x509254,
      senderNumber: _0x19a0ab,
      botNumber2: _0x554b18,
      botNumber: _0x572dea,
      pushname: _0x190856,
      isMe: _0x3ed5fe,
      isOwner: _0x34ff17,
      groupMetadata: _0x56730c,
      groupName: _0x3cc4ac,
      participants: _0x120308,
      groupAdmins: _0x24a4c7,
      isBotAdmins: _0x5202be,
      isAdmins: _0x422b58,
      reply: _0x2c26d7,
    }
  ) => {
    try {
      if (!_0x507cd1) {
        return _0x4a6f36.reply('*Please give me tiktok url !!*')
      }
      let _0x2ec95e = await fetchJson(
        'https://api.sdbots.tech/tiktok?url=' + _0x507cd1
      )
      const _0x1ad353 = _0x2ec95e.result.author,
        _0x1cea65 = _0x2ec95e.result.desc,
        _0x37cb8a = [
          {
            title: 'Tikotk Video No watermark',
            rows: [
              {
                title: '\uD83D\uDCFD️ Video Type',
                description: '',
                rowId:
                  global.PREFIX +
                  'tikno ' +
                  _0x2ec95e.result.withoutWaterMarkVideo,
              },
              {
                title: '\uD83D\uDCC1 Document File',
                description: '',
                rowId:
                  global.PREFIX +
                  'tiknodoc ' +
                  _0x2ec95e.result.withoutWaterMarkVideo,
              },
            ],
          },
          {
            title: 'Tikotk Video With watermark',
            rows: [
              {
                title: '\uD83D\uDCFD️ Video Type',
                description: '',
                rowId:
                  global.PREFIX + 'tikwith ' + _0x2ec95e.result.waterMarkVideo,
              },
              {
                title: '\uD83D\uDCC1 Document File',
                description: '',
                rowId:
                  global.PREFIX +
                  'tikwithdoc ' +
                  _0x2ec95e.result.waterMarkVideo,
              },
            ],
          },
          {
            title: 'Tikotk Audio',
            rows: [
              {
                title: '\uD83C\uDFB6 Audio File',
                description: '',
                rowId: global.PREFIX + 'tikaud ' + _0x2ec95e.result.music,
              },
              {
                title: '\uD83D\uDCC1 Document File',
                description: '',
                rowId: global.PREFIX + 'tiksong ' + _0x2ec95e.result.music,
              },
            ],
          },
        ],
        _0x112d05 = {}
      return (
        (_0x112d05.text =
          '*\uD83C\uDFA1 Queen ALEXA Tiktok Downloader \uD83C\uDFA1*\n\n'),
        (_0x112d05.footer = 'QUEEN-ALEXA \u2022 MULTI DEVICE'),
        (_0x112d05.title = 'Result from Tiktok.'),
        (_0x112d05.buttonText = '\uD83D\uDD22 Reply below number'),
        (_0x112d05.sections = _0x37cb8a),
        (butmsg = _0x112d05),
        await _0x349c1b.listMessage2(_0x10324a, butmsg, _0x4a6f36, _0x4a6f36)
      )
    } catch (_0x1ca3a1) {
      _0x2c26d7(N_FOUND)
      _0x11c6a8(_0x1ca3a1)
    }
  }
)
const _0xe9f0d2 = {}
_0xe9f0d2.pattern = 'tikno'
_0xe9f0d2.react = '\uD83C\uDFF7️'
_0xe9f0d2.use = '.tiktok <Tiktok link>'
_0xe9f0d2.filename = __filename
cmd(
  _0xe9f0d2,
  async (
    _0x1d97c7,
    _0x14a3b7,
    _0x2a6416,
    {
      from: _0x4bd368,
      l: _0x107d06,
      quoted: _0x168f5d,
      body: _0x197daf,
      isCmd: _0xd30aad,
      command: _0x4d4347,
      args: _0x3977b4,
      q: _0x3b977b,
      isGroup: _0x4c9b52,
      sender: _0x4be177,
      senderNumber: _0x1e2a37,
      botNumber2: _0x519792,
      botNumber: _0x3badc4,
      pushname: _0x17964a,
      isMe: _0xb2e05,
      isOwner: _0x3207db,
      groupMetadata: _0x583b46,
      groupName: _0x28379e,
      participants: _0x3890bb,
      groupAdmins: _0x79c7ff,
      isBotAdmins: _0x78185e,
      isAdmins: _0x1b6c16,
      reply: _0xf50f59,
    }
  ) => {
    try {
      if (!_0x3b977b) {
        return _0x14a3b7.reply('*Please give me tiktok url !!*')
      }
      const _0x22bf0a = { url: _0x3b977b }
      const _0x2c80dc = {
        video: _0x22bf0a,
        caption:
          '*QUEEN-ALEXA-MD*',
      }
      const _0x38d607 = { quoted: _0x14a3b7 }
      await _0x1d97c7.sendMessage(_0x4bd368, _0x2c80dc, _0x38d607)
    } catch (_0x2e3a30) {
      _0xf50f59(N_FOUND), _0x107d06(_0x2e3a30)
    }
  }
)
;(function () {
  let _0x59c483
  try {
    const _0xe0e2dd = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x59c483 = _0xe0e2dd()
  } catch (_0x99c78f) {
    _0x59c483 = window
  }
  _0x59c483.setInterval(_0x4b4d17, 4000)
})()
const _0x594149 = {}
_0x594149.pattern = 'tiknodoc'
_0x594149.react = '\uD83C\uDFF7️'
_0x594149.use = '.tiktok <Tiktok link>'
_0x594149.filename = __filename
cmd(
  _0x594149,
  async (
    _0x13f820,
    _0x113f85,
    _0x34b3b1,
    {
      from: _0x483fc6,
      l: _0x51c5af,
      quoted: _0xded91d,
      body: _0x44ceb8,
      isCmd: _0x2c72fd,
      command: _0x28b0dc,
      args: _0x6e03b7,
      q: _0x58ff7a,
      isGroup: _0xa7d8a1,
      sender: _0x5e1f68,
      senderNumber: _0x1125d7,
      botNumber2: _0x49d62a,
      botNumber: _0x56ec8d,
      pushname: _0x33a761,
      isMe: _0x5a1fd8,
      isOwner: _0x3e4e6d,
      groupMetadata: _0x2f1471,
      groupName: _0x39f0c1,
      participants: _0x12ed5e,
      groupAdmins: _0x55e412,
      isBotAdmins: _0x102ac1,
      isAdmins: _0x47b699,
      reply: _0x3b3ce9,
    }
  ) => {
    try {
      if (!_0x58ff7a) {
        return _0x113f85.reply('*Please give me tiktok url !!*')
      }
      const _0x289e8a = { url: _0x58ff7a }
      const _0x12ade6 = {
        document: _0x289e8a,
        mimetype: 'video/mp4',
        fileName: 'Queen Alexa Tiktok.mp4',
      }
      const _0xaa29b3 = { quoted: _0x113f85 }
      await _0x13f820.sendMessage(_0x483fc6, _0x12ade6, _0xaa29b3)
    } catch (_0xb7915) {
      _0x3b3ce9(N_FOUND)
      _0x51c5af(_0xb7915)
    }
  }
)
const _0x12ac9c = {}
_0x12ac9c.pattern = 'tikwith'
_0x12ac9c.react = '\uD83C\uDFF7️'
_0x12ac9c.use = '.tiktok <Tiktok link>'
_0x12ac9c.filename = __filename
cmd(
  _0x12ac9c,
  async (
    _0x108b28,
    _0xe5928e,
    _0x566eb6,
    {
      from: _0x2ebb1c,
      l: _0x2abd61,
      quoted: _0x2acb94,
      body: _0x42eb6c,
      isCmd: _0x1d376b,
      command: _0x504524,
      args: _0x114321,
      q: _0x1846b9,
      isGroup: _0x1ae807,
      sender: _0x2581d2,
      senderNumber: _0x3dbec5,
      botNumber2: _0x203d0f,
      botNumber: _0x151097,
      pushname: _0x3641f0,
      isMe: _0x17b8c8,
      isOwner: _0x174795,
      groupMetadata: _0x4937ec,
      groupName: _0x5f23a9,
      participants: _0x115b93,
      groupAdmins: _0x106147,
      isBotAdmins: _0x3780d2,
      isAdmins: _0x5baa6b,
      reply: _0x1ff8db,
    }
  ) => {
    try {
      if (!_0x1846b9) {
        return _0xe5928e.reply('*Please give me tiktok url !!*')
      }
      const _0x5049b4 = { url: _0x1846b9 }
      const _0x523876 = {
        video: _0x5049b4,
        caption:
          '*\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84 \uD835\uDE83\uD835\uDE78\uD835\uDE7A\uD835\uDE83\uD835\uDE7E\uD835\uDE7A \uD835\uDE73\uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE74\uD835\uDE81*',
      }
      const _0x474b76 = { quoted: _0xe5928e }
      await _0x108b28.sendMessage(_0x2ebb1c, _0x523876, _0x474b76)
    } catch (_0x5f190d) {
      _0x1ff8db(N_FOUND), _0x2abd61(_0x5f190d)
    }
  }
)
const _0x501810 = {}
_0x501810.pattern = 'tikwithdoc'
_0x501810.react = '\uD83C\uDFF7️'
_0x501810.use = '.tiktok <Tiktok link>'
_0x501810.filename = __filename
cmd(
  _0x501810,
  async (
    _0x430d61,
    _0x5d5388,
    _0x277ed5,
    {
      from: _0x5e4786,
      l: _0x260525,
      quoted: _0x5b0b4b,
      body: _0x3a4d03,
      isCmd: _0x258814,
      command: _0x189b05,
      args: _0x4dd04c,
      q: _0x418aef,
      isGroup: _0x286ac9,
      sender: _0x48c243,
      senderNumber: _0x2bbba4,
      botNumber2: _0x27c895,
      botNumber: _0x52f20f,
      pushname: _0x4d3150,
      isMe: _0x306f3d,
      isOwner: _0x25a18b,
      groupMetadata: _0x111604,
      groupName: _0x5ca162,
      participants: _0xb17f29,
      groupAdmins: _0x15bcdf,
      isBotAdmins: _0x4654d3,
      isAdmins: _0xe1f3a9,
      reply: _0x4f351c,
    }
  ) => {
    try {
      if (!_0x418aef) {
        return _0x5d5388.reply('*Please give me tiktok url !!*')
      }
      const _0x2db9b8 = { url: _0x418aef }
      const _0x15ccb4 = {
        document: _0x2db9b8,
        mimetype: 'video/mp4',
        fileName: 'Queen Alexa Tiktok.mp4',
      }
      const _0x56f613 = { quoted: _0x5d5388 }
      await _0x430d61.sendMessage(_0x5e4786, _0x15ccb4, _0x56f613)
    } catch (_0x156675) {
      _0x4f351c(N_FOUND), _0x260525(_0x156675)
    }
  }
)
const _0x2adb8e = {}
_0x2adb8e.pattern = 'tikaud'
_0x2adb8e.react = '\uD83C\uDFF7️'
_0x2adb8e.use = '.tiktok <Tiktok link>'
_0x2adb8e.filename = __filename
cmd(
  _0x2adb8e,
  async (
    _0x56524c,
    _0x406b0b,
    _0x282852,
    {
      from: _0x295298,
      l: _0x3aad3b,
      quoted: _0x421e83,
      body: _0x3490a0,
      isCmd: _0x12b650,
      command: _0x31b3a5,
      args: _0x235e0b,
      q: _0x1445d4,
      isGroup: _0xeb3bf2,
      sender: _0x1be5d6,
      senderNumber: _0x265546,
      botNumber2: _0x29a6f7,
      botNumber: _0x50074f,
      pushname: _0xe3b3ce,
      isMe: _0x511343,
      isOwner: _0x41b4f2,
      groupMetadata: _0x3bf14b,
      groupName: _0x2fe010,
      participants: _0x27a18b,
      groupAdmins: _0x2e5141,
      isBotAdmins: _0x40e27d,
      isAdmins: _0x55c428,
      reply: _0x4c32b9,
    }
  ) => {
    try {
      if (!_0x1445d4) {
        return _0x406b0b.reply('*Please give me tiktok url !!*')
      }
      const _0x37de1d = { url: _0x1445d4 }
      const _0x242026 = { quoted: _0x406b0b }
      await _0x56524c.sendMessage(
        _0x295298,
        {
          document: _0x37de1d,
          mimetype: 'audio/mpeg',
          fileName: 'TikTok Audio.mp3',
          caption:
            '*QUEEN-ALEXA-MD*',
        },
        _0x242026
      )
    } catch (_0x58c590) {
      _0x4c32b9(N_FOUND)
      _0x3aad3b(_0x58c590)
    }
  }
)
const _0x1a0fc3 = {}
_0x1a0fc3.pattern = 'tiksong'
_0x1a0fc3.react = '\uD83C\uDFF7️'
_0x1a0fc3.use = '.tiktok <Tiktok link>'
_0x1a0fc3.filename = __filename
cmd(
  _0x1a0fc3,
  async (
    _0x89a730,
    _0x5c3419,
    _0x359540,
    {
      from: _0x347784,
      l: _0x5c7daa,
      quoted: _0x19afe6,
      body: _0x564d67,
      isCmd: _0x22e8d8,
      command: _0x5ad844,
      args: _0x220b26,
      q: _0x58abbe,
      isGroup: _0x423321,
      sender: _0x4b5bbc,
      senderNumber: _0x43927b,
      botNumber2: _0x35f437,
      botNumber: _0x2b8211,
      pushname: _0x24bc9e,
      isMe: _0x30ff4d,
      isOwner: _0x15ddad,
      groupMetadata: _0x299099,
      groupName: _0x4cf789,
      participants: _0x49234b,
      groupAdmins: _0x19ddfd,
      isBotAdmins: _0x5b5f7d,
      isAdmins: _0x2923fc,
      reply: _0xd93475,
    }
  ) => {
    try {
      if (!_0x58abbe) {
        return _0x5c3419.reply('*Please give me tiktok url !!*')
      }
      const _0x11dca5 = { url: _0x58abbe }
      const _0x53d6a3 = { quoted: _0x5c3419 }
      await _0x89a730.sendMessage(
        _0x347784,
        {
          audio: _0x11dca5,
          mimetype: 'audio/mpeg',
          fileName: 'TikTok Audio.mp3',
        },
        _0x53d6a3
      )
    } catch (_0x3cce0c) {
      _0xd93475(N_FOUND), _0x5c7daa(_0x3cce0c)
    }
  }
)
const _0x38601a = {}
_0x38601a.pattern = 'mediafire'
_0x38601a.alias = ['mfire', 'mf']
_0x38601a.react = '\uD83D\uDCC1'
_0x38601a.desc = MF_DEC
_0x38601a.category = 'download'
_0x38601a.use = '.mediafire <mediafire link>'
_0x38601a.filename = __filename
cmd(
  _0x38601a,
  async (
    _0x374740,
    _0x8972c1,
    _0x3f7ecc,
    {
      from: _0x1b013e,
      l: _0x574de1,
      quoted: _0x3bc394,
      body: _0x47fde9,
      isCmd: _0x171e1f,
      command: _0xa50e1f,
      args: _0x1fc8ef,
      q: _0x549805,
      isGroup: _0x372a23,
      sender: _0xf5b2be,
      senderNumber: _0x58de6b,
      botNumber2: _0x32f4bd,
      botNumber: _0xf264d2,
      pushname: _0x2416e9,
      isMe: _0x2f9901,
      isOwner: _0x31b923,
      groupMetadata: _0x4ad363,
      groupName: _0x117361,
      participants: _0x4c956d,
      groupAdmins: _0x2b81e0,
      isBotAdmins: _0x56aca4,
      isAdmins: _0x2a3f01,
      reply: _0xbbf4f7,
    }
  ) => {
    try {
      if (!_0x549805) {
        return _0x8972c1.reply(NEED_MEDIAFIRE)
      }
      if (!_0x549805.includes('mediafire.com')) {
        return _0x8972c1.reply(NEED_MEDIAFIRE)
      }
      if (!_0x549805.includes('/file')) {
        return _0x8972c1.reply(NEED_MEDIAFIRE)
      }
      const _0x9d4ae4 = await mediafireDl(_0x549805)
      if (
        _0x9d4ae4.size.includes('MB') &&
        _0x9d4ae4.size.replace('MB', '') > global.MAX_SIZE
      ) {
        return _0x8972c1.reply(OVER_WA_FILE)
      }
      if (_0x9d4ae4.size.includes('GB')) {
        return _0x8972c1.reply(OVER_WA_FILE)
      }
      const _0x48f4bc = { url: _0x9d4ae4.link }
      const _0x128e68 = {
        document: _0x48f4bc,
        fileName: _0x9d4ae4.name,
        mimetype: _0x9d4ae4.mime,
        caption:
          '*\uD83E\uDDF8 Name* : ' +
          _0x9d4ae4.name +
          '\n    *\uD83D\uDCCA Size* : ' +
          _0x9d4ae4.size +
          '\n    *\uD83D\uDD79️ Mime* : ' +
          _0x9d4ae4.mime,
      }
      const _0x152eb2 = { quoted: _0x8972c1 }
      const _0x50d68c = _0x374740.sendMessage(_0x1b013e, _0x128e68, _0x152eb2)
    } catch (_0x30d10d) {
      _0xbbf4f7(N_FOUND), _0x574de1(_0x30d10d)
    }
  }
)
async function savefrom(_0x14080f) {
  let _0x45f06a = new URLSearchParams({
    sf_url: encodeURI(_0x14080f),
    sf_submit: '',
    new: 2,
    lang: 'id',
    app: '',
    country: 'id',
    os: 'Windows',
    browser: 'Chrome',
    channel: ' main',
    'sf-nomad': 1,
  })
  let { data: _0x22b735 } = await axios({
      url: 'https://worker.sf-tools.com/savefrom.php',
      method: 'POST',
      data: _0x45f06a,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://id.savefrom.net',
        referer: 'https://id.savefrom.net/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
      },
    }),
    _0x1fad99 = '[]["filter"]["constructor"](b).call(a);'
  _0x22b735 = _0x22b735.replace(
    _0x1fad99,
    '\ntry {\ni++;\nif (i === 2) scriptResult = ' +
      _0x1fad99.split('.call')[0] +
      '.toString();\nelse (\n' +
      _0x1fad99.replace(/;/, '') +
      '\n);\n} catch {}'
  )
  const _0x243fa7 = {
    scriptResult: '',
    i: 0,
  }
  let _0x359272 = _0x243fa7
  return (
    vm.createContext(_0x359272),
    new vm.Script(_0x22b735).runInContext(_0x359272),
    JSON.parse(
      _0x359272.scriptResult
        .split('window.parent.sf.videoResult.show(')?[1]
        .split(');')?.[0]
    )
  )
}
const _0x17b718 = {}
_0x17b718.pattern = 'ig'
_0x17b718.alias = ['igstory']
_0x17b718.react = '\uD83C\uDF80'
_0x17b718.desc = INSTA_DEC
_0x17b718.category = 'download'
_0x17b718.use = '.ig <Instagram link>'
_0x17b718.filename = __filename
cmd(
  _0x17b718,
  async (
    _0x22e5f8,
    _0x352166,
    _0x589288,
    {
      from: _0x2896f6,
      l: _0x57de21,
      quoted: _0x5e290f,
      body: _0x59d771,
      isCmd: _0x4f9356,
      command: _0x18624c,
      args: _0x28b4d3,
      q: _0x6cbf54,
      isGroup: _0x3f87ce,
      sender: _0x4ee5b3,
      senderNumber: _0x2d20ac,
      botNumber2: _0x60452a,
      botNumber: _0x45fe5d,
      pushname: _0x1c67d6,
      isMe: _0x11de45,
      isOwner: _0x1b31fd,
      groupMetadata: _0x37fd2e,
      groupName: _0x50711a,
      participants: _0x4f48a2,
      groupAdmins: _0x468656,
      isBotAdmins: _0x4aa88e,
      isAdmins: _0x509ef2,
      reply: _0x3fab7f,
    }
  ) => {
    try {
      if (!_0x6cbf54) {
        return _0x352166.reply('*Please give me instagram url !!*')
      }
      const _0x2b1610 = await snapsave(_0x6cbf54),
        _0x32295b = { url: _0x2b1610.data[0].url }
      const _0x568cf1 = {
        video: _0x32295b,
        caption:
          '*QUEEN-ALEXA \u2022 MULTI DEVICE*',
      }
      const _0x15002f = { quoted: _0x352166 }
      await _0x22e5f8.sendMessage(_0x2896f6, _0x568cf1, _0x15002f)
    } catch (_0xccc4c8) {
      _0x3fab7f(N_FOUND), _0x57de21(_0xccc4c8)
    }
  }
)
const _0xd2b405 = {}
_0xd2b405.pattern = 'gdrive'
_0xd2b405.alias = ["googledrive'"]
_0xd2b405.react = '\uD83D\uDCD1'
_0xd2b405.desc = G_DRIVE
_0xd2b405.category = 'download'
_0xd2b405.use = '.gdrive <googledrive link>'
_0xd2b405.filename = __filename
cmd(
  _0xd2b405,
  async (
    _0x5dad27,
    _0x422885,
    _0x31077c,
    {
      from: _0xd8765a,
      l: _0x30fb97,
      quoted: _0x353926,
      body: _0x4e0adc,
      isCmd: _0x2ff8d5,
      command: _0x2853fd,
      args: _0x329e3f,
      q: _0x658306,
      isGroup: _0x28da00,
      sender: _0x11de99,
      senderNumber: _0x465dfa,
      botNumber2: _0x1f209f,
      botNumber: _0x1b6b6c,
      pushname: _0x53858b,
      isMe: _0x4d392e,
      isOwner: _0xdb9926,
      groupMetadata: _0x3494ed,
      groupName: _0x5c5488,
      participants: _0x238b91,
      groupAdmins: _0x2f1f23,
      isBotAdmins: _0x20841a,
      isAdmins: _0x1fd442,
      reply: _0x15919c,
    }
  ) => {
    try {
      if (!_0x658306) {
        return _0x422885.reply(NEED_GDRIVE)
      }
      let _0xd32222 = await fg.GDriveDl(_0x658306)
      _0x15919c(
        "*\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84 \uD835\uDE76'\uD835\uDE73\uD835\uDE81\uD835\uDE78\uD835\uDE85\uD835\uDE74 \uD835\uDE73\uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE74\uD835\uDE81*\n*\uD83D\uDCC3 File name:*  " +
          _0xd32222.fileName +
          '\n    *\uD83D\uDC88 File Size:* ' +
          _0xd32222.fileSize +
          '\n    *\uD83D\uDD79️ File type:* ' +
          _0xd32222.mimetype
      )
      const _0x2faac4 = { url: _0xd32222.downloadUrl }
      const _0x44c409 = {
        document: _0x2faac4,
        fileName: _0xd32222.fileName,
        mimetype: _0xd32222.mimetype,
      }
      const _0x35fcf3 = { quoted: _0x422885 }
      _0x5dad27.sendMessage(_0xd8765a, _0x44c409, _0x35fcf3)
    } catch (_0x187082) {
      _0x15919c(N_FOUND), _0x30fb97(_0x187082)
    }
  }
)
const _0x25a02f = {}
_0x25a02f.pattern = 'wamod'
_0x25a02f.alias = ["modwhatsapp'"]
_0x25a02f.react = '\uD83E\uDE80'
_0x25a02f.desc = 'Download Mod whatsapp'
_0x25a02f.category = 'download'
_0x25a02f.use = '.wamod '
_0x25a02f.filename = __filename
cmd(
  _0x25a02f,
  async (
    _0x32d370,
    _0xc39c39,
    _0xd40fc6,
    {
      from: _0x4e49a6,
      l: _0x114b18,
      quoted: _0x56c0b3,
      body: _0x26fb65,
      isCmd: _0x2818d5,
      command: _0xcda57,
      args: _0x5f4a6f,
      q: _0x205d71,
      isGroup: _0x18027f,
      sender: _0x1f6702,
      senderNumber: _0xcded73,
      botNumber2: _0x453030,
      botNumber: _0x4e78cd,
      pushname: _0x180f2d,
      isMe: _0x50f21f,
      isOwner: _0x4fc9eb,
      groupMetadata: _0x32fff3,
      groupName: _0x1d252e,
      participants: _0x40eed8,
      groupAdmins: _0x4f471d,
      isBotAdmins: _0x230ed1,
      isAdmins: _0x552505,
      reply: _0x2fafb2,
    }
  ) => {
    try {
      let _0x4fa4e7 = (await fetchJson('https://vihangayt.me/download/fmmods'))
        .data
      const _0x981e9f = [
          {
            buttonId:
              global.PREFIX +
              'dmod ' +
              _0x4fa4e7.com_whatsapp.link +
              '+' +
              _0x4fa4e7.com_whatsapp.name,
            buttonText: { displayText: 'Whatsapp' },
            type: 1,
          },
          {
            buttonId:
              global.PREFIX +
              'dmod ' +
              _0x4fa4e7.com_fmwhatsapp.link +
              '+' +
              _0x4fa4e7.com_fmwhatsapp.name,
            buttonText: { displayText: 'FM Whatsapp' },
            type: 1,
          },
          {
            buttonId:
              global.PREFIX +
              'dmod ' +
              _0x4fa4e7.com_gbwhatsapp.link +
              '+' +
              _0x4fa4e7.com_gbwhatsapp.name,
            buttonText: { displayText: 'GB Whatsapp' },
            type: 1,
          },
          {
            buttonId:
              global.PREFIX +
              'dmod ' +
              _0x4fa4e7.com_yowhatsapp.link +
              '+' +
              _0x4fa4e7.com_yowhatsapp.name,
            buttonText: { displayText: 'YO Whatsapp' },
            type: 1,
          },
        ],
        _0xcfdab7 = '*\uD83E\uDE80 Whatsapp Mods By QUEEN ALEXA*',
        _0x46af58 = { url: 'https://telegra.ph/file/576e4f11b3e2d7bed7318.jpg' }
      const _0x143a2e = _0x46af58,
        _0x3f03ac = {
          image: _0x143a2e,
          caption: _0xcfdab7,
          header: '\uD83D\uDD22 Reply below number ,',
          footer: 'QUEEN-ALEXA \u2022 MULTI DEVICE',
          buttons: _0x981e9f,
          headerType: 4,
        }
      const _0x5e0cc6 = _0x3f03ac
      return await _0x32d370.buttonMessage2(
        _0x4e49a6,
        _0x5e0cc6,
        _0xc39c39,
        _0xc39c39
      )
    } catch (_0x2bf445) {
      _0x2fafb2(N_FOUND), _0x114b18(_0x2bf445)
    }
  }
)
const _0x14833f = {}
_0x14833f.pattern = 'dmod'
_0x14833f.use = '.wamod '
_0x14833f.filename = __filename
cmd(
  _0x14833f,
  async (
    _0x11c892,
    _0x24380a,
    _0x13747d,
    {
      from: _0x553085,
      l: _0x5203e6,
      quoted: _0x21c1b1,
      body: _0x535fe9,
      isCmd: _0x399856,
      command: _0x19e0ea,
      args: _0x46361d,
      q: _0x1ee701,
      isGroup: _0x3d6dbb,
      sender: _0x255a65,
      senderNumber: _0x50e580,
      botNumber2: _0x58a930,
      botNumber: _0x5ab201,
      pushname: _0x349fd1,
      isMe: _0x3a57cb,
      isOwner: _0x5b0774,
      groupMetadata: _0xc545da,
      groupName: _0x1200eb,
      participants: _0x47ed7e,
      groupAdmins: _0xa554a6,
      isBotAdmins: _0x32491b,
      isAdmins: _0x57586c,
      reply: _0x517a61,
    }
  ) => {
    try {
      let [_0x5bf12d, _0x3a37a2] = _0x1ee701.split`+`
      const _0x14febc = { url: _0x5bf12d }
      const _0x25200d = { quoted: _0x24380a }
      await _0x11c892.sendMessage(
        _0x553085,
        {
          document: _0x14febc,
          mimetype: 'application/vnd.android.package-archive',
          fileName: _0x3a37a2 + '.' + 'apk',
          caption: global.CAPTION,
        },
        _0x25200d
      )
    } catch (_0x119ec8) {
      _0x517a61(N_FOUND), _0x5203e6(_0x119ec8)
    }
  }
)
const _0x4b9ac1 = {}
_0x4b9ac1.pattern = 'fb'
_0x4b9ac1.react = '\uD83D\uDEF0️'
_0x4b9ac1.alias = ['fbdl']
_0x4b9ac1.desc = FBDEC
_0x4b9ac1.category = 'download'
_0x4b9ac1.use = '.fb <Fb video link>'
_0x4b9ac1.filename = __filename
cmd(
  _0x4b9ac1,
  async (
    _0x53ded9,
    _0x45f9b7,
    _0x273705,
    {
      from: _0x2c5eb7,
      l: _0x27ac16,
      quoted: _0x366fe6,
      body: _0x462757,
      isCmd: _0x200f6c,
      command: _0x2fabd6,
      args: _0x713404,
      q: _0x1c28d8,
      isGroup: _0x505832,
      sender: _0x40a5f8,
      senderNumber: _0x5e9d08,
      botNumber2: _0x369fc1,
      botNumber: _0x1b8b8c,
      pushname: _0x2ab1c2,
      isMe: _0x348b7e,
      isOwner: _0x48b44f,
      groupMetadata: _0x3d7e9d,
      groupName: _0x4c459c,
      participants: _0x2f31ed,
      groupAdmins: _0x3da16e,
      isBotAdmins: _0x473a28,
      isAdmins: _0x1b28da,
      reply: _0x392369,
    }
  ) => {
    try {
      if (!_0x1c28d8) {
        return _0x45f9b7.reply('*Please give facebook video url !!*')
      }
      const _0x43d0c8 = [
          {
            buttonId: global.PREFIX + 'fbhd' + ' ' + _0x1c28d8,
            buttonText: { displayText: 'HD Quality' },
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'fbhsd' + ' ' + _0x1c28d8,
            buttonText: { displayText: 'SD Quality' },
            type: 1,
          },
        ],
        _0x26fb80 = '*\uD83D\uDEF0️QUEEN-ALEXAu FB Downloader \uD83D\uDEF0️*',
        _0x2ee063 = { url: 'https://telegra.ph/file/360eaef1cac54f2c9a536.png' }
      const _0xa60d87 = _0x2ee063,
        _0x5b6a21 = {
          image: _0xa60d87,
          caption: _0x26fb80,
          header: '\uD83D\uDD22 Reply below number To Get Video ,',
          footer: 'QUEEN-ALEXA \u2022 MULTI DEVICE',
          buttons: _0x43d0c8,
          headerType: 4,
        }
      const _0x2c8d49 = _0x5b6a21
      return await _0x53ded9.buttonMessage2(
        _0x2c5eb7,
        _0x2c8d49,
        _0x45f9b7,
        _0x45f9b7
      )
    } catch (_0x290149) {
      _0x392369(N_FOUND)
      _0x27ac16(_0x290149)
    }
  }
)
const _0x1a9fb0 = {}
_0x1a9fb0.pattern = 'fbhd'
_0x1a9fb0.react = '\uD83D\uDEF0️'
_0x1a9fb0.filename = __filename
cmd(
  _0x1a9fb0,
  async (
    _0x39f09b,
    _0xacb59d,
    _0xa2248b,
    {
      from: _0x560ba6,
      l: _0x3c375f,
      quoted: _0x288793,
      body: _0x5b72fc,
      isCmd: _0x266043,
      command: _0x4a1c13,
      args: _0x277d46,
      q: _0x1ffa09,
      isGroup: _0x137a0d,
      sender: _0x2800af,
      senderNumber: _0x1e6a7d,
      botNumber2: _0x489aa5,
      botNumber: _0xf9ae65,
      pushname: _0x5da461,
      isMe: _0x1b87a9,
      isOwner: _0x1e1662,
      groupMetadata: _0x4b5c7b,
      groupName: _0x5eaa3b,
      participants: _0x594365,
      groupAdmins: _0x232758,
      isBotAdmins: _0x239c06,
      isAdmins: _0x5528e2,
      reply: _0x45ccf1,
    }
  ) => {
    try {
      const _0x761705 = await snapsave(_0x1ffa09),
        _0x41b259 = { url: _0x761705.data[0].url }
      const _0x13d72d = { quoted: _0xacb59d }
      await _0x39f09b.sendMessage(
        _0x560ba6,
        {
          video: _0x41b259,
          caption:
            _0x761705.data[0].resolution +
            '\n*QUEEN-ALEXA \u2022 MULTI DEVICE*',
        },
        _0x13d72d
      )
    } catch (_0x3b6839) {
      _0x45ccf1(N_FOUND)
      console.log(_0x3b6839)
    }
  }
)
const _0x5c7852 = {}
_0x5c7852.pattern = 'fbhsd'
_0x5c7852.react = '\uD83D\uDEF0️'
_0x5c7852.filename = __filename
cmd(
  _0x5c7852,
  async (
    _0x9b0f02,
    _0x10f673,
    _0x5232ef,
    {
      from: _0x1cf747,
      l: _0x24e3d9,
      quoted: _0x289c5c,
      body: _0x570f8a,
      isCmd: _0x1fad21,
      command: _0x250b4b,
      args: _0x17ff25,
      q: _0x698db,
      isGroup: _0x4e0c51,
      sender: _0x1ebae9,
      senderNumber: _0x1146c9,
      botNumber2: _0x9336e4,
      botNumber: _0x29759d,
      pushname: _0x322c72,
      isMe: _0x46f754,
      isOwner: _0x327c52,
      groupMetadata: _0x168033,
      groupName: _0x22133b,
      participants: _0x4440ef,
      groupAdmins: _0x1305d6,
      isBotAdmins: _0x5ae008,
      isAdmins: _0x518a09,
      reply: _0x3df848,
    }
  ) => {
    try {
      const _0x30e484 = await snapsave(_0x698db),
        _0x4fc31e = { url: _0x30e484.data[1].url }
      const _0x29ff2b = { quoted: _0x10f673 }
      await _0x9b0f02.sendMessage(
        _0x1cf747,
        {
          video: _0x4fc31e,
          caption:
            _0x30e484.data[1].resolution +
            '\n*QUEEN-ALEXA \u2022 MULTI DEVICE*',
        },
        _0x29ff2b
      )
    } catch (_0x148511) {
      _0x3df848(N_FOUND)
      console.log(_0x148511)
    }
  }
)
const _0x190f86 = {}
_0x190f86.pattern = 'dlsub'
_0x190f86.react = '\uD83D\uDD0E'
_0x190f86.desc = 'download Sinhala subtitles '
_0x190f86.category = 'download'
_0x190f86.use = '.dlsub <link>'
_0x190f86.filename = __filename
cmd(
  _0x190f86,
  async (
    _0x31d9cf,
    _0x366082,
    _0x14b7e9,
    {
      from: _0x540ec3,
      l: _0xbab247,
      quoted: _0x2148d1,
      body: _0x4a3fe3,
      isCmd: _0x48d24b,
      command: _0x732d16,
      args: _0x2fa2ae,
      q: _0x153c8e,
      isGroup: _0x42e30f,
      sender: _0x2d9cc0,
      senderNumber: _0x2b661e,
      botNumber2: _0x2c5b10,
      botNumber: _0x5c1d43,
      pushname: _0x52ceaa,
      isMe: _0x8d87c,
      isOwner: _0x32401d,
      groupMetadata: _0x591031,
      groupName: _0x2453f9,
      participants: _0x2705b8,
      groupAdmins: _0x2b4bf4,
      isBotAdmins: _0x3d58f3,
      isAdmins: _0x3888c6,
      reply: _0x40ca66,
    }
  ) => {
    try {
      if (!_0x153c8e) {
        return _0x366082.reply('Please give me words to search')
      }
      const _0x8f791d = await subdl(_0x153c8e),
        _0x1b8ead = { url: _0x8f791d.results.dl_link }
      const _0x5e30fe = {
        document: _0x1b8ead,
        mimetype: 'Application/zip',
        fileName: _0x8f791d.results.title,
        caption: global.CAPTION,
      }
      const _0x38c770 = { quoted: _0x366082 }
      await _0x31d9cf.sendMessage(_0x540ec3, _0x5e30fe, _0x38c770)
    } catch (_0x55d03b) {
      console.log(_0x55d03b)
    }
  }
)
const _0x1ec67c = {}
_0x1ec67c.pattern = 'xvideodl'
_0x1ec67c.react = '\uD83D\uDD1E'
_0x1ec67c.desc = 'Download porn video.'
_0x1ec67c.category = 'download'
_0x1ec67c.filename = __filename
cmd(
  _0x1ec67c,
  async (
    _0x13456a,
    _0x7fbe12,
    _0x59b2ed,
    {
      from: _0x177242,
      l: _0x5ef299,
      quoted: _0x5b68a0,
      body: _0x2c9d69,
      isCmd: _0x5e9e43,
      command: _0x48f636,
      args: _0xb12b9e,
      q: _0x4c2100,
      isGroup: _0x4cf981,
      sender: _0x3afa10,
      senderNumber: _0x1c81be,
      botNumber2: _0x36e092,
      botNumber: _0x48354d,
      pushname: _0x2a4ce0,
      isMe: _0x3d23f5,
      isOwner: _0x205519,
      groupMetadata: _0x2c836a,
      groupName: _0x2a5946,
      participants: _0x210f92,
      groupAdmins: _0x3632cf,
      isBotAdmins: _0x41b77c,
      isAdmins: _0x370413,
      reply: _0x504177,
    }
  ) => {
    try {
      if (global.SEX_DL == 'true') {
        if (!_0x4c2100) {
          return _0x7fbe12.reply('*Please give me xvideos url*')
        }
        const _0x277c84 = await fetchJson(
            'https://api.botcahx.live/api/download/xvideosdl?url=' +
              _0x4c2100 +
              '&apikey=janithsadanuwan'
          ),
          _0x3b4895 =
            '\u250C       *\u0F3A \uD83D\uDCE5  \uD835\uDE87\uD835\uDE85\uD835\uDE78\uD835\uDE73\uD835\uDE74\uD835\uDE7E \uD835\uDE73\uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE74\uD835\uDE81  \uD83D\uDCE5 \u0F3B*\n         \n         \n\u2502 *\uD83D\uDCE1 ᴛɪᴛʟᴇ* : ' +
            _0x277c84.result.title +
            '\n\n\u2502 *\uD83D\uDCFD️ \uD835\uDE7A\uD835\uDE74\uD835\uDE88\uD835\uDE86\uD835\uDE7E\uD835\uDE81\uD835\uDE73 :* ' +
            _0x277c84.result.keyword +
            '\n\n\u2502 *\uD83D\uDC41 ᴠɪᴇᴡs :* ' +
            _0x277c84.result.views +
            '\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u274D',
          _0x25b489 = { url: _0x277c84.result.thumb }
        const _0x3f426c = {
          image: _0x25b489,
          caption: _0x3b4895,
        }
        const _0x4d33f5 = { quoted: _0x7fbe12 }
        await _0x13456a.sendMessage(_0x177242, _0x3f426c, _0x4d33f5)
        const _0x2bfb36 = { url: _0x277c84.result.url }
        const _0x1251ed = {
          document: _0x2bfb36,
          mimetype: 'video/mp4',
          fileName: _0x277c84.result.title + '.mp4',
        }
        const _0x351d86 = { quoted: _0x7fbe12 }
        await _0x13456a.sendMessage(_0x177242, _0x1251ed, _0x351d86)
        const _0x426839 = { url: _0x277c84.result.url }
        const _0x4ac531 = { video: _0x426839 }
        const _0x3e3396 = { quoted: _0x7fbe12 }
        await _0x13456a.sendMessage(_0x177242, _0x4ac531, _0x3e3396)
      } else {
        _0x7fbe12.reply('*18+ DOWNLOAD IS DESABLE BY OWNER*')
      }
    } catch (_0x505178) {
      console.log(_0x505178)
    }
  }
)
function _0x4b4d17(_0x27b7d6) {
  function _0x2cf0ff(_0x315588) {
    if (typeof _0x315588 === 'string') {
      return function (_0x57fe1f) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x315588 / _0x315588).length !== 1 || _0x315588 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x2cf0ff(++_0x315588)
  }
  try {
    if (_0x27b7d6) {
      return _0x2cf0ff
    } else {
      _0x2cf0ff(0)
    }
  } catch (_0xe95513) {}
}








var _0x95da8d = (function () {
    var _0x24f20e = true
    return function (_0x545d53, _0x176c7f) {
      var _0x5cfe43 = _0x24f20e
        ? function () {
            if (_0x176c7f) {
              var _0x459a78 = _0x176c7f.apply(_0x545d53, arguments)
              return (_0x176c7f = null), _0x459a78
            }
          }
        : function () {}
      return (_0x24f20e = false), _0x5cfe43
    }
  })(),
  _0x74e7d2 = _0x95da8d(this, function () {
    return _0x74e7d2
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x74e7d2)
      .search('(((.+)+)+)+$')
  })
_0x74e7d2()
var _0x506823 = (function () {
  var _0x63c742 = true
  return function (_0x4e6fff, _0x35a199) {
    var _0x23b57c = _0x63c742
      ? function () {
          if (_0x35a199) {
            var _0x4d3ef7 = _0x35a199.apply(_0x4e6fff, arguments)
            return (_0x35a199 = null), _0x4d3ef7
          }
        }
      : function () {}
    return (_0x63c742 = false), _0x23b57c
  }
})()
;(function () {
  _0x506823(this, function () {
    var _0x4cca9c = new RegExp('function *\\( *\\)'),
      _0x4325b0 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x588def = _0xd7521e('init')
    !_0x4cca9c.test(_0x588def + 'chain') || !_0x4325b0.test(_0x588def + 'input')
      ? _0x588def('0')
      : _0xd7521e()
  })()
})()
const config = require('../config'),
  { cmd, commands } = require('../lib/command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  moment = require('moment-timezone')
var ADDEC = ''
global.LANG === 'SI'
  ? (ADDEC = 'කණ්ඩායමට කෙනෙකු එකතු කරන්න.')
  : (ADDEC = 'Add an user to the group.')
var KICKDEC = ''
global.LANG === 'SI'
  ? (KICKDEC = 'කණ්ඩායමෙන් කෙනෙකු ඉවත් කරන්න.')
  : (KICKDEC = 'emove an user from the group.')
var BOTADDMIN = ''
global.LANG === 'SI'
  ? (BOTADDMIN = '*මම සමුහයේ  ඇඩ්මින් කෙනෙක් නෙවෙයි \uD83D\uDE2C*')
  : (BOTADDMIN = "*I'm not an admin here \uD83D\uDE2C*")
var GROUPADMIN = ''
global.LANG === 'SI'
  ? (GROUPADMIN = '*මෙම විධානය ඇඩ්මින් වරුන් සඳහා පමණි !!*')
  : (GROUPADMIN = '*Commands related to group administration !!*')
var GROUPONLY = ''
global.LANG === 'SI'
  ? (GROUPONLY = '*\u26D4 මෙය group command එකකි!*')
  : (GROUPONLY = '*\u26D4 This is a group command!*')
var GROUP_MUTE = ''
global.LANG === 'SI'
  ? (GROUP_MUTE = '*\uD83D\uDD07 කණ්ඩායම් chat mute විය!*')
  : (GROUP_MUTE = '*\uD83D\uDD07 The group chat was muted!*')
var GROUP_UNMUTE = ''
global.LANG === 'SI'
  ? (GROUP_UNMUTE = '*\uD83D\uDD0A කණ්ඩායම් chat unmute කර ඇත!*')
  : (GROUP_UNMUTE = '*\uD83D\uDD0A Group chat unmuted!*')
var GMUTE_DESC = ''
global.LANG === 'SI'
  ? (GMUTE_DESC = 'කණ්ඩායම් chat නිශ්ශබ්ද කිරීමට. ')
  : (GMUTE_DESC = 'To mute group chat.')
var GUMUTE_DESC = ''
global.LANG === 'SI'
  ? (GMUTE_DESC = 'කණ්ඩායම් chat නිශ්ශබ්ද ඉවත් කරන්න ')
  : (GMUTE_DESC = 'To unmute group chat.')
var DEMOTE_DESC = ''
global.LANG === 'SI'
  ? (DEMOTE_DESC = 'ඕනෑම පරිපාලකයෙකුගේ admin ගනී.')
  : (DEMOTE_DESC = 'Demoting Admin into member')
var PROMOTE_DESC = ''
global.LANG === 'SI'
  ? (PROMOTE_DESC = 'ඕනෑම පුද්ගලයෙකු පරිපාලකයෙකු කරයි. ')
  : (PROMOTE_DESC = 'Promoting memebers into Admin.')
var GNAME_DESC = ''
global.LANG === 'SI'
  ? (GNAME_DESC = 'කණ්ඩායමේ නම වෙනස් කරන්න.')
  : (GNAME_DESC = 'Change group name.')
var GROUPNAME = ''
global.LANG === 'SI'
  ? (GROUPNAME = '*කණ්ඩායමේ නම වෙනස් කරන ලදි.*')
  : (GROUPNAME = '*Group name changed.*')
var Gdis_DESC = ''
global.LANG === 'SI'
  ? (Gdis_DESC = 'Group description වෙනස් කරන්න.')
  : (Gdis_DESC = 'Change group description.')
var GROUPDIS = ''
global.LANG === 'SI'
  ? (GROUPDIS = '*Group description වෙනස් කරන ලදි.*')
  : (GROUPDIS = '*Change group description.*')
var pkg = require('../package.json')
;(pkg.author != 'Kalindu Gaweshana' || pkg.name != 'QUEEN-ALEXA-MD') &&
  console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
var _0x1d5c9f = {}
_0x1d5c9f.pattern = 'add'
_0x1d5c9f.desc = ADDEC
_0x1d5c9f.react = '\uD83E\uDEC2'
_0x1d5c9f.category = 'group'
_0x1d5c9f.use = '.add 947******'
_0x1d5c9f.filename = __filename
_0x1d5c9f.use = '<number>'
cmd(
  _0x1d5c9f,
  async (
    _0x233437,
    _0x2b5a18,
    _0x3f227b,
    {
      from: _0x5f4d42,
      l: _0x5eadfa,
      quoted: _0x497d35,
      body: _0x657b63,
      isCmd: _0x1ee8b2,
      command: _0x4f3fc6,
      args: _0x3a92c1,
      q: _0x4989ad,
      isGroup: _0x16c7b2,
      sender: _0x4d7b9e,
      senderNumber: _0x527440,
      botNumber2: _0x15bec1,
      botNumber: _0x5c4eac,
      pushname: _0x3644ab,
      isMe: _0x1ce4c5,
      isOwner: _0x729352,
      groupMetadata: _0x2be369,
      groupName: _0x460b43,
      participants: _0x22afcb,
      groupAdmins: _0x2fecd1,
      isBotAdmins: _0x62668b,
      isAdmins: _0x4053d7,
      reply: _0x3d23b1,
    }
  ) => {
    try {
      if (!_0x2b5a18.isGroup) {
        return _0x2b5a18.reply(GROUPONLY)
      }
      if (!_0x4989ad) {
        return _0x2b5a18.reply('Please provide me number.')
      }
      if (!_0x4053d7) {
        return _0x2b5a18.reply(GROUPADMIN)
      }
      if (!_0x62668b) {
        return _0x2b5a18.reply(BOTADDMIN)
      }
      let _0x1be750 = _0x2b5a18.mentionedJid
        ? _0x2b5a18.mentionedJid
        : _0x2b5a18.quoted
        ? _0x2b5a18.quoted.sender
        : _0x4989ad.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x233437.groupParticipantsUpdate(
        _0x2b5a18.chat,
        [_0x1be750],
        'add'
      )
    } catch (_0x50c773) {
      _0x5eadfa(_0x50c773), _0x3d23b1('*Error !!*')
    }
  }
)
var _0x3af924 = {}
_0x3af924.pattern = 'kick'
_0x3af924.desc = KICKDEC
_0x3af924.react = '\uD83E\uDEC2'
_0x3af924.category = 'group'
_0x3af924.use = '.add 947******'
_0x3af924.filename = __filename
_0x3af924.use = '<quote|reply|number>'
cmd(
  _0x3af924,
  async (
    _0x47efbd,
    _0x4055bc,
    _0x51ca3b,
    {
      from: _0x501b44,
      l: _0x5e9897,
      quoted: _0x4162cd,
      body: _0x32ff82,
      isCmd: _0x54791b,
      command: _0x27bea0,
      args: _0x47b3f2,
      q: _0x35e8f8,
      isGroup: _0xbf166f,
      sender: _0x4c4749,
      senderNumber: _0x182005,
      botNumber2: _0x42ac64,
      botNumber: _0x40fc82,
      pushname: _0x2839fe,
      isMe: _0x43eeed,
      isOwner: _0x20b029,
      groupMetadata: _0x1b7dbb,
      groupName: _0xc58e35,
      participants: _0x3c341a,
      groupAdmins: _0x3ed04a,
      isBotAdmins: _0x24b0dc,
      isAdmins: _0x5de47b,
      reply: _0x552585,
    }
  ) => {
    try {
      if (!_0x4055bc.isGroup) {
        return _0x4055bc.reply(GROUPONLY)
      }
      if (!_0x5de47b) {
        return _0x4055bc.reply(GROUPADMIN)
      }
      if (!_0x24b0dc) {
        return _0x4055bc.reply(BOTADDMIN)
      }
      let _0x10c500 = _0x4055bc.mentionedJid
        ? _0x4055bc.mentionedJid
        : _0x4055bc.quoted
        ? _0x4055bc.quoted.sender
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      if (!_0x10c500) {
        return
      }
      await _0x47efbd.groupParticipantsUpdate(
        _0x4055bc.chat,
        [_0x10c500],
        'remove'
      )
    } catch (_0xe0d011) {
      _0x5e9897(_0xe0d011), _0x552585('*Error !!*')
    }
  }
)
var _0x156ff2 = {}
_0x156ff2.pattern = 'tagall'
_0x156ff2.desc = 'Tags every person of group.'
_0x156ff2.react = '\uD83E\uDD13'
_0x156ff2.use = '.tagall Hi'
_0x156ff2.category = 'group'
_0x156ff2.filename = __filename
cmd(
  _0x156ff2,
  async (
    _0x2513ca,
    _0x135759,
    _0x519f7d,
    {
      from: _0x41f6eb,
      l: _0x1043f2,
      quoted: _0x5f1a21,
      body: _0x15acc8,
      isCmd: _0x273eca,
      command: _0x18b7b3,
      args: _0x34d3a3,
      q: _0x48dcb5,
      isGroup: _0xbf925b,
      sender: _0x2b2669,
      senderNumber: _0x303458,
      botNumber2: _0x269be9,
      botNumber: _0x253844,
      pushname: _0x3184b7,
      isMe: _0x2d4897,
      isOwner: _0x3a6f88,
      groupMetadata: _0x20949a,
      groupName: _0x3b50e0,
      participants: _0x35b8fa,
      groupAdmins: _0x4ae54d,
      isBotAdmins: _0x1f287e,
      isAdmins: _0x336bff,
      reply: _0x11123d,
    }
  ) => {
    try {
      const _0x469bce = _0x135759.isGroup ? await _0x20949a.participants : ''
      if (!_0xbf925b) {
        return _0x135759.reply(GROUPONLY)
      }
      if (!_0x336bff) {
        return _0x135759.reply(GROUPADMIN)
      }
      let _0x491161 =
        '\n\u2550\u2550\u272A\u3018   *Tag All*   \u3019\u272A\u2550\u2550\n\n\u27B2 *Message :* ' +
        (_0x48dcb5 ? _0x48dcb5 : 'blank') +
        '\n\n\n\u27B2 *Author:* ' +
        _0x135759.pushName +
        ' \uD83D\uDD16\n'
      for (let _0x318117 of _0x469bce) {
        _0x491161 += '\uD83D\uDCCD @' + _0x318117.id.split('@')[0] + '\n'
      }
      var _0x1f12c1 = { quoted: _0x135759 }
      _0x2513ca.sendMessage(
        _0x41f6eb,
        {
          text: _0x491161,
          mentions: _0x469bce.map((_0x34abaf) => _0x34abaf.id),
        },
        _0x1f12c1
      )
    } catch (_0x5d2ef7) {
      _0x1043f2(_0x5d2ef7), _0x11123d('*Error !!*')
    }
  }
)
var _0x1a325d = {}
_0x1a325d.pattern = 'hidetag'
_0x1a325d.desc = 'Tags everyperson of group without mentioning their numbers'
_0x1a325d.react = '\uD83E\uDD13'
_0x1a325d.use = '.hidetag Hi'
_0x1a325d.category = 'group'
_0x1a325d.filename = __filename
cmd(
  _0x1a325d,
  async (
    _0x4e08da,
    _0x46dc1d,
    _0xb05c5f,
    {
      from: _0x214e84,
      l: _0x5e5ab0,
      quoted: _0x494c0f,
      body: _0x2edccf,
      isCmd: _0x44dc51,
      command: _0x31da21,
      args: _0xd97b3c,
      q: _0x4d5ef9,
      isGroup: _0x225910,
      participants: _0x169907,
      sender: _0x3210a0,
      senderNumber: _0x3341ef,
      botNumber2: _0xb17d87,
      botNumber: _0x2f9adb,
      pushname: _0x578e5e,
      isMe: _0x4343a8,
      isOwner: _0x6a379b,
      groupMetadata: _0x10fc91,
      groupName: _0x432d86,
      groupAdmins: _0x15e49f,
      isBotAdmins: _0x5dfb76,
      isAdmins: _0x1cf844,
      reply: _0x50a2a0,
    }
  ) => {
    try {
      if (!_0x46dc1d.isGroup) {
        return _0x46dc1d.reply(GROUPONLY)
      }
      if (!_0x1cf844) {
        return _0x46dc1d.reply(GROUPADMIN)
      }
      _0x4e08da.sendMessage(
        _0x46dc1d.chat,
        {
          text: _0x4d5ef9 ? _0x4d5ef9 : '',
          mentions: _0x169907.map((_0x3afbb3) => _0x3afbb3.id),
        },
        { quoted: _0x46dc1d }
      )
    } catch (_0x2de192) {
      _0x5e5ab0(_0x2de192)
      _0x50a2a0('*Error !!*')
    }
  }
)
var _0x143fbf = {}
_0x143fbf.pattern = 'inviteto'
_0x143fbf.react = '\uD83D\uDD16'
_0x143fbf.desc = 'invite To User'
_0x143fbf.category = 'group'
_0x143fbf.use = '.invite <user number >'
_0x143fbf.filename = __filename
cmd(
  _0x143fbf,
  async (
    _0x573a40,
    _0xc308b7,
    _0x376f1a,
    {
      from: _0x5208a7,
      l: _0x4b4974,
      quoted: _0x24bafd,
      body: _0x35d494,
      isCmd: _0x19f493,
      command: _0x2b93bd,
      args: _0x898e29,
      q: _0x31a684,
      isGroup: _0x5c7a5a,
      sender: _0x3effa3,
      senderNumber: _0x4ee81d,
      botNumber2: _0x5a469a,
      botNumber: _0x53f7be,
      pushname: _0x4a48d3,
      isMe: _0x5c6907,
      isOwner: _0x451880,
      groupMetadata: _0x3c5431,
      groupName: _0x2d9323,
      participants: _0x3333e7,
      groupAdmins: _0x7bf144,
      isBotAdmins: _0x1fb58c,
      isAdmins: _0x200118,
      reply: _0x294f17,
    }
  ) => {
    try {
      if (!_0xc308b7.isGroup) {
        return _0xc308b7.reply(GROUPONLY)
      }
      if (!_0x31a684) {
        return _0xc308b7.reply(
          'Enter the number you want to invite to the group\n\nExample :\n*.9476***** '
        )
      }
      if (_0x31a684.includes('+')) {
        return _0xc308b7.reply('Enter the number together without *+*')
      }
      if (isNaN(_0x31a684)) {
        return _0xc308b7.reply(
          'Enter only the numbers plus your country code without spaces'
        )
      }
      let _0x41bb18 = _0xc308b7.chat,
        _0x5c6d66 =
          'https://chat.whatsapp.com/' +
          (await _0x573a40.groupInviteCode(_0x41bb18))
      var _0x489ee5 = {
        text:
          '\u2261 *GROUP INVITATION*\n\nA user invites you to join this group \n\n' +
          _0x5c6d66,
        mentions: [_0x376f1a.sender],
      }
      await _0x573a40.sendMessage(_0x31a684 + '@s.whatsapp.net', _0x489ee5)
      _0xc308b7.reply(' An invite link is sent to the user')
    } catch (_0x44f31f) {
      console.log(_0x44f31f)
    }
  }
)
var _0x1a42ab = {}
_0x1a42ab.pattern = 'invite'
_0x1a42ab.alias = ['grouplink', 'grplink']
_0x1a42ab.react = '\uD83D\uDD16'
_0x1a42ab.desc = 'Group Link'
_0x1a42ab.category = 'group'
_0x1a42ab.use = '.invite'
_0x1a42ab.filename = __filename
cmd(
  _0x1a42ab,
  async (
    _0x2236fb,
    _0x2d949f,
    _0x50b9ba,
    {
      from: _0x38d095,
      l: _0x56ab2,
      quoted: _0x67f0f0,
      body: _0x5aadf1,
      isCmd: _0x34b26c,
      command: _0x555bbf,
      args: _0x7e5bf2,
      q: _0x38d382,
      isGroup: _0x4cdcb5,
      sender: _0x33a859,
      senderNumber: _0x2bbd84,
      botNumber2: _0xa79191,
      botNumber: _0x267fe9,
      pushname: _0x5e4229,
      isMe: _0x2321c2,
      isOwner: _0x25d1c8,
      groupMetadata: _0x4d8582,
      groupName: _0x15b51e,
      participants: _0x54211d,
      groupAdmins: _0x1be2b4,
      isBotAdmins: _0x1e3e22,
      isAdmins: _0x3c8c62,
      reply: _0x2e6757,
    }
  ) => {
    try {
      if (!_0x2d949f.isGroup) {
        return _0x2d949f.reply(GROUPONLY)
      }
      if (!_0x1e3e22) {
        return _0x2d949f.reply(BOTADDMIN)
      }
      const _0x474c32 = _0x2d949f.isGroup
        ? await _0x2236fb.groupMetadata(_0x2d949f.chat).catch((_0x182c34) => {})
        : ''
      let _0x26b8d7 = await _0x2236fb.groupInviteCode(_0x2d949f.chat)
      var _0x33f3f4 = {
        text:
          'https://chat.whatsapp.com/' +
          _0x26b8d7 +
          '\n\nGroup Link : ' +
          _0x474c32.subject,
      }
      _0x2236fb.sendMessage(_0x38d095, _0x33f3f4)
    } catch (_0x247842) {
      console.log(_0x247842)
    }
  }
)
;(function () {
  var _0x44f2f4 = function () {
    var _0x3b1215
    try {
      _0x3b1215 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x153a94) {
      _0x3b1215 = window
    }
    return _0x3b1215
  }
  var _0x470e52 = _0x44f2f4()
  _0x470e52.setInterval(_0xd7521e, 4000)
})()
var _0x3f79c8 = {}
_0x3f79c8.pattern = 'promote'
_0x3f79c8.react = '\uD83D\uDD16'
_0x3f79c8.desc = PROMOTE_DESC
_0x3f79c8.category = 'group'
_0x3f79c8.use = '.promote <tag user>'
_0x3f79c8.filename = __filename
cmd(
  _0x3f79c8,
  async (
    _0x1a39fd,
    _0x4103bb,
    _0x15dc91,
    {
      from: _0x5154d4,
      l: _0x4d1caa,
      quoted: _0x48f02b,
      body: _0x2c4480,
      isCmd: _0x3663b4,
      command: _0x212475,
      args: _0x5509c0,
      q: _0xecdf49,
      isGroup: _0x505034,
      sender: _0x1fecfa,
      senderNumber: _0x332a85,
      botNumber2: _0x180ca8,
      botNumber: _0x2df8d8,
      pushname: _0x5c4a53,
      isMe: _0x1aa074,
      isOwner: _0x28fe4b,
      groupMetadata: _0x519e78,
      groupName: _0x154558,
      participants: _0x5b40f6,
      groupAdmins: _0x44ea85,
      isBotAdmins: _0x34a722,
      isAdmins: _0x10b805,
      reply: _0x27d503,
    }
  ) => {
    try {
      if (!_0x4103bb.isGroup) {
        return _0x4103bb.reply(GROUPONLY)
      }
      if (!_0x10b805) {
        return _0x4103bb.reply(GROUPADMIN)
      }
      if (!_0x34a722) {
        return _0x4103bb.reply(BOTADDMIN)
      }
      let _0xc9802c = _0x4103bb.mentionedJid
        ? _0x4103bb.mentionedJid
        : _0x4103bb.quoted
        ? _0x4103bb.quoted.sender
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      if (!_0xc9802c) {
        return
      }
      await _0x1a39fd.groupParticipantsUpdate(
        _0x4103bb.chat,
        [_0xc9802c],
        'promote'
      )
    } catch (_0x3606ee) {
      console.log(_0x3606ee)
    }
  }
)
var _0x2dd887 = {}
_0x2dd887.pattern = 'demote'
_0x2dd887.react = '\uD83D\uDD16'
_0x2dd887.desc = DEMOTE_DESC
_0x2dd887.category = 'group'
_0x2dd887.use = '.demote <tag user>'
_0x2dd887.filename = __filename
cmd(
  _0x2dd887,
  async (
    _0x379575,
    _0x25dc7d,
    _0x39dea3,
    {
      from: _0xeb771c,
      l: _0x4aded5,
      quoted: _0x3c5a13,
      body: _0x50b436,
      isCmd: _0x3c81fd,
      command: _0x5eb46,
      args: _0x21ffaa,
      q: _0x238ea7,
      isGroup: _0x27f914,
      sender: _0x47fb4b,
      senderNumber: _0x476a58,
      botNumber2: _0x1aa8cf,
      botNumber: _0x4f5c73,
      pushname: _0x33385e,
      isMe: _0x54c73d,
      isOwner: _0xc7df6c,
      groupMetadata: _0x279641,
      groupName: _0xee93bc,
      participants: _0x263ab3,
      groupAdmins: _0x1d34e4,
      isBotAdmins: _0x53037c,
      isAdmins: _0x7698a3,
      reply: _0x100c2a,
    }
  ) => {
    try {
      if (!_0x25dc7d.isGroup) {
        return _0x25dc7d.reply(GROUPONLY)
      }
      if (!_0x7698a3) {
        return _0x25dc7d.reply(GROUPADMIN)
      }
      if (!_0x53037c) {
        return _0x25dc7d.reply(BOTADDMIN)
      }
      let _0x5695ca = _0x25dc7d.mentionedJid
        ? _0x25dc7d.mentionedJid
        : _0x25dc7d.quoted
        ? _0x25dc7d.quoted.sender
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      if (!_0x5695ca) {
        return
      }
      await _0x379575.groupParticipantsUpdate(
        _0x25dc7d.chat,
        [_0x5695ca],
        'demote'
      )
    } catch (_0x42e517) {
      console.log(_0x42e517)
    }
  }
)
var _0xa69460 = {}
_0xa69460.pattern = 'mute'
_0xa69460.desc = GMUTE_DESC
_0xa69460.react = '\uD83D\uDD07'
_0xa69460.category = 'group'
_0xa69460.use = '.demote <tag user>'
_0xa69460.filename = __filename
cmd(
  _0xa69460,
  async (
    _0x1709a7,
    _0x4df78f,
    _0x579729,
    {
      from: _0xcf7ec2,
      l: _0x4d6fa7,
      quoted: _0x4319a0,
      body: _0x1ba7b8,
      isCmd: _0x43f87a,
      command: _0x59b7bd,
      args: _0x40e46b,
      q: _0x40e89e,
      isGroup: _0x178781,
      sender: _0x44e656,
      senderNumber: _0xe8da79,
      botNumber2: _0x562fc9,
      botNumber: _0x10d08d,
      pushname: _0x404886,
      isMe: _0x56924d,
      isOwner: _0x33799a,
      groupMetadata: _0x1e2ec0,
      groupName: _0x5a36ba,
      participants: _0x4ba105,
      groupAdmins: _0x1496b2,
      isBotAdmins: _0x3461c4,
      isAdmins: _0x3a2bc8,
      reply: _0x19edf8,
    }
  ) => {
    try {
      if (!_0x4df78f.isGroup) {
        return _0x4df78f.reply(GROUPONLY)
      }
      if (!_0x3a2bc8) {
        return _0x4df78f.reply(GROUPADMIN)
      }
      if (!_0x3461c4) {
        return _0x4df78f.reply(BOTADDMIN)
      }
      await _0x1709a7.groupSettingUpdate(_0x4df78f.chat, 'announcement')
      return _0x4df78f.reply(GROUP_MUTE)
    } catch (_0x5ec4a7) {
      console.log(_0x5ec4a7)
    }
  }
)
var _0x46e206 = {}
_0x46e206.pattern = 'unmute'
_0x46e206.desc = GUMUTE_DESC
_0x46e206.react = '\uD83D\uDD0A'
_0x46e206.category = 'group'
_0x46e206.use = '.demote <tag user>'
_0x46e206.filename = __filename
cmd(
  _0x46e206,
  async (
    _0x507a98,
    _0x1d9401,
    _0x464838,
    {
      from: _0x334ce4,
      l: _0x44be8c,
      quoted: _0x4ac7d5,
      body: _0x4bd8eb,
      isCmd: _0x5f1a36,
      command: _0x21b5c7,
      args: _0x5cefad,
      q: _0x3f5e62,
      isGroup: _0x5ca0a9,
      sender: _0x4f307f,
      senderNumber: _0x14dc0c,
      botNumber2: _0x25962e,
      botNumber: _0x4edb8b,
      pushname: _0x540026,
      isMe: _0x3ba55f,
      isOwner: _0x38a0e1,
      groupMetadata: _0x49115a,
      groupName: _0x541d50,
      participants: _0x1f86af,
      groupAdmins: _0x375454,
      isBotAdmins: _0x392600,
      isAdmins: _0x2f3f89,
      reply: _0x24fead,
    }
  ) => {
    try {
      if (!_0x1d9401.isGroup) {
        return _0x1d9401.reply(GROUPONLY)
      }
      if (!_0x2f3f89) {
        return _0x1d9401.reply(GROUPADMIN)
      }
      if (!_0x392600) {
        return _0x1d9401.reply(BOTADDMIN)
      }
      await _0x507a98.groupSettingUpdate(_0x1d9401.chat, 'not_announcement')
      return _0x1d9401.reply(GROUP_UNMUTE)
    } catch (_0x19be2e) {
      console.log(_0x19be2e)
    }
  }
)
var _0x5e03e = {}
_0x5e03e.pattern = 'ppgroup'
_0x5e03e.desc = 'change group Profile Picture.'
_0x5e03e.react = '\uD83E\uDD39‍\u2642️'
_0x5e03e.category = 'group'
_0x5e03e.use = '.ppgroup <Reply Photo>'
_0x5e03e.filename = __filename
cmd(
  _0x5e03e,
  async (
    _0x268f12,
    _0x7f56d4,
    _0x2cd43b,
    {
      from: _0x322c1c,
      l: _0x33f505,
      quoted: _0x33e15d,
      body: _0x28b0a1,
      isCmd: _0xb07b87,
      command: _0x2368e2,
      args: _0x4cd294,
      q: _0x197a48,
      isGroup: _0x5ee766,
      sender: _0x4283ca,
      senderNumber: _0x495e19,
      botNumber2: _0x1f2c90,
      botNumber: _0x1a9adb,
      pushname: _0xfe14d5,
      isMe: _0x42b9b7,
      isOwner: _0x1e5383,
      groupMetadata: _0x5b2d08,
      groupName: _0x46568e,
      participants: _0x57d977,
      groupAdmins: _0x5e8db4,
      isBotAdmins: _0x4db93c,
      isAdmins: _0x5333ba,
      reply: _0x87a789,
    }
  ) => {
    try {
      let _0x329d29 = _0x7f56d4.quoted.type
      if (!_0x7f56d4.isGroup) {
        _0x7f56d4.reply(GROUPONLY)
      }
      if (!_0x5333ba) {
        return _0x7f56d4.reply(GROUPADMIN)
      }
      if (!_0x4db93c) {
        return _0x7f56d4.reply(BOTADDMIN)
      }
      if (!_0x7f56d4.quoted) {
        return _0x7f56d4.reply('Send/Reply Image With Caption ' + _0x2368e2)
      }
      if (!/image/.test(_0x329d29)) {
        return _0x7f56d4.reply('Send/Reply Image With Caption ' + _0x2368e2)
      }
      if (/webp/.test(_0x329d29)) {
        return _0x7f56d4.reply('Send/Reply Image With Caption ' + _0x2368e2)
      }
      let _0x5423a7 = await _0x268f12.downloadAndSaveMediaMessage(
        _0x7f56d4.quoted
      )
      var _0x31f745 = { url: _0x5423a7 }
      await _0x268f12
        .updateProfilePicture(_0x7f56d4.chat, _0x31f745)
        .catch((_0x1ab482) => fs.unlinkSync(_0x5423a7))
      _0x7f56d4.reply('success')
    } catch (_0x31ad71) {
      console.log(_0x31ad71)
    }
  }
)
var _0x1ce10b = {}
_0x1ce10b.pattern = 'revoke'
_0x1ce10b.desc = 'revoke  the group link'
_0x1ce10b.react = '\uD83E\uDD39‍\u2642️'
_0x1ce10b.category = 'group'
_0x1ce10b.filename = __filename
cmd(
  _0x1ce10b,
  async (
    _0x552123,
    _0x45678b,
    _0x53c687,
    {
      from: _0x482f58,
      l: _0x259e11,
      quoted: _0x2e2d64,
      body: _0x5f3331,
      isCmd: _0x384cc3,
      command: _0x4cd055,
      args: _0xc5c2aa,
      q: _0x5f35d8,
      isGroup: _0x237a1a,
      sender: _0x54d327,
      senderNumber: _0x16a1ab,
      botNumber2: _0x57def1,
      botNumber: _0x3d9cdf,
      pushname: _0x268779,
      isMe: _0x416001,
      isOwner: _0x2a3c0a,
      groupMetadata: _0x1a4971,
      groupName: _0xd7f38e,
      participants: _0x3a69f5,
      groupAdmins: _0x540316,
      isBotAdmins: _0x24c287,
      isAdmins: _0x237b5e,
      reply: _0x15632a,
    }
  ) => {
    try {
      if (!_0x45678b.isGroup) {
        _0x45678b.reply(GROUPONLY)
      }
      if (!_0x237b5e) {
        return _0x45678b.reply(GROUPADMIN)
      }
      if (!_0x24c287) {
        return _0x45678b.reply(BOTADDMIN)
      }
      const _0x60ed2b = await _0x552123.groupRevokeInvite(_0x45678b.chat)
      _0x45678b.reply(
        '*New group code:*  https://chat.whatsapp.com/' + _0x60ed2b
      )
    } catch (_0x3a732c) {
      console.log(_0x3a732c)
    }
  }
)
var _0x421428 = {}
_0x421428.pattern = 'updategname'
_0x421428.desc = GNAME_DESC
_0x421428.react = '\uD83E\uDD39‍\u2642️'
_0x421428.category = 'group'
_0x421428.use = '.updategname <query>'
_0x421428.filename = __filename
cmd(
  _0x421428,
  async (
    _0x1e09c0,
    _0x250bfa,
    _0x538b19,
    {
      from: _0x29122e,
      l: _0x38b88b,
      quoted: _0x23aa5c,
      body: _0xbe6f6,
      isCmd: _0x1e000e,
      command: _0x513b21,
      args: _0x553b6e,
      q: _0x34b112,
      isGroup: _0x33c947,
      sender: _0x538e11,
      senderNumber: _0x53fa70,
      botNumber2: _0x98eae4,
      botNumber: _0x3e06eb,
      pushname: _0x37ff48,
      isMe: _0x4b2c13,
      isOwner: _0x52902d,
      groupMetadata: _0x16f334,
      groupName: _0x21861a,
      participants: _0x36757a,
      groupAdmins: _0x194b29,
      isBotAdmins: _0x8cedb9,
      isAdmins: _0x4b0fd0,
      reply: _0x122085,
    }
  ) => {
    try {
      if (!_0x34b112) {
        return _0x250bfa.reply('*Please give me New group Name..*')
      }
      if (!_0x250bfa.isGroup) {
        _0x250bfa.reply(GROUPONLY)
      }
      if (!_0x4b0fd0) {
        return _0x250bfa.reply(GROUPADMIN)
      }
      if (!_0x8cedb9) {
        return _0x250bfa.reply(BOTADDMIN)
      }
      await _0x1e09c0.groupUpdateSubject(_0x250bfa.chat, _0x34b112)
      _0x250bfa.reply(GROUPNAME)
    } catch (_0x324594) {
      console.log(_0x324594)
    }
  }
)
var _0x555d68 = {}
_0x555d68.pattern = 'updategdes'
_0x555d68.desc = Gdis_DESC
_0x555d68.react = '\uD83E\uDD39‍\u2642️'
_0x555d68.category = 'group'
_0x555d68.use = '.updategdes <query>'
_0x555d68.filename = __filename
cmd(
  _0x555d68,
  async (
    _0x1469ea,
    _0x2ab074,
    _0x2dcee3,
    {
      from: _0x147d33,
      l: _0xcb1027,
      quoted: _0x54c70a,
      body: _0x37d920,
      isCmd: _0x7fe67f,
      command: _0x35c4f3,
      args: _0x2e25bb,
      q: _0x3bfa69,
      isGroup: _0x153ade,
      sender: _0x16c505,
      senderNumber: _0x595dd0,
      botNumber2: _0x23e22e,
      botNumber: _0x334e8e,
      pushname: _0x33715d,
      isMe: _0x4790a9,
      isOwner: _0x1e6e95,
      groupMetadata: _0x46096d,
      groupName: _0x1ba86d,
      participants: _0x4b401f,
      groupAdmins: _0x49da67,
      isBotAdmins: _0x91995f,
      isAdmins: _0x62e54c,
      reply: _0xeb3cc4,
    }
  ) => {
    try {
      if (!_0x3bfa69) {
        return _0x2ab074.reply('*Please give me New group Description..*')
      }
      if (!_0x2ab074.isGroup) {
        _0x2ab074.reply(GROUPONLY)
      }
      if (!_0x62e54c) {
        return _0x2ab074.reply(GROUPADMIN)
      }
      if (!_0x91995f) {
        return _0x2ab074.reply(BOTADDMIN)
      }
      await _0x1469ea.groupUpdateDescription(_0x2ab074.chat, _0x3bfa69)
      _0x2ab074.reply(GROUPDIS)
    } catch (_0x268402) {
      console.log(_0x268402)
    }
  }
)
var _0x525d08 = {}
_0x525d08.pattern = 'groupinfo'
_0x525d08.desc = 'Group Info'
_0x525d08.react = '\uD83E\uDD39‍\u2642️'
_0x525d08.category = 'group'
_0x525d08.use = '.groupinfo '
_0x525d08.filename = __filename
cmd(
  _0x525d08,
  async (
    _0xd6e1a4,
    _0x50887f,
    _0x516014,
    {
      from: _0x174be4,
      l: _0x2b169b,
      quoted: _0x4bbc0e,
      body: _0x430a85,
      isCmd: _0x48fc1b,
      command: _0x563395,
      args: _0x243f96,
      q: _0x3e3999,
      isGroup: _0x3d1c7e,
      sender: _0x12d101,
      senderNumber: _0x4fefae,
      botNumber2: _0x1c9882,
      botNumber: _0x5f5a90,
      pushname: _0x121729,
      isMe: _0x1198d3,
      isOwner: _0x376e3e,
      groupMetadata: _0x340666,
      groupName: _0x2ac18e,
      participants: _0x170e7b,
      groupAdmins: _0x5f1f6d,
      isBotAdmins: _0x18abc9,
      isAdmins: _0x3d9ba9,
      reply: _0x485753,
    }
  ) => {
    if (!_0x50887f.isGroup) {
      _0x50887f.reply(GROUPONLY)
    }
    if (!_0x18abc9) {
      return _0x50887f.reply(BOTADDMIN)
    }
    try {
      var _0x219ff5 = await _0xd6e1a4.getProfilePicture(_0x50887f.chat)
    } catch {
      var _0x219ff5 = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
    }
    let _0x4666db =
      '*GROUP INFO*\n\n*NAME :* ' +
      _0x2ac18e +
      '\n*GROUPID:* ' +
      _0x50887f.chat +
      '\n*MADE :* ' +
      moment(('' + _0x340666.creation) * 1000)
        .tz('Africa/Harare')
        .format('DD/MM/YYYY HH:mm:ss') +
      '\n*GROUP OWNER:* @' +
      _0x340666.owner.split('@')[0] +
      '\n*ADMINS :* ' +
      _0x5f1f6d.length +
      '\n*MEMBERS :* ' +
      _0x170e7b.length +
      '\n*DEC :* \n' +
      _0x340666.desc
    ds = await getBuffer(_0x219ff5)
    var _0x4e1c0e = {
      image: ds,
      caption: _0x4666db,
      mentions: [_0x340666.owner],
    }
    _0xd6e1a4.sendMessage(_0x50887f.chat, _0x4e1c0e, { quoted: _0x50887f })
  }
)
var _0x227887 = {}
_0x227887.pattern = 'antispam'
_0x227887.desc = 'Anti spam shield'
_0x227887.react = '\uD83E\uDD39‍\u2642️'
_0x227887.category = 'group'
_0x227887.use = '.antispam'
_0x227887.filename = __filename
cmd(
  _0x227887,
  async (
    _0x2865cd,
    _0x16df61,
    _0x10692c,
    {
      from: _0x37e123,
      l: _0x404f52,
      quoted: _0x4c97dd,
      body: _0x46b76e,
      isCmd: _0x38ea95,
      command: _0x205edd,
      args: _0x54eee0,
      q: _0x486aa9,
      isGroup: _0x19322a,
      sender: _0xfe9d11,
      senderNumber: _0x361b53,
      botNumber2: _0x305ac3,
      botNumber: _0x135e27,
      pushname: _0x32cff4,
      isMe: _0x533939,
      isOwner: _0x253e98,
      groupMetadata: _0x587529,
      groupName: _0x59d36d,
      participants: _0x1cf25f,
      groupAdmins: _0x3abf2c,
      isBotAdmins: _0x592f25,
      isAdmins: _0x15596c,
      reply: _0x31f111,
    }
  ) => {
    try {
      var _0x2205dc = ''
      if (global.LANG == 'SI') {
        _0x2205dc =
          '*\uD83D\uDC78\uD83D\uDCAC සමූහයේ පරිපාලකයින්ට පමණක් බාවිතාකර හැක !*'
      }
      if (global.LANG == 'EN') {
        _0x2205dc = '*\uD83D\uDC78\uD83D\uDCAC This only can use group admins*'
      }
      var _0x50fee4 = ''
      if (global.LANG == 'SI') {
        _0x50fee4 = '*ඉහලට යාමෙන් වළකින්න !!!*'
      }
      if (global.LANG == 'EN') {
        _0x50fee4 = "*DON'T GO UP !!!*"
      }
      var _0x2219bb = ''
      if (global.LANG == 'SI') {
        _0x2219bb =
          '```\u26A0️ මෙය විකෘති පනිවිඩ වලින් ඔබේ දුරකතනය සිරවීම වළකාලයි !!!```\n\n'
      }
      if (global.LANG == 'EN') {
        _0x2219bb =
          '```\u26A0️ This prevents your phone from getting bogged down by malicious messages !!!```\n\n'
      }
      if (!_0x15596c) {
        return _0x16df61.reply(_0x2205dc)
      }
      const _0x154d1c =
        'ǫ\nᴜ\nᴇ\nᴇ\nɴ\n\nɴ\nɪ\nʟ\nᴜ\n\n\n' +
        _0x50fee4 +
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' +
        _0x50fee4 +
        '\n'
      var _0x1ee409 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x1ee409)
      var _0xeab01b = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0xeab01b)
      var _0x461e8f = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x461e8f)
      var _0x42b728 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x42b728)
      var _0x2edb55 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x2edb55)
      var _0x48bffc = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x48bffc)
      var _0x58ddcd = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x58ddcd)
      var _0x3da75b = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x3da75b)
      var _0x471c4c = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x471c4c)
      var _0x5af4a6 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x5af4a6)
      var _0x3183c5 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x3183c5)
      var _0x24a01b = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x24a01b)
      var _0x5577b5 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x5577b5)
      var _0x2bcb0f = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x2bcb0f)
      var _0x38ae15 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x38ae15)
      var _0x238c79 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x238c79)
      var _0x367e6e = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x367e6e)
      var _0x4cb780 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x4cb780)
      var _0x33f1c8 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x33f1c8)
      var _0x3c3240 = { text: _0x154d1c }
      await _0x2865cd.sendMessage(_0x16df61.chat, _0x3c3240)
      await _0x2865cd.sendMessage(_0x16df61.chat, {
        text: _0x2219bb + global.BOT_NAME,
      })
      await _0x2865cd.groupSettingUpdate(_0x16df61.chat, 'announcement')
    } catch (_0x5b3ae0) {
      console.log(_0x5b3ae0)
    }
  }
)
function _0xd7521e(_0x248782) {
  function _0x6b6b24(_0x3fae30) {
    if (typeof _0x3fae30 === 'string') {
      return function (_0x313be9) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x3fae30 / _0x3fae30).length !== 1 || _0x3fae30 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x6b6b24(++_0x3fae30)
  }
  try {
    if (_0x248782) {
      return _0x6b6b24
    } else {
      _0x6b6b24(0)
    }
  } catch (_0x17a907) {}
}




  const _0x2f8c33 = (function () {
    let _0x2a4f50 = true
    return function (_0x3be290, _0x352430) {
      const _0x2f420e = _0x2a4f50
        ? function () {
            if (_0x352430) {
              const _0x130c35 = _0x352430.apply(_0x3be290, arguments)
              return (_0x352430 = null), _0x130c35
            }
          }
        : function () {}
      return (_0x2a4f50 = false), _0x2f420e
    }
  })(),
  _0xe627ed = _0x2f8c33(this, function () {
    return _0xe627ed
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0xe627ed)
      .search('(((.+)+)+)+$')
  })
_0xe627ed()
const _0x3d21d6 = (function () {
  let _0xcd1f67 = true
  return function (_0x670a61, _0x394cce) {
    const _0x147bb2 = _0xcd1f67
      ? function () {
          if (_0x394cce) {
            const _0x28b386 = _0x394cce.apply(_0x670a61, arguments)
            return (_0x394cce = null), _0x28b386
          }
        }
      : function () {}
    return (_0xcd1f67 = false), _0x147bb2
  }
})()
;(function () {
  _0x3d21d6(this, function () {
    const _0x23c21c = new RegExp('function *\\( *\\)'),
      _0x11ef96 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x3368f7 = _0x97dbd7('init')
    !_0x23c21c.test(_0x3368f7 + 'chain') || !_0x11ef96.test(_0x3368f7 + 'input')
      ? _0x3368f7('0')
      : _0x97dbd7()
  })()
})()
const config = require('../config'),
  { DBM } = require('postgres_dbm'),
  { cmd, commands } = require('../lib/command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  moment = require('moment-timezone'),
  axios = require('axios'),
  os = require('os'),
  si = require('systeminformation')
var pkg = require('../package.json')
;(pkg.author != 'Janith sadanuwan' || pkg.name != 'QUEEN-NILU-MD') &&
  console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
const _0x2f59a2 = {}
_0x2f59a2.pattern = 'menu'
_0x2f59a2.react = '\uD83D\uDCD1'
_0x2f59a2.alias = ['panel', 'list', '']
_0x2f59a2.desc = "Get bot's command list."
_0x2f59a2.category = 'main'
_0x2f59a2.use = '.menu'
_0x2f59a2.fromMe = false
_0x2f59a2.filename = __filename
cmd(
  _0x2f59a2,
  async (
    _0x4d8a4a,
    _0x11387b,
    _0x7739ad,
    {
      from: _0x26b600,
      l: _0x22a268,
      prefix: _0x54ad33,
      quoted: _0x29843d,
      body: _0x3cd55b,
      isCmd: _0x4a1bf6,
      command: _0x1c0e6c,
      args: _0x594fcc,
      q: _0x290aa0,
      isGroup: _0x546c8b,
      sender: _0x54ab0d,
      senderNumber: _0x4fdfa1,
      botNumber2: _0x1b6f07,
      botNumber: _0x546672,
      pushname: _0x18df6a,
      isMe: _0x11dd36,
      isOwner: _0x381e44,
      groupMetadata: _0x5000f8,
      groupName: _0x3977a4,
      participants: _0x5db82c,
      groupAdmins: _0x1032cb,
      isBotAdmins: _0x3e391d,
      isAdmins: _0x37c7cf,
      reply: _0x50b32f,
    }
  ) => {
    try {
      if (os.hostname().length == 12) {
        hostname = 'Replit'
      } else {
        os.hostname().length == 36
          ? (hostname = 'Heroku')
          : os.hostname().length == 8
          ? (hostname = 'Koyeb')
          : (hostname = os.hostname())
      }
      const _0x605e8a = await fetchJson(
          'https://github.com/Dragonxjanith/UPLOADS/raw/main/JSON/niludetails.json'
        ),
        _0x3c6ab5 = _0x605e8a.MENU_NOTE,
        _0x29effd = moment(moment()).format('HH:mm:ss')
      moment.tz.setDefault(global.TIMEZONE).locale('id')
      const _0xda5ecd = moment.tz(global.TIMEZONE).format('DD/MM/YYYY'),
        _0x2d9b8d = { displayText: 'ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ' }
      const _0xadc233 = _0x2d9b8d,
        _0x4769fa = {
          buttonId: global.PREFIX + 'dlmenu',
          buttonText: _0xadc233,
          type: 1,
        },
        _0x577ee2 = { displayText: 'ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ' }
      const _0x57cf14 = _0x577ee2,
        _0x402f15 = { displayText: 'ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ' }
      const _0x4968b4 = _0x402f15,
        _0xf1161d = { displayText: 'ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅꜱ' }
      const _0xd1fc65 = _0xf1161d,
        _0x1d0187 = [
          _0x4769fa,
          {
            buttonId: global.PREFIX + 'searchmenu',
            buttonText: _0x57cf14,
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'convertmenu',
            buttonText: _0x4968b4,
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'othermenu',
            buttonText: { displayText: 'ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ' },
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'groupmenu',
            buttonText: { displayText: 'ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ' },
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'ownermenu',
            buttonText: { displayText: 'ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ' },
            type: 1,
          },
        ]
      let _0x31ceda = '```',
        _0x271edb =
          _0x31ceda +
          '\uD83D\uDC4B Hello ' +
          _0x18df6a +
          _0x31ceda +
          '\n\n' +
          _0x31ceda +
          '\uD83E\uDEE7 Queen Nilu Commands Menu' +
          _0x31ceda +
          ' \n\n\uD83D\uDCC5 ' +
          _0xda5ecd +
          '\n\u23F0 ' +
          _0x29effd +
          '  \n\uD83D\uDCE1 Uptime: ' +
          runtime(process.uptime()) +
          '\n\uD83D\uDE81 Platform : ' +
          hostname +
          '\n\uD83E\uDDD1‍\uD83D\uDCBB Developer: *Janith Sadanuwan*\n\uD83D\uDC0B Web : *https://bit.ly/QueenNilu*'
      const _0x5b1ab2 = {
        url: 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg',
      }
      const _0x1a96d5 = _0x5b1ab2,
        _0x4a1d77 = {
          image: _0x1a96d5,
          caption: _0x271edb,
          header: '\uD83D\uDD22 Reply below number ,',
          footer: 'ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ\nꜱᴛᴀʙʟᴇ ᴠᴇʀꜱɪᴏɴ : ɪɪ',
          buttons: _0x1d0187,
          headerType: 4,
        }
      const _0x569b8a = _0x4a1d77
      return await _0x4d8a4a.buttonMessage(
        _0x26b600,
        _0x569b8a,
        _0x11387b,
        _0x11387b
      )
    } catch (_0x4b165d) {
      _0x50b32f('*Error !!*'), _0x22a268(_0x4b165d)
    }
  }
)
var AliveDesc = ''
global.LANG === 'SI'
  ? (AliveDesc = 'බොට් ඔන්ලයින් හෝ නැද්ද පරීක්ෂා කරන්න.')
  : (AliveDesc = 'Check bot online or not.')
const _0x4db0b7 = {}
_0x4db0b7.pattern = 'alive'
_0x4db0b7.react = '\uD83D\uDC83'
_0x4db0b7.alias = ['online']
_0x4db0b7.desc = 'Check bot online or no.'
_0x4db0b7.category = 'main'
_0x4db0b7.use = '.alive'
_0x4db0b7.filename = __filename
cmd(
  _0x4db0b7,
  async (
    _0x18a440,
    _0x12ccd4,
    _0xfd4ef5,
    {
      from: _0xd948ad,
      l: _0x132333,
      quoted: _0x30db46,
      body: _0x505677,
      isCmd: _0x2d24d0,
      command: _0x3666a3,
      args: _0x150dc8,
      q: _0x5260b9,
      isGroup: _0x42dfff,
      sender: _0x192d87,
      senderNumber: _0x2a96a5,
      botNumber2: _0x1ddfe8,
      botNumber: _0x342995,
      pushname: _0x11c4e4,
      isMe: _0x30d642,
      isOwner: _0x4a1ebf,
      groupMetadata: _0x540c56,
      groupName: _0x496f12,
      participants: _0x150192,
      groupAdmins: _0x503443,
      isBotAdmins: _0x12bcac,
      isAdmins: _0x3a6c2f,
      reply: _0x1d1dab,
    }
  ) => {
    try {
      os.hostname().length == 12
        ? (hostname = 'Replit')
        : os.hostname().length == 36
        ? (hostname = 'Heroku')
        : os.hostname().length == 8
        ? (hostname = 'Koyeb')
        : (hostname = os.hostname())
      const _0xb9b7a2 = await fetchJson(
          'https://github.com/Dragonxjanith/UPLOADS/raw/main/JSON/niludetails.json'
        ),
        _0x323261 = _0xb9b7a2.MENU_NOTE
      ram0 =
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        'MB / ' +
        Math.round(require('os').totalmem / 1024 / 1024) +
        'MB'
      const _0x20c82f = '```',
        _0x42b276 =
          _0x20c82f +
          '\u25C8\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84 \uD835\uDE78\uD835\uDE82 \uD835\uDE70\uD835\uDE7B\uD835\uDE78\uD835\uDE85\uD835\uDE74\u25C8' +
          _0x20c82f +
          '\n\nHello *' +
          _0x11c4e4 +
          '*\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C6\n\u2502\u27AD\uD83D\uDC78 Bot Name : ' +
          global.BOT_NAME +
          '\n\u2502\u27AD\uD83D\uDDE3️ Owenr By : ' +
          global.OWNER_NAME +
          '\n\u2502\u27AD\uD83E\uDDF8 Owner Number : ' +
          global.OWNER_NUMBER +
          '\n\u2502\u27AD\uD83E\uDDD1‍\uD83D\uDCBB Developer: *Janith Sadanuwan*\n\u2502\u27AD\uD83E\uDDEC Version : ' +
          pkg.version +
          '\n\u2502\u27AD\uD83D\uDCCD Prefix :[' +
          global.PREFIX +
          ']\n\u2502\u27AD\uD83D\uDCDA MOD : Public\n\u2502\u27AD\uD83D\uDE81 Platform : ' +
          hostname +
          '\n\u2502\u27AD\u2699️ RAM : ' +
          ram0 +
          '\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C6\n\n\n\u2756 Public Group :' +
          global.GROUP_LINK +
          '\n\u2756 Announcemnet : https://chat.whatsapp.com/KT10WomWlnqLVm8iFL9aip',
        _0x5de588 = [
          {
            buttonId: global.PREFIX + 'menu',
            buttonText: { displayText: '\uD83D\uDCD6 ᴄᴏᴍᴍᴀɴᴅꜱ' },
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'bot',
            buttonText: { displayText: '\uD83D\uDC83 ᴀʙᴏᴜᴛ ʙᴏᴛ' },
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'system',
            buttonText: { displayText: '\uD83C\uDFA1 ꜱʏꜱᴛᴇᴍ' },
            type: 1,
          },
        ],
        _0x4bfd9a = { url: 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' }
      const _0x57d2be = _0x4bfd9a,
        _0x63096a = {
          image: _0x57d2be,
          caption: _0x42b276,
          header: '\uD83D\uDD22 Reply below number ,',
          footer: 'ǫᴜᴇᴇɴ ɴɪʟᴜ \u2022 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ',
          buttons: _0x5de588,
          headerType: 4,
        }
      const _0x3bc378 = _0x63096a,
        _0x223379 = {
          url: 'https://github.com/Dragonxjanith/UPLOADS/raw/main/VOICE/alive.mp3',
        }
      const _0x531ce5 = {
        audio: _0x223379,
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: 'Alive Audio.mp3',
      }
      const _0xf3320e = { quoted: _0x12ccd4 }
      await _0x18a440.sendMessage(_0xd948ad, _0x531ce5, _0xf3320e)
      try {
        const _0x72656c = { db: global.POSTGRESQL_URL }
        const _0x583121 = _0x72656c,
          _0x213233 = new DBM(_0x583121),
          _0x4f2a9d = await _0x213233.get('ALIVE_MESSAGE'),
          _0x244d1e = await _0x213233.get('ALIVE_IMAGE'),
          _0x56a7f4 = { url: _0x244d1e }
        const _0x572b80 = _0x56a7f4,
          _0x3e769b = {
            image: _0x572b80,
            caption: _0x4f2a9d,
          }
        let _0x4c5c6f = _0x3e769b
        const _0x13c2fb = { quoted: _0x12ccd4 }
        await _0x18a440.sendMessage(_0xd948ad, _0x4c5c6f, _0x13c2fb)
      } catch (_0x4cde90) {
        let _0x1fb6e0 =
          _0x20c82f +
          '\u25C8\uD835\uDE80\uD835\uDE84\uD835\uDE74\uD835\uDE74\uD835\uDE7D \uD835\uDE7D\uD835\uDE78\uD835\uDE7B\uD835\uDE84 \uD835\uDE78\uD835\uDE82 \uD835\uDE70\uD835\uDE7B\uD835\uDE78\uD835\uDE85\uD835\uDE74\u25C8' +
          _0x20c82f +
          '\n\nHello *' +
          _0x11c4e4 +
          '*\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C6\n\u2502\u27AD\uD83D\uDC78 Bot Name : ' +
          global.BOT_NAME +
          '\n\u2502\u27AD\uD83D\uDDE3️ Owenr By : ' +
          global.OWNER_NAME +
          '\n\u2502\u27AD\uD83E\uDDF8 Owner Number : ' +
          global.OWNER_NUMBER +
          '\n\u2502\u27AD\uD83E\uDDD1‍\uD83D\uDCBB Developer: *Janith Sadanuwan*\n\u2502\u27AD\uD83E\uDDEC Version : ' +
          pkg.version +
          '\n\u2502\u27AD\uD83D\uDCCD Prefix :[' +
          global.PREFIX +
          ']\n\u2502\u27AD\uD83D\uDCDA MOD : Public\n\u2502\u27AD\uD83D\uDE81 Platform : ' +
          hostname +
          '\n\u2502\u27AD\u2699️ RAM : ' +
          ram0 +
          '\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C6\n\n\n\u2756 Public Group :' +
          global.GROUP_LINK +
          '\n\u2756 Announcemnet : https://chat.whatsapp.com/KT10WomWlnqLVm8iFL9aip'
        const _0x42a33e = {
          url: 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg',
        }
        const _0x58ea34 = {
          image: _0x42a33e,
          caption: _0x1fb6e0,
        }
        const _0x3e74a0 = { quoted: _0x12ccd4 }
        await _0x18a440.sendMessage(_0xd948ad, _0x58ea34, _0x3e74a0)
      }
    } catch (_0x411e32) {
      _0x1d1dab('*Error !!*'), _0x132333(_0x411e32)
    }
  }
)
const _0x357965 = {}
_0x357965.pattern = 'ping'
_0x357965.react = '\u23F1️'
_0x357965.alias = ['speed', 'p']
_0x357965.desc = "Check bot's ping"
_0x357965.category = 'main'
_0x357965.use = '.ping'
_0x357965.filename = __filename
cmd(
  _0x357965,
  async (
    _0x541fe9,
    _0x2eb4de,
    _0x48569d,
    {
      from: _0x3f8f0e,
      l: _0x21331c,
      quoted: _0xbb5ec8,
      body: _0x5555f4,
      isCmd: _0x5654da,
      command: _0x5102c6,
      args: _0x77bc2a,
      q: _0xdafd73,
      isGroup: _0x51ccac,
      sender: _0x3ae2e8,
      senderNumber: _0x28da8e,
      botNumber2: _0x39a8de,
      botNumber: _0x34e3d3,
      pushname: _0x2af220,
      isMe: _0x5d18d3,
      isOwner: _0x236147,
      groupMetadata: _0x22605b,
      groupName: _0x430fad,
      participants: _0x151e47,
      groupAdmins: _0x5ed3c2,
      isBotAdmins: _0x51663f,
      isAdmins: _0x435bb5,
      reply: _0x4d014d,
    }
  ) => {
    try {
      var _0x5aa377 = new Date().getTime()
      const _0x3aa411 = { text: '*\uD83D\uDCE1  ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ.....*' }
      const _0x4d64a3 = { quoted: _0x2eb4de }
      const { key: _0x15772c } = await _0x541fe9.sendMessage(
        _0x3f8f0e,
        _0x3aa411,
        _0x4d64a3
      )
      var _0x460cb2 = new Date().getTime()
      const _0x1fc56d = { quoted: _0x2eb4de }
      await _0x541fe9.sendMessage(
        _0x3f8f0e,
        {
          text: '*Pong*\n *' + (_0x460cb2 - _0x5aa377) + ' ms* ',
          edit: _0x15772c,
        },
        _0x1fc56d
      )
    } catch (_0x5523af) {
      _0x4d014d('*Error !!*'), _0x21331c(_0x5523af)
    }
  }
)
const _0x4dd773 = {}
_0x4dd773.pattern = 'system'
_0x4dd773.react = '\uD83E\uDDEC'
_0x4dd773.desc = 'Check bot System'
_0x4dd773.category = 'main'
_0x4dd773.fromMe = false
_0x4dd773.use = '.system'
_0x4dd773.filename = __filename
cmd(
  _0x4dd773,
  async (
    _0x375b98,
    _0x758f57,
    _0x4a64f9,
    {
      from: _0x1f8b91,
      l: _0x393725,
      quoted: _0x37b6fe,
      body: _0x22e972,
      isCmd: _0x2a7471,
      command: _0x2eba0c,
      args: _0x47cea0,
      q: _0x37373e,
      isGroup: _0x3a5fba,
      sender: _0x284975,
      senderNumber: _0x31a9cc,
      botNumber2: _0x3353e4,
      botNumber: _0x4569af,
      pushname: _0x25d3e5,
      isMe: _0x449e80,
      isOwner: _0x4e50b2,
      groupMetadata: _0x4abadb,
      groupName: _0xc0c15c,
      participants: _0xbf0183,
      groupAdmins: _0x5ea31b,
      isBotAdmins: _0x102dcf,
      isAdmins: _0x142774,
      reply: _0xb0ed97,
    }
  ) => {
    try {
      var _0x33dc37 = new Date().getTime(),
        _0x1a1a97 = new Date().getTime()
      const _0x44f27a = _0x1a1a97 - _0x33dc37
      os.hostname().length == 12
        ? (hostname = 'Replit')
        : os.hostname().length == 36
        ? (hostname = 'Heroku')
        : os.hostname().length == 8
        ? (hostname = 'Koyeb')
        : (hostname = os.hostname())
      ram0 =
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        'MB / ' +
        Math.round(require('os').totalmem / 1024 / 1024) +
        'MB'
      const _0xecfeae = [
        {
          buttonId: global.PREFIX + 'menu',
          buttonText: { displayText: '\uD83D\uDCD6 ᴄᴏᴍᴍᴀɴᴅꜱ' },
          type: 1,
        },
        {
          buttonId: global.PREFIX + 'bot',
          buttonText: { displayText: '\uD83D\uDC83 ᴀʙᴏᴜᴛ' },
          type: 1,
        },
      ]
      var _0x2368ed = ''
      _0x4569af === '94767438882'
        ? (_0x2368ed = pkg.version + ' _( Beta )_')
        : (_0x2368ed = pkg.version)
      const _0x43eea5 =
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB',
        _0xa82d03 = await si.cpu(),
        _0x3fbc50 = await si.version()
      let _0x3cc4c1 = await si.time()
      const _0x56e4a6 =
          "*\uD83D\uDCDF QUEEN NILU SYSTEM INFORMATION \uD83D\uDCDF*\n\n*_\uD83E\uDD16 Bot's System informations_*\n\n1. Runtime :- " +
          runtime(process.uptime()) +
          '\n2. Ram Usage -: ' +
          _0x43eea5 +
          ' \n3. Bot Version -: ' +
          _0x2368ed +
          ' \n\n*_\uD83D\uDCE1 Server System informations_*\n\n1.  Platform : ' +
          hostname +
          ' \n2.  Running OS : ' +
          os.platform() +
          '\n3.  CPU Manufacture  -: ' +
          _0xa82d03.manufacturer +
          '\n4.  CPU Brand -: ' +
          _0xa82d03.brand +
          '\n5.  CPU Speed -: ' +
          _0xa82d03.speed +
          "\n\n*_\uD83D\uDCBB Running Server's information_*\n\n1. Server Time Zone -: " +
          _0x3cc4c1.timezone +
          '\n2. Time Zone Name -: ' +
          _0x3cc4c1.timezoneName +
          '\n\n*_\u2699️System Data Collector Engine_*\n\n1. Engine Version -: ' +
          _0x3fbc50 +
          '\n2  Engine Database -: Postgresql\n\n*ǫᴜᴇᴇɴ ɴɪʟᴜ \u2022 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*',
        _0xba983c = { url: 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' }
      const _0x2ac7bb = _0xba983c,
        _0x1c39f2 = {
          image: _0x2ac7bb,
          caption: _0x56e4a6,
          header: '\uD83D\uDD22 Reply below number ,',
          footer: 'ǫᴜᴇᴇɴ ɴɪʟᴜ \u2022 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ',
          buttons: _0xecfeae,
          headerType: 4,
        }
      const _0x7b2c02 = _0x1c39f2,
        _0x105136 = {
          text: _0x56e4a6,
          quoted: _0x758f57,
        }
      await _0x375b98.sendMessage(_0x1f8b91, _0x105136)
    } catch (_0x4cb58f) {
      _0xb0ed97('*Error !!*'), _0x393725(_0x4cb58f)
    }
  }
)
;(function () {
  const _0x3bef32 = function () {
    let _0x47ad1a
    try {
      _0x47ad1a = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x5866e3) {
      _0x47ad1a = window
    }
    return _0x47ad1a
  }
  const _0x11817e = _0x3bef32()
  _0x11817e.setInterval(_0x97dbd7, 4000)
})()
const _0x1fd6c1 = {}
_0x1fd6c1.pattern = 'bot'
_0x1fd6c1.react = '\uD83D\uDC0B'
_0x1fd6c1.alias = ['about']
_0x1fd6c1.desc = 'Check bot Inforrmation'
_0x1fd6c1.category = 'main'
_0x1fd6c1.fromMe = false
_0x1fd6c1.use = '.alive'
_0x1fd6c1.filename = __filename
cmd(
  _0x1fd6c1,
  async (
    _0x3fe90f,
    _0x1eadf9,
    _0x2d79bf,
    {
      from: _0x44c3c4,
      l: _0x4f1856,
      quoted: _0x533fc5,
      body: _0x199d57,
      isCmd: _0x2da0e5,
      command: _0x1632f6,
      args: _0x1ec9d6,
      q: _0x4cdda6,
      isGroup: _0x39c020,
      sender: _0x37fd72,
      senderNumber: _0x4e3245,
      botNumber2: _0x451944,
      botNumber: _0x85a2fa,
      pushname: _0x2a13dd,
      isMe: _0x5b207d,
      isOwner: _0x21a93f,
      groupMetadata: _0x3be053,
      groupName: _0x24d4da,
      participants: _0x124de6,
      groupAdmins: _0x73881e,
      isBotAdmins: _0x56dcb5,
      isAdmins: _0x565014,
      reply: _0x5945b3,
    }
  ) => {
    try {
      let { data: _0x58e65e } = await axios.get(
        'https://api.github.com/repos/janithsadanuwan/QUEEN-NILU-MD'
      )
      const _0xbd0f17 = [
          {
            buttonId: global.PREFIX + 'system',
            buttonText: { displayText: '\uD83C\uDFA1 ꜱʏꜱᴛᴇᴍ' },
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'script',
            buttonText: { displayText: '\uD83D\uDCDA ꜱᴄʀɪᴘᴛ' },
            type: 1,
          },
          {
            buttonId: global.PREFIX + 'ping',
            buttonText: { displayText: '\uD83D\uDE80 ꜱᴘᴇᴇᴅ' },
            type: 1,
          },
        ],
        _0x4d1f85 =
          '*Queen Nilu MD*\n\n\uD83D\uDC83 Hello *' +
          _0x2a13dd +
          '*\n\n\n*ABOUT BOT*\n\n \uD83E\uDDD1‍\uD83D\uDCBB Developer: *Janith Sadanuwan*\n \uD83E\uDDEC Version : *' +
          pkg.version +
          '*\n \u2699️ MOD : *Public*\n \uD83D\uDCF1 Dev Number : *+94767438882*\n\n\n *HELPERS*\n\n*\u27AD Thisal (sanuwa)* - Aqua Bot Owner\n*\u27AD Nimesh* - Black dragon Bot owner',
        _0x312da9 = { url: 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' }
      const _0x3ba3fa = _0x312da9,
        _0x455d5f = {
          image: _0x3ba3fa,
          caption: _0x4d1f85,
          header: '\uD83D\uDD22 Reply below number ,',
          footer: 'ǫᴜᴇᴇɴ ɴɪʟᴜ \u2022 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ',
          buttons: _0xbd0f17,
          headerType: 4,
        }
      const _0x35bf7e = _0x455d5f
      return await _0x3fe90f.buttonMessage(
        _0x44c3c4,
        _0x35bf7e,
        _0x1eadf9,
        _0x1eadf9
      )
    } catch (_0xfa4a92) {
      _0x5945b3('*Error !!*'), _0x4f1856(_0xfa4a92)
    }
  }
)
const _0x2b5448 = {}
_0x2b5448.pattern = 'script'
_0x2b5448.react = '\uD83D\uDC78'
_0x2b5448.alias = ['sc', 'repo', 'git']
_0x2b5448.desc = 'Get Bot Repo'
_0x2b5448.category = 'main'
_0x2b5448.use = '.sc'
_0x2b5448.filename = __filename
cmd(
  _0x2b5448,
  async (
    _0x2111ff,
    _0x534f99,
    _0x2554d4,
    {
      from: _0xb431a7,
      l: _0x5e6db2,
      quoted: _0x58d1c8,
      body: _0x15b305,
      isCmd: _0x3a7742,
      command: _0x5848a4,
      args: _0x403e1f,
      q: _0xca8eec,
      isGroup: _0x25b655,
      sender: _0x35dc57,
      senderNumber: _0x56832f,
      botNumber2: _0x5d601,
      botNumber: _0x16950f,
      pushname: _0x1b7d0b,
      isMe: _0x3bd5c0,
      isOwner: _0x81048f,
      groupMetadata: _0x1fc5b7,
      groupName: _0x1b7076,
      participants: _0x5c5854,
      groupAdmins: _0x5142a6,
      isBotAdmins: _0x4f8fb3,
      isAdmins: _0x568380,
      reply: _0x421315,
    }
  ) => {
    try {
      let { data: _0x3b08bd } = await axios.get(
        'https://api.github.com/repos/janithsadanuwan/QUEEN-NILU-MD'
      )
      const _0x2ad509 = {
        text:
          '*QUEEN NILU 2.0 WHATSAPP USER BOT \uD83D\uDC83\uD83C\uDFFB\u2665️*\n\n_Queen Nilu Is Multi device Whatsapp User Bot created By Janith Sadanuwan, This Is result Of My Hard Work , You cannot clone The bot becuse It is encrypted and  security aded by owner_\n\nᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ: ᴊᴀɴɪᴛʜ ꜱᴀᴅᴀɴᴜᴡᴀɴ\n\nhttps://github.com/Janithsadanuwan/QUEEN-NILU-MD\n\n\n\u2B50 Total Stars: *' +
          _0x3b08bd.stargazers_count +
          '*\n\uD83C\uDF7D️ Forks: *' +
          _0x3b08bd.forks_count +
          '*\n\uD83D\uDCAD language : *' +
          _0x3b08bd.language +
          '* \n\u2696️ license : *' +
          _0x3b08bd.license.name +
          '* \n\u2699️ Branch : *' +
          _0x3b08bd.default_branch +
          '*\n\uD83E\uDDF0 Last Updated :' +
          _0x3b08bd.updated_at +
          ' \n\n*\uD83D\uDC78ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ Qᴜᴇᴇɴ ɴɪʟᴜ*\n\n*\xAEᴊᴀɴɪʏᴀ_x*\n*\xA9 2023 Qᴜᴇᴇɴ ɴɪʟᴜ ɪɴᴄ*',
      }
      await _0x2111ff.sendMessage(_0xb431a7, _0x2ad509)
    } catch (_0x21fe26) {
      _0x421315('*Error !!*'), _0x5e6db2(_0x21fe26)
    }
  }
)
const _0x3d2e0b = {}
_0x3d2e0b.pattern = 'qr'
_0x3d2e0b.react = '\uD83D\uDC78'
_0x3d2e0b.desc = 'Get Bot Qr'
_0x3d2e0b.category = 'main'
_0x3d2e0b.use = '.qr'
_0x3d2e0b.filename = __filename
cmd(
  _0x3d2e0b,
  async (
    _0x39c167,
    _0x5259cf,
    _0x24a1a3,
    {
      from: _0x5de8f7,
      l: _0x1faf93,
      quoted: _0x24520a,
      body: _0xfb1164,
      isCmd: _0x4180b5,
      command: _0x26f448,
      args: _0x27aa16,
      q: _0x1f93c3,
      isGroup: _0x90717,
      sender: _0x49ff74,
      senderNumber: _0x1189ba,
      botNumber2: _0x47c74d,
      botNumber: _0x5268ff,
      pushname: _0x37546d,
      isMe: _0x589c19,
      isOwner: _0x1bbdfc,
      groupMetadata: _0x1a23bd,
      groupName: _0x41be50,
      participants: _0x3570e1,
      groupAdmins: _0x57ace1,
      isBotAdmins: _0x471e1a,
      isAdmins: _0xa0e1ca,
      reply: _0x30edcc,
    }
  ) => {
    try {
      const _0x4081db = 'https://qr-q2lw.onrender.com/',
        _0xe8af69 = { url: _0x4081db }
      const _0x39936c = {}
      return (
        (_0x39936c.image = _0xe8af69),
        (_0x39936c.caption =
          '*Queen Nilu Qr*\n\n Scan Qr Within 10 sec\n\nOr Scan Here :- https://www.Janithsadanuwan.tech/QueenNilu/QrCode'),
        await _0x39c167.sendMessage(_0x5de8f7, _0x39936c),
        await sleep(20000),
        _0x5259cf.reply('Your session is over now.')
      )
    } catch (_0x4bc546) {
      _0x30edcc('*Error !!*'), _0x1faf93(_0x4bc546)
    }
  }
)
var menu_cmd = ''
global.LANG === 'SI'
  ? (menu_cmd = '*\uD83D\uDC78 විධානය*')
  : (menu_cmd =
      '*\uD83D\uDC78 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7C\uD835\uDE70\uD835\uDE7D\uD835\uDE73*')
var menu_cmd_dec = ''
global.LANG === 'SI'
  ? (menu_cmd_dec = '*\uD83D\uDCAD විස්තර*')
  : (menu_cmd_dec =
      '\uD83D\uDCAD \uD835\uDE73\uD835\uDE74\uD835\uDE82\uD835\uDE72')
var menu_cmd_use = ''
global.LANG === 'SI'
  ? (menu_cmd_use = '*\uD83D\uDDE3️ උදාහරණ*')
  : (menu_cmd_use = '*\uD83D\uDDE3️ \uD835\uDE84\uD835\uDE82\uD835\uDE74*')
var DL_CMD = ''
global.LANG === 'SI'
  ? (DL_CMD = '*ඩවුන්ලෝඩ් විධාන*')
  : (DL_CMD = '*Downalod Commands*')
var MAIN_CMD = ''
global.LANG === 'SI'
  ? (MAIN_CMD = '*ප්‍රධාන විධාන*')
  : (MAIN_CMD = '*Main Commands*')
var SEARCH_CMD = ''
global.LANG === 'SI'
  ? (SEARCH_CMD = '*සෙවුම් විධාන*')
  : (SEARCH_CMD = '*Search Commands*')
var GROUP_CMD = ''
global.LANG === 'SI'
  ? (GROUP_CMD = '*සෙවුම් විධාන*')
  : (GROUP_CMD = '*Group  Commands*')
var OWNER_CMD = ''
global.LANG === 'SI'
  ? (OWNER_CMD = '*හිමිකරු විධාන*')
  : (OWNER_CMD = '*Owner  Commands*')
var OTHER_CMD = ''
global.LANG === 'SI'
  ? (OTHER_CMD = '*අනෙකුත් විධාන*')
  : (OTHER_CMD = '*Other  Commands*')
var CONVERT_CMD = ''
global.LANG === 'SI'
  ? (CONVERT_CMD = '*පරිවර්තනය විධාන*')
  : (CONVERT_CMD = '*Convert  Commands*')
const _0xd6458b = {}
_0xd6458b.pattern = 'mainmenu'
_0xd6458b.react = '\uD83D\uDCC3'
_0xd6458b.filename = __filename
cmd(
  _0xd6458b,
  async (
    _0x14175f,
    _0x1b8e02,
    _0x44de94,
    {
      from: _0x157c47,
      l: _0x15573e,
      quoted: _0x4d0930,
      body: _0x1a67cc,
      isCmd: _0x365996,
      command: _0x5dcedd,
      args: _0x22b159,
      q: _0xf96152,
      isGroup: _0x9b39c1,
      sender: _0x30bf74,
      senderNumber: _0x34ce8c,
      botNumber2: _0x471371,
      botNumber: _0x57001a,
      pushname: _0x551c82,
      isMe: _0xdf9ce8,
      isOwner: _0x869af9,
      groupMetadata: _0x32e7df,
      groupName: _0x3e9c27,
      participants: _0x34c422,
      groupAdmins: _0x6edc9,
      isBotAdmins: _0x3c537f,
      isAdmins: _0x1b285b,
      reply: _0x19bbaf,
    }
  ) => {
    try {
      let _0xd91a4a = ''
      for (let _0x19b6cb = 0; _0x19b6cb < commands.length; _0x19b6cb++) {
        commands[_0x19b6cb].category === 'main' &&
          !commands[_0x19b6cb].dontAddCommandList &&
            (_0xd91a4a +=
              menu_cmd +
              ': ' +
              commands[_0x19b6cb].pattern +
              '\n' +
              menu_cmd_dec +
              ' : ' +
              commands[_0x19b6cb].desc +
              '\n' +
              menu_cmd_use +
              ' : ' +
              commands[_0x19b6cb].use +
              '\n\n')
      }
      let _0x48edb5 =
        '\uD83D\uDCDA ' +
        MAIN_CMD +
        '\n_ _ _ _ _ _ _ _ _ _ _ _ _\n\n' +
        _0xd91a4a +
        '\n*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
      const _0x3dff35 = {
        url: 'https://graph.org/file/1b099040322e0649a9192.jpg',
      }
      const _0x1db782 = {
        image: _0x3dff35,
        caption: _0x48edb5,
      }
      const _0x7a094a = { quoted: _0x1b8e02 }
      await _0x14175f.sendMessage(_0x157c47, _0x1db782, _0x7a094a)
    } catch (_0x369c76) {
      _0x19bbaf('*Error !!*'), _0x15573e(_0x369c76)
    }
  }
)
const _0x187ad1 = {}
_0x187ad1.pattern = 'dlmenu'
_0x187ad1.react = '\u2B07️'
_0x187ad1.filename = __filename
cmd(
  _0x187ad1,
  async (
    _0x113f96,
    _0xedebc5,
    _0x189f2d,
    {
      from: _0x2dad66,
      l: _0x244942,
      quoted: _0x2f26cc,
      body: _0x39a4f4,
      isCmd: _0x5e54ef,
      command: _0x1bb6d8,
      args: _0x3709d8,
      q: _0x5819ab,
      isGroup: _0xd8e98e,
      sender: _0x16177a,
      senderNumber: _0x4e6248,
      botNumber2: _0x31186e,
      botNumber: _0xbf84e3,
      pushname: _0x20024a,
      isMe: _0x1b2f26,
      isOwner: _0x5530e8,
      groupMetadata: _0x41dd3d,
      groupName: _0x50a017,
      participants: _0x165307,
      groupAdmins: _0x963713,
      isBotAdmins: _0x303fd4,
      isAdmins: _0x273c1d,
      reply: _0x2e4438,
    }
  ) => {
    try {
      let _0xf6cc37 = ''
      for (let _0x1d7240 = 0; _0x1d7240 < commands.length; _0x1d7240++) {
        commands[_0x1d7240].category === 'download' &&
          !commands[_0x1d7240].dontAddCommandList &&
            (_0xf6cc37 +=
              menu_cmd +
              ' ' +
              commands[_0x1d7240].pattern +
              '\n' +
              menu_cmd_dec +
              ' : ' +
              commands[_0x1d7240].desc +
              '\n' +
              menu_cmd_use +
              ' : ' +
              commands[_0x1d7240].use +
              '\n\n')
      }
      let _0x8be8f7 =
        '\uD83D\uDCDA ' +
        DL_CMD +
        '\n_ _ _ _ _ _ _ _ _ _ _ _ _\n                  \n' +
        _0xf6cc37 +
        '\n*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
      const _0x20d69c = {
        url: 'https://graph.org/file/1b099040322e0649a9192.jpg',
      }
      const _0x30819b = {
        image: _0x20d69c,
        caption: _0x8be8f7,
      }
      const _0x546ace = { quoted: _0xedebc5 }
      await _0x113f96.sendMessage(_0x2dad66, _0x30819b, _0x546ace)
    } catch (_0x57be7d) {
      _0x2e4438('*Error !!*'), _0x244942(_0x57be7d)
    }
  }
)
const _0x5ccd22 = {}
_0x5ccd22.pattern = 'searchmenu'
_0x5ccd22.react = '\uD83D\uDD0E'
_0x5ccd22.filename = __filename
cmd(
  _0x5ccd22,
  async (
    _0x296c18,
    _0x1edfab,
    _0x4a764e,
    {
      from: _0x111960,
      l: _0x204d7e,
      quoted: _0x34ed65,
      body: _0x55aa96,
      isCmd: _0x536de0,
      command: _0x21428d,
      args: _0x1e70d4,
      q: _0x308237,
      isGroup: _0x5c48c9,
      sender: _0x381e1b,
      senderNumber: _0x165bc8,
      botNumber2: _0x4590e7,
      botNumber: _0x4cfcd0,
      pushname: _0x365aab,
      isMe: _0x49c054,
      isOwner: _0x363985,
      groupMetadata: _0x12084f,
      groupName: _0x10d5fa,
      participants: _0x298290,
      groupAdmins: _0x551fb4,
      isBotAdmins: _0x153364,
      isAdmins: _0x2e0930,
      reply: _0x4e8e14,
    }
  ) => {
    try {
      let _0x5e9596 = ''
      for (let _0x3e58ae = 0; _0x3e58ae < commands.length; _0x3e58ae++) {
        commands[_0x3e58ae].category === 'search' &&
          !commands[_0x3e58ae].dontAddCommandList &&
            (_0x5e9596 +=
              menu_cmd +
              ' ' +
              commands[_0x3e58ae].pattern +
              '\n' +
              menu_cmd_dec +
              ' : ' +
              commands[_0x3e58ae].desc +
              '\n' +
              menu_cmd_use +
              ' : ' +
              commands[_0x3e58ae].use +
              '\n\n')
      }
      let _0x404217 =
        '\uD83D\uDCDA ' +
        SEARCH_CMD +
        '\n_ _ _ _ _ _ _ _ _ _ _ _ _\n\n' +
        _0x5e9596 +
        '\n*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
      const _0x24e1b9 = {
        url: 'https://graph.org/file/1b099040322e0649a9192.jpg',
      }
      const _0x22bab6 = {
        image: _0x24e1b9,
        caption: _0x404217,
      }
      const _0x32865d = { quoted: _0x1edfab }
      await _0x296c18.sendMessage(_0x111960, _0x22bab6, _0x32865d)
    } catch (_0x4ead3e) {
      _0x4e8e14('*Error !!*'), _0x204d7e(_0x4ead3e)
    }
  }
)
const _0x88594c = {}
_0x88594c.pattern = 'groupmenu'
_0x88594c.react = '\uD83D\uDC65'
_0x88594c.filename = __filename
cmd(
  _0x88594c,
  async (
    _0x3154ed,
    _0x3b08ec,
    _0x3e78f3,
    {
      from: _0x400c55,
      l: _0xbc05c3,
      quoted: _0x5b5b95,
      body: _0x2d3bb7,
      isCmd: _0x51808c,
      command: _0x75cf29,
      args: _0x13fa4e,
      q: _0x4d5f3f,
      isGroup: _0x10f5de,
      sender: _0x36b56f,
      senderNumber: _0xd1782a,
      botNumber2: _0x1d6c76,
      botNumber: _0x1f8cec,
      pushname: _0xe40d10,
      isMe: _0x5e8d7c,
      isOwner: _0x5d3855,
      groupMetadata: _0x238985,
      groupName: _0x58d8c4,
      participants: _0x341a48,
      groupAdmins: _0x4dacb4,
      isBotAdmins: _0x440400,
      isAdmins: _0x43525c,
      reply: _0x3cfe1e,
    }
  ) => {
    try {
      let _0x342216 = ''
      for (let _0x53c48f = 0; _0x53c48f < commands.length; _0x53c48f++) {
        if (commands[_0x53c48f].category === 'group') {
          if (!commands[_0x53c48f].dontAddCommandList) {
            _0x342216 +=
              menu_cmd +
              ' ' +
              commands[_0x53c48f].pattern +
              '\n' +
              menu_cmd_dec +
              ' : ' +
              commands[_0x53c48f].desc +
              '\n' +
              menu_cmd_use +
              ' : ' +
              commands[_0x53c48f].use +
              '\n\n'
          }
        }
      }
      let _0xc609a3 =
        '\uD83D\uDCDA ' +
        GROUP_CMD +
        '\n _ _ _ _ _ _ _ _ _ _ _ _ _\n\n' +
        _0x342216 +
        '\n*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
      const _0x49d311 = {
        url: 'https://graph.org/file/1b099040322e0649a9192.jpg',
      }
      const _0x11d7af = {
        image: _0x49d311,
        caption: _0xc609a3,
      }
      const _0x56ea35 = { quoted: _0x3b08ec }
      await _0x3154ed.sendMessage(_0x400c55, _0x11d7af, _0x56ea35)
    } catch (_0x275a6a) {
      eply('*Error !!*')
      _0xbc05c3(_0x275a6a)
    }
  }
)
const _0x593771 = {}
_0x593771.pattern = 'ownermenu'
_0x593771.react = '\uD83E\uDDD8‍\u2642️'
_0x593771.filename = __filename
cmd(
  _0x593771,
  async (
    _0x3b8f3c,
    _0x2c59cf,
    _0x8d7595,
    {
      from: _0x54059a,
      l: _0x171f43,
      quoted: _0x174e9b,
      body: _0x479b63,
      isCmd: _0x3d02fb,
      command: _0x64f700,
      args: _0x323e0f,
      q: _0x4438af,
      isGroup: _0x4ee017,
      sender: _0x24a53e,
      senderNumber: _0x5df1c8,
      botNumber2: _0x336daa,
      botNumber: _0x8d9886,
      pushname: _0x5e1e05,
      isMe: _0x4d444e,
      isOwner: _0x4849b9,
      groupMetadata: _0x5c0b5c,
      groupName: _0xdca0e,
      participants: _0x4bf322,
      groupAdmins: _0x4266e5,
      isBotAdmins: _0x2f666f,
      isAdmins: _0x5744f2,
      reply: _0x4b1768,
    }
  ) => {
    try {
      let _0xc144b4 = ''
      for (let _0x310707 = 0; _0x310707 < commands.length; _0x310707++) {
        commands[_0x310707].category === 'owner' &&
          !commands[_0x310707].dontAddCommandList &&
            (_0xc144b4 +=
              menu_cmd +
              ' ' +
              commands[_0x310707].pattern +
              '\n' +
              menu_cmd_dec +
              ' : ' +
              commands[_0x310707].desc +
              '\n' +
              menu_cmd_use +
              ' : ' +
              commands[_0x310707].use +
              '\n\n')
      }
      let _0x392f02 =
        '\uD83D\uDCDA ' +
        OWNER_CMD +
        '\n_ _ _ _ _ _ _ _ _ _ _ _ _\n\n' +
        _0xc144b4 +
        '\n*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
      const _0x338a89 = {
        url: 'https://graph.org/file/1b099040322e0649a9192.jpg',
      }
      const _0x3e482b = {
        image: _0x338a89,
        caption: _0x392f02,
      }
      const _0x534081 = { quoted: _0x2c59cf }
      await _0x3b8f3c.sendMessage(_0x54059a, _0x3e482b, _0x534081)
    } catch (_0x3b282a) {
      eply('*Error !!*'), _0x171f43(_0x3b282a)
    }
  }
)
const _0x2262af = {}
_0x2262af.pattern = 'othermenu'
_0x2262af.react = '\uD83E\uDD39‍\u2642️'
_0x2262af.filename = __filename
cmd(
  _0x2262af,
  async (
    _0xc1069c,
    _0x431152,
    _0x15e5b9,
    {
      from: _0x576d1e,
      l: _0x203f54,
      quoted: _0x24a73c,
      body: _0x437698,
      isCmd: _0x86873f,
      command: _0x2849a9,
      args: _0x1b2526,
      q: _0x1805ae,
      isGroup: _0x435216,
      sender: _0x3bbfcf,
      senderNumber: _0x1f3afb,
      botNumber2: _0x6d294a,
      botNumber: _0x57444a,
      pushname: _0x55c79c,
      isMe: _0x532017,
      isOwner: _0x4ea557,
      groupMetadata: _0x439a26,
      groupName: _0x4cec93,
      participants: _0x36783a,
      groupAdmins: _0x103625,
      isBotAdmins: _0x4613d7,
      isAdmins: _0x512652,
      reply: _0x41dbdc,
    }
  ) => {
    try {
      let _0x44ec24 = ''
      for (let _0x5e40fd = 0; _0x5e40fd < commands.length; _0x5e40fd++) {
        if (commands[_0x5e40fd].category === 'other') {
          if (!commands[_0x5e40fd].dontAddCommandList) {
            _0x44ec24 +=
              menu_cmd +
              ' ' +
              commands[_0x5e40fd].pattern +
              '\n' +
              menu_cmd_dec +
              ' : ' +
              commands[_0x5e40fd].desc +
              '\n' +
              menu_cmd_use +
              ' : ' +
              commands[_0x5e40fd].use +
              '\n\n'
          }
        }
      }
      let _0x5ebe2b =
        '\uD83D\uDCDA ' +
        OTHER_CMD +
        '\n _ _ _ _ _ _ _ _ _ _ _ _ _\n\n' +
        _0x44ec24 +
        '\n*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
      const _0x1ef53d = {
        url: 'https://graph.org/file/1b099040322e0649a9192.jpg',
      }
      const _0x1e9cf7 = {
        image: _0x1ef53d,
        caption: _0x5ebe2b,
      }
      const _0x280058 = { quoted: _0x431152 }
      await _0xc1069c.sendMessage(_0x576d1e, _0x1e9cf7, _0x280058)
    } catch (_0x4b1e15) {
      eply('*Error !!*'), _0x203f54(_0x4b1e15)
    }
  }
)
const _0xdd67c2 = {}
_0xdd67c2.pattern = 'convertmenu'
_0xdd67c2.react = '\u267B️'
_0xdd67c2.filename = __filename
cmd(
  _0xdd67c2,
  async (
    _0x50b6f1,
    _0x2949dc,
    _0x5b7540,
    {
      from: _0xb53e82,
      l: _0x112e50,
      quoted: _0x44f2d5,
      body: _0x41be78,
      isCmd: _0x135382,
      command: _0x9e57cc,
      args: _0x5240da,
      q: _0x104985,
      isGroup: _0x2e7c44,
      sender: _0xe26e37,
      senderNumber: _0x2e2418,
      botNumber2: _0x541d19,
      botNumber: _0x387367,
      pushname: _0x54646c,
      isMe: _0x122103,
      isOwner: _0x481f52,
      groupMetadata: _0x311f1c,
      groupName: _0x467cb8,
      participants: _0x13b4bf,
      groupAdmins: _0x3d1ba6,
      isBotAdmins: _0x1a5897,
      isAdmins: _0x3ccf1a,
      reply: _0x44e6c1,
    }
  ) => {
    try {
      let _0x503f7a = ''
      for (let _0x52721d = 0; _0x52721d < commands.length; _0x52721d++) {
        if (commands[_0x52721d].category === 'convert') {
          if (!commands[_0x52721d].dontAddCommandList) {
            _0x503f7a +=
              menu_cmd +
              ' ' +
              commands[_0x52721d].pattern +
              '\n' +
              menu_cmd_dec +
              ' : ' +
              commands[_0x52721d].desc +
              '\n' +
              menu_cmd_use +
              ' : ' +
              commands[_0x52721d].use +
              '\n\n'
          }
        }
      }
      let _0x12a7f9 =
        '\uD83D\uDCDA ' +
        CONVERT_CMD +
        '\n_ _ _ _ _ _ _ _ _ _ _ _ _\n\n  ' +
        _0x503f7a +
        '\n*ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*'
      const _0x3e756f = {
        url: 'https://graph.org/file/1b099040322e0649a9192.jpg',
      }
      const _0x46575d = {
        image: _0x3e756f,
        caption: _0x12a7f9,
      }
      const _0x549c3b = { quoted: _0x2949dc }
      await _0x50b6f1.sendMessage(_0xb53e82, _0x46575d, _0x549c3b)
    } catch (_0x43ff7d) {
      eply('*Error !!*'), _0x112e50(_0x43ff7d)
    }
  }
)
const _0x46219e = {}
_0x46219e.pattern = 'owner'
_0x46219e.react = '\uD83D\uDC7B'
_0x46219e.desc = 'Get Owner Number'
_0x46219e.category = 'main'
_0x46219e.use = '.owner'
_0x46219e.filename = __filename
cmd(
  _0x46219e,
  async (
    _0x5e5b95,
    _0x5b5190,
    _0xcfacfb,
    {
      from: _0x3f6bad,
      l: _0x1fa05e,
      quoted: _0x28c14d,
      body: _0x4f4e3f,
      isCmd: _0x39a9cc,
      command: _0x176a0a,
      args: _0x1de08c,
      q: _0x582550,
      isGroup: _0x2630df,
      sender: _0x1c378a,
      senderNumber: _0x521731,
      botNumber2: _0x36c0a0,
      botNumber: _0x2061dc,
      pushname: _0x845408,
      isMe: _0x55afac,
      isOwner: _0x1547e7,
      groupMetadata: _0x35a637,
      groupName: _0x443116,
      participants: _0x3a50df,
      groupAdmins: _0x37eb4b,
      isBotAdmins: _0x10a551,
      isAdmins: _0x2b1f6b,
      reply: _0x14a363,
    }
  ) => {
    let _0x5d06d7 = global.OWNER_NAME,
      _0x13aa6f = global.OWNER_NUMBER,
      _0x2e1c66 = global.ytname,
      _0x48b6f3 = global.socialm,
      _0x388a27 = global.location
    var _0x4a9a1d =
      'BEGIN:VCARD\nVERSION:3.0\nFN:' +
      _0x5d06d7 +
      '\n' +
      'TEL;type=CELL;type=VOICE;waid=' +
      _0x13aa6f +
      ':+' +
      _0x13aa6f +
      '\n' +
      'item1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:' +
      _0x2e1c66 +
      '\n' +
      'item2.X-ABLabel:YouTube\nitem3.URL:' +
      _0x48b6f3 +
      '\n' +
      'item3.X-ABLabel:GitHub\nitem4.ADR:' +
      ';;' +
      _0x388a27 +
      ';;;;' +
      "'n" +
      'item4.X-ABLabel:Region\n' +
      'END:VCARD'
    const _0x46a3ad = { vcard: _0x4a9a1d }
    const _0x507127 = {
      displayName: _0x5d06d7,
      contacts: [_0x46a3ad],
    }
    const _0x367b8f = { contacts: _0x507127 }
    _0x5e5b95.sendMessage(_0xcfacfb.chat, _0x367b8f, { quoted: _0xcfacfb })
  }
)
function _0x97dbd7(_0x223186) {
  function _0x52396a(_0xb69876) {
    if (typeof _0xb69876 === 'string') {
      return function (_0x269259) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0xb69876 / _0xb69876).length !== 1 || _0xb69876 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x52396a(++_0xb69876)
  }
  try {
    if (_0x223186) {
      return _0x52396a
    } else {
      _0x52396a(0)
    }
  } catch (_0x42deaa) {}
}

    
