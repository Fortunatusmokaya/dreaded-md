import fs from "fs";
const imgSticker = async (client, m, quoted, mime, exec, getRandom) => {
if (!quoted) return m.reply('Tag a static video with the command!'); 
    if (!/webp/.test(mime)) return m.reply(`Tag a sticker with the command`); 
  
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
   fs.unlinkSync(media); 
   if (err) m.reply(err)
   let buffer = fs.readFileSync(mokaya); 
   client.sendMessage(m.chat, { image: buffer, caption: `Converted by Dreaded! 🦄`}, { quoted: m}) 
   fs.unlinkSync(mokaya); 
    }); 
    } 

export default imgSticker;