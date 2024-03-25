import fs from "fs";

const getMenu = async (client, m, menureply, botname, mode) => {
  try {
    const categories = ['general', 'ai', 'coding', 'download', 'group', 'owner', 'edit'];
   
let menuText = `BOT NAME: ${botname}\n\nMODE: ${mode}:\n\n`;



 let menuText += 'Categories and Commands:\n\n';

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
menureply(menuText);
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while fetching the menu.');
  }
};

export default getMenu;
