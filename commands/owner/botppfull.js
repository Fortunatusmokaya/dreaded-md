

import fs from "fs";
const fullPP = async (client, m, mime, generateProfilePicture, Owner, NotOwner, botNumber, quoted) => {

if (!Owner) return m.reply(NotOwner); 
    if (!quoted) return m.reply(`Tag an image you want to be the bot's profile picture with the command`); 
    if (!/image/.test(mime)) return m.reply(`Tag an image you want to be the bot's profile picture with the command`); 
    if (/webp/.test(mime)) return m.reply(`Tag an image you want to be the bot's profile picture with the command`); 
    let medis = await client.downloadAndSaveMediaMessage(m.quoted, 'ppbot.jpeg'); 

                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await client.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply("Bot Profile Picture Updated")
                }


export default fullPP;