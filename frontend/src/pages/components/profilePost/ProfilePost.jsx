import React, { useState, useEffect, useContext } from 'react'
import Comment from '../comment/Comment';
import TimeAgo from 'react-timeago';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import './profilepost.css'

import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
export default function ProfilePost({post}) {
    
  const [like,setLike]=useState(post.likes.length)
    const [isLiked,setIsLiked]=useState(false)
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
  const [openComments, setOpenComments] = useState(false)
 

  const {user:currentUser} = useContext(AuthContext);
  
  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id, post.likes]);


  const likeHandler =()=>{ 
    try {
      axios.put("http://localhost:8800/api/posts/"+post._id+"/like",{userId:currentUser._id});
    } catch (error) {
      
    }
    setLike(isLiked? like-1: like+1)
    setIsLiked(!isLiked) 
}


const showComments = () =>{
  setOpenComments(!openComments);
}

  return (
    
    
        
        <div className="card col-4 align-items-center mx-2 mb-5" style={{"width": 450}}>
          
          <img src={PF+"postimg/"+post.img} className='postImage p-2 rounded-2' onClick={likeHandler} alt=''/>
          <div className="card-body justify-content-start">
            <div className=" ">
            <span className="likeCounter fw-bold me-2" onClick={likeHandler}> {isLiked? <FavoriteIcon fontSize='large'/>:<FavoriteBorderIcon fontSize='large'/>} {like} Mi piace</span>
                <span className="card-text">{post?.desc}</span>
              
            </div>
            <div className="d-flex justify-content-between" style={{"width": 425}}>
                  
                  <span className="postComment fs-6 text-muted" onClick={showComments}> Commenti <Comment postId ={post._id} comm ={openComments}/> </span> 
                  
                  <span className='timeStamp fs-6 fw-light ms-auto'><TimeAgo date={post.createdAt}/></span>
                </div>

                  
            
          </div>
        </div>
    
    
  )
}
