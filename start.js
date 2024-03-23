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
import dreaded from "./main.js";
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
// import await from './lib/dreadfunc.js';
import { sleep } from './lib/dreadfunc.js';


// Importing specific function from PhoneNumber module
import pkg from "awesome-phonenumber";

const PhoneNumber = pkg

// Exporting store for use in other modules
/* export const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) }); */

const store = (0, pk.makeInMemoryStore)({
    logger: pino().child({ level: "silent", stream: "store" }),
});

// Other code remains the same
const logger = logger_1.default.child({});
logger.level = 'silent';
const sessionName = "dreaded4";
const donet = "https://github.com/Fortunatusmokaya/DREADED-AI";
const owner = ["254114018035"];
const kali = readFileSync('./dreaded.jpg'); // Using readFileSync directly
const packname = process.env.STICKER_PACKNAME;
    const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const autodlstatus = process.env.AUTODOWNLOAD_STATUS || 'TRUE';
const welcome = process.env.WELCOME || 'TRUE';
const session = process.env.SESSION.replace(/DREADED-BOT;;;=>/g, "");

async function authentication() {
    try {

        
        if (!fs.existsSync("./session/creds.json")) {
            console.log("connecting...");
            await fs.writeFileSync("./session/creds.json", atob(session), "utf8");
          
        }
        else if (fs.existsSync("./session/creds.json") && session != "zokk") {
            await fs.writeFileSync("./session/creds.json", atob(session), "utf8");
        }
    }
    catch (e) {
        console.log("Session is invalid" + e);
        return;
    }
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


/*.reply = (text) => { 
 return conn.sendMessage(from, { text: text, contextInfo:{"externalAdReply": {"title": `DREADED BOT`,"body": `Hi ${m.pushName}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/c75efecf7f0aef851fc02.jpg',"thumbnail": kali,"sourceUrl": `https://github.com/Fortunatusmokaya/DREADED-GPT-AI`}}}, { quoted:m})} 
*/

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
async function startHisoka() {

        const { state, saveCreds } = await (0, pk.useMultiFileAuthState)("session");
               const sockOptions = {
           
            logger: pino({ level: "silent" }),
            browser: ['Md', "safari", "1.0.0"],
            printQRInTerminal: true,
            fireInitQueries: false,
            shouldSyncHistoryMessage: true,
            downloadHistory: true,
            syncFullHistory: true,
            generateHighQualityLinkPreview: true,
            markOnlineOnConnect: false,
            keepAliveIntervalMs: 30_000,
            /* auth: state*/ auth: {
                creds: state.creds,
                /** caching makes the store faster to send/recv messages */
                keys: (0, pk.makeCacheableSignalKeyStore)(state.keys, logger),
            },
            //////////
            getMessage: async (key) => {
                if (store) {
                    const msgg = await store.loadMessage(key.remoteJid, key.id, undefined);
                    return msgg.message || undefined;
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                };
            }
            ///////
        };

//async function startHisoka() {
   
/* const { state, saveCreds } = await useMultiFileAuthState("session");
  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
  console.log(
    color(
      figlet.textSync("DREADED-AI", {
        font: "Standard",
        horizontalLayout: "default",
        vertivalLayout: "default",
        whitespaceBreak: false,
      }),
      "green"
    )
  );

  const client = dreadedConnect({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    browser: ["CHATGPT - DREADED", "Safari", "5.1.7"],
    auth: state,
syncFullHistory: true,
  });*/


        const client = (0, pk.default)(sockOptions);
  store.bind(client.ev);

       
        setInterval(() => { store.writeToFile("store.json"); }, 3000);

  client.ev.on("messages.upsert", async (chatUpdate) => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {

     const mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (autoviewstatus === 'TRUE' && mek.key && mek.key.remoteJid === "status@broadcast") {

         client.readMessages([mek.key]);

}

            if (mek.key && mek.key.remoteJid === 'status@broadcast' && autodlstatus === "TRUE") {
                
                if (mek.message.extendedTextMessage) {
                    var stTxt = mek.message.extendedTextMessage.text;
                    await client.sendMessage(client.user.id, { text: stTxt }, { quoted: mek });
                }
                else if (mek.message.imageMessage) {
                    var stMsg = mek.message.imageMessage.caption;
                    var stImg = await client.downloadAndSaveMediaMessage(mek.message.imageMessage);
                    await client.sendMessage(client.user.id, { image: { url: stImg }, caption: stMsg }, { quoted: mek });
                }
                else if (mek.message.videoMessage) {
                    var stMsg = mek.message.videoMessage.caption;
                    var stVideo = await client.downloadAndSaveMediaMessage(mek.message.videoMessage);
                    await client.sendMessage(client.user.id, {
                        video: { url: stVideo }, caption: stMsg
                    }, { quoted: mek });
                }
                
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



client.ev.on('group-participants.update', async (rooom) => { 
 let metadatar = await client.groupMetadata(rooom.id) 
  let participantss = rooom.participants 

  for (let member of participantss) { 
 let bye = ['see you later 👋', 'bye 🤧','has left 😐','we probably not gonna miss you 😤','is no longer a participant 🥱','farewell 🤧','is off to somewhere else...','where are you going 🥱'] 
 let xp = bye[Math.floor(Math.random() * bye.length)] 
  if (rooom.action == 'remove') { 

if (member.includes('254114018035') || member.includes('254114018035')) {

await client.sendMessage(rooom.id, { text: `Ooops!\n\nOwner @${member.split('@')[0]}, is no longer a participant of this group chat. 😭`, mentions: [member]});

} else if (member) { 




                                   client.sendMessage(rooom.id, { text:`@${member.split('@')[0]} ${xp}`}); 
 } 
 } 
 } 
 }); 

/*

client.ev.on('group-participants.update', async (room) => {
      let meta = await (await client.groupMetadata(room.id));
      let member = room.participants[0];
      if (room.action == 'add') {

            if (member.includes('254114018035') || member.includes('254114018035')) {



               await client.groupParticipantsUpdate(room.id, [member], 'promote');
               client.sendMessage(room.id, { text: `DETECTED! ðŸ‘€\n\nOwner @${member.split`@`[0]} has joined via this group's invite link! Promoted to Admin!`, mentions: [member]});

                 } else if (!member.startsWith('254')) {
                            //  if (db.chats[m.chat].antiforeign) {

                       await client.groupParticipantsUpdate(room.id, [member], 'remove'); 
                client.sendMessage(room.id, { text: `@${member.split`@`[0]} welcome... 👋`});
                }

                }
                });



*/





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
/*  client.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startHisoka();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        startHisoka();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Device Logged Out, Please Delete File creds.json and Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        startHisoka();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        startHisoka();
      } else {
        console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
        startHisoka();
      }
    } else if (connection === "open") {
      console.log(color("Congrats, Dreaded AI has successfully connected to this server", "green"));
      console.log(color("Follow me on GitHub as Fortunatusmokaya", "red"));
      console.log(color("DREADED HAS STARTED"));
    }
    // console.log('Connected...', update)
  });
*/

client.ev.on("connection.update", async (con) => {
    const { lastDisconnect, connection } = con;
    if (connection === "connecting") {
        console.log("Connection in progress...");
    }
    else if (connection === 'open') {
        console.log("✅ Connection successful!️");
        
      
        
            let message = `
 DREADED is CONNECTED

     ▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚
     ▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚
 
 Alive ✅`;
            await client.sendMessage(client.user.id, { text: message });
        }
    
    else if (connection == "close") {
        let disconnectReason = new boom_1.Boom(lastDisconnect?.error)?.output.statusCode;
        if (disconnectReason === pk.DisconnectReason.badSession) {
            console.log('Incorrect session id, please rescan the QR code...');
        }
        else if (disconnectReason === pk.DisconnectReason.connectionClosed) {
            console.log('!!! Connection closed, reconnecting...');
            startHisoka();
        }
        else if (disconnectReason === pk.DisconnectReason.connectionLost) {
            console.log('Connection to the server lost 😞, reconnecting...');
            startHisoka();
        }
        else if (disconnectReason === pk.DisconnectReason?.connectionReplaced) {
            console.log('Connection replaced, another session is already open, please close it !!!');
        }
        else if (disconnectReason === pk.DisconnectReason.loggedOut) {
            console.log('You are logged out, please rescan the QR code.');
        }
        else if (disconnectReason === pk.DisconnectReason.restartRequired) {
            console.log('Restarting ▶️');
            startHisoka();
        }
        else {
            console.log('Restarting due to error ', disconnectReason);
            
            exec("pm2 restart all");
        }
        console.log("Hmm " + connection);
        startHisoka(); 
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


client.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

client.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => { 
         let types = await client.getFile(PATH, true) 
         let { filename, size, ext, mime, data } = types 
         let type = '', mimetype = mime, pathFile = filename 
         if (options.asDocument) type = 'document' 
        if (options.asSticker || /webp/.test(mime)) { 
          let { writeExif } = require('./lib/dreadexif.js') 
             let media = { mimetype: mime, data } 
             pathFile = await writeExif(media, { packname: packname, author: packname, categories: options.categories ? options.categories : [] }) 
           //  await fs.promises.unlink(filename) 
             type = 'sticker' 
             mimetype = 'image/webp' 
         } 
         else if (/image/.test(mime)) type = 'image' 
         else if (/video/.test(mime)) type = 'video' 
         else if (/audio/.test(mime)) type = 'audio' 
         else type = 'document' 
         await client.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options }) 
        // return fs.promises.unlink(pathFile) 
     } 
     client.parseMention = async(text) => { 
         return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') 
     }
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

startHisoka();