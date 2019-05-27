function shuffle(array) {
        array = array.concat(array,array,array,array);
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

    // And swap it with the current element.
      temporaryValue = array[currentIndex];
			
	// randomise current index
			if(array.length < 150) {
			array[randomIndex] = array[randomIndex].split('');
		
		for(let i = array[randomIndex].length -1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			
			
			[array[randomIndex][i], array[randomIndex][j]] = [array[randomIndex][j], array[randomIndex][i]];
			
		}
			
		array[randomIndex] = array[randomIndex].join('');
		}// end randomise each index
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
     }
			
       return array;
   }

export default shuffle;