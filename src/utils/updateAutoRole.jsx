import axios from 'axios';

function updateAutoRole(GuildID,RoleID,ActivityName){
    
    // console.log(GuildID)
    // console.log(RoleID)
    // console.log(ActivityName)
    axios.post(`http://localhost:3001/api/guilds/autoroleconfig/${GuildID}/config`,{
        RoleID, // parametrii din body trebuie sa aibe aceeasi denumire cu cea din backend din guildsautorole/guildautorole.controller comanda de @Post('autoroleconfig/:GuildID/:RoleID/:ActivityName')
        ActivityName,
    },
    {
        withCredentials:true
    })
}



export default updateAutoRole;