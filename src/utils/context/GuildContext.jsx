import { createContext } from "react";


const GuildContext=createContext({
    guildID: '',
    updateGuildID:()=>{},
})



export default GuildContext;