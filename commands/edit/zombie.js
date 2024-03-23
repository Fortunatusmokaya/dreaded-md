 const imageZO = async(client, m, text, qmsg, mime, UploadFileUgu, TelegraPh) => {


   if (!/image/.test(mime)) return m.reply("quote an image, the image should have the face of a person.");  




let fdr = await client.downloadAndSaveMediaMessage(qmsg);


                    const fta = await TelegraPh(fdr);

let res;

await fetch(`https://aemt.me/converter/zombie?url=${fta}`)
.then(response => response.json()) 
  .then(data => {
    res = data.url;
})

await client.sendMessage(m.chat, { image: { url: res}, caption: "Converted by Dreaded! 🦄"}, { quoted: m});

}

export default imageZO;
