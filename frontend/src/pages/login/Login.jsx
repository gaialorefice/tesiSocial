import React, { useContext, useRef } from 'react'
import './login.css'
import Signup from '../signup/Signup'
import { Link } from 'react-router-dom'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../context/AuthContext'

export default function Login() {

   const email = useRef();
   const password = useRef(); // hook che permette di fare riferimento ad un valare che non necessario al rendering

   const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const HandleSubmit = (e) =>{
    e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value}, dispatch);
  };

 
  return (
    <div className='bg '>
        <div className='row vh-100 justify-content-center align-items-center '>
            <div className="col-md-6 offset-md-1"> 
              <div className="row ">
                <img src="../assets/postcard-wh.png" className='logo' alt="" />
                  <span className='fs-4 text-break text-light'>Accedi per entrare in contatto con nuove persone!</span>
              </div>
                
            </div>

            <div className='col vh-100 col-md-5 bg-white shadow-lg  '> 

              <form className="row vh-100 justify-content-center align-items-center " onSubmit={HandleSubmit}>
                <div className=" d-flex flex-column  justify-content-center container box">
                  <div className="mb-3 ">
                      <input type="email" className="form-control border-primary"  placeholder="Email"  required ref ={email} />
                  </div>
                  <div className="mb-3">
                      <input type="password" className="form-control border-primary" placeholder="Password" minLength={8} required ref={password}/>
                    
                  </div>
                  
                    <button type="submit" className=" btn btn-outline-primary " disabled={isFetching}>{isFetching? <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>  : "Accedi"}</button>
                    <Link to="/signup"><span>Non sei ancora registrato? Registrati!</span></Link>
                  </div>
                 
              </form>
               
            </div>
            

          
                      
        </div>
    </div>
  )
}
