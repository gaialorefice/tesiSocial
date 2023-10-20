import React, { useContext } from 'react'
import './profile.css'



import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import Header from '../components/header/Header'
import Feed from '../components/feed/Feed'
import Leftbar from '../components/leftbar/Leftbar'
import { AuthContext } from '../context/AuthContext'



export default function Profile() {
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;
    const {user:currentUser} = useContext(AuthContext);
    
    // const [followers, setFollowers] = useState(user.followers.length)
    // const [followings,setFollowings] = useState(user.followings.length)
   

    const [user, setUser] = useState({})
    

    useEffect( ()=>{
      console.log("feed renderizzato");
      const fetchUser = async () =>{
        console.log(username);
        const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
        setUser(res.data)
      }
      
      fetchUser();
  
    },[username]) // è una dipendenza, quando cambia l'd deve renderizzare nuiovamente

  return (
    <>
    <Header/>
    <div className="col">
        <div className="row mt-5 ">
            <div className="col-2 border-end">
                <div className="row justify-content-center align-item-center">
                    <img src={user.profilePicture? PF+"pfp/"+user.profiePicture : PF+'pfp/pfp.png'} className='profilePicture rounded-circle' alt=''/>
                </div>
                
            </div>
            <div className="col-9">
                <div className="d-flex flex-column infoBox mt-4 justify-content-center">
                    <span className='usernameText fs-5 fw-bold'>{user.username}</span>
                    <span className="profileDesc">{user.desc}</span>
                </div> 
                <button type="button" className="btn btn-outline-primary">Segui</button>
            </div>

        </div>
        <div className="row border-bottom shadow-sm">
            <div className="col-3 offset-md-3 ">
                <span className="d-flex followerCounter justify-content-center">
                    {currentUser.followers.length} Followers
                </span>
            </div>
            <div className="col-3">
                <span className="d-flex followingCounter justify-content-center">
                    {currentUser.followings.length} Following
                 </span>
            </div>
        </div>
        <div className="row shadow-sm  bg-light ">
            <Leftbar from="profile" user = {user}/>
            <div className="col-10 p-5 ">
                {/* <div className="row">
                    {Posts.map( (p) =>(<ProfilePost key={p._id} post ={p} />))}
                    <Feed profile/>
                   </div> */}
                   <Feed username = {username} />
                 
            </div>
        </div>
    </div>
   </>
  )
}
