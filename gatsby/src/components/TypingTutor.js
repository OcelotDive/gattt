import React, { Component } from 'react';

import TextArea from "../components/TextArea";
import ControlPanel from "./ControlPanel";
import LessonArea from "./LessonArea";
import {TypingContext} from "../util/Context";
class TypingTutor extends Component {
	
	state = {
        lessonsActive: true
    }
	
	
	render() {
    
		return (
		  <TypingContext.Provider value={this.state.lessonsActive}>
            <TypingContext.Consumer>
            {(context) => (
          
		      <section>
               
                <TextArea />
                
                <ControlPanel />
                <LessonArea />
              </section>
            )}
            </TypingContext.Consumer>
          </TypingContext.Provider>
		)
	}
}


export default TypingTutor;