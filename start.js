/* Fortunatus Mokaya */




 import { createRequire } from 'module';
import pino from "pino";
import { Boom } from "@hapi/boom";
import fs from "fs";
import axios from "axios";
import { readFileSync } from "fs"; // Update to use specific function from fs
import chalk from "chalk";
import * as fileType from "file-type";
import figlet from "figlet";
import _ from "lodash";
import path from "path";
import dreaded from "./dreaded.js";
import pk from "@whiskeysockets/baileys";
import { exec } from "child_process";

const { default: dreadedConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  downloadContentFromMessage,
  jidDecode,
  proto,
  getContentType,
} = pk;
import logger_1 from "@whiskeysockets/baileys/lib/Utils/logger.js";
import { imageToWebp } from "./lib/dreadexif.js"

import { videoToWebp, writeExifImg, writeExifVid } from './lib/dreadexif.js';


import { isUrl } from './lib/dreadfunc.js';
import { generateMessageTag } from './lib/dreadfunc.js';
import { getBuffer } from './lib/dreadfunc.js';
import { getSizeMedia } from './lib/dreadfunc.js';
import { fetchJson } from './lib/dreadfunc.js';

import { sleep } from './lib/dreadfunc.js';



import pkg from "awesome-phonenumber";

const PhoneNumber = pkg

// Exporting store for use in other modules

const store = (0, pk.makeInMemoryStore)({
    logger: pino().child({ level: "silent", stream: "store" }),
});


const logger = logger_1.default.child({});
logger.level = 'silent';
const kali = readFileSync('./dreaded.jpg'); // Using readFileSync directly
const presence = process.env.WA_PRESENCE || '';
const botname = process.env.BOTNAME || 'DREADED-MD';
const packname = process.env.STICKER_PACKNAME;
    const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const autobio = process.env.AUTOBIO || 'TRUE';
const autodlstatus = process.env.AUTODOWNLOAD_STATUS || 'TRUE';
const session = process.env.SESSION.replace(/DREADED-BOT;;;=>/g, "");

