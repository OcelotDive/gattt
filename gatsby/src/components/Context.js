import React, { Component } from 'react';
import keyboardOPS from "../util/keyboardOPS";
const Context = React.createContext();

class TypingProvider extends Component {
    state = {
        currentLesson: "This is a test",
        usedString: '',
        lessonsActive: false,
        lessonKeys: ["KeyS", "KeyA"],
        currentClass: '',
        classChange: '',
        mistakes: [],
        mistakesLength: 0,
        mistakesTemp: null,
        letterCorrect: false,
        isFirstKeyPress: true,
        capsOnOff: false,
        shiftOnOff: false,
        currentKey: '',
        timeOn: false
    }
render() {
        const state = this.state;
    return (
        <Context.Provider value={{state: this.state,
        
        lessonsOnOff: () => this.setState({lessonsActive: !this.state.lessonsActive}),
        classChange: ((id, capsDown) => {
            this.setState((currentState) => {   
          currentState = keyboardOPS.keyboardKeyPress(id, capsDown,  this.state);
                console.log(currentState)
                return currentState;
            })
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



