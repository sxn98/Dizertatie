import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetGuildChannelsLog(GuildID){
    
    const [config,setConfig]=useState();
    const[channels,setChannels]=useState();
    const[loading,setLoading]=useState(false); //vom folosi pentru un loading screen   *posibil*
    const[selectedChannel, setSelectedChannel]=useState(false)

    const[mdc,setMDC]=useState()
    const[mec,setMEC]=useState()
    const[nc,setNC]=useState()
    const[ufdv,setUFDV]=useState()
    const[ufmv,setUFMV]=useState()

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:3001/api/guilds/logconfig/${GuildID}`, {withCredentials:true})
        .then(({data})=>{

            console.log(data)
            setConfig(data);

            setSelectedChannel(data.LogChannel)
            setMDC(data.MsgDeletedContent)
            setMEC(data.MsgEditedContent)
            setNC(data.NicknameChanges)
            setUFDV(data.UserForcefullyDisconnected)
            setUFMV(data.UserForcefullyMoved)

            return  axios.get(`http://localhost:3001/api/discord/guilds/${GuildID}/channels`, {withCredentials:true})  

        })
        .then(({data})=> {
            //console.log(data);
            setChannels(data)
        })
        .catch((error)=> console.log(error.response))
        .finally(()=> setLoading(false))
    },[])

    
    return {config,channels,loading,selectedChannel,setSelectedChannel,mdc,setMDC,mec,setMEC,nc,setNC,ufdv,setUFDV,ufmv,setUFMV}
}

export default useGetGuildChannelsLog;
