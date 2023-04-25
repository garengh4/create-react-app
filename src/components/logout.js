import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function Logout(){
    let navigate = useNavigate();

    useEffect(()=>{
        navigate('/login')
    },[])

    return <div></div>;
}