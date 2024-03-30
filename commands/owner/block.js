
/* What's going on ? */

 const Block = async(client, m, Owner, NotOwner, text) => {

if (!Owner) return m.reply(NotOwner);
if (!m.quoted) return m.reply("Tag a user to block");

 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 

if (users == "254114018035@s.whatsapp.net") return m.reply("No, 🙂‍↕🙂‍↔");


const parts = users.split('@')[0];
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`${parts} has been blocked,  access to bot commands is now restricted too! eh?`); 
 } 


export default Block; 