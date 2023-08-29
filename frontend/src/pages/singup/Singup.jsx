import React from 'react'
import './singup.css'

export default function Singup() {
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
                <div className="d-flex flex-column  align-items-center gap-3 shadow-lg box"> 
                    <div class='row'>
                        <input  placeholder='Username'/>
                    </div>
                    <div class='row'>
                        <input  placeholder='Nome'/>
                    </div> 
                    <div class='row'>
                        <input  placeholder='Cognome'/>
                    </div> 
                    <div class='row'>
                        <input  placeholder='Password'/>
                    </div> 
                    <div class='row'>
                        <input  placeholder='Conferma Password'/>
                    </div>
                    
                    {/* penso sia sbagliato */}
                    <button type="button" class="col-md-5 btn btn-outline-primary ">SING UP</button>
                </div>
                
            </div>
          
        </div>
    </div>
  )
}
