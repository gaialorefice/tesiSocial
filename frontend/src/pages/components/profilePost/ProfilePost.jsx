import React, { useState } from 'react'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../../PostProva';
import './profilepost.css'

export default function ProfilePost({post}) {
    
  const [like,setLike]=useState(post.likes)//hooks?
  const [isLiked,setIsLiked]=useState(false)//hooks?
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler =()=>{ //arrow function
      setLike(isLiked? like-1: like+1)
      setIsLiked(!isLiked) 
  }
  return (
    
    
        
        // <div className="boxPicture mb-5 bg-white shadow-lg">   

        //         {/* <div className="row  ">
        //         <img src={post.img} className='postImage  rounded-2' onClick={likeHandler} alt=''/>
        //     </div>
        //     <div className='row border-bottom'>
        //       <span className="likeCounter fw-bold"onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
        //       <span className="postComment fs-6 text-muted">{post?.com} Commenti</span>
        //     </div>
        //      */}
                
        // </div>
        
        <div class="card col-4 align-items-center mx-2 mb-5" style={{"width": 450}}>
          <img src={PF+post.img} className='postImage p-2 rounded-2' onClick={likeHandler} alt=''/>
          <div class="card-body ">
            <div className="row justify-content-start">
            <span className="likeCounter fw-bold"onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
              <span class="card-text">{post?.desc}</span>
              <span className="postComment fs-6 text-muted">{post?.com} Commenti</span>
            </div>
              
            
          </div>
        </div>
    
    
  )
}
