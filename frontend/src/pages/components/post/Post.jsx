import React, { useState } from 'react'
import './post.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../../PostProva';


export default function Post({post}) {
    
    const [like,setLike]=useState(post.likes)//hooks?
    const [isLiked,setIsLiked]=useState(false)//hooks?

    const likeHandler =()=>{ //arrow function
        setLike(isLiked? like-1: like+1)
        setIsLiked(!isLiked) 
    }
   
  return (
    <div className='row shadow-sm rounded-3 bg-white my-5'>
        <div className="col mt-2">
            <div className="row mb-2  align-items-center">
                <div className="col-1 me-3 ">
                    <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} className='profilePicturePost rounded-circle' alt=''/>
                </div>
                <div className="col-6 ">
                    <div className="d-flex flex-column">
                        <span className='usernameText fs-5 fw-bold'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                        <span className='timeStamp fs-6 fw-light'>{post.date}</span>
                    </div>
                </div>   
                <div className="col-auto ms-auto offset-md-2 ">
                    <button type="button " className="btn btn-outline-primary"><SearchOutlinedIcon/></button>
                    <MoreVertIcon/>
                </div>
                    
                   
            </div>
            
            <div className="row ">
                
                <img src={post.img} className='postImage img-fluid' alt=''/>
            </div>
            <div className='row border-bottom'>
              <span className="likeCounter fw-bold"onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
          
            </div>
            <div className="row" >
                <div className="col fw-6">
                    <span className='usernameText fw-bold me-2'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                    <span className='postDesc text-wrap'>{post?.desc}</span>
                </div>
                
            </div>
            <div className="row">
                <span className="postComment fs-6 fw-light">{post.com} Commenti</span>
            </div>
        </div>
        
      
    </div>
  )
}
