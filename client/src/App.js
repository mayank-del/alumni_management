import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Jobs from './components/Jobs';
import Event from './components/Event';
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="contact" element={<Contact/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/jobs" element={<Jobs/>}/>
          <Route exact path="/event" element={<Event/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
        </Routes>
      </Router>
      {/* <Login/> */}
    </div>
  );
}

export default App;
