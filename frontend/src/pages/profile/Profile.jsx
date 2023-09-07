import React from 'react'
import './profile.css'
import Post from '../components/post/Post'
import ProfilePost from '../components/profilePost/ProfilePost'
import { Posts } from '../../PostProva'

export default function Profile() {
  return (
    
    <div className="col">
        <div className="row mt-5 ">
            <div className="col-3 border-end">
                <div className="row justify-content-center">
                    <img src='assets/img.png' className='profilePicture rounded-circle' alt=''/>
                </div>
                
            </div>
            <div className="col-9">
                <div className="d-flex flex-column infoBox mt-4 justify-content-center">
                    <span className='usernameText fs-5 fw-bold'>percythearancinocat_</span>
                    <span className="profileDesc">Sono un gatto un po' pazzo</span>
                </div> 
                <button type="button" class="btn btn-outline-primary">Segui</button>
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
        <div className="row shadow-sm  bg-light p-5">
           
            <div className="col-10 offset-1">
                <div className="row">{Posts.map( (p) =>(<ProfilePost key={p.id} post ={p} />))}</div>
            </div>
        </div>
    </div>
   
  )
}
