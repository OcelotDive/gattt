import React, { Component } from "react";


class LessonSetOneUS extends Component {
    
    
    
    render() {
        
        return (
            <div id="lessonSetOne">
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson1" data-keys="KeyF,KeyJ,KeyG,KeyH,Space" >LESSON 1</h5>
			<h4>f, j, g, h</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson2" data-keys="KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space" >LESSON 2</h5>
			<h4>a, s, d, k , l & ;</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson3" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space" onClick={this.startLesson}>LESSON 3</h5>
			<h4>Home Row (Row 3)</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson4" data-keys="KeyR,KeyT,KeyY,KeyU,KeyI,Space" >LESSON 4</h5>
			<h4>r, t, y, u & i</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson5" data-keys="KeyQ,KeyW,KeyE,KeyO,KeyP,Space" >LESSON 5</h5>
			<h4>q, w, e, o & p</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson6" data-keys="KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space" >LESSON 6</h5>
			<h4>Row 2</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson7" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space">LESSON 7</h5>
			<h4>Row 2 & Row 3</h4></div>		
			</div>
        
        )
    }
    
}







export default LessonSetOneUS;