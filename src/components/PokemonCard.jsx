

  const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];
      
        const PokemonCard = () => {
        const pokemon = pokemonList[0];
        console.log(pokemon.name);
        return ( <div>
                {pokemon.imgSrc ? <><img src={pokemon.imgSrc} alt={pokemon.name} /><p>{pokemon.name}</p></> 
                : <p>???</p>}
                </div>
        )
        }
        export default PokemonCard