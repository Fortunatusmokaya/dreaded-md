const welcombye = process.env.EVENTS || 'TRUE';
const botname = process.env.BOTNAME || 'DREADED-MD';
const Events = async (client, anu) => {
  try {
    let metadata = await client.groupMetadata(anu.id);
    let participants = anu.participants;
    let desc = metadata.desc || "No Description";

    for (let num of participants) {
      let dpuser;

try {
  dpuser = await client.profilePictureUrl(num, "image");
} catch {
  dpuser = "https://telegra.ph/file/0a620a1cf04d3ba3874f5.jpg";
}

      if (anu.action == "add") {

        let userName = num;

        let Welcometext = `Hello @${userName.split("@")[0]}\n\n👋 Welcome to ${metadata.subject}.\n\n📝 Description\n${desc}\n\nThank you\n\n${botname}`;
if (welcombye === 'TRUE') {

          await client.sendMessage(anu.id, {
            image: { url: dpuser },
            caption: Welcometext,
            mentions: [num],
          });
        }
      } else if (anu.action == "remove") {

        let userName2 = num;

        let Lefttext = `Good bye @${userName2.split("@")[0]} 👋, we probably not gonna miss you.`;
        if (welcombye === 'TRUE') {
          await client.sendMessage(anu.id, {
            image: { url: dpuser },
            caption: Lefttext,
            mentions: [num],
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export default Events;