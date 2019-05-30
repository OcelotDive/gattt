import React, { Component } from 'react';

import TextArea from "../components/TextArea";
import ControlPanel from "./ControlPanel";
import LessonArea from "./LessonArea";
import Keyboard from "./Keyboard";
import {TypingProvider} from "./Context";

class TypingTutor extends Component {
	
	state = {
        lessonsActive: true
    }
	
	
	render() {
    
		return (
		 
        
          <TypingProvider>
		      <section>
                <TextArea />
                <ControlPanel />
                <Keyboard />
                <LessonArea />
              </section>
          </TypingProvider>
            
         
		)
	}
}


export default TypingTutor;