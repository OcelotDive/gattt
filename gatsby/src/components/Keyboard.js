import React, { Component } from 'react';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';
import {TypingConsumer} from "./Context";
class Keyboard extends Component {
	
	
	render() {
			let capOnoff = this.props.capsOnOff ? 'capsLight1On' : 'capsLight1';
			let keyboardClass = this.props.keyboardIsOn ? 'keyboard' : 'keyboardOff';
		return (
        <TypingConsumer>
            {(context) => (
		 <div className={'keyboard'}>
			<hr/>
			<hr/>
            
			<span className="h7" style={{color: 'white'}}>FILCO</span>
			<div className={capOnoff} id="capsLight1"></div>
			<div className="capsLight2" id="capsLight2"></div>
            
			<Row1 context={context}/>
			<Row2 />
			<Row3 />
			<Row4 />
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