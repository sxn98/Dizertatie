import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export default()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}