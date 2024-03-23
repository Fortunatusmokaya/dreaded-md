 import Genius from "genius-lyrics";
const lyricsDl = async (client, m, text, Client, Genius) => {
try {

if (!text) return m.reply("provide a song name")
    const response = await fetch(`https://some-random-api.com/lyrics?title=${text}`);
    const data = await response.json();

    const title = data.title;
    const lyrics = data.lyrics;
    const thumbnail = data.thumbnail.genius;
    
    let lyricdata = `Title: ${title}\n\n${lyrics}`;

await client.sendMessage(m.chat, { image: { url: thumbnail }, caption: lyricdata}, { quoted: m});
    
    

   
  } catch (error) {
    m.reply("could not fetch lyrics");
  }


}

export default lyricsDl;



