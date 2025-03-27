import Nature from './images/nature1.png';
import Mountain from './images/nature2.png';
import Lake from './images/nature3.jpg';
import River from './images/nature4.jpg';

const courseMap={
    Nature,
    Mountain,
    Lake,
    River,
}

function Course({courseName}) {
    console.log(courseName[courseName]);
    
    console.log(Mountain);
    return ( 
        <div>
            <img src={courseMap[courseName]} alt='Doğa Resmi'/>
            
        </div>
     );
}

export default Course;