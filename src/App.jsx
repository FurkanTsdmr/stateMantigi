import { useState } from 'react';
import Course from "./Course";

function getRandomCourse(){
  const courseArray =['Nature','Mountain','Lake','River'];
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}



function App() {
  
    const [course,setCourse] = useState([]);

    const handleClick=()=>{
      setCourse([...course,getRandomCourse()]);
    }


    const natureLisst= course.map((courses,index)=>{
      return <Course key={index} courseName={courses} />
    })

  
  
  return (  
    <div className="App">
      
    <button onClick={handleClick}>Resim Getir</button>

    <div className='buttonKonum'>
      {natureLisst}
    </div>

    </div>
  );
}

export default App;
