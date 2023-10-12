import React from 'react'
import './header.css'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

export default function Header() {

    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

  return (

    <div className=' row headerBox  border-bottom shadow-sm align-item-center '>
        <div className=' col-2 mt-2'> 
            <div className="row offset-md-2">
                <img src={PF+'postcard.png'} className='img-fluid headerLogo' alt=''/>
            </div>
        </div>
        <div className="col-10">
            <div className="row align-items-center mt-2">
                <div className=' col-6 offset-md-2 '>  
                    <div className="input-group">
                        <input type="text" id="searchBox" className="form-control" placeholder="Trova nuovi utenti..." aria-label="Search Bar" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><SearchOutlinedIcon/></button>
                    </div>  
                </div>
                <div className='col-4'> 
                    <NotificationsOutlinedIcon fontSize='large'sx={{color:'#478ba2'}}/>
                    <MessageOutlinedIcon fontSize='large'sx={{color:'#478ba2'}}/> 
                </div>
            </div>
        </div>
    </div>
    
  )
}
