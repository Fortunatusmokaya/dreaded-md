const subjectGC = async (client, m, group, admin, isAdmin, botAdmin, isBotAdmin, text) => {

if (!m.isGroup) return m.reply(group); 
                 if (!isBotAdmin) return m.reply(botAdmin); 
                 if (!isAdmin) return m.reply(admin); 

if (!text) return m.reply("provide text for the new group subject");

await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 👍'); 
             } 

export default subjectGC;