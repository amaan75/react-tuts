import React from 'react';

class TextAreaField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const isLoggedIn = true;
        if (isLoggedIn) {
            return (

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="button" value="Submit" />
                </form>
            );
        } else {
            return (<div>
                My name is aman
            </div>);
        }
    }
}

export {
    TextAreaField
}