import { Square } from "./square";
import React from 'react';

import { Component } from 'react';
class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    onClickButtonHandler = (i) => {
        if (calculateWinner(this.state.squares)) { return; }
        const squares = this.state.squares.slice();
        squares[i] = this.getNextTurn();
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClickButtonHandler={() => this.onClickButtonHandler(i)} />;
    }


    getNextTurn() {
        return this.state.xIsNext ? 'X' : 'O';
    }

    render() {
        //final
        const winner = calculateWinner(this.state.squares);
        //normal non-final
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player is: ' + this.getNextTurn();
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export { Board }


