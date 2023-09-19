import React from 'react'

import './leftbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import SharePost from '../share/SharePost';

export default function Leftbar() {
  return (
    <div id='leftbar' className='col-2 pt-5 border-end  justify-content-center align-items-center bg-white'>
        <div className="row offset-md-2">
            <img src='assets/img.png' className='profilePicture rounded-circle' alt=''/>
            <div className="row mt-5">
        <ul class="list-group list-group-flush">
          <Link to="/profile/:username" style={{textDecoration:"none"}}>
          <li class="list-group-item"><PersonOutlinedIcon fontSize='large'/>Profilo</li>
          </Link>
          
          <li class="list-group-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><AddCircleOutlineOutlinedIcon fontSize='large'/>Nuovo Post <SharePost/></li>
          <li class="list-group-item"><ExitToAppOutlinedIcon fontSize='large'/>Esci</li>
      
       </ul>
        </div>
        </div>
       
        
    </div>
  )
}
