import React, { Component } from 'react';
import {TypingConsumer} from "./Context";


class ControlPanel extends Component {
	
	
	handleButtonClick = (lessonsOnOff) => {
			//this.props.lessonsMenu();
            lessonsOnOff();
        
		}
	
	
	handleButtonReset = () => {
			//this.props.startLesson(this.props.activeLesson, this.props.lessonKeys, 1);
			//this.props.sendPanelOff();
		}
	
	render() {
	

		
		return (
          
        
          
     
       <TypingConsumer>
            {(context)=> (
		<div className="controlPanel">
		<button id="LessonButton" className="lessonButton" onMouseDown={()=>this.handleButtonClick(context.lessonsOnOff)}>Lessons</button>
		<button id="ResetButton" className="lessonButton" onMouseDown={this.handleButtonReset}>Restart</button>	
		</div>
            )}
        </TypingConsumer>
      

		)
	}
}


export default ControlPanel;