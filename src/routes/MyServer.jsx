import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import GuildContext from "../utils/context/GuildContext";
import testGuild from "../test/test";
import useGetMutualServers from "../hooks/useGetMutualServers";

const MyServer=()=>{
    const{updateGuildID}=useContext(GuildContext)
    const navigate=useNavigate();
    const {servers, loading, error}=useGetMutualServers();

    const handleClick=(guildId)=>{
        updateGuildID(guildId);
        navigate('/GuildSettings')
    }

    
    
    return(

        <div className="MyServer">
            <div> Your servers with the BOT in them</div>

            {loading ? (<div> Loading </div>
            ) :(
                <div className="PanouServere">
                
                {servers && servers.mutualGuilds.map((guild)=>(
                    
                    <li key={guild.id} className="Servere" onClick={()=>{ handleClick(guild.id) }}>
                        <p key={guild.name}>{guild.name}</p>
                        <img key={guild.icon} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name}/>
                    </li>
                ))} 
                
            </div>
            )}

        </div>
    )
}
export default MyServer;

{/* <div className="MyServer">
<div> Your servers with the BOT in them</div>

{loading ? (<div> Loading </div>
) :(
    <div className="PanouServere">
    
     {servers.mutualGuilds.map((guild)=>(
        
        <li className="Servere" onClick={()=>{ handleClick(guild.id) }}>
            <p>{guild.name}</p>
            <img src={guild.icon} alt=""/>
        </li>
    ))} 
    
</div>
)}

</div> */}