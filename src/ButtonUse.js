import React, { Component } from 'react';
import Button from './Button';

class ButtonUse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: true
        };
    }

    toggleButton = () => {
        this.setState(prevState => ({
            showButton: !prevState.showButton
        }));
    };

    render() {
        return (
            <div>
                {this.state.showButton && <Button />}
                <button onClick={this.toggleButton}>
                    {this.state.showButton ? 'Hide Button' : 'Show Button'}
                </button>
            </div>
        );
    }
}

export default ButtonUse;