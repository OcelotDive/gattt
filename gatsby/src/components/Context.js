import React, { Component } from 'react';
const Context = React.createContext();

class TypingProvider extends Component {
    state = {
        lessonsActive: true
    }
render() {
    return (
        <Context.Provider value={{state: this.state,
        lessonsOnOff: () => this.setState({lessonsActive: !this.state.lessonsActive})
}}>

        {this.props.children}
        </Context.Provider>
    )
}
}


class TypingConsumer extends Component {
    
render() {
    return (
        <Context.Consumer>
   
       {this.props.children}
       
        </Context.Consumer>
    )
}
}
export  {TypingProvider}
export {TypingConsumer}



