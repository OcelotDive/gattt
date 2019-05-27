import React, { Component } from 'react';
import lessonStrings from '../util/lessonStrings';
import shuffle from '../util/shuffle';
import "../index.css"




class TextArea extends Component {
	
	/* eslint-disable */
	//concatenation of literals
    
    constructor(props) {
        super(props);
        
        this.state = {
            currentLesson: shuffle(lessonStrings.words).join(" "),
            mistakesLength: 0,
            innerText: null
        }
        
        
    }
    
    
    componentDidMount() {
        
       
        
        let currentLesson = this.state.currentLesson;	
		
        //need new way to find used value
		//	innerTextUsed.value =  this.props.usedString.split('').reverse().join('');
        
        this.setState(()=> (
           {currentLesson: shuffle(lessonStrings.words).join(" ")}
        ))
        
           
    }
    
    
	
	render() {
       
        let mistakesLength = this.state.mistakesLength;
        let currentLesson = this.state.currentLesson;
        
     function highlightText() {
         if(mistakesLength > 0) {
		return(
            currentLesson.length > 0 ? 
            <div>
            <strong className="highlight">{currentLesson[0]}</strong> 
            {currentLesson.substring(1, currentLesson.length)}
            </div>
            : 
            <div>
            <span className="highlight">{' '}</span>
            {currentLesson.substring(1, currentLesson.length)}
            </div>
             )
     }
         else {
            return( 
                currentLesson.length > 0 ? 
                <div>
                <span className="highlight">{currentLesson[0]}</span>
                {currentLesson.substring(1, currentLesson.length)}
                </div>
                :
                <div>
                <span className="highlight">{' '}</span>
                {currentLesson.substring(1, currentLesson.length)}
                </div>
            )
         }
         }
		
		//send string to state once then return after each character struck;	
	 	
		// test which highlight to apply based on key correct or not
			
		//innerTextUsed.value =  this.props.usedString.split('').reverse().join('');
			
       //check to see if marker needed?
        
		return (
            
			<div className="typingArea">
			<form>
			<div className="textbox" id="textarea_id" ref="textarea" type="textArea" readOnly={true}>
			<div className="marker"></div>
			<div className="innerTextBox" ref="innerText" readOnly={true}>{highlightText(this.state.currentLesson)}</div>
			<textarea className="innerTextBoxUsed" ref="innerTextUsed" readOnly={true} type="textArea"></textarea>
			</div>
			</form>
			</div>
			
		)
	}
	
}


export default TextArea;