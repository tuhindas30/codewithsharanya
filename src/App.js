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

function App() {
  return (
    <BrowserRouter>
     
     <Header />
     <div className='bodyContainer'> 

     
      <Routes>
        <Route path='/' element={<Login/>}/>;
        <Route path='/Tutor/Home' element = {<TutorHome />}/>;
        <Route path='/Tutor/Notifications' element = {<TutorNotifications />}/>;
        <Route path='/Tutor/Profile' element = {<TutorProfile />}/>;

        <Route path='/Student/Home' element = {<StudentHome />}/>;
        <Route path='/Student/Notifications' element = {<StudentNotifications />}/>;
        <Route path='/admin' element = {<AdminPanel />}/>;
        
      
        

      </Routes>
      </div>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
