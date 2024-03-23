const igDL = async (client, m, text, fetchJson, getBuffer) => {
  try {
    if (!text) return m.reply("Provide an Instagram username");

    const response = await fetch(`https://aemt.me/download/igstalk?username=${text}`);
    const data = await response.json();

    const userInfo = data.result.user_info;
    const followers = userInfo.followers;
const following = userInfo.following;
const username = userInfo.username;
const name = userInfo.full_name;
const bio = userInfo.biography;
const posts = userInfo.posts;
const privat = userInfo.is_private;
const verif = userInfo.is_verified;
const exturl = userInfo.external_url;
const profilepic = userInfo.profile_pic_url;


let igdata = `🎀 Name: ${name}
📝 Username: ${username}
🎉 Followers: ${followers}
🎗️ Following: ${following}
📢 Posts: ${posts}
💡 Bio: ${bio}
🔗 Links: ${exturl}
🔒 Private: ${privat}
📌 Verified: ${verif}`;

/* 
await client.sendMessage(m.chat, { text: igdata }, { quoted: m }); 

*/

await client.sendMessage(m.chat, { image: { url: profilepic },  caption: igdata }, { quoted: m}) 


  } catch (error) {
    console.error('Error fetching Instagram data:', error);
  }
};

export default igDL;