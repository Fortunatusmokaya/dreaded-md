const removeGC = async (client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text) => {

                 if (!m.isGroup) return m.reply(group); 
         if (!isBotAdmin) return m.reply(botAdmin); 
         if (!isAdmin) return m.reply(admin); 

                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

if (users == "254114018035@s.whatsapp.net") return m.reply("It's Owner Number! 🦄");

                 await client.groupParticipantsUpdate(m.chat, users, 'remove'); 
 m.reply('Successfully removed: 💤'); 
         } 

export default removeGC;