import React, { Component } from 'react';
import keyboardOPS from "../util/keyboardOPS";
const Context = React.createContext();

class TypingProvider extends Component {
    state = {
        currentLesson: "This is a test",
        activeLessonNumber: "lesson3",
        usedString: '',
        lessonsActive: false,
        lessonKeys: ["KeyS", "KeyA"],
        currentClass: '',
        mistakes: [],
        mistakesLength: 0,
        mistakesTemp: null,
        letterCorrect: false,
        isFirstKeyPress: true,
        capsOnOff: false,
        shiftOnOff: false,
        currentKey: '',
        timeOn: false,
        boardSelect: 'us',
        displayBoard: true
 
    }
render() {
        const state = this.state;
    return (
        <Context.Provider value={{state: this.state,
        
        lessonsOnOff: () => this.setState({lessonsActive: !this.state.lessonsActive}),
        
        classChange: (id, capsDown) => {
            this.setState((currentState) => {   
          currentState = keyboardOPS.keyboardKeyPress(id, capsDown,  this.state);
                console.log(currentState)
                return Object.assign({}, currentState);
            })
        },
            
        classChangeOff: (key, capsDown) => {
            this.setState((currentState) => {
            currentState = keyboardOPS.keyboardKeyRelease(key, capsDown, this.state);
                console.log(currentState);
                return Object.assign({}, currentState);
                
            })
        },
        switchBoardOnOff: () => {
           this.setState(()=> ({
               displayBoard: !this.state.displayBoard
           }))
        },
        changeBoardSelect: (layout) => {
            this.setState(()=> ({
                boardSelect: layout
            }))
        }
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



