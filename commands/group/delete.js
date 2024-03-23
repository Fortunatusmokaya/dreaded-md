const delMsg = async (client, m, group, botAdmin, isBotAdmin, admin, isAdmin, isBaileys, id, fromMe, chat, participant, remoteJid) => {

if (!m.isGroup) return m.reply(group); 
                 if (!isBotAdmin) return m.reply(botAdmin); 
                 if (!isAdmin) return m.reply(admin); 

if (!m.quoted) return m.reply(`No message quoted for deletion`); 

   if (isBaileys) return m.reply(`Unable to delete, quoted message looks like my message? Or another bots message`); 

client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 

export default delMsg;