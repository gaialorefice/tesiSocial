import React from 'react'
import './login.css'
import Signup from '../signup/Signup'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg '>
        <div className='row vh-100 justify-content-center align-items-center '>
            <div className="col-md-7 "> 
              <div className="row ">
                <img src="../assets/postcard-wh.png" className='logo' alt="" />
                  <span className='fs-4 text-break text-light'>Accedi per entrare in contatto con nuove persone!</span>
              </div>
                
            </div>

            <div className='col vh-100 col-md-5 bg-white shadow-lg  '> 

              <form className="row vh-100 justify-content-center align-items-center ">
                <div className=" d-flex flex-column  justify-content-center container box">
                  <div className="mb-3 ">
                      <input type="text" className="form-control border-primary"  placeholder="username"/>
                  </div>
                  <div className="mb-3">
                      <input type="text" className="form-control border-primary" placeholder="password"/>
                      <span className="forgottenPAssword">Password dimenticata?</span>
                  </div>
                  
                    <button type="submit" className=" btn btn-outline-primary ">Accedi</button>
                    <Link to="/signup"><span>Non sei ancora registrato? Registrati!</span></Link>
                  </div>
                 
              </form>
               
            </div>
            

          
                      
        </div>
    </div>
  )
}
