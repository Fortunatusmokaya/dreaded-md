import { G4F } from "g4f"; 


const gptA = async(client, m, text) => {

if (!text) return m.reply("Provide text...");




const GPT = new G4F(); 

const messages = [
	{ role: "system", content: "You're an AI.."},
	{ role: "user", content: text}
];


GPT.chatCompletion(messages)
  .then(result => {
    console.log(result);
    m.reply(result);
  });





}

export default gptA;
