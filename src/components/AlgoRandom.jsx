import React from 'react';
import ListIngredients from './ListIngredients';
import axios from 'axios';
import ButtonCpnt from './ButtonCpnt';
import TitleCpnt from './TitleCpnt';

class AlgoRandom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredients: [],
      list: []
    };
    this.getList = this.getList.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  getList () {
    this.setState({ list: [] });
    for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i++) {
      this.getRandom();
    }
  }

  getRandom () {
    const random = Math.floor(Math.random() * 600) + 1;
    console.log(random);
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${random}`
      )
      .then((response) => {
        const { ingredients } = response.data;
        ingredients === null
          ? this.getRandom()
          : this.setState({
            list: [...this.state.list, ingredients[0].strIngredient]
          });
      });
  }

  render () {
    return (
      <div className='algoRandom container'>
        <div className='part button-part'>
          <TitleCpnt title="LA FOLIE" />
          <ButtonCpnt className='button-cpnt' onClick={this.getList}>Générer</ButtonCpnt>
        </div>
        <div className='part'>
          <ListIngredients list={this.state.list} />
        </div>
        <div className='part'>
          <img src='' alt='Cocktail' />
        </div>
      </div>
    );
  }
}

export default AlgoRandom;
