

  
      
        const PokemonCard = ({pokemon}) => {

        return ( <div>
                {pokemon.imgSrc ? <><img src={pokemon.imgSrc} alt={pokemon.name} /><p>{pokemon.name}</p></> 
                : <p>???</p>}
                </div>
        )
        }

      

        export default PokemonCard