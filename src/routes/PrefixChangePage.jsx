import { useContext } from "react";
import GuildContext from "../utils/context/GuildContext";


const PrefixChangePage=()=>{
    const{guildID}=useContext(GuildContext) 
    return(
        <div className="PrefixChange">
            <label> Current prefix for {guildID}</label>
            <input></input>
            <button className="Butoane">Save new prefix</button>

        </div>
    )
}
export default PrefixChangePage;