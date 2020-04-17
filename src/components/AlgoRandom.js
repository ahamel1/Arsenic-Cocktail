import React from 'react';
import FullRandom from "./FullRandom";
import axios from "axios"
import './AlgoRandom.css'



class AlgoRandom extends React.Component {
    constructor(props) {
      super(props) ;
      this.state = {
        ingredients : [],
        list : []
      };
    }
  
    getRandom = () => {
      let random = Math.floor(Math.random()*600) +1;
      console.log(random)
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${random}`)
        .then(response => response.data)
        .then (data => data.ingredients === null 
            ? this.getRandom() 
            : this.setState({list: [...this.state.list, data.ingredients[0].strIngredient]})
        )}

    getList = () => {
        this.setState({list: [] });
        for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i++) {
            this.getRandom()
        }       
        
    }
    
    
    render() {
      return (
        <div className="AlgoRandom">
            <h1>La folie</h1>
          <FullRandom list={this.state.list} />
         <button type="button" onClick={this.getList}>
           New ingredient
         </button>
        </div>
      )
    }
}
  
export default AlgoRandom
  