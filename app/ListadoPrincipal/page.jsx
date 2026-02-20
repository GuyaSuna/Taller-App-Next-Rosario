'use client'
import { useEffect , useState } from "react";
const ListadoPrincipal = () => {

    const [token, setToken] = useState("");
    const [user , setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("Usuario en Listado Principal" , user);
        console.log("Token en Listado Principal" , token);
        setUser(user);
        setToken(token);


    }, [])

    return(<><h1>Mi nombre es:  {user.name}</h1> 
        <h1>Mi username es:  {user.username}</h1>
        <h1>Mi id es:  {user.id}</h1>
    </>);

}


export default ListadoPrincipal;