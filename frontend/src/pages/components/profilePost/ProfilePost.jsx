import React, { useState, useEffect, useContext } from 'react'


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './profilepost.css'

import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
export default function ProfilePost({post}) {
    
  const [like,setLike]=useState(post.likes.length)//hook
    const [isLiked,setIsLiked]=useState(false)//hook
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

  const {user:currentUser} = useContext(AuthContext);
  
  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id, post.likes]);

  // useEffect( ()=>{
  //   console.log("feed renderizzato");
  
  //   const fetchPosts = async () =>{
  //     const res = await axios.get("posts/profile/"+ user.username);
  //     setPosts(res.data)
  //   }
    
  //   fetchPosts();

  // },[]) //mettendo l'array vuoto renderizza una sola volta?, è una dipendenza


  const likeHandler =()=>{ //arrow function
    try {
      axios.put("http://localhost:8800/api/posts/"+post._id+"/like",{userId:currentUser._id});
    } catch (error) {
      
    }
    setLike(isLiked? like-1: like+1)
    setIsLiked(!isLiked) 
}
  return (
    
    
        
        <div className="card col-4 align-items-center mx-2 mb-5" style={{"width": 450}}>
          
          <img src={PF+"postimg/"+post.img} className='postImage p-2 rounded-2' onClick={likeHandler} alt=''/>
          <div className="card-body justify-content-start">
            <div className=" ">
              <span className="likeCounter fw-bold" onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
                <span className="card-text">{post?.desc}</span>
              
            </div>
            {/* <span className="postComment fs-6 text-muted">{post?.com} Commenti</span> */}
            
          </div>
        </div>
    
    
  )
}
