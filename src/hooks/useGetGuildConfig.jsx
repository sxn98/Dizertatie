import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetGuildConfig(guildID){
    
    const [config, setConfig]=useState();
    const [prefix,setPrefix]=useState('')
    const [error,setError]=useState();
    const[loading,setLoading]=useState(false); //vom folosi pentru un loading screen ca sa nu afiseze o pagina goala

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:3001/api/guilds/config/${guildID}`, {withCredentials:true})
        .then((data)=>{ 

            // console.log(data.data)
            // console.log(data.data.prefix)
            setConfig(data.data)
            setPrefix(data.data.prefix)
        })
        .catch((e)=> {
            console.log(e.message);
            setError(e.message);
        }).finally(()=> setLoading(false)) //codul de la .finally se executa indiferent daca da eroare sau nu
        



    },[])

    
    return {config,prefix,setPrefix,error,loading}
}



export default useGetGuildConfig;