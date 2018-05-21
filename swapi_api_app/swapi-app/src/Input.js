import React from 'react';
import Data from './Data';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Planet ID
                        <input type="text" />
                    </label>
                        <input type="submit" value="Submit"/>
                </form>
                <Data id={this.state.value}/>
            </div>
            
        )
    }

}

export default Input;
