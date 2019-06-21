import React, { Component } from 'react';

import TextArea from "../components/TextArea";
import ControlPanel from "./ControlPanel";
import LessonArea from "./LessonArea";
import Keyboard from "./Keyboard";
import KeyboardSelect from "./KeyboardSelect";
import InstructionArea from "./InstructionArea";
import {TypingProvider} from "./Context";
import {TypingConsumer} from "./Context";
class TypingTutor extends Component {
	
	state = {
        lessonsActive: true
    }
	
	
	render() {
    
		return (
		 
        
          <TypingProvider>
		      <section>
                <TypingConsumer>
                {(context) => (
                <div>
                <TextArea />
                <ControlPanel lessonsOnOff={context.lessonsOnOff}/>
                <KeyboardSelect />
                <Keyboard />
                <LessonArea lessonsActive={context.state.lessonsActive} flagSelect={context.state.flagSelect}
                    startLesson={context.startLesson} lessonsOnOff={context.lessonsOnOff}/>
                
                <InstructionArea activeLessonNumber={context.state.activeLessonNumber}/>
                </div>
                 )}
                </TypingConsumer>
              </section>
          </TypingProvider>
            
         
		)
	}
}


export default TypingTutor;