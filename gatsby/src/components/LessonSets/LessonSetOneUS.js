import React from "react";

function LessonSetOneUS(props) {
  
    const setOne = {
        lesson1: {
            name: "lesson1",
            keys: ["KeyF,KeyJ,KeyG,KeyH,Space"]
        },
        lesson2: {
            name: "lesson2",
            keys: ["KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space"]
        },
        lesson3: {
            name: "lesson3",
            keys: ["KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space"]
        },
        lesson4: {
            name: "lesson4",
            keys: ["KeyR,KeyT,KeyY,KeyU,KeyI,Space"]
        },
        lesson5: {
            name: "lesson5",
            keys: ["KeyQ,KeyW,KeyE,KeyO,KeyP,Space"]
        },
        lesson6: {
            name: "lesson6",
            keys: ["KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space"]
        },
        lesson7: {
            name: "lesson7",
            keys: ["KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space"]
        }
        
    }
    

        
        return (
            <div id="lessonSetOne">
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" onClick={()=>props.startLesson(setOne.lesson1.name,setOne.lesson1.keys)}>LESSON 1</h5>
			<h4>f, j, g, h</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" onClick={()=>props.startLesson(setOne.lesson2.name,setOne.lesson2.keys)}>LESSON 2</h5>
			<h4>a, s, d, k , l & ;</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle">LESSON 3</h5>
			<h4>Home Row (Row 3)</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle">LESSON 4</h5>
			<h4>r, t, y, u & i</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle">LESSON 5</h5>
			<h4>q, w, e, o & p</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" >LESSON 6</h5>
			<h4>Row 2</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="Lesson7">LESSON 7</h5>
			<h4>Row 2 & Row 3</h4></div>		
			</div>
        
        )
    
    
}







export default LessonSetOneUS;