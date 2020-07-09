import React from 'react';

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // debugger;
        this.setState({ value: event.target.value });
        console.log(event.target.value);
    }

    handleClick(event) {
        debugger;
        console.log(event.target);
    }
    handleSubmit(event) {

        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button name="mybutton" onClick={(e) => this.handleClick(e)}>
                    Test
                </button>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export {
    TextField
}