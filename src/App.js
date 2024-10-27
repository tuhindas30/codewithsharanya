import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { Header } from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import TutorHome from './components/tutorHome';
import StudentHome from './components/studentHome';
import TutorProfile from './components/tutorProfile';
import StudentFirstHome from './components/studentFirstHome';
import StudentNotifications from './components/studentNotifications';
import TutorNotifications from './components/TutorNotifications';

function App() {
  return (
    <BrowserRouter>
     <div className='imageClass'></div>
     <Header />
     <div className='container'> 

     
      <Routes>
        <Route path='/' element={<Login/>}> </Route>
        <Route path='/Tutor/Home' element = {<TutorHome />}></Route>;
        <Route path='/Tutor/Notifications' element = {<TutorNotifications />}></Route>;

        <Route path='/Student/Home' element = {<StudentHome />}></Route>;
        <Route path='/Student/Notifications' element = {<StudentNotifications />}></Route>;
        <Route path='/Tutor/FirstHome' element = {<Home />}></Route>;
        <Route path='/Tutor/Profile' element = {<TutorProfile />}></Route>;
        <Route path='/Student/FirstHome' element = {<StudentFirstHome />}></Route>;

      </Routes>
      </div>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
