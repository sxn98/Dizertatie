import { useContext } from "react";
import { Navigate } from "react-router-dom";
import GuildContext from "../utils/context/GuildContext";
import useGetGuildConfig from "../hooks/useGetGuildConfig";
import updateGuildPrefix from "../utils/updateGuildPrefix";


const PrefixChangePage=()=>{
    const{guild}=useContext(GuildContext) 
    const {config,prefix,setPrefix,error,loading}=useGetGuildConfig((guild && guild.id) || '')

    // console.log(config)
    // console.log(prefix)

    const savePrefix=async (e)=>{
        //e.prevendDefault();
        console.log(prefix);
        console.log(config.GuildID)

        try {
            const res=await updateGuildPrefix(config?.GuildID,prefix);
        } catch (error) {
            console.log(error)
        }
    }

    return guild ? (
        
        <div className="PrefixChange">
            {!loading && config ? <>
                <label> Current prefix for {guild.name}</label>
                <input value={prefix} onChange={(e)=> setPrefix(e.target.value)}></input>
                <button className="Butoane" onClick={savePrefix}>Save</button>
            </>:(
            <div> Loading </div>
            )}
            

        </div>
    ) : (
        <Navigate replace to="/MyServer" />
    )
}
export default PrefixChangePage;