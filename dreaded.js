/* Fortunatus Mokaya */


 import mokaya from "@whiskeysockets/baileys";

const  {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = mokaya

import fs from "fs";
import util from "util";
import { Bard } from "googlebard"; 
import axios from "axios";
import chalk from "chalk";
import { bardAI, bardAsk } from 'g-bardai';
import speed from "performance-now";
import Genius from "genius-lyrics";
import { ssweb } from './lib/scrap.js'; 
import { readFileSync } from 'fs'; 
const kali = readFileSync('./dreaded.jpg'); // Using readFileSync directly
import { Client } from "genius-lyrics"; 
import { isUrl, processTime } from "./lib/dreadfunc.js";
import { TelegraPh, UploadFileUgu } from './lib/dreadupload.js';
import { smsg, formatp, tanggal, formatDate, getTime, sleep, clockString, fetchJson, getBuffer, jsonformat, generateProfilePicture, parseMention, getRandom, MediaFire } from './lib/dreadfunc.js';
import { exec, spawn, execSync } from "child_process";
import Heroku from "heroku-client";

import pkgg from 'rsnchat';
const  RsnChat = pkgg;





export default async function dreaded(client, m, chatUpdate, store) {




  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
var msgDreaded = m.message.extendedTextMessage?.contextInfo?.quotedMessage;


const loadCmds = async (category) => {
  const commandFil = fs.readdirSync(`./commands/${categor}`).filter((plugin) => plugin.endsWith(".js"));

  for (const plugin of commandFiles) {
    const { default: comman } = await import(`./commands/${categor}/${plugin}`);
    commands[plugin.slice(0, -3)] = comman;
  }
}; 

const commandCategories = ["general", "group", "owner", "ai", "coding", "download", "edit"];
const commandNam = [];

for (const categor of commandCategories) {
  const commandFila = fs.readdirSync(`./commands/${categor}`).filter((plugin) => plugin.endsWith(".js"));
  
  for (const fil of commandFila) {
    const commandName = fil.slice(0, -3);
    commandNam.push(commandName);
  }
} 





   // leave the prefix string empty if you don't want the bot to use a prefix

const mode = process.env.MODE || 'PUBLIC';
const author = process.env.STICKER_AUTHOR || 'fortunatus';
    const prefix = process.env.PREFIX || '';
const mycode = process.env.COUNTRY_CODE || '254';
    const cmd = commandNam.some(name => body.includes(name)) && body.startsWith(prefix);
const admin = process.env.ADMIN_MSG || 'Are you an admin?';
    const group = process.env.GROUP_ONLY_MSG || 'This a not a group chat';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'Am I an admin?'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Are you the owner?';
const appname = process.env.APP_NAME;
const herokuapi = process.env.HEROKU_API;
    const packname = process.env.STICKER_PACKNAME || 'dreaded';
const dev = process.env.DEV || '254114018035'
 const DevDreaded = dev.split(",");
    const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
   const bad = process.env.BAD_WORD || 'fuck';
const botname = process.env.BOTNAME || "DREADED-MD";

    const autorecordtypegc = process.env.RECORDING_TYPINGGC || 'TRUE';
    const autoreaddm = process.env.AUTOREAD || 'TRUE';
const antibot = process.env.ANTIBOT || 'FALSE';
const antitag = process.env.ANTITAG || 'FALSE';
const antilink = process.env.ANTILINK || 'TRUE';
    const badword = bad.split(",");
    const Owner = DevDreaded.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;



    let text = args.join(" ");
let q = args.join(" ");
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
   const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };

const isBaileys = mek.key.id.startsWith("BAE5") && mek.key.id.length === 16;



const reactionMessage = {
    react: {
        text: "❌", 
        key: m.key
    }
}


async function sendReact(emoji) {
      let react = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await client.sendMessage(m.chat, react);
    }





    const fortu = (m.quoted || m); 
         const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 

const audiovn = "./alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Dreaded",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "Hi human, I am Alive",
          body: "DREADED BOT",
          thumbnailUrl: "https://telegra.ph/file/a5147a64a5b91d8cf945c.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
    

function _0x5caf() {
    const _0x12ffa2 = [
        'legra.ph/f',
        'M\x20E\x20N\x20U',
        '59587OMntje',
        '4475752NHJUIy',
        'CialS',
        '1aSifDS',
        '6fJhSrC',
        '3470BMpKrt',
        'PHOTO',
        '4994885DfOyre',
        '9InBFrk',
        '642618ZMKbRV',
        '1fc02.jpg',
        '386288zVZUrU',
        'sendMessag',
        'PugBy',
        'XHGUJ',
        'https://te',
        'ile/c75efe',
        '584335pexGhZ',
        'cf7f0aef85',
        '1732146ZgkyoO',
        'DREADED\x20BO',
        'qhefp'
    ];
    _0x5caf = function () {
        return _0x12ffa2;
    };
    return _0x5caf();
}
(function (_0x49144a, _0x1ecf87) {
    const _0x66c17c = _0x2fd5, _0x47f3a9 = _0x49144a();
    while (!![]) {
        try {
            const _0x171db2 = parseInt(_0x66c17c(0xd3)) / (-0xfc3 + 0x2359 * 0x1 + 0x1395 * -0x1) * (parseInt(_0x66c17c(0xe3)) / (-0xf8e * 0x1 + 0x2 * -0x706 + 0x1d9c)) + parseInt(_0x66c17c(0xd9)) / (0x14b * -0x1c + -0x37 * 0x8c + 0x424b) + parseInt(_0x66c17c(0xdb)) / (0x1ab + 0xbcf + 0x2 * -0x6bb) + -parseInt(_0x66c17c(0xe1)) / (-0x14c + -0xbc2 + 0xd13) * (parseInt(_0x66c17c(0xd4)) / (0x2 * -0xbab + -0x3e * 0x61 + 0x2eda)) + parseInt(_0x66c17c(0xd7)) / (-0x2 * -0xdfa + 0xa * 0x152 + -0x2921) + -parseInt(_0x66c17c(0xe9)) / (-0x1e6 + 0x840 + -0x652) * (-parseInt(_0x66c17c(0xd8)) / (0x17c1 + 0x44 * -0x1e + -0x2a0 * 0x6)) + parseInt(_0x66c17c(0xd5)) / (0x2599 + 0x1028 + 0x1 * -0x35b7) * (-parseInt(_0x66c17c(0xe8)) / (-0x5e * -0x32 + -0x1 * 0x599 + -0xcb8));
            if (_0x171db2 === _0x1ecf87)
                break;
            else
                _0x47f3a9['push'](_0x47f3a9['shift']());
        } catch (_0x1520ac) {
            _0x47f3a9['push'](_0x47f3a9['shift']());
        }
    }
}(_0x5caf, -0xbb803 + -0x230f6 + -0xa69db * -0x2));
function _0x2fd5(_0x25b84e, _0x129cc4) {
    const _0xaf3f26 = _0x5caf();
    return _0x2fd5 = function (_0x30781d, _0x2cf835) {
        _0x30781d = _0x30781d - (0x1 * -0x2433 + -0x397 * -0x9 + 0x4b7 * 0x1);
        let _0x47d201 = _0xaf3f26[_0x30781d];
        return _0x47d201;
    }, _0x2fd5(_0x25b84e, _0x129cc4);
}
const sendd = _0x5ef304 => {
        const _0x6d5198 = _0x2fd5, _0x44bfc8 = {
                'qhefp': _0x6d5198(0xd6),
                'PugBy': _0x6d5198(0xdf) + _0x6d5198(0xe6) + _0x6d5198(0xe0) + _0x6d5198(0xe2) + _0x6d5198(0xda)
            };
        return client[_0x6d5198(0xdc) + 'e'](from, {
            'text': _0x5ef304,
            'contextInfo': {
                'externalAdReply': {
                    'title': _0x6d5198(0xe4) + 'T',
                    'body': pushname,
                    'previewType': _0x44bfc8[_0x6d5198(0xe5)],
                    'thumbnailUrl': _0x44bfc8[_0x6d5198(0xdd)],
                    'thumbnail': kali,
                    'sourceUrl': ''
                }
            }
        }, { 'quoted': m });
    }, menureply = _0xffae03 => {
        const _0xd2158d = _0x2fd5, _0x4a24ce = {
                'CialS': _0xd2158d(0xd6),
                'XHGUJ': _0xd2158d(0xdf) + _0xd2158d(0xe6) + _0xd2158d(0xe0) + _0xd2158d(0xe2) + _0xd2158d(0xda)
            };
        return client[_0xd2158d(0xdc) + 'e'](from, {
            'text': _0xffae03,
            'contextInfo': {
                'externalAdReply': {
                    'title': _0xd2158d(0xe4) + 'T',
                    'body': _0xd2158d(0xe7),
                    'previewType': _0x4a24ce[_0xd2158d(0xea)],
                    'thumbnailUrl': _0x4a24ce[_0xd2158d(0xde)],
                    'thumbnail': kali,
                    'sourceUrl': ''
                }
            }
        }, { 'quoted': m });
    };



    // Group
                    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
    const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;


const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hours, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minutes, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Seconds") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 

const _0x418e20 = _0x3442;
(function (_0x213b79, _0xb67d7c) {
    const _0x515f40 = _0x3442, _0x551159 = _0x213b79();
    while (!![]) {
        try {
            const _0xea37dd = -parseInt(_0x515f40(0xa7)) / (-0x683 + 0x1 * 0x91f + -0x29b) * (parseInt(_0x515f40(0xa5)) / (-0x12 * 0x209 + 0x223 + 0x2281)) + -parseInt(_0x515f40(0xa6)) / (-0x89f * -0x3 + 0x17e8 + -0x1 * 0x31c2) + -parseInt(_0x515f40(0xae)) / (0x1048 + 0x18f8 + -0x293c) * (-parseInt(_0x515f40(0xa4)) / (0x3e * -0x3f + 0x3 * 0x6e6 + 0x49 * -0x13)) + -parseInt(_0x515f40(0xad)) / (0x266f + 0x20bd * 0x1 + -0x4726) + parseInt(_0x515f40(0xa2)) / (-0x1916 + 0x2423 + -0x1 * 0xb06) * (-parseInt(_0x515f40(0xa8)) / (0x1 * 0x453 + -0x11a1 + 0xd56)) + parseInt(_0x515f40(0xaa)) / (0x1f91 * -0x1 + -0x1fa9 + 0xca7 * 0x5) * (-parseInt(_0x515f40(0xa3)) / (-0xa51 + 0x1e73 + -0x1418)) + -parseInt(_0x515f40(0xab)) / (-0x28 + 0x14a5 + -0x1472) * (-parseInt(_0x515f40(0xaf)) / (0x1 * -0xaf + 0xec + -0x31 * 0x1));
            if (_0xea37dd === _0xb67d7c)
                break;
            else
                _0x551159['push'](_0x551159['shift']());
        } catch (_0x2400e9) {
            _0x551159['push'](_0x551159['shift']());
        }
    }
}(_0x3a27, 0x6dbad + 0x71107 + -0x8e2e2));
const ownerJid = _0x418e20(0xa9) + '35' + (_0x418e20(0xa1) + _0x418e20(0xac));
function _0x3442(_0x1e815c, _0x351b4f) {
    const _0x9b35da = _0x3a27();
    return _0x3442 = function (_0x18663f, _0x22eae3) {
        _0x18663f = _0x18663f - (0x1 * -0x187b + 0x24 * -0x111 + 0x3f80);
        let _0x1eaee3 = _0x9b35da[_0x18663f];
        return _0x1eaee3;
    }, _0x3442(_0x1e815c, _0x351b4f);
}
function _0x3a27() {
    const _0x45d41f = [
        '28100fuDDPC',
        '18965436dMqObj',
        '@s.whatsap',
        '415716QnEzbG',
        '130ToDNfH',
        '25GBeCNa',
        '2BIkfKm',
        '706608OKXajC',
        '176887xjdUsg',
        '8hqATVx',
        '2541140180',
        '147789zaYUyo',
        '11EbCbGG',
        'p.net',
        '3600600bOEpjt'
    ];
    _0x3a27 = function () {
        return _0x45d41f;
    };
    return _0x3a27();
}

const dreadedOwner = m.sender == ownerJid ? true : false;


function _0x4da539(_0x1b73d2,_0x5645c6,_0x3ae15b,_0x5ad514){return _0x41d2(_0x3ae15b-0x68,_0x1b73d2);}(function(_0x2ff59f,_0x5cf2bd){function _0x5c5eab(_0x7f76fa,_0x20aa32,_0x451ebe,_0x495b0b){return _0x41d2(_0x451ebe- -0x4a,_0x7f76fa);}function _0x12cf5c(_0x4d3a6b,_0x56fbd9,_0x404222,_0x2d5dcd){return _0x41d2(_0x4d3a6b- -0x141,_0x56fbd9);}var _0x6007ff=_0x2ff59f();while(!![]){try{var _0x4c977c=parseInt(_0x5c5eab(0x78,0x85,0x9a,0xaf))/(0x77+0x11e0+-0x1*0x1256)+parseInt(_0x5c5eab(0xaf,0xec,0xc9,0xcf))/(-0x2234+0x1e32+0x404)*(parseInt(_0x5c5eab(0xc9,0x9f,0xb5,0xc3))/(0xad6*-0x3+0x1073+0x1012*0x1))+parseInt(_0x5c5eab(0xa5,0xd1,0xc5,0xb2))/(-0x1*-0xb1b+-0x1228+0x711)+parseInt(_0x12cf5c(-0x5f,-0x4b,-0x74,-0x49))/(0x307+-0xeaa+-0xba8*-0x1)+parseInt(_0x5c5eab(0xcc,0xa8,0xb3,0xad))/(-0x1b6*0xd+0xa21+0xc23)*(parseInt(_0x5c5eab(0xbf,0xd4,0xb7,0x9a))/(-0xbcf+-0x100e*-0x1+-0x438))+-parseInt(_0x12cf5c(-0x38,-0x20,-0x4a,-0x27))/(0x25f4+-0x16db*0x1+-0xf11)*(-parseInt(_0x12cf5c(-0x4e,-0x55,-0x46,-0x3c))/(0xf06*0x1+-0x808+0xd*-0x89))+parseInt(_0x12cf5c(-0x33,-0x48,-0x1b,-0x26))/(-0x1ca0+-0x1e33+0x139f*0x3)*(-parseInt(_0x5c5eab(0x8e,0xac,0xa2,0xb1))/(0x1772+-0x8*0x464+0xbb9*0x1));if(_0x4c977c===_0x5cf2bd)break;else _0x6007ff['push'](_0x6007ff['shift']());}catch(_0x11c8d3){_0x6007ff['push'](_0x6007ff['shift']());}}}(_0x4af9,0x3*0x55ea3+-0x1*-0x4f4ec+-0x9770e));var _0x4fcabb=(function(){var _0x5924ae={};_0x5924ae[_0x17fcc9(0x1a6,0x1bf,0x1bf,0x18a)]=_0x17fcc9(0x175,0x18a,0x189,0x194)+'+$',_0x5924ae[_0x1614e2(-0x23a,-0x246,-0x234,-0x22e)]=function(_0x20fb65,_0x1973c7){return _0x20fb65!==_0x1973c7;},_0x5924ae[_0x17fcc9(0x171,0x179,0x193,0x185)]=_0x1614e2(-0x247,-0x238,-0x239,-0x21f);function _0x17fcc9(_0x4894c3,_0x5b9d59,_0x2a5c08,_0x5dc45c){return _0x41d2(_0x4894c3-0x9a,_0x2a5c08);}_0x5924ae[_0x17fcc9(0x18b,0x187,0x189,0x16a)]=function(_0x305324,_0x3bdaab){return _0x305324===_0x3bdaab;},_0x5924ae[_0x17fcc9(0x18a,0x18c,0x176,0x16a)]=_0x17fcc9(0x187,0x183,0x1a7,0x17e);function _0x1614e2(_0x2f56e7,_0x5f5b3a,_0x2a8331,_0x250232){return _0x41d2(_0x5f5b3a- -0x32f,_0x2a8331);}_0x5924ae['TqeTW']=function(_0xebb75f,_0x1b2680){return _0xebb75f+_0x1b2680;},_0x5924ae[_0x17fcc9(0x193,0x18a,0x1aa,0x1b1)]=_0x1614e2(-0x24e,-0x244,-0x23a,-0x255)+_0x1614e2(-0x226,-0x22a,-0x20f,-0x22e);var _0xaeb642=_0x5924ae,_0x3767e2=!![];return function(_0x3fe885,_0x298d7e){var _0x155dff={'HpODR':function(_0x46817f,_0xf22be0){return _0x46817f(_0xf22be0);},'ExyfI':function(_0x269d7e,_0x1f03f1){function _0x477de2(_0x4993a1,_0x41a38f,_0x239304,_0x1aee6e){return _0x41d2(_0x41a38f- -0xeb,_0x1aee6e);}return _0xaeb642[_0x477de2(0x5,0xa,0x26,0xe)](_0x269d7e,_0x1f03f1);},'vwzUt':_0xaeb642['xlkkx']},_0x46cd41=_0x3767e2?function(){function _0x55f97a(_0x52a316,_0x4de867,_0x1eddeb,_0x1033bf){return _0x41d2(_0x4de867-0x38c,_0x52a316);}var _0x17b839={};_0x17b839[_0x55f97a(0x4a9,0x4a0,0x4ba,0x4b7)]=_0xaeb642[_0x55f97a(0x49e,0x498,0x494,0x4aa)];var _0x8df293=_0x17b839;function _0x4ee3a4(_0xfd68aa,_0x3573ff,_0x31133f,_0x28a87f){return _0x41d2(_0xfd68aa-0x318,_0x31133f);}if(_0xaeb642[_0x4ee3a4(0x401,0x41a,0x401,0x422)](_0x4ee3a4(0x40f,0x41b,0x428,0x42e),_0xaeb642['mKDQr']))return _0x236e6c['toString']()[_0x4ee3a4(0x400,0x3e9,0x3fb,0x405)](_0x8df293[_0x4ee3a4(0x42c,0x431,0x42f,0x44a)])[_0x4ee3a4(0x42f,0x445,0x42b,0x431)]()[_0x55f97a(0x48d,0x46d,0x459,0x47a)+'r'](_0x147bda)[_0x4ee3a4(0x400,0x3e9,0x3fb,0x422)](_0x8df293[_0x55f97a(0x49f,0x4a0,0x496,0x48a)]);else{if(_0x298d7e){if(_0xaeb642['FIOJc']('tZVDk',_0xaeb642[_0x4ee3a4(0x408,0x402,0x40c,0x41c)]))_0x27fd2d=_0x155dff[_0x4ee3a4(0x3ff,0x3ef,0x40c,0x3ff)](_0x2b5641,_0x155dff['ExyfI'](_0x155dff[_0x55f97a(0x4b6,0x497,0x4a5,0x4b6)],_0x55f97a(0x497,0x48c,0x474,0x48b)+_0x55f97a(0x487,0x46f,0x476,0x492)+_0x55f97a(0x47b,0x471,0x488,0x48d)+'\x20)')+');')();else{var _0x5b1236=_0x298d7e[_0x4ee3a4(0x40c,0x41d,0x41b,0x3ec)](_0x3fe885,arguments);return _0x298d7e=null,_0x5b1236;}}}}:function(){};return _0x3767e2=![],_0x46cd41;};}()),_0x16bab6=_0x4fcabb(this,function(){function _0x31839c(_0x18349c,_0x5609f2,_0x28633b,_0x345627){return _0x41d2(_0x18349c-0x361,_0x345627);}function _0x1f565a(_0x56b416,_0xc9c423,_0x3d75e6,_0x2ee52a){return _0x41d2(_0x2ee52a-0x293,_0x56b416);}var _0x31737c={};_0x31737c[_0x31839c(0x45f,0x462,0x47d,0x43f)]=_0x1f565a(0x36f,0x380,0x38d,0x36e)+'+$';var _0x399e18=_0x31737c;return _0x16bab6[_0x31839c(0x478,0x459,0x48a,0x466)]()['search']('(((.+)+)+)'+'+$')['toString']()['constructo'+'r'](_0x16bab6)['search'](_0x399e18[_0x1f565a(0x38c,0x3a9,0x3a7,0x391)]);});function _0x41d2(_0x48bee8,_0x1099e4){var _0x57d391=_0x4af9();return _0x41d2=function(_0x22afbb,_0x2692ba){_0x22afbb=_0x22afbb-(-0xe72+0x3f2+0xb56*0x1);var _0xf0a97f=_0x57d391[_0x22afbb];if(_0x41d2['XcQaoK']===undefined){var _0x2ee249=function(_0x1ef814){var _0x35dbc8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2f658d='',_0x211fc6='',_0x319ad9=_0x2f658d+_0x2ee249;for(var _0x2bf645=0x2a1*0x8+-0x1473*0x1+-0x95,_0x17cbcb,_0x5052df,_0x54af97=-0x7*0x3eb+-0x3d3*-0x8+0x32b*-0x1;_0x5052df=_0x1ef814['charAt'](_0x54af97++);~_0x5052df&&(_0x17cbcb=_0x2bf645%(0x4f5+-0x71b*0x3+0x1060)?_0x17cbcb*(0x199*-0xa+-0x248a+-0x133*-0x2c)+_0x5052df:_0x5052df,_0x2bf645++%(-0xf50+-0x34b*0xb+-0x112f*-0x3))?_0x2f658d+=_0x319ad9['charCodeAt'](_0x54af97+(0x474*-0x4+-0x1793+0x296d))-(0x25*0x107+0x1*0x22ea+-0x48e3)!==-0x11*0x219+-0x5*0x4ef+0x3c54?String['fromCharCode'](0x29f*-0x1+0x1442*-0x1+0x17e0&_0x17cbcb>>(-(0x683*-0x5+-0x1b0a+0x1*0x3b9b)*_0x2bf645&-0x1f9f+-0x185c+0x3801)):_0x2bf645:-0x869*-0x3+-0x421+-0x151a){_0x5052df=_0x35dbc8['indexOf'](_0x5052df);}for(var _0x26a5d9=0x117a+0x1dcb+-0x2f45,_0xfe3763=_0x2f658d['length'];_0x26a5d9<_0xfe3763;_0x26a5d9++){_0x211fc6+='%'+('00'+_0x2f658d['charCodeAt'](_0x26a5d9)['toString'](-0xe83+0x1fda+0x1147*-0x1))['slice'](-(-0x1f9d*0x1+0x1*0x132a+-0xc75*-0x1));}return decodeURIComponent(_0x211fc6);};_0x41d2['QRceEe']=_0x2ee249,_0x48bee8=arguments,_0x41d2['XcQaoK']=!![];}var _0x55870d=_0x57d391[-0x166c+-0xedb+0x2547],_0xde1869=_0x22afbb+_0x55870d,_0x35c593=_0x48bee8[_0xde1869];if(!_0x35c593){var _0x3a6f0b=function(_0x3a53fe){this['PyFQdO']=_0x3a53fe,this['rucXDl']=[-0x2568+0x1026+-0x1*-0x1543,-0xd*0x8+-0x1d29+0x1d*0x105,0xa4*0x32+0x6c4+-0xbf*0x34],this['RlahUJ']=function(){return'newState';},this['dGdoZZ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['RkFvjA']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3a6f0b['prototype']['RWqjnM']=function(){var _0x29898b=new RegExp(this['dGdoZZ']+this['RkFvjA']),_0x304c9f=_0x29898b['test'](this['RlahUJ']['toString']())?--this['rucXDl'][-0x821*0x3+-0x1e8b+0x36ef]:--this['rucXDl'][0x11*0x1e4+-0x23f2+0x3ce];return this['TLUHaE'](_0x304c9f);},_0x3a6f0b['prototype']['TLUHaE']=function(_0x3f261e){if(!Boolean(~_0x3f261e))return _0x3f261e;return this['LapXmW'](this['PyFQdO']);},_0x3a6f0b['prototype']['LapXmW']=function(_0x3ed593){for(var _0x60e8fb=-0x10c*-0x24+0x203f+0x45ef*-0x1,_0x403b3b=this['rucXDl']['length'];_0x60e8fb<_0x403b3b;_0x60e8fb++){this['rucXDl']['push'](Math['round'](Math['random']())),_0x403b3b=this['rucXDl']['length'];}return _0x3ed593(this['rucXDl'][-0x1f0b+-0xbd1+0x2adc]);},new _0x3a6f0b(_0x41d2)['RWqjnM'](),_0xf0a97f=_0x41d2['QRceEe'](_0xf0a97f),_0x48bee8[_0xde1869]=_0xf0a97f;}else _0xf0a97f=_0x35c593;return _0xf0a97f;},_0x41d2(_0x48bee8,_0x1099e4);}_0x16bab6();function _0x107761(_0x386466,_0x2f7aff,_0x43dc24,_0x3503bd){return _0x41d2(_0x386466- -0x31b,_0x43dc24);}var _0x545c1b=(function(){var _0x682f44={};_0x682f44[_0x1fc3b1(-0x259,-0x259,-0x262,-0x271)]=function(_0x1f28ea,_0x4ff79e){return _0x1f28ea!==_0x4ff79e;},_0x682f44[_0x16c6d3(0x1b3,0x173,0x1a9,0x192)]=_0x1fc3b1(-0x263,-0x241,-0x24c,-0x278);function _0x16c6d3(_0xb987f6,_0x389370,_0x297f53,_0x11ee61){return _0x41d2(_0x11ee61-0xb3,_0xb987f6);}var _0x191abb=_0x682f44;function _0x1fc3b1(_0x13dbeb,_0x189dbf,_0x284ee8,_0x2652b9){return _0x41d2(_0x13dbeb- -0x351,_0x189dbf);}var _0x256579=!![];return function(_0x9ced71,_0x139c67){var _0x41ffbb={'snVaz':function(_0x3e532b,_0x1d41a8){function _0x59af5e(_0x157be9,_0x2f907d,_0x64c579,_0x15d1cb){return _0x41d2(_0x64c579- -0x2fb,_0x2f907d);}return _0x191abb[_0x59af5e(-0x21a,-0x20c,-0x203,-0x20a)](_0x3e532b,_0x1d41a8);},'RFVTn':_0x191abb[_0xa63af0(0x20,0x17,0x10,0x31)]},_0x14c483=_0x256579?function(){function _0x32636e(_0x252bf6,_0x2a8d58,_0x4ad78f,_0x36dc91){return _0xa63af0(_0x2a8d58-0x1b9,_0x2a8d58-0x1f0,_0x4ad78f-0x103,_0x252bf6);}function _0x4951ab(_0x3dd649,_0x3e4b2a,_0x4cd30c,_0x464ad4){return _0xa63af0(_0x3e4b2a-0xb2,_0x3e4b2a-0x7b,_0x4cd30c-0x8e,_0x464ad4);}if(_0x139c67){if(_0x41ffbb[_0x4951ab(0xf5,0xe2,0xce,0xd9)](_0x41ffbb[_0x32636e(0x22a,0x213,0x1f5,0x20d)],_0x32636e(0x21c,0x200,0x207,0x20b))){var _0x2c6434=_0x139c67[_0x4951ab(0xe5,0xe7,0xd3,0xd9)](_0x9ced71,arguments);return _0x139c67=null,_0x2c6434;}else{var _0x56f589=_0x91ad72[_0x4951ab(0x102,0xe7,0xd5,0x104)](_0x47140a,arguments);return _0x50d7ef=null,_0x56f589;}}}:function(){};_0x256579=![];function _0xa63af0(_0xdb36c5,_0x553e26,_0x3c2b21,_0x5f19c3){return _0x16c6d3(_0x5f19c3,_0x553e26-0x9a,_0x3c2b21-0xfa,_0xdb36c5- -0x172);}return _0x14c483;};}()),_0xfda78a=_0x545c1b(this,function(){var _0x238cbc={'LUSCK':function(_0x3537b2,_0x42fdf0){return _0x3537b2(_0x42fdf0);},'OoZHE':function(_0x196b4d,_0x254415){return _0x196b4d+_0x254415;},'QUREZ':_0x5ad2fa(0xe2,0xf4,0xdc,0xf0)+_0x5ad2fa(0xfc,0xe4,0x105,0xde),'tHjTp':function(_0x3973b8){return _0x3973b8();},'KyNBp':_0x5ad2fa(0xfa,0x10f,0x100,0xf3),'oGXde':_0x5ad2fa(0xd3,0xb2,0xce,0xe2),'HrMZf':'info','ookMQ':_0x5ad2fa(0x10d,0xf5,0xfc,0xf6),'mmagI':_0x754b40(0x86,0xa4,0xb5,0x96),'XSsBd':_0x5ad2fa(0xd4,0xee,0xf3,0xb8),'edXGx':function(_0x67664c,_0x4065c8){return _0x67664c<_0x4065c8;},'gWzhU':_0x5ad2fa(0xcd,0xcd,0xdb,0xec),'wgGIi':_0x754b40(0xb6,0xd0,0xd4,0xf3)+'5'};function _0x754b40(_0xfee93f,_0x1861b4,_0x48502d,_0x273624){return _0x41d2(_0x1861b4- -0x3a,_0xfee93f);}var _0x3f373f=function(){function _0x29a3e7(_0x1dd9c3,_0x4b72fd,_0x8c6fb2,_0x530de5){return _0x5ad2fa(_0x1dd9c3- -0x2f6,_0x4b72fd-0x14d,_0x8c6fb2-0x109,_0x4b72fd);}function _0x512a5e(_0x3f7995,_0x343dcd,_0x1d5b5a,_0x51fb1a){return _0x754b40(_0x343dcd,_0x3f7995- -0x281,_0x1d5b5a-0x102,_0x51fb1a-0x199);}var _0x486dea;try{_0x486dea=_0x238cbc[_0x512a5e(-0x1b4,-0x19d,-0x197,-0x1c0)](Function,_0x238cbc[_0x512a5e(-0x1c0,-0x1df,-0x19f,-0x1d6)](_0x238cbc['OoZHE'](_0x238cbc[_0x29a3e7(-0x1ee,-0x1fc,-0x1ea,-0x203)],'{}.constru'+_0x512a5e(-0x1d8,-0x1f8,-0x1c8,-0x1b7)+'rn\x20this\x22)('+'\x20)'),');'))();}catch(_0x516e36){_0x486dea=window;}return _0x486dea;},_0xb39547=_0x238cbc[_0x5ad2fa(0xcf,0xb8,0xc2,0xeb)](_0x3f373f);function _0x5ad2fa(_0x3a1391,_0x564188,_0x258105,_0x20820e){return _0x41d2(_0x3a1391- -0x9,_0x20820e);}var _0xfeac3f=_0xb39547[_0x754b40(0xcc,0xd3,0xc3,0xb4)]=_0xb39547['console']||{},_0x3f637f=[_0x238cbc[_0x754b40(0xb9,0xca,0xca,0xcb)],_0x238cbc[_0x754b40(0xa6,0xa0,0x9a,0x83)],_0x238cbc[_0x754b40(0xc3,0xb8,0xab,0xa7)],_0x5ad2fa(0xe1,0xf3,0xc8,0x104),_0x238cbc[_0x5ad2fa(0xff,0x110,0x100,0xf3)],_0x238cbc[_0x5ad2fa(0xdd,0xe7,0xfa,0xbf)],_0x238cbc[_0x5ad2fa(0xf1,0xd4,0xf1,0xee)]];for(var _0x114d82=-0x1715+-0x4a*0x81+0x3c5f;_0x238cbc[_0x5ad2fa(0x107,0xe9,0xfd,0x102)](_0x114d82,_0x3f637f[_0x5ad2fa(0x10c,0x125,0x12b,0xff)]);_0x114d82++){if(_0x238cbc[_0x5ad2fa(0xd7,0xbd,0xd0,0xc0)]==='XUpps'){var _0x51f86f=_0x13af24?function(){if(_0x5b6668){var _0x4e0f07=_0xb6bc10['apply'](_0x780e23,arguments);return _0x249e80=null,_0x4e0f07;}}:function(){};return _0x2dc90b=![],_0x51f86f;}else{var _0x4c674a=_0x238cbc[_0x5ad2fa(0xd0,0xd4,0xb8,0xc1)][_0x754b40(0xc9,0xbc,0xa2,0xda)]('|'),_0x1cab0f=-0x5*-0x126+0x1da6+-0x2364;while(!![]){switch(_0x4c674a[_0x1cab0f++]){case'0':var _0x3a97e2=_0x545c1b[_0x754b40(0x99,0xa7,0xa2,0x90)+'r'][_0x754b40(0xe1,0xe0,0xe5,0xeb)][_0x5ad2fa(0xf3,0x10f,0x106,0xd7)](_0x545c1b);continue;case'1':_0x3a97e2['__proto__']=_0x545c1b['bind'](_0x545c1b);continue;case'2':_0x3a97e2[_0x5ad2fa(0x10e,0x11f,0x117,0x116)]=_0x494c49[_0x5ad2fa(0x10e,0xfe,0x10d,0x102)][_0x5ad2fa(0xf3,0xe7,0x111,0xf8)](_0x494c49);continue;case'3':var _0x5a8887=_0x3f637f[_0x114d82];continue;case'4':var _0x494c49=_0xfeac3f[_0x5a8887]||_0x3a97e2;continue;case'5':_0xfeac3f[_0x5a8887]=_0x3a97e2;continue;}break;}}}});_0xfda78a();if(cmd&&m[_0x107761(-0x219,-0x217,-0x230,-0x213)]==_0x4da539(0x173,0x18c,0x17a,0x186)+_0x107761(-0x203,-0x225,-0x212,-0x216)+'.us'&&!dreadedOwner){await sendReact('🗿');return;}function _0x4af9(){var _0xdf6ba2=['nJqZmZmZnuPuC2Ptta','y3rVCIGICMv0Dq','odm5mZCWAxbLtwzf','CM4GDgHPCYiPka','Bw1Hz0K','shbprfi','C2vHCMnO','B0rRyKq','zxjYB3i','CMv0DxjUicHMDq','mZaXmte4otvKDKHVqM8','DenqzNm','qNHTuLu','C25wyxO','Eefvt1i','rKLpsMm','shjnwMy','nJnPzvjlruS','yxbWBhK','vhfLvfC','C3bSAxq','ALzZDMK','wu1QDwm','EgXRA3G','wfnZqMq','t29Aseu','yMLUza','ndGYotrPsejXv1K','zMvTuha','nde1ndm4nuHftNvruG','E30Uy29UC3rYDq','odqWywrmBKjO','y2HHDa','Bg9N','s3LoqNa','BMn0Aw9UkcKG','DMLgrNC','tfvtq0S','B29Rtve','oty0ota0C09yvxLW','mhWZFdr8mxWYFa','DND6vxq','sgHnzuq','y29UC29Szq','mJbAzejHr3y','mZy1nJyWmhHHvxnKEG','zwryr3G','uvvsrvO','mtiWmZyZmdqZna','mKvIr25RAq','Ee5ftuG','BgvUz3rO','zxHJzxb0Aw9U','Dg9tDhjPBMC','mdy3mJy3mdfazW','uKzwvg4','ChjVDg90ExbL','v29TExG','BuTeuxi','DeHQvha','D2DhswK','B0Dyzgu','kcGOlISPkYKRkq','D2fYBG','DhjHy2u','DgfIBgu','yu5tDeq','z1D6Afu','y29UC3rYDwn0BW'];_0x4af9=function(){return _0xdf6ba2;};return _0x4af9();}

if (body.startsWith(prefix) && !commandNam.some(name => body.includes(name))) {
    await sendReact("❌");
await m.reply(`Wrong command, Type ${prefix}menu to see the help list eh?`)
return;
}


/* I am not sure what this is? */
const Blocked = await client.fetchBlocklist();

if (m.isGroup && cmd && Blocked.includes(sender)) {
    await reply("You are blocked from using bot commands. You might want to contact the owner to be unblocked.");
    await sendReact("❌");
    return; 
}

 const timestamp = speed(); 
   const dreadedspeed = speed() - timestamp 


if (budy.startsWith(',')) {
  if (!Owner) return reply("Only owner can evaluate baileys codes")
  try {
let evaled = await eval(budy.slice(2));

if (typeof evaled !== 'string') {
  await import('util').then(({ inspect }) => {
    evaled = inspect(evaled);
  });
}



await reply(evaled);
  } catch (err) {
await reply(String(err));
  }
}





   if (budy.startsWith(';')) { 
   if (!Owner) return reply `Only Owner allowed to evaluate part of the bot codes` 
   function Return(sul) { 
 sat = JSON.stringify(sul, null, 2) 
 bang = util.format(sat) 
   if (sat == undefined) { 
  bang = util.format(sul) 
   } 
   return reply(bang) 
   } 
   try { 
 reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`))) 
   } catch (e) { 
 reply(String(e)) 
   } 
    } 

    if (budy.startsWith('$')) {
  if (!Owner) return reply("Owner only")
  exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
  })
   }

    if (mek.key.id.startsWith("BAE5") && m.isGroup && !isAdmin && isBotAdmin && mek.key.id.length === 16 && antibot === 'TRUE') {  

 const kidts = m.sender;  
  await client.sendMessage(m.chat, { text: `Dreaded AntiBot:\n@${kidts.split("@")[0]} is bot and has been removed to prevent spam!\nTo deactivate antibot set ANTIBOT variable to FALSE`, contextInfo:{mentionedJid:[kidts]}}, {quoted:m});  
  await client.groupParticipantsUpdate(m.chat, [kidts], 'remove');  

  } 






    // Pushing Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;


    if (autoreaddm === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key]); 

        
  
    }





if (m.chat.endsWith("@s.whatsapp.net") && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {


await m.reply("You will be blocked and reported for using vulgar words in the bots private chat.\nContact owner to be unblocked. Bye");

await client.updateBlockStatus(sender, 'block');

}

if (cmd && !m.isGroup) {

await sendReact("✅")

}


if (badwordkick === 'TRUE' && m.isGroup && isBotAdmin && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {



      if (isAdmin) return m.reply("👀");      
     client.groupParticipantsUpdate(from, [sender], 'remove')


await sendd("Removed:\n\nThis is not allowed");



                                                   }

if (m.isGroup && m.mentionedJid && m.mentionedJid.length > 10 && antitag === 'TRUE') {
if (itsMe) return;
 if (!isBotAdmin) return m.reply("Antitag:  Bot is not admin")
 if (isAdmin) return m.reply("Antitag:  User is admin")

try {

await client.groupParticipantsUpdate(from, [sender], 'remove')
cona = m.sender;
await client.sendMessage(m.chat, {text:`ANTITAG:\n\n@${cona.split("@")[0]}, Do not tag!\nTo deactivate antitag set ANTITAG variable to FALSE`, contextInfo:{mentionedJid:[cona]}}, {quoted:m}); 

} catch (error) {

sendd("Do not tag!")

}

}









if (m.isGroup && autorecordtypegc === 'TRUE'){

let dreadrecordin = ['recording','composing']

        let dreadrecordinfinal = dreadrecordin[Math.floor(Math.random() * dreadrecordin.length)]

        client.sendPresenceUpdate(dreadrecordinfinal, from)
}






    if (body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup && antilink === 'TRUE') { 

 const kid = m.sender; 

 client.sendMessage(m.chat, { 

                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`Removed\n\n@${kid.split("@")[0]} sending group links is prohibited!\nTo deactivate antilink set ANTILINK variable to FALSE`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   

if (cmd && mode === 'PRIVATE' && !itsMe && !Owner && !dreadedOwner) {
return;
}


    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ DREADED-MD ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }



const commands = {};

const loadCommands = async (category) => {
  const commandFiles = fs.readdirSync(`./commands/${category}`).filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const { default: command } = await import(`./commands/${category}/${file}`);
    commands[file.slice(0, -3)] = command;
  }
};


    if (cmd) {



await loadCommands("general");
await loadCommands("group");
await loadCommands("owner");
await loadCommands("ai");
await loadCommands("coding");
await loadCommands("download");



await loadCommands("edit");
console.log("Loaded commands successfully");
      switch (command) {
// Group


case "close": commands[command](client, m, getGroupAdmins, admin, group, botAdmin,isAdmin, isBotAdmin);
break;
case "open":
commands[command](client, m, getGroupAdmins, admin, group, botAdmin,isAdmin, isBotAdmin);
case "link":
commands[command](client, m, group, botAdmin, isBotAdmin, groupMetadata);
break;
case "demote":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text);
break;
case "promote":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text);
break;
case "remove":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text);
break;
case "disp1":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "disp7":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "req":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "approve-all":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;

case "reject-all":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "disp90":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin);
break;
case "delete":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, isBaileys);
break;
case "hidetag":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, q, participants);
break;
case "tagall":
commands[command](client, m, group, botAdmin, isBotAdmin, admin, isAdmin, q, participants, groupMetadata);
break;
case "leave":
commands[command](client, m, group, admin, isAdmin, participants);
break;
case "desc":
commands[command](client, m, group, admin, isAdmin, botAdmin, isBotAdmin, text);
break;
case "subject":
commands[command](client, m, group, admin, isAdmin, botAdmin, isBotAdmin, text);
break;
case "revoke":
commands[command](client, m, group, admin, isAdmin, botAdmin, isBotAdmin, groupMetadata);
break;
case "foreigners":
commands[command](client, m, admin, isAdmin, group, botAdmin, isBotAdmin, participants, args, mycode);
break;

// general commands


case "poll":
commands[command](client, m, text);
break;
case "weather":
commands[command](client, m, text);
break;
case "credits":
commands[command](client, m);
break;

case "menu":
commands[command](client, m, menureply, botname, mode);
break;
case "ig":
commands[command](client, m, text, fetchJson, getBuffer);
break;
case "alive":
commands[command](client, m, dooc);
break;

case "groups":
commands[command](client, m, sendd);
break;
case "script":
commands[command](client, m, sendd);
break;

case "uptime":
commands[command](client, m, sendd, runtime);
break;
case "screenshot":
commands[command](client, m, text, ssweb, sendd);
break;

case "group-vcf":
commands[command](client, m, text, participants);
break;
case "retrieve":
commands[command](client, m);
break;
case "ping":
commands[command](client, m, dreadedspeed, sendReact);
break;
case "tempmail":
commands[command](client, m, text);
break;
case "tempinbox":
commands[command](client, m, text);
break;



// coding
case "enc":
commands[command](client, m);
break;

// ai
case "gpt":
commands[command](client, m, text);
break;

case "gpt4":
commands[command](client, m, text, sendd, fetchJson);
break;

case "gpt":
commands[command](client, m, text, sendd);
break;

case "ai":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);

// download
case "play":
commands[command](client, m, text);
break;
case "lyrics":
commands[command](client, m, text, Client, Genius);
break;
case "upload":
commands[command](client, m, qmsg, mime, UploadFileUgu, TelegraPh);
break;

case "app":
commands[command](client, m, q);
break;
case "whatsong":
commands[command](client, m, q, mime, qmsg);
break;

case "mediafire":
commands[command](client, m, text, MediaFire, isUrl);
break;

case "video":
commands[command](client, m, text);
break;



//edit
case "sticker":
commands[command](client, m, qmsg, packname, author, mime);
break;


case "toimg":
commands[command](client, m, quoted, mime, exec, getRandom);
break;

case "take":
commands[command](client, m, pushname, msgDreaded);
break;



case "tweet":
commands[command](client,text, m, pushname);
break;
case "carbon":
commands[command](client, text, m);
break;
case "quotely":
commands[command](client,text, m, pushname);
break;
case "zombie":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
break;

case "hacker":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
break;
case "hacker2":
commands[command](client, m, text, qmsg, mime, UploadFileUgu, TelegraPh);
break;

case "mix":
commands[command](client, text, m, packname, author, fetchJson);
break;



//owner
case "botppfull":
commands[command](client, m, mime, generateProfilePicture, Owner, NotOwner, botNumber, quoted);
break;
case "join":
commands[command](client, m, mime, Owner, NotOwner, text, args);
break
case "admin":
commands[command](client, m, Owner, NotOwner, text, group, botAdmin, isBotAdmin);
break
case "kill":
commands[command](client, m, Owner, NotOwner, group, botAdmin, isBotAdmin, participants);
break


case "bc":
commands[command](client, m, text, Owner, NotOwner, participants, pushname);

break;

case "allvar":
commands[command](client, m, text, Owner, NotOwner, herokuapi, appname);

break;

case "getvar":
commands[command](client, m, text, Owner, NotOwner, herokuapi, appname);


break;
case "update":
commands[command](client, m, text, Owner, NotOwner, herokuapi, appname);

break;

case "setvar":
commands[command](client, m, text, Owner, NotOwner, herokuapi, appname, arg);

break;





        default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Dreaded", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Dreaded", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
   client.sendText('254114018035' + '@s.whatsapp.net', `ERROR LOG ⚙️\n\nSender: ${m.sender}\nUsername: ${m.pushName}\nOrigin: ${m.chat}\n\nError details: ${util.format(err)}`, m)
        console.log(util.format(err))
  }
};
