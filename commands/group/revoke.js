const revokeGC = async (client, m, group, admin, isAdmin, botAdmin, isBotAdmin, groupMetadata) => {

if (!m.isGroup) return m.reply(group); 
                 if (!isBotAdmin) return m.reply(botAdmin); 
                 if (!isAdmin) return m.reply(admin); 

await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link has been reset!', m); 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 

}

export default revokeGC