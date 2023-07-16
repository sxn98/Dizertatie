import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetAutoRoleConfig(GuildID){
    
    const[autoRole,setAutoRole]=useState();

    const[autoRoleLoading,setAutoRoleLoading]=useState(false); //vom folosi pentru un loading screen   *posibil*
    useEffect(()=>{
        setAutoRoleLoading(true)
        axios.get(`http://localhost:3001/api/guilds/autoroleconfig/${GuildID}`, {withCredentials:true})
        .then(({data})=> {
            //console.log(data);
            setAutoRole(data)
        })
        .catch((error)=> console.log(error.response))
        .finally(()=> setAutoRoleLoading(false))
    },[])

    
    return {autoRole,autoRoleLoading}
}

export default useGetAutoRoleConfig;