const descGC = async (client, m, group, admin, isAdmin, botAdmin, isBotAdmin, text) => {

if (!m.isGroup) return m.reply(group); 
                 if (!isBotAdmin) return m.reply(botAdmin); 
                 if (!isAdmin) return m.reply(admin); 

if (!text) return m.reply('Provide the text for the group description') 
                  await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 👍'); 

}

export default descGC