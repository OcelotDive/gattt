import React, { Component } from 'react';
import TextArea from "../components/TextArea";
import ControlPanel from "./ControlPanel";
import LessonArea from "./LessonArea";
import {Consumer, Provider} from "../util/context"
const StateProvider = Provider;
const StateConsumer = Consumer;
class TypingTutor extends Component {
	
	state = {
        lessonsActive: true
    }
	
	
	render() {
    
		return (
		  <StateProvider value={this.state}>
            <StateConsumer>
            {({lessonsActive}) => (
		      <section>
               
                <TextArea />
              
                <ControlPanel value={lessonsActive}/>
                <LessonArea />
              </section>
            )}
            </StateConsumer>
          </StateProvider>
		)
	}
}


export default TypingTutor;