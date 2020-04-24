import React from "react";
import FullRandom from "./FullRandom";
import axios from "axios";
import Button from "./Button";

class AlgoRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      list: [],
    };
    this.getRandom = this.getRandom.bind(this);
    this.getList = this.getList.bind(this);
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

  getList() {
    this.setState({ list: [] });
    for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i++) {
      this.getRandom();
    }
  }

  render() {
    return (
      <div className="AlgoRandom">
        <h1>La folie</h1>
        <FullRandom list={this.state.list} />
        <Button className="generate" onClick={this.getList} value="Générer" />
      </div>
    );
  }
}

export default AlgoRandom;
