import acrcloud from "acrcloud";
import yts from "yt-search";
import ytdl from "ytdl-core";
import fs from "fs";

const shazam = async(client, m, q, mime, qmsg) => {

let acr = new acrcloud({
    host: 'identify-ap-southeast-1.acrcloud.com',
    access_key: '26afd4eec96b0f5e5ab16a7e6e05ab37',
    access_secret: 'wXOZIqdMNZmaHJP1YDWVyeQLg579uK2CfY6hWMN8'
  });

if (!/video|audio/.test(mime)) return m.reply("Tag a video or audio for the bot to analyse.");

let p = m.quoted ? m.quoted : m
	
		let buffer = await p.download()
		await m.reply('A moment. . .')

let { status, metadata } = await acr.identify(buffer)
		if (status.code !== 0) return m.reply(status.msg); 
		let { title, artists, album, genres, release_date } = metadata.music[0]
		let txt = `Title: ${title}${artists ? `\nArtists: ${artists.map(v => v.name).join(', ')}` : ''}`
		txt += `${album ? `\nAlbum: ${album.name}` : ''}${genres ? `\nGenres: ${genres.map(v => v.name).join(', ')}` : ''}\n`
		txt += `Release Date: ${release_date}`
		 m.reply(txt.trim())


const {
           videos
            } = await yts(txt.trim());
            if (!videos || videos.length <= 0) return m.reply("Not found");
let urlYt = videos[0].url
            let infoYt = await ytdl.getInfo(urlYt);
let getRandonm = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };

let titleYt = infoYt.videoDetails.title;
            let randomName = getRandonm(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
    .pipe(fs.createWriteStream(`./${randomName}`));

await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

    await client.sendMessage(
                    m.chat, {
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: "audio/mpeg",
                        fileName: titleYt + ".mp3",
                    }, {
                        quoted: m
                    }
                );




}

                

export default shazam