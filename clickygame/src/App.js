import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    text: "",
    clickedImages: []
  };

  removeFriend = id => {
    const characters = this.state.characters.filter(friend => friend.id !== id);
    this.setState({ characters });
  };
  
  render() {
    return (
      <Wrapper>
        <Title>PokeClick</Title>
        {this.state.characters.map(characters => (
          <Card
            removeCharacter={this.removeCharacter}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
            type={characters.type}
            />
        ))}
        </Wrapper>
    );
  }
}

export default App;