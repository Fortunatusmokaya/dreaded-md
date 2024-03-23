import fs from "fs";

 const mixEmoji = async (client, text, m, packname, author, fetchJson) => {

if (!text) m.reply(`This way, 2 emojis separated with a plus sign: 😅+🤔`)
 let [emoji1, emoji2] = text.split`+` 
 let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`) 
 for (let res of anu.results) { 
     let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: packname, author: author, categories: res.tags }) 
     await fs.unlinkSync(encmedia) 
 } 
     } 


export default mixEmoji;
