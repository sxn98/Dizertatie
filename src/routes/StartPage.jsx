import { useNavigate } from "react-router-dom"
import DiscordLogo from "../Resurse/DiscordLogo1.png"
import SupportServer from "../Resurse/ServerSupportLogo1.png"
import Adaugare from "../Resurse/Adaugare.png"
const StartPage=()=>{
    const navigate=useNavigate();
    
    const Logare=()=>{
       window.location.href='http://localhost:3001/api/auth/login';
    }


    return(
        <div className="Login">
            <div className="divLogin">
                <img src={DiscordLogo} alt=""/>
                <button className="Butoane" onClick={Logare}>Login cu Discord</button>
            </div>
            
           <div className="divSupport">
                <img src={SupportServer} alt=""/>
                <button className="Butoane" onClick={()=>{window.location.href='//discord.gg/QdP4jyg'}}>Server de support</button>
           </div>

           <div className="divAdaugare">
                <img src={Adaugare} alt=""/>
                <button className="Butoane" onClick={()=>{window.location.href='https://discord.com/api/oauth2/authorize?client_id=1085223512698015794&permissions=8&scope=bot'}}>Adauga bot-ul</button>
           </div>
        </div>
    )
}
export default StartPage;