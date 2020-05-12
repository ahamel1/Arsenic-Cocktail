import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ListIngredients from './ListIngredients';
import ButtonCpnt from './ButtonCpnt';
import TitleCpnt from './TitleCpnt';
import Cursor from './Cursor';
import StarCpnt from './StarCpnt';
import verreVide from './verre-vide.jpg';
import ImageRandom from './ImageRandom';

class AlgoRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonFavori: false,
      list: [],
      nbrAlcohol: 1,
      nbrSoft: 1,
      imageLink: verreVide,
    };
    this.getListFolie = this.getListFolie.bind(this);
    this.getListAlcool = this.getListAlcool.bind(this);
    this.getListSoft = this.getListSoft.bind(this);
    this.getRandom = this.getRandom.bind(this);
    this.changeStateAlcool = this.changeStateAlcool.bind(this);
    this.changeStateSoft = this.changeStateSoft.bind(this);
    this.handleFavori = this.handleFavori.bind(this);
    this.getOneImage = this.getOneImage.bind(this);
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
    this.setState({ buttonFavori: false });
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

  getOneImage() {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((res) =>
        this.setState({ imageLink: res.data.drinks[0].strDrinkThumb })
      );
  }

  handleChoice(numberSoft, numberAlcool, alcool) {
    this.setState({ list: [] });
    const { nbrSoft } = this.state;
    if (alcool) {
      if (alcool === 'Yes') {
        this.getListAlcool(numberAlcool);
        this.setState({
          nbrSoft: numberSoft,
        });
        this.getListSoft(nbrSoft);
      } else {
        this.getListSoft(nbrSoft);
      }
    } else {
      this.getListFolie();
    }
    this.getOneImage();
  }

  handleFavori() {
    const { list } = this.state;
    const recipe = list.join('**');
    localStorage.setItem('Cocktail1', recipe);
    this.setState({ buttonFavori: true });
  }

  changeStateAlcool(e) {
    this.setState({
      nbrAlcohol: e.target.value,
    });
  }

  changeStateSoft(e) {
    this.setState({
      nbrSoft: e.target.value,
    });
  }

  render() {
    const {
      className,
      title,
      cursorAlcool,
      cursorSoft,
      stateAlcool,
    } = this.props;
    const { list, nbrAlcohol, nbrSoft, buttonFavori, imageLink } = this.state;
    return (
      <div className={className}>
        <div className="part first-part">
          {cursorAlcool && (
            <Cursor
              value={nbrAlcohol}
              onChange={this.changeStateAlcool}
              content="nbrAlcohol"
              idCursor="nbrAlcohol"
              typeDrink="nbrAlcohol"
              titleCursor="Nombre d'alcool(s)"
            />
          )}
          {cursorSoft && (
            <Cursor
              value={nbrSoft}
              onChange={this.changeStateSoft}
              content="numberSoft"
              idCursor="numberSoft"
              typeDrink="numberSoft"
              titleCursor="Nombre de soft(s)"
            />
          )}
          <div className="button-part">
            <TitleCpnt title={title} />
            <ButtonCpnt
              className="button-cpnt"
              onClick={() =>
                this.handleChoice(nbrSoft, nbrAlcohol, stateAlcool)
              }
            >
              Générer
            </ButtonCpnt>
            <StarCpnt
              handleFavori={this.handleFavori}
              stateFavori={buttonFavori}
            />
          </div>
        </div>
        <div className="part second-part-mobile">
          <ListIngredients list={list} />
        </div>
        <div className="part third-part-mobile">
          <ImageRandom source={imageLink} />
        </div>
      </div>
    );
  }
}

AlgoRandom.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cursorAlcool: PropTypes.string.isRequired,
  cursorSoft: PropTypes.string.isRequired,
  stateAlcool: PropTypes.number.isRequired,
};

export default AlgoRandom;
