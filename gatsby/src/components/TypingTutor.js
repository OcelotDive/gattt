import React, { Component } from 'react';
import TextArea from "../components/TextArea";
import ControlPanel from "../components/ControlPanel";
import LessonArea from "../components/LessonArea";
const { Consumer, Provider } = React.createContext();
const StateProvider = Provider;
const StateConsumer = Consumer;
class TypingTutor extends Component {
	
	state = {
        lessonsActive: false
    }
	
	
	render() {
	   console.log(StateProvider)
		return (
		  <StateProvider value={this.state}>
            <StateConsumer>
            {({lessonsActive}) => (
		      <section>
                <TextArea />
                <ControlPanel />
                <LessonArea />
              </section>
            )}
            </StateConsumer>
          </StateProvider>
		)
	}
}


export default TypingTutor;