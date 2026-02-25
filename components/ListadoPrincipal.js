'use client'

import { useEffect , useState } from "react";
import {getLocals} from "../api/api";
import Link from "next/link";

const ListadoPrincipalComponent = () => {

    const [token, setToken] = useState("");
    const [user , setUser] = useState({});
    const [locals , setLocals] = useState([]);
    const [query , setQuery] = useState(""); 
    const [type , setType] = useState("");
    const [priceRange , setPriceRange] = useState("");
    const [rating , setRating] = useState("");
    const [city , setCity] = useState("");
    const [zone , setZone] = useState("");
 





    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("Usuario en Listado Principal" , user);
        console.log("Token en Listado Principal" , token);
        setUser(user);
        setToken(token);
    }, [])

    useEffect(() => {
        const fetchLocals = async () => {
            const data = await getLocals(query, type , priceRange, rating, city, zone);
            setLocals(data.items);
        }

        fetchLocals();
    },[query,type,priceRange,rating,city,zone])

    return(
   <div className="bg-white">
    
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 mb-7 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="query" className="block text-sm/6 font-semibold text-gray-900">
              Query
            </label>
            <div className="mt-2.5">
              <input
                id="query"
                name="query"
                type="text"
                autoComplete="given-query"
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm/6 font-semibold text-gray-900">
              Rating
            </label>
            <div className="mt-2.5">
              <input
                id="rating"
                name="rating"
                type="text"
                onChange={(e) => setRating(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="zone" className="block text-sm/6 font-semibold text-gray-900">
              Zone
            </label>
            <div className="mt-2.5">
              <input
                id="zone"
                name="zone"
                type="text"
                autoComplete="given-zone"
                onChange={(e) => setZone(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm/6 font-semibold text-gray-900">
              City
            </label>
            <div className="mt-2.5">
              <input
                id="city"
                name="city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              Price Range
            </label>
           <select
                    id="price-range"
                    name="price-range"
                    autoComplete="price-range"
                    aria-label="price-range"
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value={""}> Ninguno</option>
                    <option value={"ECONOMICO"}> Economico</option>
                    <option value={"MEDIO"}> Medio</option>
                    <option value={"ALTO"}> Alto</option>
                  </select>
                  
          </div> <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              Type
            </label>
          <select
                    id="type"
                    name="type"
                    autoComplete="type"
                    aria-label="type"
                    onChange={(e) => setType(e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value={""}> Ninguno</option>
                    <option value={"CAFETERIA"} >Cafeteria</option>
                    <option value={"RESTAURANTE"} >Restaurante</option>
                    <option value={"BAR"}>Bar</option>
                    <option value={"FOOD_TRUCK"}>Food Truck</option>
                    <option value={"OTROS"}>Otros</option>
                  </select>
                  
          </div>
                
          </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado Principal</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {locals.map((local) => (
            <div key={local.id} className="group relative">
              <img
                alt={local.name}
                src={local.photos ? local.photos[0] : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudGVzfGVufDB8fDB8fHww" }
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={"DetalleLocal"}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {local.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{local.city}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{local.priceRange}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );

}


export default ListadoPrincipalComponent;