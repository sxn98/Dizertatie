import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetGuildRoles(GuildID){
    
    const[roles,setRoles]=useState();

    const[loading,setLoading]=useState(false); //vom folosi pentru un loading screen   *posibil*
    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:3001/api/discord/guilds/${GuildID}/roles`, {withCredentials:true})
        .then(({data})=> {
            //console.log(data);
            const filteredData=data.filter((item)=> item.name!=="@everyone")
           // console.log(filteredData)
            setRoles(filteredData)
        })
        .catch((error)=> console.log(error.response))
        .finally(()=> setLoading(false))
    },[])

    
    return {roles,loading}
}

export default useGetGuildRoles;
