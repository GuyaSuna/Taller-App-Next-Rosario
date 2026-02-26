'use client';
import { useState , useEffect } from "react";
import {useRouter} from 'next/navigation';

export default function SesionPanel() {
    const [user , setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    },[])


    const handleClick = () =>{
        router.push(`/Perfil/${user.id}`);
    }

  return (
     <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li onClick={handleClick}>
              <div className="flex items-center gap-x-6">
{/*                 
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{user?.username}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{user?.user}</p>
                </div> */}

                <img
                  alt="imagen de perfil"
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv_rUJ2Ru3GR0Jxy2YTNH_jrVzX3_HY-THQ&s"}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
            </li>
        </ul>
  )
}
