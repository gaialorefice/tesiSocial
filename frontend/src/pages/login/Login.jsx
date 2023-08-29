import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='bg'>
        <div className='d-flex flex-row '>
            <div className='d-flex  col-md-7  justify-content-center align-items-center'> 
              <div>
                <p className='fs-1 text-break'></p>
                <p className='fs-4 text-break text-light'>Accedi per entrare in contatto con nuove persone!</p>

              </div>
            </div>
            <div className='d-flex vh-100 col-md-5 bg-white justify-content-center align-items-center shadow-lg'>
                <div className="d-flex flex-column gap-3 box "> 
                    <input className='row' placeholder='Email'/>
                    <input className='row' placeholder='Password' />
                    <a className='row' href="...">Password dimenticata?</a>
                    {/* penso sia sbagliato */}
                    <div className='row'>
                    {/* <button type="button" class=" col-4 btn btn-outline-primary ">Login</button> */}
                  
                     <button type="button" class=" col-4 offset-md-4 btn btn-outline-primary ">LOGIN</button>
                    </div>
                    
                </div>
                
            </div>
          
        </div>
    </div>
  )
}
