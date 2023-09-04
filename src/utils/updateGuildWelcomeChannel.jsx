import axios from 'axios';

function updateWelcomeChannelID(guildID,channelID,welcomeString){
    
    console.log(guildID)
    console.log(channelID)
    axios.post(`http://localhost:3001/api/guilds/${guildID}/config/welcome`,{
        channelID, // parametrul din body trebuie sa aibe aceeasi denumire cu cea din backend din guilds/guild.controller comanda de @Post(':GuildID/config/welcome')
        welcomeString
    },
    {
        withCredentials:true
    })
}



export default updateWelcomeChannelID;