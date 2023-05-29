import { useNavigate } from "react-router-dom";
import GuildContext from "../utils/context/GuildContext";
import { useContext } from "react";

const GuildSettings=()=>{
    const navigate=useNavigate();
    const{guildID,updateGuildID}=useContext(GuildContext)
    const SchimbarePrefix=()=>{
        navigate('/PrefixChangePage');
    }
    return(

        <div className="GuildSettings">
            <div>Settings for server {guildID}</div>
            <button className="Butoane" onClick={SchimbarePrefix} >Prefix</button>
            <button className="Butoane" >Log</button>

        </div>
    )
}
export default GuildSettings;