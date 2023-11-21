import React, { useContext } from 'react'
import './profile.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import Header from '../components/header/Header'
import Feed from '../components/feed/Feed'
import Leftbar from '../components/leftbar/Leftbar'
import { AuthContext } from '../context/AuthContext'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Profile() {
    const [user, setUser] = useState({})
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;
    const {user:currentUser, dispatch } = useContext(AuthContext);
    
    
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
   

    useEffect( ()=>{
    

      const fetchUser = async () =>{
   
        const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
        setUser(res.data)
      }

      setFollowed(currentUser.followings.includes(user?._id))

      if (!(Object.keys(user).length === 0)){
        setFollowers(user.followers.length)
        setFollowing(user.followings.length)
      }

      fetchUser();

  
    },[username, user._id]) 

    
   
    const followHandler = async() =>{
        if(followed){
            await axios.put(`http://localhost:8800/api/users/${user._id}/unfollow`, {userId:currentUser._id});
            dispatch({type:"UNFOLLOW", payload:user._id})
        }else{
           await axios.put(`http://localhost:8800/api/users/${user._id}/follow`,{userId:currentUser._id})
           dispatch({type:"FOLLOW", payload:user._id})
           
        }
        setFollowed(!followed)
    }

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
                {user.username !== currentUser.username && (<button type="button" onClick={followHandler} className="btn btn-outline-primary"> { followed? "Smetti di seguire" : "Segui"} { followed? <RemoveIcon/> : <AddIcon/>}</button>)}
            </div>

        </div>
        <div className="row border-bottom shadow-sm">
            <div className="col-3 offset-md-3 ">
                <span className="d-flex followerCounter justify-content-center">
                 Followers {followers}
                </span>
            </div>
            <div className="col-3">
                <span className="d-flex followingCounter justify-content-center">
                Following {following}
                 </span>
            </div>
        </div>
        <div className="row shadow-sm  bg-light ">
            <Leftbar from="profile" user = {user}/>
            <div className="col-10 p-5 ">
             <Feed username = {username} />
                 
            </div>
        </div>
    </div>
   </>
  )
}
