import React, { Component } from 'react';

const LessonsObject = {
    
    lesson1: {
        lesson1Objective: 'Start with your fingers on the Home Row (Row 3) with your index fingers over F & J. For keys G & H, just reach over with the correct index fingers. Use the chart below to identify which finger                    to use L2 = left index finger, L3 = left middle finger, L4 = left ring finger and L5 = left pinky finger. The same rules apply for the right hand. Remember not to look at the keyboard this                        will build up muscle memory between the fingers and the brain. Begin typing to start the timer.',
        lesson1JSX: function() {
            return (
            <div className="instructionArea">
			<h6>LESSON 1</h6>
			<article>
			{lesson1}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>F</div>
			<div style={{backgroundColor: "green"}}>G</div>
			<div style={{backgroundColor: "yellow"}}>H</div>
			<div style={{backgroundColor: "yellow"}}>J</div>
			</div>
			<div className="col">
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			</div>
			</div>
			</div>
            )
  
                
        }
    }
    
}

export default LessonsObject;