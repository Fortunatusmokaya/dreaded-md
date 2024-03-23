import axios from "axios";

const quotelyY = async (client, text, m, pushname) => {
    if (!text) return m.reply("provide some text for quotely");

    const avatar = 'https://telegra.ph/file/b34645ca1e3a34f1b3978.jpg'

    const imageUrl = `https://aemt.me/quotely?avatar=${avatar}&name=${pushname}&text=${text}`;

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary');
        await client.sendImageAsSticker(m.chat, imageBuffer, m, { packname: pushname, author: "dreaded" });
    } catch (error) {
        console.error('Error fetching image:', error);
    }
};

export default quotelyY;