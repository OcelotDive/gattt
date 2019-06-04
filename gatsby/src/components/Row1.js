import React, { Component } from 'react';


class Row1 extends Component {
	
	//Start keypress listener.
	componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
	document.addEventListener("keyup", this.handleKeyUp.bind(this));	
}
	
	
	
	handleKeyPress = (e) => {
       
		e.preventDefault();
        
	    const capsDown = e.getModifierState("CapsLock");
        
        const unUsedKeys = [27,112,113,114,115,116,117,118,119,120,121,122,123,145,19,45,
                           36,33,46,35,34,38,17,18,91,93,37,40,39,144,111,106,109,103,104,
                           105,100,101,102,97,98,99,96,110,107,17,18,91,93];
    		
	    if (unUsedKeys.includes(e.code)) { 
        return false;
        }
		
        let  currentKey = document.getElementById(e.code) // remove this when no longer needed
    

	   this.props.context.classChange(currentKey, capsDown);	
	}
		
	row
	
	
	
	
	handleKeyUp = (e) => {
		
    const capsDown = e.getModifierState("CapsLock");
		
	
	if (e.code){
	const releasedKey = document.getElementById(e.code);
	this.props.context.classChangeOff(releasedKey, capsDown);
		}

		
	}
	
	
	
	render() {
            
		return (
          
			this.props.context.state.boardSelect === 'us' ?
			
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="~">
			~<br/>
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='@'>
			@<br/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="#">
			#<br/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<br/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<br/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<br/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<br/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
			:
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="¬">
			¬<br/>
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='"'>
			"<br/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="£">
			£<br/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<br/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<br/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<br/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<br/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
		)
	}
}



export default Row1;