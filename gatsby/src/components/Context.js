import React, { Component } from 'react';
import keyboardOPS from "../util/keyboardOPS";
const Context = React.createContext();

class TypingProvider extends Component {
    state = {
        lessonsActive: false,
        lessonKeys: ["keyS", "KeyA"],
        timeOn: false
    }
render() {
        const state = this.state;
    return (
        <Context.Provider value={{state: this.state,
        lessonsOnOff: () => this.setState({lessonsActive: !this.state.lessonsActive}),
        classChange: ((id, capsDown) => {
            
           return keyboardOPS.keyboardKeyPress(id, capsDown,  this.state)
        })
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



