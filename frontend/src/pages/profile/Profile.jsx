import React from 'react'
import './profile.css'
import Post from '../components/post/Post'
import ProfilePost from '../components/profilePost/ProfilePost'
import { Posts } from '../../PostProva'
import { Users } from '../../PostProva'

import SharePost from '../components/share/SharePost'

import { Link } from 'react-router-dom'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Header from '../components/header/Header'


export default function Profile() {
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
    <Header/>
    <div className="col">
        <div className="row mt-5 ">
            <div className="col-2 border-end">
                <div className="row justify-content-center align-item-center">
                    <img src={`${PF}img.png`} className='profilePicture rounded-circle' alt=''/>
                </div>
                
            </div>
            <div className="col-9">
                <div className="d-flex flex-column infoBox mt-4 justify-content-center">
                    <span className='usernameText fs-5 fw-bold'>percythearancinocat_</span>
                    <span className="profileDesc">Sono un gatto un po' pazzo</span>
                </div> 
                <button type="button" className="btn btn-outline-primary">Segui</button>
            </div>

        </div>
        <div className="row border-bottom shadow-sm">
            <div className="col-3 offset-md-3 ">
                <span className="d-flex followerCounter justify-content-center">
                    Numero followers
                </span>
            </div>
            <div className="col-3">
                <span className="d-flex followingCounter justify-content-center">
                    Numero Seguiti
                 </span>
            </div>
        </div>
        <div className="row shadow-sm  bg-light ">
            <div className="col-2 h-auto bg-white border-end">
                <ul className="list-group list-group-flush">
        
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li className="list-group-item"><HomeOutlinedIcon fontSize='large'/>Home</li>
                    </Link>
                
                        <li className="list-group-item"  data-bs-toggle="modal" data-bs-target="#exampleModal" ><AddCircleOutlineOutlinedIcon fontSize='large'/>Nuovo Post <SharePost/> </li>
                        <li className="list-group-item"><ExitToAppOutlinedIcon fontSize='large'/>Esci</li>
    
     </ul>
            </div>
           
            <div className="col-10 p-5 ">
                <div className="row">{Posts.map( (p) =>(<ProfilePost key={p.id} post ={p} />))}</div>
            </div>
        </div>
    </div>
   </>
  )
}
