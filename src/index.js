

import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from "./components/board";
import { TextField } from "./components/forms/text"
import { Component } from 'react';
import { SelectField } from "./components/forms/select"

import "./index.css"
class Game extends Component {
    render() {
        return (
            <div>
                <SelectField />
            </div>
        );
    }

    // render() {
    //     return (
    //         <div className="game">
    //             <div className="game-board">
    //                 <Board />
    //             </div>
    //             <div className="game-info">
    //                 <div>{/* status */}</div>
    //                 <ol>{/* TODO */}</ol>
    //             </div>
    //         </div>
    //     );
    // }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
