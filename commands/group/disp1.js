const Disp1 = async (client, m, group, botAdmin, isBotAdmin, admin, isAdmin) => {
if (!m.isGroup) return m.reply(group); 
                 if (!isBotAdmin) return m.reply(botAdmin); 
                 if (!isAdmin) return m.reply(admin); 
await client.groupToggleEphemeral(m.chat, 1*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 24hrs!'); 
 } 

export default Disp1;
