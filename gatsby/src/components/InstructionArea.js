import React, { Component } from 'react';

import Lesson0Instructions from './Lesson0Instructions';
import Lesson1Instructions from './Lesson1Instructions';
import Lesson2Instructions from './Lesson2Instructions';
import Lesson3Instructions from './Lesson3Instructions';
import Lesson4Instructions from './Lesson4Instructions';
import Lesson5Instructions from './Lesson5Instructions';
import Lesson6Instructions from './Lesson6Instructions';
import Lesson7Instructions from './Lesson7Instructions';
import Lesson8Instructions from './Lesson8Instructions';
import Lesson9Instructions from './Lesson9Instructions';
import Lesson10Instructions from './Lesson10Instructions';
import Lesson11Instructions from './Lesson11Instructions';
import Lesson12Instructions from './Lesson12Instructions';
import Lesson13Instructions from './Lesson13Instructions';
import Lesson14Instructions from './Lesson14Instructions';
import Lesson15Instructions from './Lesson15Instructions';
import Lesson16Instructions from './Lesson16Instructions';
import Lesson17Instructions from './Lesson17Instructions';
import Lesson18Instructions from './Lesson18Instructions';
import Lesson19Instructions from './Lesson19Instructions';
import Lesson20Instructions from './Lesson20Instructions';
import Lesson21Instructions from './Lesson21Instructions';

class InstructionArea extends Component {
    constructor(props) {
        super(props)
     
    this.lessonComponents = {
        
        lesson0: Lesson0Instructions,
        lesson1: Lesson1Instructions,
        lesson2: Lesson2Instructions,
        lesson3: Lesson3Instructions,
        lesson4: Lesson4Instructions,
        lesson5: Lesson5Instructions,
        lesson6: Lesson6Instructions,
        lesson7: Lesson7Instructions,
        lesson8: Lesson8Instructions,
        lesson9: Lesson9Instructions,
        lesson10: Lesson10Instructions,
        lesson11: Lesson11Instructions,
        lesson12: Lesson12Instructions,
        lesson13: Lesson13Instructions,
        lesson14: Lesson14Instructions,
        lesson15: Lesson15Instructions,
        lesson16: Lesson16Instructions,
        lesson17: Lesson17Instructions,
        lesson18: Lesson18Instructions,
        lesson19: Lesson19Instructions,
        lesson20: Lesson20Instructions,
        lesson21: Lesson21Instructions
        
    }

    }
	render() {
    
        const LessonComponent = this.lessonComponents[this.props.activeLessonNumber];

		return (
			<LessonComponent/>	
		)
    
	}
}
	



	
	
	
	
	


export default InstructionArea;