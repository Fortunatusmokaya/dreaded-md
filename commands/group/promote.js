const promoteGC = async (client, m, group, botAdmin, isBotAdmin, admin, isAdmin, text) => {

                 if (!m.isGroup) return m.reply(group); 
         if (!isBotAdmin) return m.reply(botAdmin); 
         if (!isAdmin) return m.reply(admin); 
 if (!m.quoted) return m.reply(`Tag someone with the command!`); 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Successfully promoted! 👑'); 
         } 
export default promoteGC