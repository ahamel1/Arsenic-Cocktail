import React from "react";
import ListIngredients from "./ListIngredients";
import axios from "axios";
import Button from "./Button";

class AlgoRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      list: [],
    };
    this.getList = this.getList.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  getList() {
    this.setState({ list: [] });
    for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i++) {
      this.getRandom();
    }
  }

  getRandom() {
    let random = Math.floor(Math.random() * 600) + 1;
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
              list: [...this.state.list, ingredients[0].strIngredient],
            });
      });
  }

  render() {
    return (
      <div className="AlgoRandom">
        <div className="partOne">
          <h1>La folie</h1>
          <Button onClick={this.getList}>Générer</Button>
        </div>
        <div className="partTwo">
          <ListIngredients list={this.state.list} />
        </div>
        <div className="partThree">
          <img src="" alt="Cocktail" />
        </div>
      </div>
    );
  }
}

export default AlgoRandom;
