import axios from 'axios';

function updateLog(GuildID,LogChannel,MsgDeletedContent,MsgEditedContent,NicknameChanges,UserForcefullyDisconnected,UserForcefullyMoved){
    
    console.log(GuildID,LogChannel,MsgDeletedContent,MsgEditedContent,NicknameChanges,UserForcefullyDisconnected,UserForcefullyMoved)
    axios.post(`http://localhost:3001/api/guilds/logconfig/${GuildID}/update`,{
        LogChannel, 
        MsgDeletedContent,
        MsgEditedContent,
        NicknameChanges,
        UserForcefullyDisconnected,
        UserForcefullyMoved
    },
    {
        withCredentials:true
    })
}




export default updateLog;