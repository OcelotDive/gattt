import React, { Component } from 'react';
import {TypingContext} from "../util/Context";



class ControlPanel extends Component {
	
	
	handleButtonClick = (val) => {
			//this.props.lessonsMenu();
      
		}
	
	
	handleButtonReset = () => {
			//this.props.startLesson(this.props.activeLesson, this.props.lessonKeys, 1);
			//this.props.sendPanelOff();
		}
	
	render() {
	

		
		return (
          
        
          
     
           
		<div className="controlPanel">
		<button id="LessonButton" className="lessonButton" onMouseDown={()=>{this.handleButtonClick}}>{Lessons}</button>
		<button id="ResetButton" className="lessonButton" onMouseDown={this.handleButtonReset}>Restart</button>	
		</div>
          
      

		)
	}
}


export default ControlPanel;