import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";

import {
 BrowserRouter as Router,
 Switch,
 Routes,
 Navigate,
  Route
} from "react-router-dom";
import { AuthContext } from "./pages/context/AuthContext";


function App() {

  const {user} = useContext(AuthContext);
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/"> {user ? <Home /> : <Signup />} </Route> {/* Controllo che l'utente sia loggato per farlo andare in home*/}

    //     <Route path="/login"> {user ? <Redirect to="/" /> : <Login />}</Route>
        
    //     <Route path="/signup"> {user ? <Redirect to="/" /> : <Signup />}</Route>
        
    //     <Route path="/profile/:username"><Profile /></Route>
    //   </Switch>
    // </Router>


    <Router>
      <Routes>
        <Route exact path="/"  element={user ? <Home /> : <Signup />}/>
            
        
        <Route path="/login" element={user ? <Navigate to={"/"} replace={true}/> : <Login />}/>
            
        <Route path="/signup" element={user ? <Navigate to={"/"} replace={true}/> : <Signup />}/>
            
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
