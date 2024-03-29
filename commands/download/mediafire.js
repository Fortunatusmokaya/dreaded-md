const botname = process.env.BOTNAME || 'DREADED-MD';

const mediaf = async (client, m, text, MediaFire, isUrl) => {


if (!text) return m.reply("provide mediafire link for download");

if (!text.includes('mediafire.com')) {
        return m.reply(`Doesnt look like a mediafire link, uh?`);
    }


await m.reply(`A moment...`);

try {
      
        const fileInfo = await MediaFire(text);

    

if (!fileInfo || !fileInfo.length) {
    return m.reply("Sorry, this file is no longer stored in mediafire.");
}





       
        await client.sendMessage(
            m.chat,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `${fileInfo[0].nama} downloaded by ${botname}`, 
            },
            { quoted: m }
     

   );

} catch (error) {
        
     
        m.reply(`Something went wrong:\n\n${error.message}`);
    }
    
}

export default mediaf;