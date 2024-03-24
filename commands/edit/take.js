import { Sticker, createSticker, StickerTypes } from 'wa-sticker-formatter';

const Take = async(client, m, pushname, msgDreaded) => {

if(!msgDreaded) { m.reply('Quote a sticker, image or short video.') ; return } ;
let media;
if (msgDreaded.imageMessage) {
     media = msgDreaded.imageMessage
  } else if(msgDreaded.videoMessage) {
media = msgDreaded.videoMessage
  } 
  else if (msgDreaded.stickerMessage) {
    media = msgDreaded.stickerMessage ;
  } else {
    m.reply('Quote some media...'); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: pushname,
            author: pushname,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}

export default Take;