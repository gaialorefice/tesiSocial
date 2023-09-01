import React from 'react'
import img from '../../assets/img.png'
import './leftbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export default function Leftbar() {
  return (
    <div id='leftbar' className='col-2 pt-5 border-end vh-100 justify-content-center align-items-center'>
        <div className="row offset-md-2">
            <img src={img} className='profilePicture rounded-circle' alt=''/>
        </div>
        <div className="row offset-md-2 mb-5 align-self-center">
            <span><PersonOutlinedIcon fontSize='large'/>Profilo</span>
            <span><HomeOutlinedIcon fontSize='large'/>Home</span>
            <span><AddCircleOutlineOutlinedIcon fontSize='large'/>Nuovo Post</span>
            <span><ExitToAppOutlinedIcon fontSize='large'/>Esci</span>
        </div>
        
    </div>
  )
}
