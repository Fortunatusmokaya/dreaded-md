import Heroku from "heroku-client";

const Getvar = async(client, m, text, Owner, NotOwner, herokuapi, appname) => {

if (!Owner) return m.reply(NotOwner);
try {

const heroku = new Heroku({
              token: herokuapi,
            });
            let baseURI = "/apps/" + appname;
        let mok = await heroku.get(baseURI+'/config-vars')
        for (let vr in mok) {
        if( text ===vr ) return m.reply( vr+'= '+mok[vr]);
        } 

        } catch(e) {m.reply('Error below has occured' + e)}

}

export default Getvar;




