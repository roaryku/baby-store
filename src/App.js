
import About from './About';
import AboutProduct from './AboutProduct';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Shop from './Shop';
import SignUp from './SignUp';
import logo from './logo.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return ( <Router>
      <nav>
        <img src={logo} className='logo' alt="logo" width="150px" height="70px" />
      <Link to="/" className="link">Home</Link>
      <Link to="/shop" className="link">Shop</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/contact" className="link">Contact</Link>
       <SignUp/>
    </nav>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about/:title" element={<AboutProduct/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
