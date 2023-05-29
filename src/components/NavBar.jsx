import React, { useContext } from "react";
import {Link, useResolvedPath,useMatch} from "react-router-dom"


function Navbar(){

    return(

        <nav className="nav">
            <Link to="/" className="titlu"> Disertație</Link>
            <ul>
                <li>
                    <CustomLink to="/MyServer">MyServer</CustomLink>
                </li>
                <li>
                    <CustomLink to="/Documentation">Documentation</CustomLink>
                </li>



            </ul>
        </nav>
    )
}
function CustomLink({to,children}){
    const resolvedPath=useResolvedPath(to)
    const isActive=useMatch({path:resolvedPath.pathname})
    return(
        
            <Link to={to}>
                {children}
            </Link>
       
    )
}
export default Navbar;