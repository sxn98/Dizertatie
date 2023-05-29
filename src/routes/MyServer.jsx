import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import GuildContext from "../utils/context/GuildContext";
import testGuild from "../test/test";

const MyServer=()=>{
    const{updateGuildID}=useContext(GuildContext)
    const navigate=useNavigate();

    const handleClick=(guildId)=>{
        updateGuildID(guildId);
        navigate('/GuildSettings')
    }

    
    
    return(
        <div className="MyServer">
            <div> Your servers with the BOT in them</div>
            <div className="PanouServere">
                
                {testGuild.map((guild)=>(
                    
                    <li className="Servere" onClick={()=>{ handleClick(guild.id) }}>
                        <p>{guild.name}</p>
                        <img src={guild.icon} alt=""/>
                    </li>
                ))}
                
            </div>
        </div>
    )
}
export default MyServer;