import axios from 'axios';

function updateGuildPrefix(guildID,prefix){
    
    axios.post(`http://localhost:3001/api/guilds/${guildID}/config/prefix`,{
        prefix,
    },
    {
        withCredentials:true
    })
}



export default updateGuildPrefix;