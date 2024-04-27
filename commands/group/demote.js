const demoteGC = async (client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text) => {


try {
if (!m.isGroup) return m.reply(group);
         if (!isBotAdmin) return m.reply(botAdmin); 
         if (!isAdmin) return m.reply(admin); 
 if (!m.quoted) return m.reply(`Tag someone with the command!`); 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

if (users == "254114018035@s.whatsapp.net") return m.reply("It's Owner Number! 🦄");
  

const parts = users.split('@')[0];
                 await client.groupParticipantsUpdate(m.chat, [users], 'demote'); 
 m.reply(`${parts} is no longer admin!`); 


} catch (error) {
m.reply('error')

}
}

export default demoteGC;