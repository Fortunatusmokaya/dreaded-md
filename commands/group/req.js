const reqJoin = async(client, m, group, botAdmin, isBotAdmin, admin, isAdmin) => {

if (!isBotAdmin) return m.reply(botAdmin);
if (!m.isGroup) return m.reply(group);

const response = await client.groupRequestParticipantsList(m.chat);

if (response.length === 0) return m.reply("there are no pending join requests.");

let jids = ''; 

response.forEach((participant, index) => {
    jids +='+' + participant.jid.split('@')[0];
    if (index < response.length - 1) {
        jids += '\n'; 
    }
});

 client.sendMessage(m.chat, {text:`Pending Participants:- 🕓\n${jids}\n\nUse the command approve-all or reject-all to approve or reject these join requests.`}, {quoted:m}); 

// m.reply(jids); 

}

export default reqJoin;