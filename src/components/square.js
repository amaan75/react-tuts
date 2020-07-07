import React from 'react';


function Square(props) {
    return (<button className="square" onClick={() => props.onClickButtonHandler()}>
        {props.value}
    </button>);
}


class SquareClass extends React.Component {

    render() {

        return (
            <button className="square" onClick={() => this.props.onClickButtonHandler()}>
                {this.props.value}
            </button>
        );
    }
}






export {
    Square
}
