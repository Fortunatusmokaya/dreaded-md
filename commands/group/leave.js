const leaveGC = async (client, m, group, admin, isAdmin, participants) => {

if (!m.isGroup) return m.reply(group); 
               
                 if (!isAdmin) return m.reply(admin); 


await client.sendMessage(m.chat, { text : 'Goodbye, Dreaded will now exit the group' , mentions: participants.map(a => a.id)}, { quoted: m });
await client.groupLeave(m.chat); 
  
             } 


export default leaveGC;