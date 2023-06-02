import { useNavigate } from "react-router-dom";
import GuildContext from "../utils/context/GuildContext";
import { useContext } from "react";

const GuildSettings=()=>{
    const navigate=useNavigate();
    const{guildID}=useContext(GuildContext)

    const SchimbarePrefix=()=>{
        navigate('/PrefixChangePage');
    }
    const SchimbareWelcomeMessage=()=>{
        navigate('/WelcomeMessage');
    }
    const SchimbareLog=()=>{
        navigate('/Log');
    }
    const SchimbareAutoRole=()=>{
        navigate('/AutoROle');
    }
    return(

        <div className="GuildSettings">
            <div>Settings for server</div>
            <div className="LabelServer"> {guildID} </div>
            <div className="BasicSettings">
                <div> Basic Settings</div>
                <button className="Butoane" onClick={SchimbarePrefix} >Prefix</button>
                <button className="Butoane" onClick={SchimbareWelcomeMessage} >Welcome Message</button>
            </div>
            <div className="AdvancedSettings">
                <div> Advanced Settings</div>
                <button className="Butoane" onClick={SchimbareLog}>Log</button>
                <button className="Butoane" onClick={SchimbareAutoRole}>Auto Role</button>
            </div>
            

        </div>
    )
}
export default GuildSettings;