const URL = "https://api-react-taller-production.up.railway.app";


const register = async (username , name, password) => {

    const response = await fetch(`${URL}/api/auth/register` , {
        method: "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({username , name , password}),
    })

    const data = await response.json();

    console.log("Informacion de Register" , data);

}



const login = async (username , password) => {
    const response = await fetch(`${URL}/api/auth/login`,{
        method : "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({username , password})
    } )

    const data = await response.json();

    localStorage.setItem("token" , data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log("Login" , data);
}





// POST
// PUT
// PATCH
// DELETE


// GET


export{
    register,
    login
}