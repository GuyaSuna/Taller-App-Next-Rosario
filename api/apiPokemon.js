const traerPokemones = async () => {
    const respose = await fetch("https://pokeapi.co/api/v2/pokemon");

    const data = await respose.json();

    console.log("Informacion de Pokemones" , data);

    return data.results;
}


export {
    traerPokemones
}