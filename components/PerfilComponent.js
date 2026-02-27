'use client';
import { useState , useEffect } from 'react';
import { getUser } from '../api/api';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function PerfilComponent() {

    const params = useParams();
    const [user , setUser] = useState({});
    const [locals , setLocals] = useState([]);
  

      useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser(params.id);
            console.log(data)
            setUser(data.item)
            setLocals(data.item.locals);
        }

        fetchUser();
    }, [])

  
        return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
                <ul role="list" className="">
            <li >
              <div className="flex items-center ">
                <img
                  alt="Foto perfil"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv_rUJ2Ru3GR0Jxy2YTNH_jrVzX3_HY-THQ&s"
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5 "
                />
                <div>
                  <h3 className="text-base/7 font-semibold mx-6 tracking-tight text-gray-900">{user.name}</h3>
                  <p className="text-sm/6 font-semibold  mx-6  text-indigo-600">{user.username}</p>
                </div>
              </div>
            </li>
        </ul>

          
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Locales de {user.name}</h2>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {locals.map((local) => (
            <div key={local.id} className="group relative">
              <img
                alt={local.name}
                src={local.photos ? local.photos[0] : "https://img.freepik.com/vector-gratis/apoye-concepto-negocio-local_23-2148592675.jpg?semt=ais_user_personalization&w=740&q=80"}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  
                    <Link href={`/DetalleLocal/${local.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {local.name}
                    </Link>
               
                  <p className="mt-1 text-sm text-gray-500">{local.type}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{local.city}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>  
    </div>
    </div>
  )
}




