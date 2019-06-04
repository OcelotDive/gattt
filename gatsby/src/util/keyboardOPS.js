/* eslint-disable */
//non return of arrow function

const keyboardOperations = {

	switchKeyboardOnOff: (state) => {
		state.keyboardIsOn = !state.keyboardIsOn;
	},
	
	changeKeyboard: (state, action) => {
		clearInterval(state.intervalId[0]);
		state.lessonKeys.map((_, i, a) => {
			let x = document.getElementById(_);
			x.className = x.className.split(' ')[0];
		})

		switch (action.flag) {

			case 'usLayout flagHighlighted':
				state.flagSelect1 = `usLayout flagHighlighted`;
				state.flagSelect2 = `ukLayout`;
				break;
			case 'usLayout':
				state.flagSelect1 = `${action.flag} flagHighlighted`;
				state.flagSelect2 = `ukLayout`;
				break;
			case 'ukLayout':
				state.flagSelect2 = `${action.flag} flagHighlighted`;
				state.flagSelect1 = `usLayout`;
				break;
			case 'ukLayout flagHighlighted':
				state.flagSelect2 = `ukLayout flagHighlighted`;
				state.flagSelect1 = `usLayout`;
				break;
			default:
				state.flagSelect1 = `usLayout flagHighlighted`;
				break;


		}
	},
	
	turnPanelOff: (state) => {
		state.finishShow = false;

	},
	
	wordsPerMinute: (state, action) => {
		state.wpm = Math.round(action.value);
	},
	
	endOfString: (state) => {
		state.stringEnd = true;
		state.finishShow = true;
		clearInterval(state.intervalId[0]);
		
	},
	
	timeValueReceived: (state, action) => {
		state.timevalue = action.time;
	},
	
	intervalIdReceived: (state, action) => {
		state.intervalId = action.value;
	},
	
	lessonBegin: (state, action) => {
		//reset most variables on new lesson start
		state.timeOn = false;
		state.finishShow = false;
		state.stringEnd = false;
		//console.log(state.intervalId)
		clearInterval(state.intervalId[0]);
		state.mistakes = [];
		state.mistakesLength = 0;
		state.mistakesTemp = 0;
		state.usedString = '';
		state.activeLesson = action.lessonNumber;

		state.lessonKeys = action.keys;

		if (action.code === 1) {
			state.displayLessonsMenu = !state.displayLessonsMenu
		}
		//assigning colours to the left and right hand keys

		if (state.flagSelect1 === 'usLayout flagHighlighted') {

			state.lessonKeys.map((_, i, a) => {
				if (_ === 'KeyQ' || _ === 'KeyW' || _ === 'KeyE' || _ === 'KeyR' || _ === 'KeyT' || _ === 'KeyA' || _ === 'KeyS' || _ === 'KeyD' || _ === 'KeyF' || _ === 'KeyG' || _ === 'KeyX' || _ === 'KeyZ' || _ === 'KeyC' || _ === 'KeyV' || _ === 'KeyB' || _ === 'Digit1' || _ === 'Digit2' || _ === 'Digit3' || _ === 'Digit4' || _ === 'Digit5' || _ === 'ShiftLeft' || _ === 'Backquote') {
					let x = document.getElementById(_);

				x.className = x.className + ' animated pulse infinite green';
				} else if (_ === 'Space') {
					let x = document.getElementById(_);
					x.className = x.className;
				} else {

					let x = document.getElementById(_);

					x.className = x.className + ' animated pulse infinite yellow';

				}
			})
		}
		if (state.flagSelect2 === 'ukLayout flagHighlighted') {
			state.lessonKeys.map((_, i, a) => {
				if (_ === 'KeyQ' || _ === 'KeyW' || _ === 'KeyE' || _ === 'KeyR' || _ === 'KeyT' || _ === 'KeyA' || _ === 'KeyS' || _ === 'KeyD' || _ === 'KeyF' || _ === 'KeyG' || _ === 'KeyX' || _ === 'KeyZ' || _ === 'KeyC' || _ === 'KeyV' || _ === 'KeyB' || _ === 'Digit1' || _ === 'Digit2' || _ === 'Digit3' || _ === 'Digit4' || _ === 'Digit5' || _ === 'ShiftLeft' || _ === 'IntlBackslash' || _ === 'Backquote') {
					let x = document.getElementById(_);

					x.className = x.className + ' animated pulse infinite green';
				} else if (_ === 'Space') {
					let x = document.getElementById(_);
					x.className = x.className;
				} else {
					let x = document.getElementById(_);

					x.className = x.className + ' animated pulse infinite yellow';

				}
			})

		}

		state.displayLessonsMenu = !state.displayLessonsMenu
		state.fetchText = true;
	},
	
	openCloseLessonmenu: (state) => {
		//returning className to default after menu open
		state.lessonKeys.map((_, i, a) => {
			let x = document.getElementById(_);
			x.className = x.className.split(' ')[0];
		})
		state.displayLessonsMenu = !state.displayLessonsMenu

	},
	
	randomStringReceived: (state, action) => {

		state.testString = action.value;
		state.stringLength = action.value.length;
		state.fetchText = false;
	},
	
	keyboardKeyRelease: (key, capsDown, state) => {
		//return key to unpressed class
		state.currentKey = null;
       
		//null return in case unwanted key pressed keeps everything the same
		if (key.id === null) {
			state.currentKey = null;
			return {
				state
			}
		}
    
		//test for shift release
		if (key.id === 'ShiftLeft' || key.id === 'ShiftRight') {
			state.shiftOnOff = false;
		}

		// test for shift classes due to update of current key whilst shift held down
		if (key.id === 'ShiftLeft' && state.boardSelect === 'us') {
			key.className = 'shiftFullUSLeft';
			state.currentKey = null;

		} 
		
		else if (key.id === 'ShiftLeft') {
			key.className = 'shiftHalf';
			state.currentKey = null;
		} 
		
		else if (key.id === 'ShiftRight') {
			key.className = 'shiftFull';
			state.currentKey = null;
		} 
		
		else if (key.id === 'Space') {
			key.className = 'spaceKey';
			state.currentKey = null;
		} 
		
		else if (key.id === 'Enter' && state.boardSelect === 'uk') {
			key.className = 'enterKey';
			state.currentKey = null;
		} 
		
		else if (key.id === 'Enter' && state.boardSelect === 'us') {
			key.className = 'usEnter';
			state.currentKey = null;
		} 
		
		else if (key.id === 'Backspace') {
			key.className = 'doubleKey';
			state.currentKey = null;
		} 
		
		else if (key.id === 'Tab' && state.boardSelect === 'uk') {
			key.className = 'doubleKey';
			state.currentKey = null;
		} 
		
		else if (key.id === 'Tab' && state.boardSelect === 'us') {
			key.className = 'usTabKey';
			state.currentKey = null;
		} 
		
		else if (key.id === 'CapsLock' && state.isFirstKeyPress === false) {
			key.className = state.capsOnOff ? 'doubleKeyandAbitOn' : 'doubleKeyandAbit';
			state.capsOnOff = state.capsOnOff;
			state.currentKey = null;
		} 
		
		else if (key.id === 'CapsLock' && state.isFirstKeyPress === true && capsDown === false) {
       
			key.className = 'doubleKeyandAbit';
			state.capsOnOff = false;
			state.currentKey = null;
		} 
		
		else if (key.id === 'CapsLock' && state.isFirstKeyPress === true && capsDown === true) {
			key.className = 'doubleKeyandAbitOn';
			state.capsOnOff = true;
			state.currentKey = null;
		} 
		
		else if (key.id === 'IntlBackslash' && state.boardSelect === 'us') {
			key.className = 'usBackSlash';
			state.currentKey = null;
		} 
		
		else if (key.id === 'Backslash' && state.boardSelect === 'uk') {
			key.className = 'mainKey specialKeyRule';
			state.currentKey = null;
		} 
		
		else {
			key.className = 'mainKey'
			state.currentKey = null;

		}
		
		state.isFirstKeyPress= false;
        return state;
	},
    
	keyboardKeyPress: (key, capsDown, state) => {
		//start timer
       
		state.timeOn = true;
        
		//return className to default after any key press (coloured flashing keys)
		state.lessonKeys.map(LessonkeyID => {
          
			const keyElement = document.getElementById(LessonkeyID);
          
			keyElement.className = keyElement.className.split(' ')[0];
               
			if (keyElement.id === 'Backslash') {
				keyElement.className = 'mainKey specialKeyRule'
			};
		})
		//null return in case unwanted key pressed
		if (key === null) {
			return {
				state //do something here later
			}
		}

		//start timer 
		state.timeOn = true;

		let alpha = false;
		//check for alpha for use with capslock

		if (key.id === 'KeyA' ||
			key.id === 'KeyB' ||
			key.id === 'KeyC' ||
			key.id === 'KeyD' ||
			key.id === 'KeyE' ||
			key.id === 'KeyF' ||
			key.id === 'KeyG' ||
			key.id === 'KeyH' ||
			key.id === 'KeyI' ||
			key.id === 'KeyJ' ||
			key.id === 'KeyK' ||
			key.id === 'KeyL' ||
			key.id === 'KeyM' ||
			key.id === 'KeyN' ||
			key.id === 'KeyO' ||
			key.id === 'KeyP' ||
			key.id === 'KeyQ' ||
			key.id === 'KeyR' ||
			key.id === 'KeyS' ||
			key.id === 'KeyT' ||
			key.id === 'KeyU' ||
			key.id === 'KeyV' ||
			key.id === 'KeyW' ||
			key.id === 'KeyX' ||
			key.id === 'KeyY' ||
			key.id === 'KeyZ') {
			alpha = true;

		}
		//if caps already on
		if (alpha && capsDown && state.isFirstKeyPress === true) {
         console.log(key.attributes[3])
			state.currentKey = key.attributes[3]
			let caps = document.getElementById("CapsLock");
			caps.className = 'doubleKeyandAbitOn';
			state.capsOnOff = true;
		}
        // if caps first key pressed and already on
		if (key.id === 'CapsLock' && capsDown && state.isFirstKeyPress === true) {
			let caps = document.getElementById("CapsLock");
			caps.className = 'doubleKeyandAbit';
			state.capsOnOff = !state.capsOnOff;
		}
        // if not alpha key and not caps and caps down
		if (!alpha && capsDown && state.isFirstKeyPress === true) {
			state.currentKey = key.attributes[2]
			let caps = document.getElementById("CapsLock");
			caps.className = 'doubleKeyandAbitOn';
			state.capsOnOff = true;
		}
        
		//has caps been pressed and caps not on
		if (key.id === 'CapsLock') {
			state.capsOnOff = !state.capsOnOff;
			state.currentKey = null;
		} 
		
		else if (key.id === 'ShiftLeft' || key.id === 'ShiftRight') {
			state.shiftOnOff = true;
			state.currentKey = null;
		} 
		
		else {
			state.currentKey = state.shiftOnOff || state.capsOnOff && alpha ? key.attributes[3].value : key.attributes[2].value;
			
			//a test for mistakes
			if (state.currentKey !== state.currentLesson[0]) {
				state.mistakes.push('x');
				//console.log(state.mistakes.length)
				state.mistakesLength = state.mistakes.length;
			}
		}

		//dealing with the class of the struck key;
		state.currentClass = key.className;
		key.className = `${state.currentClass} keyStruck`
		

		//setting the current key
		if (state.currentKey === state.currentLesson[0]) {
			state.usedString = state.usedString.concat(state.currentLesson[0]);
			state.currentLesson = state.currentLesson.substring(1);
			state.mistakesTemp = state.mistakesLength;
			state.letterCorrect = true;


		}
        return state;
	}
}

export default keyboardOperations;
