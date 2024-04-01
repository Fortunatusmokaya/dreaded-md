const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;

const AddGc = async (client, m, group, botAdmin, isBotAdmin, admin, isAdmin, q, participants, groupMetadata, botname, pushname) => {

if (!m.isGroup) return m.reply(group);
if (!isAdmin) return m.reply(admin);
if (!isBotAdmin) return m.reply(botAdmin);
if (!q) return m.reply("provide number to be added in this format.\n\nadd 254114018035")

const _participants = participants.map((user) => user.id);

const users = (await Promise.all(
      q.split(',')
          .map((v) => v.replace(/[^0-9]/g, ''))
          .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
          .map(async (v) => [
            v,
            await client.onWhatsApp(v + '@s.whatsapp.net'),
          ]),
  )).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');


  const response = await client.query({
    tag: 'iq',
    attrs: {
      type: 'set',
      xmlns: 'w:g2',
      to: m.chat,
    },
    content: users.map((jid) => ({
      tag: 'add',
      attrs: {},
      content: [{tag: 'participant', attrs: {jid}}],
    })),
  });


const pp = await client.profilePictureUrl(m.chat).catch((_) => "https://telegra.ph/file/9f1c508cf099eefc331f7.jpg");
let jpegThumbnail = Buffer.alloc(0);

if (pp) {
  try {
    const respons = await fetch(pp);
    if (respons.ok) {
      jpegThumbnail = await respons.buffer();
    } else {
      console.error('Failed to fetch profile picture:', respons.statusText);
    }
  } catch (error) {
    console.error('Error fetching profile picture:', error);
  }
}

const add = getBinaryNodeChild(response, 'add');
  const participant = getBinaryNodeChildren(add, 'participant');

                 let respon = await client.groupInviteCode(m.chat); 
                 

for (const user of participant.filter((item) => item.attrs.error == 403)) {

const jid = user.attrs.jid;
    const content = getBinaryNodeChild(user, 'add_request');
    const invite_code = content.attrs.code;
    const invite_code_exp = content.attrs.expiration;

const teza = `I cannot add @${jid.split('@')[0]} due to privacy settings, sending an invite link instead.`;

await m.reply(teza);



let links = `You have been invited by ${pushname} to join the group ${groupMetadata.subject}:\n\nhttps://chat.whatsapp.com/${respon}\n\n${botname} 🤖`

await client.sendMessage(jid, { image: { url: pp}, caption: links}, { quoted: m});


  }

}

export default AddGc