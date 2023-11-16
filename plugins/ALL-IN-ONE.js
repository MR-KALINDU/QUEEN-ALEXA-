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
            '*Please add Valid Database Var with Text*  Ex -: ```.setup ALIVE_MESSAGE=Hii Queen Nilu User How Are you Im Alive```\n\n️ *Dont add space befor and after the "=" Symbol*'
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
          '*\u2699️ QUEEN ALEXAU BOT SETTINGS \u2699️* \n\n _change Settings what you want ..._ '),
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
 
