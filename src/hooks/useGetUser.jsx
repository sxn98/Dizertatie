import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetUser(){
    const [user,setUser]=useState();
    const[error,setError]=useState();
    const[loading,setLoading]=useState(false); //vom folosi pentru un loading screen   *posibil*

    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:3001/api/auth/status', {withCredentials:true})
        .then((data)=>{ 
            console.log(data.data)
            console.log(data.data.DiscordID)
            console.log(data.data.ID)
            setUser(data.data);
        })
        .catch((e)=> {
            console.log(e.message);
            setError(e.message);
        }).finally(()=> setLoading(false)) //codul de la .finally se executa indiferent daca da eroare sau nu
    },[])

    return {user,error,loading}
}

export default useGetUser;

// export async function getItemsSearch(search){
//     const rezultat= await axios.get(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items?search=${search}`,{
//         headers:{
//             'Authorization':`Bearer ${localStorage.getItem('user-info')}`
//         }
//     })
    


//    return rezultat.data.items
   