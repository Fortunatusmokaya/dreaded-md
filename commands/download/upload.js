import fs from "fs";
import util from "util";

const uploadTelegraph = async(client, m, qmsg, mime, UploadFileUgu, TelegraPh) => {
if (!qmsg) return m.reply("quote an image");

                let fta2 = await client.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let fta = await TelegraPh(fta2)
                    m.reply(util.format(fta))
                } else if (!/image/.test(mime)) {
                    let fta = await UploadFileUgu(fta2)
                    m.reply(util.format(fta))
                }
                await fs.unlinkSync(fta2)

            }

export default uploadTelegraph;
         