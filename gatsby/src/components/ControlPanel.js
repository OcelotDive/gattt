import React, { Component } from 'react';
import {TypingContext} from "../util/Context";



class ControlPanel extends Component {
	
	
	handleButtonClick = () => {
			//this.props.lessonsMenu();
        
		}
	
	
	handleButtonReset = () => {
			//this.props.startLesson(this.props.activeLesson, this.props.lessonKeys, 1);
			//this.props.sendPanelOff();
		}
	
	render() {
	

		
		return (
          
        
          
        <TypingContext.Consumer>
            {(context) => (
		<div className="controlPanel">
		<button id="LessonButton" className="lessonButton" onMouseDown={this.handleButtonClick}>{}</button>
		<button id="ResetButton" className="lessonButton" onMouseDown={this.handleButtonReset}>Restart</button>	
		</div>
           )}
        </ TypingContext.Consumer>

		)
	}
}


export default ControlPanel;