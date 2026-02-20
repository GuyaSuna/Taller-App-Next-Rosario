'use client';

import { useState , useEffect } from "react";
import { traerPokemones } from "../../api/apiPokemon";

const PaginaApi = () => {

    const [pokemones , setPokemones] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await traerPokemones();
            setPokemones(data);
        }
        fetchData();

    }, [])

    return ( <> {pokemones?.map((poke) => <p key={poke.name}>{poke.name}</p> )}  </>);
                
}



export default PaginaApi;