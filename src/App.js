import "./css/NavBar.css"
import "./css/StartPage.css"
import"./css/Documentatie.css"
import './App.css';
import './css/PrefixChangePage.css';
import './css/MyServer.css';
import './css/GuildSettings.css';
import './css/WelcomeMessage.css';
import './css/Log.css';
import './css/AutoRole.css';
import {Route, Routes} from "react-router-dom";
import WithNav from './components/WithNav';
import WithoutNav from './components/WithoutNav';
import MyServer from './routes/MyServer';
import Documentation from './routes/Documentation';
import StartPage from './routes/StartPage';
import PrefixChangePage from './routes/PrefixChangePage';
import GuildContext from "./utils/context/GuildContext";
import { useState } from "react";
import GuildSettings from "./routes/GuildSettings";
import WelcomeMessage from "./routes/WelcomeMessage";
import Log from "./routes/Log";
import AutoRole from "./routes/AutoRole";
import useGetUser from "./hooks/useGetUser";

function App() {
  const[guildID,setGuildID] = useState();

  //const{page,updatePage}=useState();
  const updateGuildID=(id)=>setGuildID(id);
  //const updatePageName=(name)=>updatePage(name);
  const {user,loading,error}=useGetUser();
  return (
  <>
    <div className="App">
      {/* <Routes>
        <Route element={<WithoutNav/>}>
              <Route path="/" element={< StartPage />}/>
        </Route>
      </Routes> */}

      <GuildContext.Provider value={{guildID,updateGuildID/*,page,updatePageName*/}}>

        { user && !error ?(
          <>
            <Routes>
              <Route element={<WithoutNav/>}>
                <Route path="/" element={< StartPage />}/>
              </Route>
              <Route element={<WithNav/>}>
                <Route path="/MyServer" element={< MyServer />}/>
              </Route>
              <Route element={<WithNav/>}>
                <Route path="/Documentation" element={< Documentation />}/>
              </Route>
              <Route element={<WithNav/>}>
                <Route path="/PrefixChangePage" element={<PrefixChangePage/>}/>
              </Route>
              <Route element={<WithNav/>}>
                <Route path="/GuildSettings" element={<GuildSettings/>}/>
              </Route>
              <Route element={<WithNav/>}>
                <Route path="/WelcomeMessage" element={<WelcomeMessage/>}/>
              </Route>
              <Route element={<WithNav/>}>
                <Route path="/Log" element={<Log/>}/>
              </Route>
              <Route element={<WithNav/>}>
                <Route path="/AutoRole" element={<AutoRole/>}/>
              </Route>
            </Routes>
          </>
        ): (  // in mod normal in caz ca nu esti logat (adica cookie-ul este gol) ar fi trebuit sa te dea pe pagina de log in dar nu se intampla asta 
          <Routes>
            <Route element={<WithoutNav/>}>
              <Route path="/" element={< StartPage />}/>
            </Route>
          </Routes>
        )   
        }  
      </GuildContext.Provider>
    </div>
  </>
  );
}

export default App;
