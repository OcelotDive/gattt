import React from 'react';



function ControlPanel({lessonsOnOff}) {
	
	
		return ( 
		<div className="controlPanel">
		<button id="LessonButton" className="lessonButton" onMouseDown={()=>lessonsOnOff()}>Lessons</button>
		<button id="ResetButton" className="lessonButton">Restart</button>	
		</div>
		)

}


export default ControlPanel;