import axios from 'axios';

function deleteAutoRole(GuildID,RoleID,ActivityName){
    
    //  console.log(GuildID)
    //  console.log(RoleID)
    //  console.log(ActivityName)
    axios.delete(`http://localhost:3001/api/guilds/autoroleconfig/${GuildID}/config/remove`,{
        data:{
            RoleID,
            ActivityName
        }
    },
    {
        withCredentials:true
    })
}



export default deleteAutoRole;