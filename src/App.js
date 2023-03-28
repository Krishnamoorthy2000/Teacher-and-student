import './App.css';
import StudentsComponents from './Student Components/StudentsComponents';
import { Route, Switch } from 'react-router-dom';
import { AddStudents } from './Student Components/AddStudents';
import { StudentsData, TeachersData } from './data/Data';
import { useState } from 'react';
import { StudentDetails } from './Student Components/StudentDetails';
import EditStudent from './Student Components/EditStudent';
import MainPage from './MainPage';
import TeachersComponent from './Teachers Components/TeachersComponents';
import { AddTeachers } from './Teachers Components/AddTeachers';
import { TeacherDetails } from './Teachers Components/TeacherDetails';
import EditTeacher from './Teachers Components/EditTeachers';


function App() {
  const [student, setStudent] = useState(StudentsData);
  const [teacher, setTeacher] = useState(TeachersData);
  return (
    <div className="App">

      <Switch>
        <Route exact path ="/">
          <MainPage/>
        </Route>
        <Route exact path = "/students">
        <StudentsComponents
        student = {student}
        setStudent = {setStudent}/>
        </Route>
        <Route path = "/add/student">
          <AddStudents
          student = {student}
          setStudent = {setStudent}/>
        </Route>
        <Route path="/student/:id">
          <StudentDetails
          student={student}/>
        </Route>
        <Route path="/editStudent/:id">
          <EditStudent
          student = {student}
          setStudent = {setStudent}/>
        </Route>
        <Route exact path = "/teachers">
        <TeachersComponent
        teacher = {teacher}
        setTeacher = {setTeacher}/>
        </Route>
        <Route path = "/add/teacher">
          <AddTeachers
          teacher = {teacher}
          setTeacher = {setTeacher}/>
        </Route>
        <Route path="/teacher/:id">
          <TeacherDetails
          teacher={teacher}/>
        </Route>
        <Route path="/editTeacher/:id">
          <EditTeacher
          teacher = {teacher}
          setTeacher = {setTeacher}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
