import { useContext } from "react";
import GuildContext from "../utils/context/GuildContext";


const WelcomeMessage=()=>{
    const{guildID}=useContext(GuildContext) 
    return(
        <div className="WelcomeMessage">
            <label> Current welcome channel for {guildID}</label>
            <select>
                <option className="DefaultSelection" disabled>Select a channel</option>
                <option>optiunea 1</option>
                <option>optiunea 2</option>
            </select>
            <label>Current message</label>
            <textarea></textarea>
            <button className="Butoane">Save new welcome channel</button>
            
        </div>
    )
}
export default WelcomeMessage;