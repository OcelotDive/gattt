import React, { Component } from 'react';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';
import {TypingConsumer} from "./Context";
class Keyboard extends Component {
	
	
	render() {
			
			
		return (
        <TypingConsumer>
            {(context) => (
		 <div className={context.state.displayBoard ? "keyboard" : "keyboardOff"}>
			<hr/>
			<hr/>
            
			<span className="h7" style={{color: 'white'}}>FILCO</span>
			<div className={context.state.capsOnOff ? 'capsLight1On' : 'capsLight1'} id="capsLight1"></div>
			<div className="capsLight2" id="capsLight2"></div>
            
			<Row1 context={context}/>
			<Row2 context={context}/>
			<Row3 context={context}/>
			<Row4 context={context}/>
			<Row5 />
			<hr/>
            <hr/>
		 </div>
               )}
        </TypingConsumer>    
		
		)
	}
}
const mapStateToProps = (state) => {
	return {
		capsOnOff: state.capsOnOff,
		keyboardIsOn: state.keyboardIsOn
	}
}



export default Keyboard;