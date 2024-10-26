import React,{useState} from "react";
import Button from './buttonLogin';



export const TutorCard = (props) => {
  const [selectedTutor, setSelectedTutor]= useState({});
  const onTutorSelect = (student) => {
    setCentredModal(!centredModal)
    setSelectedTutor(student);
  }
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);


  return(
        <>
        <div className="appointmentContainer">
        <div className={`tutor_appointment_col ${props.filterData.length===0?'removeTutorTransform':''}`}>
          <h4 style={{color: "black", alignContent:"center"}}>Upcoming Appointments</h4>
        
         
        
          <h4 style={{color: "black", alignContent:"center"}}>Completed Appointments</h4>
        
        
        
          </div>
        </div>
        

            {props.filterData && props.filterData.map((student,index)=>{
            const {studentname,grade, courses, username, favourites, registeredCourses} = student;
            return <div key={`student-${index}`} onClick={()=> onTutorSelect(student)} className="bg-light opacity-75 tutor-card-container" >
                <div className="tutor-name">{studentname}</div>
                
                <div className="tutor-profile">
                  <div className="profile-details">
                  <div className="subject">
                  <span><i className="bi bi-journal-code"></i> {courses} </span>
                </div>
                   
                    <div className="location">
                    <span><i className="bi bi-mortarboard-fill"></i></span>
                      <span> Grade: {grade}</span>
                     </div>
                  
                  </div>
                </div>
            </div>
        
            
          })
        
          }
          
        </>

        
    )
}