import simpleGit from "simple-git";
import Heroku from "heroku-client";

const Update = async(client, m, text, Owner, NotOwner, herokuapi, appname) => {


const heroku = new Heroku({ token: herokuapi })  

await git.fetch();        
              var commits = await git.log(['main' + '..origin/' +'main']);

if (commits.total === 0) {        
                return m.reply('✅ Your bot is up to date with main branch!') }

else {        
                    var app = await heroku.get('/apps/' + appname ) 

git.fetch('upstream', 'main');        
                  git.reset('hard', ['FETCH_HEAD']);

var git_url = app.git_url.replace(        
                    "https://", "https://api:" + herokuapi + "@"        
                  ) 

try {        
                    await git.addRemote('heroku', git_url);        
                  } catch (error) { m.reply('An error occurred while pushing latest commits to your bot. Redeploy the bot manually.'); }  


await git.push('heroku', 'main');   

await m.reply('✅ Your bot has been updated.\n\nRestarting bot...')       
                        

}

export default Update;