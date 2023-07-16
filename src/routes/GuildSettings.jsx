import { Navigate, useNavigate } from "react-router-dom";
import GuildContext from "../utils/context/GuildContext";
import { useContext } from "react";

const GuildSettings=()=>{
    const navigate=useNavigate();
    const{guild}=useContext(GuildContext)
    
    console.log(guild?.id)

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
        navigate('/AutoRole');
    }
    return guild ? ( // pagina se va afisa daca userul chiar a apasat pe o casuta al unui server gasit

        <div className="GuildSettings">
            <div>Settings for server</div>
            <div className="LabelServer"> {guild?.name} </div>
            <img className="" key={guild.icon} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name}/>
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
    ) : (
        <Navigate replace to="/MyServer" />
    )
}
export default GuildSettings;