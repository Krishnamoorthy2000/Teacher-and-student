import React from "react";
import { useHistory } from "react-router-dom";
import StudentsBase from "../StudentsBase";


export default function StudentsComponent({student, setStudent}) {
    const history = useHistory();
    

    const deleteStudent = (idx)=>{
    const deletedStudentdata = student.filter((stud)=>stud.id !== idx)
    setStudent(deletedStudentdata);

}
return (
        <StudentsBase
            title="Student list">
            <div className="user-content">
                {student.map((student, idx) => (
                    <div key = {idx}className="user-card">
                        <h1>{student.name}</h1>
                        <p>dob : {student.dob}</p>
                        <p>gender : {student.gender}</p>
                        <p>E-mail : {student.email}</p>
                        <p>contact : {student.contact}</p>
                        <p>age : {student.age}</p>
                        <p>address : {student.address}</p>

                        <div className="btn-group">
                           <button className="btn view-btn"
                            onClick={()=>history.push(`/student/${idx}`)}>                           
                            View</button>

                            <button className="btn edit-btn"
                             onClick={()=>history.push(`/editStudent/${student.id}`)}>                            
                             Edit</button>

                            <button className="btn del-btn"
                             onClick={()=>deleteStudent(student.id)}>
                             Delete</button>

                        </div>
                    </div>
                ))}
            </div>
        </StudentsBase>
    )
}