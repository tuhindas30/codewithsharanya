import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

import Login from './components/login';
import { Header } from './components/header';
import Footer from './components/footer';

import TutorHome from './components/tutorHome';
import StudentHome from './components/studentHome';
import TutorProfile from './components/tutorProfile';

import StudentNotifications from './components/studentNotifications';
import TutorNotifications from './components/TutorNotifications';
import StudentProfile from './components/StudentProfile';

function App() {
  return (
    <BrowserRouter>
     
     <Header />
     <div className='bodyContainer'> 

     
      <Routes>
        <Route path='/' element={<Login/>}/>;
        <Route path='/tutor/home' element = {<TutorHome />}/>;
        <Route path='/tutor/notifications' element = {<TutorNotifications />}/>;
        <Route path='/tutor/profile' element = {<TutorProfile />}/>;

        <Route path='/student/home' element = {<StudentHome />}/>;
        <Route path='/student/notifications' element = {<StudentNotifications />}/>;
        <Route path='/student/profile' element = {<StudentProfile />}/>;

        <Route path='/admin' element = {<AdminPanel />}/>;
        
      
        

      </Routes>
      </div>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
