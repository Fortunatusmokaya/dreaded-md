import simpleGit from "simple-git";
import Heroku from "heroku-client";

const Update = async(client, m, text, Owner, NotOwner, herokuapi, appname) => {

// if (!Owner) return m.reply(NotOwner);
const heroku = new Heroku({ token: herokuapi })  

const git = simpleGit();    
await git.fetch();        
              var commits = await git.log(['main' + '..origin/' +'main']);

if (commits.total === 0) {        
                return m.reply('✅ Your bot is up to date with main branch!') }

else { m.reply("❌ Your bot is not up to date, update it by redeploying or syncing your fork")

}   
                    
};

export default Update;