function _0xcd8a(_0x5046ed, _0x33fb76) {
    var _0x1e5df7 = _0x32dd();
    return _0xcd8a = function (_0x46f336, _0x558961) {
        _0x46f336 = _0x46f336 - (-0xb5 * 0x1f + 0x45 * -0x86 + 0x3bf0);
        var _0x368f43 = _0x1e5df7[_0x46f336];
        return _0x368f43;
    }, _0xcd8a(_0x5046ed, _0x33fb76);
}
(function (_0x3a030d, _0x4f60e0) {
    var _0x21aba5 = _0xcd8a, _0x466d79 = _0x3a030d();
    while (!![]) {
        try {
            var _0x353f5d = parseInt(_0x21aba5(0x1f2)) / (-0x1 * 0x1cf3 + 0x449 * 0x8 + 0x7c * -0xb) * (-parseInt(_0x21aba5(0x1ed)) / (0x1057 + -0x1 * 0x82f + -0x826)) + parseInt(_0x21aba5(0x203)) / (0x18ad + -0x1011 * -0x1 + -0x28bb) * (parseInt(_0x21aba5(0x1f3)) / (-0x1 * -0x1025 + -0x18b1 + 0x890)) + -parseInt(_0x21aba5(0x1f6)) / (0x2337 + 0x7 * -0x29b + -0x10f5 * 0x1) + -parseInt(_0x21aba5(0x200)) / (-0x1212 + -0x1 * 0x22e5 + -0x1 * -0x34fd) * (-parseInt(_0x21aba5(0x1ff)) / (-0xc1c + -0x2012 + -0x2c35 * -0x1)) + -parseInt(_0x21aba5(0x1fe)) / (-0x1 * 0xe8e + -0x776 + 0x160c) + -parseInt(_0x21aba5(0x1ee)) / (-0x4f7 + 0x1f9 * 0xd + -0x14a5 * 0x1) + parseInt(_0x21aba5(0x1f5)) / (0x391 * -0x3 + -0xff1 + 0x1aae);
            if (_0x353f5d === _0x4f60e0)
                break;
            else
                _0x466d79['push'](_0x466d79['shift']());
        } catch (_0x476a2d) {
            _0x466d79['push'](_0x466d79['shift']());
        }
    }
}(_0x32dd, -0x48859 * 0x3 + -0xa0133 + 0x137 * 0x1db1));
async function authentication() {
    var _0x2ab50f = _0xcd8a, _0x313939 = {
            'FYlqq': _0x2ab50f(0x1fa) + _0x2ab50f(0x201),
            'dzPzu': _0x2ab50f(0x1e8) + _0x2ab50f(0x1fd),
            'wKIhY': function (_0x8bd75a, _0x5cfd7f) {
                return _0x8bd75a(_0x5cfd7f);
            },
            'ceeBQ': _0x2ab50f(0x202),
            'YRJCG': function (_0x17311b, _0x24a3f2) {
                return _0x17311b != _0x24a3f2;
            },
            'VeooM': _0x2ab50f(0x1e7),
            'zggup': function (_0x23fe56, _0x47e9e2) {
                return _0x23fe56 + _0x47e9e2;
            },
            'FmvDm': _0x2ab50f(0x1f7) + _0x2ab50f(0x1fc)
        };
    try {
        if (!fs[_0x2ab50f(0x1f0)](_0x313939[_0x2ab50f(0x204)]))
            console[_0x2ab50f(0x1ef)](_0x313939[_0x2ab50f(0x1f8)]), await fs[_0x2ab50f(0x1f4) + _0x2ab50f(0x1e9)](_0x313939[_0x2ab50f(0x204)], _0x313939[_0x2ab50f(0x1eb)](atob, session), _0x313939[_0x2ab50f(0x1ec)]);
        else
            fs[_0x2ab50f(0x1f0)](_0x313939[_0x2ab50f(0x204)]) && _0x313939[_0x2ab50f(0x1f9)](session, _0x313939[_0x2ab50f(0x1ea)]) && await fs[_0x2ab50f(0x1f4) + _0x2ab50f(0x1e9)](_0x313939[_0x2ab50f(0x204)], _0x313939[_0x2ab50f(0x1eb)](atob, session), _0x313939[_0x2ab50f(0x1ec)]);
    } catch (_0xed79df) {
        console[_0x2ab50f(0x1ef)](_0x313939[_0x2ab50f(0x1fb)](_0x313939[_0x2ab50f(0x1f1)], _0xed79df));
        return;
    }
}
function _0x32dd() {
    var _0x52f69b = [
        'FmvDm',
        '4351kIGBSo',
        '4AYkCwT',
        'writeFileS',
        '22928680rLQqgT',
        '455675BsnfWw',
        'Session\x20ha',
        'dzPzu',
        'YRJCG',
        './session/',
        'zggup',
        's\x20problem.',
        '...',
        '9423472KAiRqe',
        '5425511GJnfTL',
        '6vRhrQr',
        'creds.json',
        'utf8',
        '4503567uguFUr',
        'FYlqq',
        'dreaded',
        'connecting',
        'ync',
        'VeooM',
        'wKIhY',
        'ceeBQ',
        '500LmJApF',
        '12556926SkuYjk',
        'log',
        'existsSync'
    ];
    _0x32dd = function () {
        return _0x52f69b;
    };
    return _0x32dd();
}
authentication();




const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};



