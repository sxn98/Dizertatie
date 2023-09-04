import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import GuildContext from "../utils/context/GuildContext";
import testGuild from "../test/test";
import useGetMutualServers from "../hooks/useGetMutualServers";

const MyServer=()=>{
    const{updateGuild}=useContext(GuildContext)
    const navigate=useNavigate();
    const {servers, loading, error}=useGetMutualServers();

    const handleClick=(guild)=>{
        updateGuild(guild);

        navigate('/GuildSettings')
    }

    
    
    return(

        <div className="MyServer">
            <div> Your servers with the BOT in them (servers in which you do not have administrator privileges will not show!)</div>

            {loading ? (<div> Loading </div>
            ) :(
                <div className="PanouServere">
                
                {servers && servers.mutualGuilds.map((guild)=>( // fiecare obiect gasit in api va fi reprezentat ca un server intr-o caseta
                    
                    <li key={guild.id} className="Servere" onClick={()=>{ console.log(guild);handleClick(guild) }}>
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