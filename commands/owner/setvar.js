import Heroku from "heroku-client";

const Setvar = async(client, m, text, Owner, NotOwner, herokuapi, appname, arg) => {

if (!Owner) return m.reply(NotOwner);


 if(!text.split('=')[1]) return m.reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar ANTIBOT=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await m.reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nBot is restarting...`);  



}

export default Setvar;