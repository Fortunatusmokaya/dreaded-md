const tagallGC  = async (client, m, group, admin, isAdmin, botAdmin, isBotAdmin, q, participants, groupMetadata) => {


if (!m.isGroup) return m.reply(group); 
                 if (!isBotAdmin) return m.reply(botAdmin); 
                 if (!isAdmin) return m.reply(admin); 

let txt = `${groupMetadata.subject} members have been tagged by ${m.pushName}.
   
  Message ${q ? q : 'No Message!'}\n\n`; 
                 for (let mem of participants) { 
                 txt += `📧 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: txt, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 

export default tagallGC;