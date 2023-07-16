import { useContext, useState } from "react";
import GuildContext from "../utils/context/GuildContext";
import useGetGuildRoles from "../hooks/useGetGuildRoles";
import { Navigate } from "react-router-dom";
import useGetAutoRoleConfig from "../hooks/useGetAutoRoleConfig";
import updateAutoRole from "../utils/updateAutoRole";

const AutoRole=()=>{
    const{guild}=useContext(GuildContext) 
    const[selectedRole,setSelectedRole]=useState(false)
    const[selectedRoleID,setSelectedRoleID]=useState(false)
    const[activityName,setActivityName]=useState()
    const[error,setError]=useState();
    const[done,setDone]=useState();

    const{roles,loading}=useGetGuildRoles(guild?.id);
    const{autoRole,autoRoleLoading}=useGetAutoRoleConfig(guild?.id)

    
    const DeleteAutoRole=(aRole)=>{
        console.log(aRole)

       console.log(Object.values(roles).find((rolename)=>rolename.id===aRole.RoleID).name)
    }
    const Add=async ()=>{
        if(!activityName || !selectedRole){
            setError('Please select a role and type an activity name!')
            setDone('')
            return
        }
        setDone('New Config succesfully added!')
        setError('')

        try {
            const res=await updateAutoRole(guild.id,selectedRoleID,activityName)
        } catch (error) {
            console.log(error)
        }
        

        const newAutoRole={
            GuildID:guild.id,
            RoleID:selectedRoleID,
            ActivityName:activityName
        }
        

        console.log(roles)
        console.log("rol selectat: "+selectedRole)
        console.log("numele activitatii: "+activityName)
        console.log(autoRole)



    }
    const style=(color)=>{
        if (color===0) return {color:'#FFFFFF'}
        else return {color:'#'+color.toString(16)}
        
    }
    return guild ?(
        <div className="AutoRole">
            {roles && !loading && !autoRoleLoading ?
            <>
                <div className="AutoRoleCurrent">
                    <table>
                        <thead>
                            <tr className="ColumnName">
                                <th>Role</th>
                                <th>Activity name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {autoRole.map((aRole)=>(
                                <tr key={aRole.ID}>
                                    <td>{Object.values(roles).find((rolename)=>rolename.id===aRole.RoleID).name}</td> 
                                    <td>{aRole.ActivityName}</td>
                                    <td><button onClick={()=>DeleteAutoRole(aRole)}>delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <label>Add a role to be auto added to a person when it's showing an activity on discord</label>
                <div className="AutoRoleAdd">
                    
                    <select onChange={(e)=>{setSelectedRoleID(e.target.value);setSelectedRole(e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text)}}>
                        <option className="DefaultSelection">Select a channel</option>
                        {
                            roles.map((roles)=> <option key={roles.id} value={roles.id} style={style(roles.color)}>{roles.name}</option>)
                            
                        }
                    </select>
                    <input placeholder="enter activity name" onChange={(e)=>setActivityName(e.target.value)}></input>
                    <button onClick={()=>Add()}>Add</button>
                </div>
                <label style={{color:"red"}}>{error}</label>
                <label style={{color:"green"}}>{done}</label>
                </> : (
            <div> Loading </div>
            )}
        </div>
    ) : (
        <Navigate replace to="/MyServer" />
    )
}
export default AutoRole;