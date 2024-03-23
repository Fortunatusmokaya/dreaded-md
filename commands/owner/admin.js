const ownerAdmin = async (client, m, Owner, NotOwner, text, group, botAdmin, isBotAdmin) => {

                 if (!m.isGroup) return m.reply(group);
         if (!isBotAdmin) return m.reply(botAdmin); 
          if (!Owner) return m.reply(NotOwner); 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }

export default ownerAdmin;