import React, {useState} from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {


    const  [ formUtente , setFormUtente] = useState({
        username:'',
        name:'',
        surname: '',
        email:'',
        password:'',
    });

     const  updateFormUtente = () =>{
        setFormUtente({
            
        })

     }
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormUtente({
    //       ...formUtente,
    //       [name]: value,
    //     });
    //   };

      const option = {
        method: 'POST',
        body: JSON.stringify(formUtente),
        };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dati inseriti:', formUtente);
        fetch('http://localhost:8800/api/auth/register', option)
        .then(res=> res.json())
        .then(data =>{
            console.log('server:', data);
        })
        .catch(error =>{
            console.log(error);
        })
      };
    

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
                    <form className="row h-auto justify-content-center align-items-center " onSubmit={handleSubmit}>
                        <div className="d-flex flex-column  justify-content-center box ">
                            <div className="mb-3">
                                <input type="text" className="form-control border-primary" id="usernameInput" placeholder="Nome Utente" value={formUtente.username} onChange={(e) => setFormUtente(e.target.username)}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control border-primary" id="nameInput" placeholder="Nome" value={formUtente.name} onChange={(e) => setFormUtente(e.target.name)}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control border-primary" id="firstNameInput" placeholder="Cognome" value={formUtente.surname} onChange={(e) => setFormUtente(e.target.surname)}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control border-primary" id="emailInput" placeholder="Email" value={formUtente.email} onChange={(e) => setFormUtente(e.target.email)}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control border-primary" id="passwordInput" placeholder="Password"value={formUtente.password} onChange={(e) => setFormUtente(e.target.password)}/>
                            </div>
                            {/* <div className="mb-3">
                                <input type="text" className="form-control border-primary" id="passCheckInput" placeholder="Conferma Password"/>
                            </div> */}
                            <button type="submit" className="btn btn-outline-primary">Registrati</button>
                            <Link to="/login "> <span>Già registrato? Accedi!</span> </Link>
                        </div>
                    </form>
                </div>     
            </div>
    </div>
    )
}
