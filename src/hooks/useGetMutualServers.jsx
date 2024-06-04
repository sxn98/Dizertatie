import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetMutualServers(){
    const [servers,setServers]= useState();
    const[error,setError]=useState();
    const[loading,setLoading]=useState(false);

    useEffect( ()=>{
        setLoading(true);


        setTimeout(()=>{ // fara acest timeout api-ul este apelat prea des (mai precis de 2 ori la milisecunda), ceea ce rezulta un rate limit din partea discord-ului
            const result =(async ()=> await axios.get('http://localhost:3001/api/discord/guilds', {withCredentials:true})
            .then(({data})=>{

                //console.log(data);
                setServers(data);
               
            })
            .catch((e)=>{
                console.log(e.response.data)
                setError(e);
            })
            .finally(()=> setLoading(false)))
    
            result()
        },5000)

    },[])

   
    return {servers,error,loading}
}
export default useGetMutualServers;

// useEffect(()=>{
//     setLoading(true);
//     const result = async () => await axios.get('http://localhost:3001/api/discord/guilds', {withCredentials:true})
//     result()
//     .then(({data})=>{
//         console.log(data);

//         setServers(data);
      
//     })
//     .catch((e)=>{
//         console.log(e.response.data)
//         setError(e);
//     })
//     .finally(()=> setLoading(false))
// },[])