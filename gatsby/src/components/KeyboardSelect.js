import React, { Component } from 'react';


class KeyboardSelect extends Component {
	
 
	
	handleFlagClick = (e) => {
        const flag = e.target;
        const flagList = document.querySelectorAll('div[data-img="flagImage"]');
        flagList.forEach(flagElement => flagElement.classList.remove("flagHighlighted"));
        flag.classList.add("flagHighlighted");
		}
    
	
	keyboardOnOffClick = (e) => {
		
	}
	
	
	render() {
	
		let flagClass1 = this.props.flagSelect1;
		let flagClass2 = this.props.flagSelect2;
		let hideOrShow = this.props.keyboardIsOn ? 'Hide' : 'Show';
		
		return (
		
		<section className="keyboardPanel">
			<h4 className="keyboardSelectLabel">KEYBOARD LAYOUT</h4>
			<div className="flagContainer">
			<div data-img="flagImage" className={"usLayout flagHighlighted"} onMouseDown={this.handleFlagClick}></div>
			<div data-img="flagImage" className={"ukLayout"} onMouseDown={this.handleFlagClick}></div>
			<div className="noLayout" onMouseDown={this.keyboardOnOffClick}>{hideOrShow}</div>
			</div>		
		</section>
		
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
