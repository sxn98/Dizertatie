import { createContext } from "react";


const GuildContext=createContext({
    id:'',
    name:'',
    icon:'',
    owner:Boolean,
    permissions:'',
    features: [],


    updateGuildID:()=>{},
})



export default GuildContext;