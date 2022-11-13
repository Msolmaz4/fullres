

import { Outlet ,Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../Auth/Auth'







const Private= ()=>{

    
    const {isAuthenticated} = useContext(AuthContext)
    if(isAuthenticated){
        return <Outlet/>
    }
    
    return(
<div>
        <Navigate to='/login'/>
    </div>
    )
    
 
}
export default Private