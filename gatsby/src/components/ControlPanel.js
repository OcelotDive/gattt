import React, { Component } from 'react';
import {Consumer} from "../util/context"

const StateConsumer = Consumer;

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
		<StateConsumer>
           {(value) => (
           
		<div className="controlPanel">
		<button id="LessonButton" className="lessonButton" onMouseDown={this.handleButtonClick}>Lessons</button>
		<button id="ResetButton" className="lessonButton" onMouseDown={this.handleButtonReset}>Restart</button>	
		</div>
            )}
		</StateConsumer>
		)
	}
}


export default ControlPanel;