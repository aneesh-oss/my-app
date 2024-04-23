import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('Button mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Button updated');
        }
    }

    componentWillUnmount() {
        console.log('Button will unmount');
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me ({this.state.count})
            </button>
        );
    }
}

export default Button;
