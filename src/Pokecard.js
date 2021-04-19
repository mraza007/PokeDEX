import React, {Component} from 'react';
import './Pokecard.css'
const img_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render(){
        const {id,name,type,base_experience} = this.props;
        let img = `${img_api}${id}.png`;
        return(
            <div className="Pokecard">
                <h1>{name}</h1>
                <img src={img} alt={name}/>
                <h2>TYPE: {type}</h2>
                <h2>EXP: {base_experience}</h2>

            </div>
        )
    }
}

export default Pokecard;