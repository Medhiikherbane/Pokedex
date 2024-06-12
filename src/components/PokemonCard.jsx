import PropTypes from "prop-types"
import "../App.css"

const PokemonCard = ({pokemon}) => {

return ( <div className="card" >
   {pokemon.imgSrc ? <><img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} /><p>{pokemon.name}</p></> 
    : <p>???</p>}
    </div>
	)
}

PokemonCard.propTypes = {
		pokemon:PropTypes.shape ({
			name: PropTypes.string.isRequired,
			imgSrc: PropTypes.string,
	}).isRequired,
}      

export default PokemonCard