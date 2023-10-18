import React from 'react'
import './profile.css'
import Post from '../components/post/Post'
import ProfilePost from '../components/profilePost/ProfilePost'
import { Posts } from '../../PostProva'
import { useState, useEffect } from 'react'


import SharePost from '../components/share/SharePost'

import { Link } from 'react-router-dom'

import Header from '../components/header/Header'
import Feed from '../components/feed/Feed'
import Leftbar from '../components/leftbar/Leftbar'



export default function Profile() {
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    // const [followers, setFollowers] = useState(user.followers.length)
    // const [followings,setFollowings] = useState(user.followings.length)
    const [posts, setPosts] = useState([]);



  return (
    <>
    <Header/>
    <div className="col">
        <div className="row mt-5 ">
            <div className="col-2 border-end">
                <div className="row justify-content-center align-item-center">
                    <img src={PF+'pfp/img.png'} className='profilePicture rounded-circle' alt=''/>
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
                    {/* {followers} follower */}
                </span>
            </div>
            <div className="col-3">
                <span className="d-flex followingCounter justify-content-center">
                    {/* {followings} Seguiti */}
                 </span>
            </div>
        </div>
        <div className="row shadow-sm  bg-light ">
            <Leftbar profile/>
            <div className="col-10 p-5 ">
                <div className="row">
                    {Posts.map( (p) =>(<ProfilePost key={p._id} post ={p} />))}
                    {/* <Feed profile/> */}
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
