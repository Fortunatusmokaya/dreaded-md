const rejec = async(client, m, group, botAdmin, isBotAdmin, admin, isAdmin) => {

if (!m.isGroup) return m.reply(group);
if (!isAdmin) return m.reply(admin);
if (!isBotAdmin) return m.reply(botAdmin);

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("there are no pending join requests.");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
m.reply("all pending join requests have been rejected.");

}

export default rejec;