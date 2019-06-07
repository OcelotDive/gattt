import React, { Component } from 'react';
import {TypingConsumer} from "./Context";

class KeyboardSelect extends Component {
	
 
	
	handleFlagClick = (e) => {
        const flag = e.target;
        const flagList = document.querySelectorAll('div[data-img="flagImage"]');
        flagList.forEach(flagElement => flagElement.classList.remove("flagHighlighted"));
        flag.classList.add("flagHighlighted");
		}
    
	
	componentDidMount() {
        console.log(this.props.context)
    }
	
	
	render() {
	

		return (
		<TypingConsumer>
            {(context) => (
		  <section className="keyboardPanel">
			<h4 className="keyboardSelectLabel">KEYBOARD LAYOUT</h4>
			<div className="flagContainer">
			<div data-img="flagImage" className={"usLayout flagHighlighted"} onMouseDown={this.handleFlagClick}></div>
			<div data-img="flagImage" className={"ukLayout"} onMouseDown={this.handleFlagClick}></div>
			<div className="noLayout" onMouseDown={context.switchBoardOnOff}>{context.state.displayBoard ? "Hide" : "Show"}</div>
			</div>		
		  </section>
		)}
        </TypingConsumer>
		)
	}
}



const mapDispatchToProps = (dispatch) => {
	return {
        flagClick: (flag) => {dispatch({type: 'FLAGCLICK', flag: flag})},
		startLesson: (lessonNumber,keys, code) => {dispatch({type: 'STARTLESSON', lessonNumber: lessonNumber, keys: keys, code: code})},
		keyboardOnOff: () => {dispatch({type: 'KEYBOARDONOFF'})}
	}
}

export default KeyboardSelect;
