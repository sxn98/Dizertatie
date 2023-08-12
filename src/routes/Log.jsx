import { useContext, useEffect, useState } from "react";
import GuildContext from "../utils/context/GuildContext";
import useGetGuildChannelsLog from "../hooks/useGetGuildChannelsLog";
import { Navigate } from "react-router-dom";
import updateLog from "../utils/updateLog";

const Log=()=>{
    const{guild}=useContext(GuildContext) 
    let {config,channels,loading, selectedChannel,setSelectedChannel,mdc,setMDC,mec,setMEC,nc,setNC,ufdv,setUFDV,ufmv,setUFMV}=useGetGuildChannelsLog(guild?.id);


    const Update=(e)=>{
        updateLog(guild.id,selectedChannel,mdc,mec,nc,ufdv,ufmv)
    }
    return guild? (
        <div className="Log">
            {channels && config && !loading ?
            <>
            
                <div className="LogPair">
                    <label className="Text">Message Deleted Content</label>
                    <label className="switch">     
                        <input type="checkbox" onChange={(e)=>setMDC(e.target.checked)} checked={mdc} />
                        <span className="slider round"></span>
                    </label>
                </div>
                
                <div className="LogPair">
                    <label className="Text">Message Edited Content</label>
                    <label className="switch">     
                        <input type="checkbox" onChange={(e)=>setMEC(e.target.checked)} checked={mec}/>
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="LogPair">
                    <label className="Text">Nickname Changes</label>
                    <label className="switch">     
                        <input type="checkbox" onChange={(e)=>setNC(e.target.checked)} checked={nc}/>
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="LogPair">
                    <label className="Text">User Forcefully Disconnected From Voice</label>
                    <label className="switch">     
                        <input type="checkbox" onChange={(e)=>setUFDV(e.target.checked)} checked={ufdv}/>
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="LogPair">
                    <label className="Text">User Forcefully Moved From Voice</label>
                    <label className="switch">     
                        <input type="checkbox" onChange={(e)=>setUFMV(e.target.checked)} checked={ufmv}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="Channel">
                    <label> Current log channel for server --{guild.name}--</label>
                    <select onChange={(e)=>setSelectedChannel(e.target.value)}>
                            <option className="DefaultSelection">Select a channel</option>
                            {
                                channels.map((channel)=> <option selected={channel.id === config.LogChannel} value={channel.id}>#{channel.name}</option>)
                            }
                    </select>
                    <button className="Butoane" onClick={(e)=>Update(e)}>Save</button>
                </div>
                
                
            
            </>: (
                <div> Loading </div>
            )}
        </div>
    ): (
        <Navigate replace to="/MyServer" />
    )
}
export default Log;