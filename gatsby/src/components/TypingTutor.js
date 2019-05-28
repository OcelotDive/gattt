import React, { Component } from 'react';

import TextArea from "../components/TextArea";
import ControlPanel from "./ControlPanel";
import LessonArea from "./LessonArea";
import TypingProvider from "./Context";

class TypingTutor extends Component {
	
	state = {
        lessonsActive: true
    }
	
	
	render() {
    
		return (
		 
        
          
		      <section>
                <TextArea />
                <ControlPanel />
                <LessonArea />
              </section>
          
            
         
		)
	}
}


export default TypingTutor;