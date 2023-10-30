import React from 'react'

import './leftbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import SharePost from '../share/SharePost';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { logoutCall } from '../../../apiCalls';



export default function Leftbar({from}) {
  
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const logoutHandler = (e) =>{
    logoutCall(dispatch);
    window.location.href = "/login"
  }
    return(
      <div id='leftbar' className='col-2 pt-5 border-end bg-white'>
        <div className="row offset-md-2">
          {from === 'profile' ? <img src={PF+'pfp/pfp.png'} className='profilePicture visually-hidden rounded-circle' alt=''/>
          : <img src={user.profilePicture? PF+"pfp/"+user.profilePicture : PF+'pfp/pfp.png'} className='profilePicture rounded-circle' alt=''/>
          }
            
            <div className="row mt-5">
        <ul className="list-group list-group-flush">
          {from === 'profile' ? 
            <Link to="/" style={{textDecoration:"none"}}>
              <li className="list-group-item"><HomeOutlinedIcon fontSize='large'/>Home</li>
            </Link>
          : <Link to={"/profile/"+user.username} style={{textDecoration:"none"}}>
              <li className="list-group-item"><PersonOutlinedIcon fontSize='large'/>Profilo</li>
            </Link>
          }
          <li className="list-group-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><AddCircleOutlineOutlinedIcon fontSize='large'/>Nuovo Post</li>
          <li onClick={logoutHandler} className="list-group-item"><ExitToAppOutlinedIcon  fontSize='large'/>Esci</li>
      
       </ul>
        </div>
        </div>
       
        <SharePost/>
        
    </div>
    )
}


 