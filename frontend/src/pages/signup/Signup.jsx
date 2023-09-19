import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='bg'>
    <div className='row vh-100 justify-content-center align-items-center'>
        <div className='col-md-7 '> 
          <div className="row ">
            <img src="../assets/postcard-wh.png" className='logo' alt="" />
              <span className='fs-4 text-break text-light'>Accedi per entrare in contatto con nuove persone!</span>
          </div>
            
          
        </div>
        <div className='col h-100 col-md-5 bg-white shadow-lg'> 
         
            <form className="row h-auto justify-content-center align-items-center ">
                <div className="d-flex flex-column  justify-content-center box ">
                    <div className="mb-3">
                        <input type="text" className="form-control border-primary" id="usernameInput" placeholder="Nome Utente"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control border-primary" id="nameInput" placeholder="Nome"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control border-primary" id="firstNameInput" placeholder="Cognome"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control border-primary" id="emailInput" placeholder="Email"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control border-primary" id="passwordInput" placeholder="Password"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control border-primary" id="passCheckInput" placeholder="Conferma Password"/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Registrati</button>
                    <Link to="/login "> <span>Già registrato? Accedi!</span> </Link>
                </div>

            </form>
           
        </div> 

      
                  
    </div>
</div>
  )
}
