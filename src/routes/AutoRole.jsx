import { useContext, useEffect, useState } from "react";
import GuildContext from "../utils/context/GuildContext";
import useGetGuildRoles from "../hooks/useGetGuildRoles";
import { Navigate } from "react-router-dom";
import useGetAutoRoleConfig from "../hooks/useGetAutoRoleConfig";
import updateAutoRole from "../utils/updateAutoRole";
import deleteAutoRole from "../utils/deleteAutoRole";

const AutoRole=()=>{
    const{guild}=useContext(GuildContext) 
    const[selectedRole,setSelectedRole]=useState(false)
    const[selectedRoleID,setSelectedRoleID]=useState(false)
    const[activityName,setActivityName]=useState()
    const[error,setError]=useState();
    const[done,setDone]=useState();

    const{roles,loading}=useGetGuildRoles(guild?.id);
    const{autoRole,autoRoleLoading}=useGetAutoRoleConfig(guild?.id)
    useEffect(()=>{

    },[done])

    const DeleteAutoRole=async (aRole)=>{
        // console.log(aRole)
        // console.log(autoRole)
        const index=autoRole.findIndex((gasit)=>{
            return gasit.RoleID==aRole.RoleID && gasit.ActivityName==aRole.ActivityName
        })
        try {
            const res=await deleteAutoRole(aRole.GuildID,aRole.RoleID,aRole.ActivityName)
        } catch (error) {
            console.log(error)
        }
        autoRole.splice(index,1)
        setDone('Config succesfully deleted')
        setError('')

    }
    const Add=async ()=>{
        if(!activityName || !selectedRole){
            setError('Please select a role and type an activity name!')
            setDone('')
            return
        }
        var valid=true
        autoRole.map((gasit)=> {
            if(gasit.GuildID==guild.id && gasit.RoleID==selectedRoleID && gasit.ActivityName.toLowerCase()==activityName.toLowerCase()){
                setError('This exact configuration is a duplicate')
                setDone('')
                valid=false
            }
               
        })
        if(!valid) {
            setError('This exact configuration is a duplicate')
            setDone('')
            return
        }

         try {
             const res=await updateAutoRole(guild.id,selectedRoleID,activityName)
         } catch (error) {
             console.log(error)
         }

        const newAutoRole={
            ID:'',
            GuildID:guild.id,
            RoleID:selectedRoleID,
            ActivityName:activityName
        }

        autoRole.push(newAutoRole)
        console.log(autoRole)

        setDone('New Config succesfully added!')
        setError('')
        // console.log(roles)
        // console.log("rol selectat: "+selectedRole)
        // console.log("numele activitatii: "+activityName)
        // console.log(autoRole)

    }
    const roleStyle=(color)=>{
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
                                    <td style={roleStyle(Object.values(roles).find((rolename)=>rolename.id===aRole.RoleID).color)}>{Object.values(roles).find((rolename)=>rolename.id===aRole.RoleID).name}</td> 
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
                            roles.map((roles)=> <option key={roles.id} value={roles.id} style={roleStyle(roles.color)}>{roles.name}</option>)
                            
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