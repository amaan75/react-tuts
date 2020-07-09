import React from 'react';
class SelectField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }


    renderOptions(values) {
        return values.map((curr) => {
            return (<option value={curr}>
                {curr}
            </option>)
        }
        )
    }

    render() {
        const values = ['aman', 'chaman', 'gaman'];
        const options = this.renderOptions(values);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
                        {options}
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function createSingleOption(currentValue, index) {
    //aman
    return <option value={currentValue}>currentValue</option>;
}


export {
    SelectField
}