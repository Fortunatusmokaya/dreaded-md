const welcombye = process.env.EVENTS || 'FALSE';
const botname = process.env.BOTNAME || 'DREADED-MD';
const antidemote = process.env.ANTIDEMOTE || 'TRUE';

const antipromote = process.env.ANTIDEMOTE || 'TRUE';

const Events = async (client, Fortu) => {

const Myself = await client.decodeJid(client.user.id);

  try {
    let metadata = await client.groupMetadata(Fortu.id);
    let participants = Fortu.participants;
    let desc = metadata.desc || "No Description";

    for (let num of participants) {
      let dpuser;

try {
  dpuser = await client.profilePictureUrl(num, "image");
} catch {
  dpuser = "https://telegra.ph/file/0a620a1cf04d3ba3874f5.jpg";
}

      if (Fortu.action == "add") {

        let userName = num;

        let Welcometext = `Hello @${userName.split("@")[0]}\n\n👋 Welcome to ${metadata.subject}.\n\n📝 Description\n${desc}\n\nThank you\n\n${botname}`;
if (welcombye === 'TRUE') {

          await client.sendMessage(Fortu.id, {
            image: { url: dpuser },
            caption: Welcometext,
            mentions: [num],
          });
        }
      } else if (Fortu.action == "remove") {

        let userName2 = num;

        let Lefttext = `Good bye @${userName2.split("@")[0]} 👋, we probably not gonna miss you.`;
        if (welcombye === 'TRUE') {
          await client.sendMessage(Fortu.id, {
            image: { url: dpuser },
            caption: Lefttext,
            mentions: [num],
          });
        }


      } else if (Fortu.action == "demote" && antidemote === "TRUE") {
   if (Fortu.author == metadata.owner || Fortu.author == Myself || Fortu.author == Fortu.participants[0]) return;

await  client.groupParticipantsUpdate(Fortu.id ,[Fortu.author],"demote") ;
       await client.groupParticipantsUpdate(Fortu.id , [Fortu.participants[0]] , "promote")

client.sendMessage(
                Fortu.id,
                {
                  text : `@${(Fortu.author).split("@")[0]} you will be demoted for demoting @${(Fortu.participants[0]).split("@")[0]}.\n\nAntidemote is active and only super users are allowed to demote!` ,
                  mentions : [Fortu.author,Fortu.participants[0]]
                }
           )
}  else if (Fortu.action == "promote" && antipromote === "TRUE") {
   if (Fortu.author == metadata.owner || Fortu.author == Myself || Fortu.author == Fortu.participants[0]) return;

await   client.groupParticipantsUpdate(Fortu.id ,[Fortu.author,Fortu.participants[0]],"demote");

client.sendMessage(
              Fortu.id,
              {
                text : `@${(Fortu.author).split("@")[0]} you have been demoted for promoting @${(Fortu.participants[0]).split("@")[0]} to admin.\n\nAntipromote is active and only super users can promote!`,
                mentions : [Fortu.author,Fortu.participants[0]]
              }
         )

}

    }
  } catch (err) {
    console.log(err);
  }
};

export default Events;










