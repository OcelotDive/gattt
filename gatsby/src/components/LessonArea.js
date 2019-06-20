import React, { Component } from 'react';
import {TypingConsumer} from "./Context";
import LessonSetOneUS from "./LessonSets/LessonSetOneUS";
import LessonSetOneUK from "./LessonSets/LessonSetOneUK";
import LessonSetTwoUS from "./LessonSets/LessonSetTwoUS";
import LessonSetTwoUK from "./LessonSets/LessonSetTwoUK";
import LessonSetThreeUS from "./LessonSets/LessonSetThreeUS";
import LessonSetThreeUK from "./LessonSets/LessonSetThreeUK";


class LessonArea extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            flagSelect1: 'usLayout flagHighlighted',
          
        }
        this.lessons = {
            
        }
        
        
    }
    

	startLesson = (e) => {
		
		let lessonNumber = e.target.id;
      
		
		let keys = e.target.dataset.keys || 'Space';
		keys = keys.split(',');

		setTimeout(()=> {
		this.props.startLesson(lessonNumber, keys);
		}, 500)
	}
	
	render() {
		
		return (
        
		this.state.flagSelect1 === 'usLayout flagHighlighted' ?
            
        <TypingConsumer>
            {({state, startLesson}) => (    
		<section className={state.lessonsActive ? "lessonArea dropDown" : "lessonArea liftUp"} id="lessonPanel">
			<LessonSetOneUS />
			<LessonSetTwoUS />
			<LessonSetThreeUS />	
		</section>
        	 )}
        </TypingConsumer>

		:
        
        <TypingConsumer>
            {({state}) => (
		<section className={state.lessonsActive ? "lessonArea dropDown" : "lessonArea liftUp"} id="lessonPanel">	
			<LessonSetOneUK />
		    <LessonSetTwoUK />
			<LessonSetThreeUK />
		</section>
        )}
        </TypingConsumer>
		)
	}
}


export default LessonArea;