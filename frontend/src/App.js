import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";

import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
            
        
        <Route path="/login" element={<Login/>}/>
            
        <Route path="/signup" element={<Signup/>}/>
            
        <Route path="/profile/:username" element={ <Profile/>}/>
           
     
      </Routes>
    </Router>

    //<Login/>
    //<Signup/>
    //<Home/>
    //<Profile/>
  );
}

export default App;