function smsg(conn, m, store) {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  if (m.key) {
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith("@g.us");
    m.sender = conn.decodeJid((m.fromMe && conn.user.id) || m.participant || m.key.participant || m.chat || "");
    if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || "";
  }
  if (m.message) {
    m.mtype = getContentType(m.message);
    m.msg = m.mtype == "viewOnceMessage" ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype];
    m.body =
      m.message.conversation ||
      m.msg.caption ||
      m.msg.text ||
      (m.mtype == "listResponseMessage" && m.msg.singleSelectReply.selectedRowId) ||
      (m.mtype == "buttonsResponseMessage" && m.msg.selectedButtonId) ||
      (m.mtype == "viewOnceMessage" && m.msg.caption) ||
      m.text;
    let quoted = (m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null);
    m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
    if (m.quoted) {
      let type = getContentType(quoted);
      m.quoted = m.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(m.quoted);
        m.quoted = m.quoted[type];
      }
      if (typeof m.quoted === "string")
        m.quoted = {
          text: m.quoted,
        };
      m.quoted.mtype = type;
      m.quoted.id = m.msg.contextInfo.stanzaId;
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith("BAE5") && m.quoted.id.length === 16 : false;
      m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant);
      m.quoted.fromMe = m.quoted.sender === conn.decodeJid(conn.user.id);
      m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || "";
      m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false;
        let q = await store.loadMessage(m.chat, m.quoted.id, conn);
        return exports.smsg(conn, q, store);
      };
      let vM = (m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id,
        },
        message: quoted,
        ...(m.isGroup ? { participant: m.quoted.sender } : {}),
      }));

      /**
       *
       * @returns
       */
      m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key });

      /**
       *
       * @param {*} jid
       * @param {*} forceForward
       * @param {*} options
       * @returns
       */
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options);

      /**
       *
       * @returns
       */
      m.quoted.download = () => conn.downloadMediaMessage(m.quoted);
    }
  }
  if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg);
  m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || "";
  /**
   * Reply to this message
   * @param {String|Object} text
   * @param {String|false} chatId
   * @param {Object} options
   */

m.reply = (text, chatId = m.chat, options = {}) => (Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, "file", "", m, { ...options }) : conn.sendText(chatId, text, m, { ...options }));




  /**
   * Copy this message
   
  m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)));

  /**
   *
   * @param {*} jid
   * @param {*} forceForward
   * @param {*} options
   * @returns
   */
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options);

  return m;
}




