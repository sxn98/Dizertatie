import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetGuildChannels(GuildID){
    
    const [config,setConfig]=useState();
    const[channels,setChannels]=useState();
    const[loading,setLoading]=useState(false); //vom folosi pentru un loading screen   *posibil*
    const[selectedChannel, setSelectedChannel]=useState(false)
    const[welcomeString,setWelcomeString]=useState()
    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:3001/api/guilds/config/${GuildID}`, {withCredentials:true})
        .then(({data})=>{

            //console.log(data)
            setConfig(data);
            setSelectedChannel(data.WelcomeChannelID)
            setWelcomeString(data.WelcomeChannelString)
            return  axios.get(`http://localhost:3001/api/discord/guilds/${GuildID}/channels`, {withCredentials:true})  

        })
        .then(({data})=> {
            //console.log(data);
            setChannels(data)
        })
        .catch((error)=> console.log(error.response))
        .finally(()=> setLoading(false))
    },[])

    
    return {config,channels,loading,selectedChannel,setSelectedChannel,welcomeString,setWelcomeString}
}

export default useGetGuildChannels;
