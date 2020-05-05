import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ListIngredients from './ListIngredients';
import ButtonCpnt from './ButtonCpnt';
import TitleCpnt from './TitleCpnt';
import Cursor from './Cursor';

class AlgoRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ingredients: [],
      list: [],
      nbrAlcohol: 0,
      // numberSoft: 0,
    };
    this.getListFolie = this.getListFolie.bind(this);
    this.getListAlcool = this.getListAlcool.bind(this);
    this.getListSoft = this.getListSoft.bind(this);
    this.getRandom = this.getRandom.bind(this);
    this.changeStateAlcool = this.changeStateAlcool.bind(this);
  }

  getListFolie() {
    for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i += 1) {
      this.getRandom();
    }
  }

  getListAlcool(numberAlcohol) {
    for (let i = 0; i < numberAlcohol; i += 1) {
      this.getRandom('Yes');
    }
  }

  getListSoft(numberSoft) {
    for (let i = 0; i < numberSoft; i += 1) {
      this.getRandom('No');
    }
  }

  getRandom(alcool) {
    const random = Math.floor(Math.random() * 600) + 1;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${random}`
      )
      .then((response) => {
        const { ingredients } = response.data;
        const { list } = this.state;
        if (alcool) {
          if (alcool === 'Yes') {
            if (ingredients !== null && ingredients[0].strAlcohol === alcool) {
              this.setState({
                list: [...list, ingredients[0].strIngredient],
              });
            } else {
              this.getRandom('Yes');
            }
          } else if (alcool === 'No') {
            if (ingredients !== null && ingredients[0].strAlcohol !== 'Yes') {
              this.setState({
                list: [...list, ingredients[0].strIngredient],
              });
            } else {
              this.getRandom('No');
            }
          }
        } else if (!ingredients) {
          this.getRandom();
        } else {
          this.setState({
            list: [...list, ingredients[0].strIngredient],
          });
        }
      });
  }

  handleChoice(numberSoft, numberAlcool, alcool) {
    this.setState({ list: [] });
    if (alcool) {
      if (alcool === 'Yes') {
        this.getListAlcool(numberAlcool);
      } else {
        this.getListSoft(numberSoft);
      }
      this.getListSoft(numberSoft);
    } else {
      this.getListFolie();
    }
  }

  changeStateAlcool(e) {
    this.setState({
      nbrAlcohol: e.target.value,
    });
  }

  render() {
    const {
      className,
      title,
      cursor,
      numberSoft,
      numberAlcohol,
      alcool,
    } = this.props;
    const { list, nbrAlcohol } = this.state;
    return (
      <div className={className}>
        <div className="part button-part">
          {cursor && (
            <Cursor value={nbrAlcohol} onChange={this.changeStateAlcool} />
          )}
          <TitleCpnt title={title} />
          <ButtonCpnt
            className="button-cpnt"
            onClick={() => this.handleChoice(numberSoft, numberAlcohol, alcool)}
          >
            Générer
          </ButtonCpnt>
        </div>
        <div className="part">
          <ListIngredients list={list} />
        </div>
        <div className="part">
          <img src="" alt="Cocktail" />
        </div>
      </div>
    );
  }
}

AlgoRandom.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cursor: PropTypes.string.isRequired,
  numberSoft: PropTypes.number.isRequired,
  numberAlcohol: PropTypes.number.isRequired,
  alcool: PropTypes.string.isRequired,
};

export default AlgoRandom;
