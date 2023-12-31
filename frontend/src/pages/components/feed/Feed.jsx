import React, { useEffect, useState } from 'react';
import './feed.css';


import Post from '../post/Post';
import axios from 'axios';
import ProfilePost from '../profilePost/ProfilePost';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export default function Feed({username}) {

  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect( ()=>{
    console.log(user);
    
    const fetchPosts = async () =>{
      const res = username ? await axios.get("http://localhost:8800/api/posts/profile/"+ username) : await axios.get("http://localhost:8800/api/posts/feed/"+user._id) 
      
      setPosts(res.data.sort((p1,p2) =>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }))
    }
    
    fetchPosts();

  },[user]) 

  const HomeFeed = () =>{

    return(
      <>
        <div className="col-10 bg-light">
        
        <div className='row'>
        
          <div className="col-6 offset-md-2 feedbox ">
              

                {posts.map( (p) => <Post key={p._id} post ={p} />)}
              
              
          </div>
          <div className="col-auto">
          </div>
        </div>
        
      </div>
    </>
    )
  }

  const ProfileFeed = () =>{

    return (

      <div className="row">
        {posts.map( (p) =>(<ProfilePost key={p._id} post ={p} />))}
       
      </div>

    )
  }

  return (
  
    <>
      {username ? <ProfileFeed/> : <HomeFeed/>}
    </>
      
   
  )
}
