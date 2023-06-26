import { useContext } from "react";
import GuildContext from "../utils/context/GuildContext";
import useGetGuildChannels from "../hooks/useGetGuildChannels";
import { Navigate } from "react-router-dom";
import updateWelcomeChannelID from "../utils/updateGuildWelcomeChannel";


const WelcomeMessage=()=>{
    const{guild}=useContext(GuildContext) 
    
    const {config,channels,loading, selectedChannel,setSelectedChannel}=useGetGuildChannels(guild?.id);
     console.log(config)
     console.log(channels);

    const updateWelcomeChannel=async () =>{
        try {
            await updateWelcomeChannelID(guild.id,selectedChannel || '')
            console.log(guild.id)
            console.log(selectedChannel)
        } catch (error) {
            console.log(error)
        }
        
    }
    return guild ? (
        <div className="WelcomeMessage">
            {channels && config && !loading ?
            <>
            
                <label> Current welcome channel for server {guild.name}</label>
                <select onChange={(e)=>setSelectedChannel(e.target.value)}>
                    <option className="DefaultSelection">Select a channel</option>
                    {
                        channels.map((channel)=> <option selected={channel.id === config.WelcomeChannelID} value={channel.id}>#{channel.name}</option>)
                    }
                </select>
                <label>Current message</label>
                <textarea></textarea>
                <button className="Butoane" onClick={()=>updateWelcomeChannel()}>Save new welcome channel</button>
            </> : (
            <div> Loading </div>
            )}
        </div>
    ) : (
        <Navigate replace to="/MyServer" />
    )
}
export default WelcomeMessage;