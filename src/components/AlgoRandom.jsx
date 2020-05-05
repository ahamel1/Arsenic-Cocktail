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
    this.getListFolie = this.getListFolie.bind(this);
    this.getListAlcool = this.getListAlcool.bind(this);
    this.getListSoft = this.getListSoft.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  getListFolie () {
    for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i++) {
      this.getRandom();
    }
  }

  getListAlcool (numberAlcohol) {
    for (let i = 0; i < numberAlcohol; i++) {
      this.getRandom('Yes');
    }
  }

  getListSoft (numberSoft) {
    for (let i = 0; i < numberSoft; i++) {
      this.getRandom('No');
    }
  }

  getRandom (alcool) {
    const random = Math.floor(Math.random() * 600) + 1;
    console.log(random);
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${random}`
      )
      .then((response) => {
        const { ingredients } = response.data;
        if (alcool) {
          if (alcool === 'Yes') {
            if (ingredients !== null && ingredients[0].strAlcohol === alcool) {
              this.setState({
                list: [...this.state.list, ingredients[0].strIngredient]
              });
            } else {
              this.getRandom('Yes');
            }
          } else if (alcool === 'No') {
            if (ingredients !== null && ingredients[0].strAlcohol !== 'Yes') {
              this.setState({
                list: [...this.state.list, ingredients[0].strIngredient]
              });
            } else {
              this.getRandom('No');
            }
          }
        } else {
          ingredients === null
            ? this.getRandom()
            : this.setState({
              list: [...this.state.list, ingredients[0].strIngredient]
            });
        }
      });
  }

  handleChoice (numberSoft, numberAlcool, alcool) {
    this.setState({ list: [] });
    if (alcool) {
      alcool === 'Yes' ? this.getListAlcool(numberAlcool) : this.getListSoft(numberSoft);
      this.getListSoft(numberSoft);
    } else {
      this.getListFolie();
    }
  }

  render () {
    return (
      <div className='algoRandom container'>
        <div className='part button-part'>
          <TitleCpnt title="LA FOLIE" />
          <ButtonCpnt className='button-cpnt' onClick={() => this.handleChoice(this.props.numberSoft, this.props.numberAlcohol, this.props.alcool)}>Générer</ButtonCpnt>
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