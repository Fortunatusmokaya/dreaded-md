import fs from "fs";

const stickerCreate = async (client, m, qmsg, packname, author, mime) => {

            if (/image/.test(mime)) { 
  
                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else if (/video/.test(mime)) { 
             m.reply("wait a moment"); 
                 if (qmsg.seconds > 11) return m.reply('Video is too long for conversion!'); 
                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else { 
                 m.reply(`Send an image or short video with the caption ${prefix + command}`); 
                 } 
          }

export default stickerCreate;