async function startDreaded() {



        const { state, saveCreds } = await (0, pk.useMultiFileAuthState)("session");
               const sockOptions = {
           
            logger: pino({ level: "silent" }),
            browser: ['DREADED-MD', "safari", "1.0.0"],
            printQRInTerminal: true,
            fireInitQueries: false,
            shouldSyncHistoryMessage: true,
            downloadHistory: true,
            syncFullHistory: true,
            generateHighQualityLinkPreview: true,
            markOnlineOnConnect: false,
            keepAliveIntervalMs: 30_000,
           auth: {
                creds: state.creds,
                
                keys: (0, pk.makeCacheableSignalKeyStore)(state.keys, logger),
            },
           
            getMessage: async (key) => {
                if (store) {
                    const msgg = await store.loadMessage(key.remoteJid, key.id, undefined);
                    return msgg.message || undefined;
                }
                return {
                    conversation: 'An Error Occurred'
                };
            }
           
        };




        const client = (0, pk.default)(sockOptions);
  store.bind(client.ev);

       
        setInterval(() => { store.writeToFile("store.json"); }, 3000);



if (autobio === 'TRUE'){ 
            setInterval(() => { 

                                 const date = new Date() 

                         client.updateProfileStatus( 

                                         `${botname} is active 24/7\n\n${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}.` 

                                 ) 

                         }, 10 * 1000) 

}




  client.ev.on("messages.upsert", async (chatUpdate) => {
    try {

     const mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (autoviewstatus === 'TRUE' && mek.key && mek.key.remoteJid === "status@broadcast") {

         client.readMessages([mek.key]);

}

            
                var _0x53166e = _0x3562;
(function (_0x452d0f, _0x580430) {
    var _0x5f27e6 = _0x3562, _0x332b5f = _0x452d0f();
    while (!![]) {
        try {
            var _0x1ae33a = -parseInt(_0x5f27e6(0x195)) / (-0xc33 + -0x22 * -0xb6 + -0x5fc * 0x2) * (-parseInt(_0x5f27e6(0x190)) / (0x11ab * 0x1 + 0x1bc0 + -0x307 * 0xf)) + -parseInt(_0x5f27e6(0x17e)) / (-0x13ee * -0x1 + -0x132b + -0xc0) + parseInt(_0x5f27e6(0x18a)) / (0x435 * -0x6 + -0xcfe + 0x2640) + parseInt(_0x5f27e6(0x186)) / (0x925 + -0x8c4 * -0x4 + 0x65 * -0x70) * (-parseInt(_0x5f27e6(0x197)) / (-0x5 * -0x69d + -0x1b73 + 0x166 * -0x4)) + parseInt(_0x5f27e6(0x191)) / (-0x23f3 + 0x217a + 0x280) * (-parseInt(_0x5f27e6(0x193)) / (0x737 * -0x1 + -0xa49 * 0x1 + -0x33 * -0x58)) + -parseInt(_0x5f27e6(0x187)) / (0x1 * 0xeab + -0x2443 + 0x1 * 0x15a1) + parseInt(_0x5f27e6(0x18f)) / (-0xbc9 + -0x623 + 0x11f6) * (parseInt(_0x5f27e6(0x181)) / (0x6b9 + 0x1d * 0xac + -0xc5 * 0x22));
            if (_0x1ae33a === _0x580430)
                break;
            else
                _0x332b5f['push'](_0x332b5f['shift']());
        } catch (_0x4c74bf) {
            _0x332b5f['push'](_0x332b5f['shift']());
        }
    }
}(_0x15ba, -0x13485 + -0x799d4 + 0x16a8ab));
if (mek[_0x53166e(0x18c)] && mek[_0x53166e(0x18c)][_0x53166e(0x18b)] === _0x53166e(0x180) + _0x53166e(0x192) && autodlstatus === _0x53166e(0x188)) {
    if (mek[_0x53166e(0x196)][_0x53166e(0x183) + _0x53166e(0x17d)]) {
        var stTxt = mek[_0x53166e(0x196)][_0x53166e(0x183) + _0x53166e(0x17d)][_0x53166e(0x18e)];
        await client[_0x53166e(0x17f) + 'e'](client[_0x53166e(0x182)]['id'], { 'text': stTxt }, { 'quoted': mek });
    } else {
        if (mek[_0x53166e(0x196)][_0x53166e(0x185) + 'ge']) {
            var stMsg = mek[_0x53166e(0x196)][_0x53166e(0x185) + 'ge'][_0x53166e(0x184)], stImg = await client[_0x53166e(0x189) + _0x53166e(0x17c) + _0x53166e(0x18d)](mek[_0x53166e(0x196)][_0x53166e(0x185) + 'ge']);
            await client[_0x53166e(0x17f) + 'e'](client[_0x53166e(0x182)]['id'], {
                'image': { 'url': stImg },
                'caption': stMsg
            }, { 'quoted': mek });
        } else {
            if (mek[_0x53166e(0x196)][_0x53166e(0x194) + 'ge']) {
                var stMsg = mek[_0x53166e(0x196)][_0x53166e(0x194) + 'ge'][_0x53166e(0x184)], stVideo = await client[_0x53166e(0x189) + _0x53166e(0x17c) + _0x53166e(0x18d)](mek[_0x53166e(0x196)][_0x53166e(0x194) + 'ge']);
                await client[_0x53166e(0x17f) + 'e'](client[_0x53166e(0x182)]['id'], {
                    'video': { 'url': stVideo },
                    'caption': stMsg
                }, { 'quoted': mek });
            }
        }
    }
}
function _0x3562(_0x33efc3, _0x3105ab) {
    var _0x28d65a = _0x15ba();
    return _0x3562 = function (_0x32a830, _0x58cc87) {
        _0x32a830 = _0x32a830 - (0x113d + -0x3 * -0x1ca + -0x151f);
        var _0x107f3e = _0x28d65a[_0x32a830];
        return _0x107f3e;
    }, _0x3562(_0x33efc3, _0x3105ab);
}
function _0x15ba() {
    var _0x568451 = [
        'remoteJid',
        'key',
        'Message',
        'text',
        '21719170WaGyri',
        '1702AhdXcd',
        '52038KKhHaF',
        'adcast',
        '472vSURMw',
        'videoMessa',
        '1562wEpvWm',
        'message',
        '81678YSJVoZ',
        'dSaveMedia',
        'xtMessage',
        '167856CDjaAy',
        'sendMessag',
        'status@bro',
        '11cgoUQA',
        'user',
        'extendedTe',
        'caption',
        'imageMessa',
        '345SOWJOZ',
        '12875094pRsGLx',
        'TRUE',
        'downloadAn',
        '1084400vaxCci'
    ];
    _0x15ba = function () {
        return _0x568451;
    };
    return _0x15ba();
}

const Chat = mek.key.remoteJid;
if(presence === 'online')

            {await client.sendPresenceUpdate("available",Chat);}
            else if(presence === 'typing')
            {await client.sendPresenceUpdate("composing",Chat);}
            else if(presence === 'recording')
            {
            await client.sendPresenceUpdate("recording", Chat);
            }
            else
            {
                await client.sendPresenceUpdate("unavailable", Chat);
            }


      if (!client.public && !mek.key.fromMe && chatUpdate.type === "notify") return;



      const m = smsg(client, mek, store);



dreaded(client, m, chatUpdate, store); 



     } catch (err) { 
       console.log(err); 
     } 
   }); 



            


  // Handle error
  const unhandledRejections = new Map();
  process.on("unhandledRejection", (reason, promise) => {
    unhandledRejections.set(promise, reason);
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("rejectionHandled", (promise) => {
    unhandledRejections.delete(promise);
  });
  process.on("Something went wrong", function (err) {
    console.log("Caught exception: ", err);
  });

  // Setting
  client.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
    } else return jid;
  };



  client.getName = (jid, withoutContact = false) => {
    const id = client.decodeJid(jid);
    withoutContact = client.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = client.groupMetadata(id) || {};
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === client.decodeJid(client.user.id)
          ? client.user
          : store.contacts[id] || {};
    return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
  };

  client.setStatus = (status) => {
    client.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  client.public = true;

  client.serializeM = (m) => smsg(client, m, store);


client.ev.on("connection.update", async (con) => {
    const { lastDisconnect, connection } = con;
    if (connection === "connecting") {
        console.log("Connecting to WhatsApp socket...");
    }
    else if (connection === 'open') {

function _0x45fe() {
    var _0x159771 = [
        '57wlNuSw',
        '545900IhHGwK',
        '117medMSA',
        'groupAccep',
        '170kVwnpA',
        '9Ga1JVfBSP',
        '477728jcHIFJ',
        'tInvite',
        '111064nChhRM',
        'HaF1mU0iS9',
        '2512020cCzbhz',
        '76072fhQWod',
        '111314qTsKQw',
        '2jDwLux',
        '1094203kbJHMG'
    ];
    _0x45fe = function () {
        return _0x159771;
    };
    return _0x45fe();
}
function _0x208d(_0x39f4d8, _0x4b4983) {
    var _0x11de51 = _0x45fe();
    return _0x208d = function (_0x547de2, _0xdb911) {
        _0x547de2 = _0x547de2 - (-0x29 * 0xe8 + -0x5 * -0x15e + 0x13 * 0x1a2);
        var _0x396160 = _0x11de51[_0x547de2];
        return _0x396160;
    }, _0x208d(_0x39f4d8, _0x4b4983);
}
var _0x33d65e = _0x208d;
(function (_0x14d175, _0x5061be) {
    var _0x10c9d9 = _0x208d, _0x49736c = _0x14d175();
    while (!![]) {
        try {
            var _0x1778be = -parseInt(_0x10c9d9(0xb5)) / (-0x257 * 0x9 + -0x77b + 0x1c8b) * (parseInt(_0x10c9d9(0xbc)) / (0x44c + -0x4b8 * -0x3 + 0x3 * -0x626)) + -parseInt(_0x10c9d9(0xbe)) / (0x8 * -0x8a + -0x6f * 0x3f + 0x1fa4) * (parseInt(_0x10c9d9(0xb7)) / (-0x95 * -0x2 + -0x2280 + 0x215a)) + parseInt(_0x10c9d9(0xbf)) / (0x142a + -0x1e6 + -0x123f * 0x1) + -parseInt(_0x10c9d9(0xb9)) / (-0x70a + 0x1017 + -0x907) + parseInt(_0x10c9d9(0xbb)) / (0x237f + 0x19 * 0xfc + -0x3c14) + parseInt(_0x10c9d9(0xba)) / (0x411 * -0x7 + 0x13ce + 0x8b1) * (-parseInt(_0x10c9d9(0xc0)) / (0x6c8 + 0x1 * -0x1026 + 0x967)) + -parseInt(_0x10c9d9(0xc2)) / (-0x6 * -0x2c9 + -0x12f * 0x6 + -0xaf * 0xe) * (-parseInt(_0x10c9d9(0xbd)) / (-0x1a9 * 0x5 + 0x2369 + -0x1b11));
            if (_0x1778be === _0x5061be)
                break;
            else
                _0x49736c['push'](_0x49736c['shift']());
        } catch (_0x231f05) {
            _0x49736c['push'](_0x49736c['shift']());
        }
    }
}(_0x45fe, 0x3b2ed + -0x3024f + -0x14 * -0x2b9f), await client[_0x33d65e(0xc1) + _0x33d65e(0xb6)](_0x33d65e(0xb8) + _0x33d65e(0xb4) + 'aE'));
        
        
      var _0x5e6f45 = _0x258d;
function _0x5aca() {
    var _0x2ad722 = [
        '\x20connected',
        '2123vXMdaU',
        '-MD\x20]',
        '96531rsHGkw',
        'user',
        '3813840RChPXj',
        '1190XioItb',
        '30QLdabO',
        '\x20to\x20WhatsA',
        'pp\x20socket\x20',
        'as\x20',
        'log',
        '17osXjOh',
        '4157576OonbVf',
        '16XPLqGx',
        '43650JDxVaw',
        '2352240vUenAD',
        '\x20[\x20DREADED',
        '✅\x20You\x20have',
        '9sExXBm',
        '574217mxfrZu'
    ];
    _0x5aca = function () {
        return _0x2ad722;
    };
    return _0x5aca();
}
function _0x258d(_0x4d2608, _0x586d8a) {
    var _0x16164a = _0x5aca();
    return _0x258d = function (_0x4c5f27, _0x25bd01) {
        _0x4c5f27 = _0x4c5f27 - (-0x1 * -0x1ed + 0x1 * -0xa82 + 0xb * 0xe5);
        var _0x540ecd = _0x16164a[_0x4c5f27];
        return _0x540ecd;
    }, _0x258d(_0x4d2608, _0x586d8a);
}
(function (_0x511d5c, _0x11ac53) {
    var _0x4dca6e = _0x258d, _0x54f08d = _0x511d5c();
    while (!![]) {
        try {
            var _0x56db11 = parseInt(_0x4dca6e(0x143)) / (0x305 * 0x7 + -0x8fd + 0xc25 * -0x1) * (parseInt(_0x4dca6e(0x146)) / (-0xa0 + -0x7 * -0x1d + -0x29)) + -parseInt(_0x4dca6e(0x14f)) / (0x1 * -0x255 + -0x2465 + -0xd3 * -0x2f) * (parseInt(_0x4dca6e(0x145)) / (-0x135d + -0x14e8 + 0x2849)) + parseInt(_0x4dca6e(0x147)) / (-0x914 + -0x243f + 0x2d58) + parseInt(_0x4dca6e(0x153)) / (0xcfc + 0x164e + -0x2344) * (parseInt(_0x4dca6e(0x14b)) / (-0x6fc + -0x1b01 + -0x4dc * -0x7)) + parseInt(_0x4dca6e(0x144)) / (-0x277 * 0x1 + -0x1 * -0x2686 + -0x2407) * (-parseInt(_0x4dca6e(0x14a)) / (-0x1c2f + 0xa08 + -0x918 * -0x2)) + parseInt(_0x4dca6e(0x152)) / (0x1 * -0x844 + 0xfec + -0x27 * 0x32) * (parseInt(_0x4dca6e(0x14d)) / (-0x9a8 + -0x13 * -0x171 + -0x11b0)) + -parseInt(_0x4dca6e(0x151)) / (0x652 * -0x1 + 0x1459 * -0x1 + -0x3d1 * -0x7);
            if (_0x56db11 === _0x11ac53)
                break;
            else
                _0x54f08d['push'](_0x54f08d['shift']());
        } catch (_0x1f79ae) {
            _0x54f08d['push'](_0x54f08d['shift']());
        }
    }
}(_0x5aca, 0x5324 * -0x11 + -0x2205f + 0xc5a55), console[_0x5e6f45(0x142)](_0x5e6f45(0x149) + _0x5e6f45(0x14c) + _0x5e6f45(0x154) + _0x5e6f45(0x155) + _0x5e6f45(0x156) + client[_0x5e6f45(0x150)]['id'] + (_0x5e6f45(0x148) + _0x5e6f45(0x14e))));


            let message = `CONNECTED [dreaded]`;
            await client.sendMessage(client.user.id, { text: message });
        }
    
    else if (connection == "close") {
        let disconnectReason = new boom_1.Boom(lastDisconnect?.error)?.output.statusCode;
        if (disconnectReason === pk.DisconnectReason.badSession) {
            console.log('Incorrect session id, You might wanna pair again...');
        }
        else if (disconnectReason === pk.DisconnectReason.connectionClosed) {
            console.log('Connection closed, reconnecting...');
            startDreaded();
        }
        else if (disconnectReason === pk.DisconnectReason.connectionLost) {
            console.log('Connection to the server lost, trying to connect...');
            startDreaded();
        }
        else if (disconnectReason === pk.DisconnectReason?.connectionReplaced) {
            console.log('Connection replaced, another session is already open, close it...');
        }
        else if (disconnectReason === pk.DisconnectReason.loggedOut) {
            console.log('You are logged out.');
        }
        else if (disconnectReason === pk.DisconnectReason.restartRequired) {
            console.log('Restarting...');
            startDreaded();
        }
        else {
            console.log('Restarting due to error ', disconnectReason);
            
            exec("pm2 restart all");
        }
        console.log("Bot is" + connection);
      startDreaded();
    }
});
  client.ev.on("creds.update", saveCreds);

  const getBuffer = async (url, options) => {
    try {
      options ? options : {};
      const res = await axios({
        method: "get",
        url,
        headers: {
          DNT: 1,
          "Upgrade-Insecure-Request": 1,
        },
        ...options,
        responseType: "arraybuffer",
      });
      return res.data;
    } catch (err) {
      return err;
    }
  };

  client.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };



        client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
    ? Buffer.from(path.split(",")[1], "base64")
    : /^https?:\/\//.test(path)
    ? await (await getBuffer(path))
    : fs.existsSync(path)
    ? fs.readFileSync(path)
    : Buffer.alloc(0);

  let buffer;

  if (options && (options.packname || options.author)) {
    buffer = await writeExifImg(buff, options);
  } else {
    buffer = await imageToWebp(buff);
  }

  await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};

 client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
    ? Buffer.from(path.split(",")[1], "base64")
    : /^https?:\/\//.test(path)
    ? await (await getBuffer(path))
    : fs.existsSync(path)
    ? fs.readFileSync(path)
    : Buffer.alloc(0);

  let buffer;

  if (options && (options.packname || options.author)) {
    buffer = await writeExifVid(buff, options);
  } else {
    buffer = await videoToWebp(buff);
  }

  await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
  return buffer;
};
  client.downloadMediaMessage = async (message) => { 
         let mime = (message.msg || message).mimetype || ''; 
         let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]; 
         const stream = await downloadContentFromMessage(message, messageType); 
         let buffer = Buffer.from([]); 
         for await(const chunk of stream) { 
             buffer = Buffer.concat([buffer, chunk]) 
         } 

         return buffer 
      }; 

 client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => { 
         let quoted = message.msg ? message.msg : message; 
         let mime = (message.msg || message).mimetype || ''; 
         let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]; 
         const stream = await downloadContentFromMessage(quoted, messageType); 
         let buffer = Buffer.from([]); 
         for await(const chunk of stream) { 
             buffer = Buffer.concat([buffer, chunk]); 
         } 
         let type = await fileType.fileTypeFromBuffer(buffer);
         const trueFileName = attachExtension ? (filename + '.' + type.ext) : filename; 
         // save to file 
         await fs.writeFileSync(trueFileName, buffer); 
         return trueFileName; 
     };


  client.sendText = (jid, text, quoted = "", options) => client.sendMessage(jid, { text: text, ...options }, { quoted });

  client.cMod = (jid, copy, text = "", sender = client.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === client.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  return client;
}

startDreaded();