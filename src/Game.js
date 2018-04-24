import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Image from "./components/Image";
import "./Game.css";
import characters from "./characters.json";

class Game extends Component {
    state = {
        images,
        clickedCharacterId: [],
        score: 0,
        totalScore: 0,
        highScore: 0
    };

    handleCharacterChange = id => {
        const clickedCharacterId = this.state.clickedCharacterId;

        if (!clickedCharacterId.includes(id)){
            clickedCharacterId.push(id)
            if(clickedCharacterId.length === 12) {
                this.setState({ score: 12, totalScore: 12, clickedCharacterId: [] });
                return;
            }
            // if the guess is correct
            if (this.state.score >= this.state.totalScore) {
                this.state.highScore = this.state.score + 1;
            }
            this.setState({ images, clickedCharacterId, score: clickedCharacterId.length, totalScore: this.state.highScore });
            // randomize images
            for (let i = images.length -1; i > 0; i--) {
                let j = Math.floor((Math.random() * (i)) + 0);
                [images[j], images[i]] = [images[i], images[j]];
            }
        
        } else {
            // incorrect guess
            if (this.state.score < this.state.totalScore) {
                this.state.highScore = this.state.highScore;
            }
            this.setState({ clickedCharacterId: [], score: 0, totalScore: this.state.highScore });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-logo">PokeClick!</h1>
                    <p className="App-title">Click an PokeImage to start the game!</p>
                    <h2> Score: {this.state.score} <span> | </span> High Score: {this.state.totalScore}</h2>
                </header>

                <Wrapper>
                    {this.state.characters.map(character =>(
                        <Image
                        handleCharacterChange={this.handleCharacterChange}
                        id={character.id}
                        img={character.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default Game;
