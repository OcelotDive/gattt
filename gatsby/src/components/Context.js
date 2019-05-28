import React, { Component } from 'react';
const Context = React.createContext();

class TypingContext extends Component {
    state = {
        test: "test"
    }
render() {
    return (
        <Context.Provider>
        {this.props.chidren}
        </Context.Provider>
    )
}
}
export default TypingContext;