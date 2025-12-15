import PokemonCard from "../../PokemonCard/PokemonCard";
import "./PokemonCardWrapper.css";

function PokemonCardWrapper(props) {
    return (
        <section className="pokemonCardWrapper">
            <PokemonCard
                pokemonName="Scraggy"
                pokemonType={["Dark", "Fighting"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Oshawott"
                pokemonType={["Water"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Snivy"
                pokemonType={["Grass"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png"
                pokemonHP="45"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Bidoof"
                pokemonType={["Normal"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png"
                pokemonHP="45"
                updateCounter={props.updateCounter}
            />
        </section>
    )
}

export default PokemonCardWrapper;