import React, { Component } from 'react';
import {TypingConsumer} from "./Context";


class ControlPanel extends Component {
	
	
	
	
	
	handleButtonReset = () => {
			//this.props.startLesson(this.props.activeLesson, this.props.lessonKeys, 1);
			//this.props.sendPanelOff();
		}
	
	render() {
	

		
		return (
          
        
          
     
       <TypingConsumer>
            {(context)=> (
		<div className="controlPanel">
		<button id="LessonButton" className="lessonButton" onMouseDown={context.lessonsOnOff}>Lessons</button>
		<button id="ResetButton" className="lessonButton" onMouseDown={this.handleButtonReset}>Restart</button>	
		</div>
            )}
        </TypingConsumer>
      

		)
	}
}


export default ControlPanel;