import React  from 'react';
import LessonSetOneUS from "./LessonSets/LessonSetOneUS";
import LessonSetOneUK from "./LessonSets/LessonSetOneUK";
import LessonSetTwoUS from "./LessonSets/LessonSetTwoUS";
import LessonSetTwoUK from "./LessonSets/LessonSetTwoUK";
import LessonSetThreeUS from "./LessonSets/LessonSetThreeUS";
import LessonSetThreeUK from "./LessonSets/LessonSetThreeUK";


function LessonArea({lessonsActive, flagSelect, startLesson, lessonsOnOff}) {
    

   
    



		
		return (
        
		flagSelect === 'usLayout flagHighlighted' ?
            
       
		<section className={lessonsActive ? "lessonArea dropDown" : "lessonArea liftUp"} id="lessonPanel">
			<LessonSetOneUS startLesson={startLesson} lessonsOnOff={lessonsOnOff}/>
			<LessonSetTwoUS />
			<LessonSetThreeUS />	
		</section>
        	
      

		:
        
       
		<section className={lessonsActive ? "lessonArea dropDown" : "lessonArea liftUp"} id="lessonPanel">	
			<LessonSetOneUK />
		    <LessonSetTwoUK />
			<LessonSetThreeUK />
		</section>
    
		)
	
}


export default LessonArea;