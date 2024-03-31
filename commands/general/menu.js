import fs from "fs";

const menu = process.env.MENUTYPE || 'LINK';
const menuimage = process.env.MENULINK || 'https://telegra.ph/file/d6dab955fbaa42fce2280.jpg';

const getMenu = async (client, m, menureply, botname, mode, video, pict) => {
  try {
    const categories = ['general', 'ai', 'coding', 'download', 'group', 'owner', 'edit'];
   
let menuText = `\nBOTNAME: ${botname}\n\nMODE: ${mode}:\n\n`;



     menuText += 'Categories and Commands:\n\n';

    for (const category of categories) {
      const commandFiles = fs.readdirSync(`./commands/${category}`).filter((file) => file.endsWith('.js'));

      menuText += `༆ *${category.charAt(0).toUpperCase() + category.slice(1)}:*\n`;
      for (const file of commandFiles) {
        const commandName = file.replace('.js', '');
        menuText += `${commandName}\n`;
      }

      menuText += '\n'; 
    }

   // await client.sendMessage(m.chat, menuText, { quoted: m });


if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: video,
                        caption: menuText,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: menuimage }, caption: menuText, fileLength: "99999"}, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: menuText,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `DREADED-MD`,
                                body: `fff`,
                                thumbnail: pict,
                                sourceUrl: ``,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
else { menureply(menuText); }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while fetching the menu.');
  }
};

export default getMenu;
