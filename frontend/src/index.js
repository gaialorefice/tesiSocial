import React from 'react';
import ReactDOM from 'react-dom/client';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import App from './App';
import {AuthContextProvider} from "./pages/context/AuthContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
//App rappresenta il children presente in authcontext
root.render(
  <React.StrictMode>

    <AuthContextProvider>
      <App /> 
    </AuthContextProvider>

  </React.StrictMode>
);
