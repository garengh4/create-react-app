import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout(){
    let navigate = useNavigate();
    // navigate to the login page => WHERE SHOULD WE PUT THAT CODE?
    useEffect(()=>{
        navigate('/login');
    },[]);
    
    return <div></div>;
}