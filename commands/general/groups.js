const groupsBot= async(client, m, sendd) => {

            let getGroupzs = await client.groupFetchAllParticipating();
            let groupzs = Object.entries(getGroupzs)
                .slice(0)
                .map((entry) => entry[1]);
            let anaa = groupzs.map((v) => v.id);
            let jackhuh = `Bot groups\n\n`
            m.reply(`Currently in ${anaa.length} groups, sending list in a moment. . .`)
            for (let i of anaa) {
                let metadat = await client.groupMetadata(i);
               
                jackhuh += `Subject:- ${metadat.subject}\n`
                jackhuh += `Members: ${metadat.participants.length}\n`
                jackhuh += `Jid:- ${i}\n\n`

            }
          sendd(jackhuh)

}

export default groupsBot;