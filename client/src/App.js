import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Jobs from './components/Jobs';
import Event from './components/Event';
import Alumni from './components/Alumni';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import AlumniAndStudentCommunication from './components/AlumniAndStudentCommunication';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="contact" element={<Contact/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/jobs" element={<Jobs/>}/>
          <Route exact path="/event" element={<Event/>}/>
          <Route exact path="/alumni" element={<Alumni/>}/>
          <Route exact path="/adminlogin" element={<AdminLogin/>}/>
          <Route exact path="/adminpage" element={<AdminPage/>}/>
          <Route exact path="/alumni/discussion" element={<AlumniAndStudentCommunication/>}/>
        </Routes>
      </Router>
      {/* <Login/> */}
    </div>
  );
}

export default App;
