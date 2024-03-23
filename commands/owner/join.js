const joinGC = async (client, m, mime, Owner, NotOwner, text, args) => {

  if (!Owner) return m.reply("this command is specific to my developer...")
                 if (!text) return m.reply("provide a valid group link")
                let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  m.reply(jsonformat(res))).catch((err) =>m.reply(`Trying to join...`)) 
  
             } 

export default joinGC;
