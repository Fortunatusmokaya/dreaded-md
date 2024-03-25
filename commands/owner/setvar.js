import Heroku from "heroku-client";

const Setvar = async(client, m, text, Owner, NotOwner, herokuapi, appname, arg) => {

if (!Owner) return m.reply(NotOwner);

if(!arg[0] || !(arg.join('').split('='))) {m.reply('Wrong format. Example\nsetvar PREFIX=!');return};

const heroku = new Heroku({
                                token: herokuapi,
                        });
let baseURI = "/apps/" + appname;
        await heroku.patch(baseURI + "/config-vars", {
          body: {
                  [text.split('=')[0]]: text.split('=')[1],
          },
        });

await m.reply('Settings applied, bot is rebooting...');

}

export default Setvar;