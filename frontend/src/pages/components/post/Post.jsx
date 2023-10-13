import React, { useState } from 'react'
import './post.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../../PostProva';


export default function Post({post}) {
    
    const [like,setLike]=useState(post.likes)//hooks?
    const [isLiked,setIsLiked]=useState(false)//hooks?
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler =()=>{ //arrow function
        setLike(isLiked? like-1: like+1)
        setIsLiked(!isLiked) 
    }
   
  return (
  
            <div className="card my-3 shadow-sm">
              <div className="row-2 ms-auto mt-3">
                
                <button type="button " className="btn btn-outline-primary "><SearchOutlinedIcon/></button>
                <MoreVertIcon />
              </div>
             
            <img src={PF+post.img} className="card-img-top p-2" onClick={likeHandler} alt="..."/>
            <div className="card-body">
                <span className="likeCounter fw-bold"onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
              

                <div className="d-flex align-items-center postInfo">
                  <img src={PF+Users.filter((u)=>u.id === post.userId)[0].profilePicture} className="card-img-top profilePicturePost rounded-circle" onClick={likeHandler} alt="..."/>
                  <h5 className="card-title ms-2">{Users.filter((u)=>u.id === post.userId)[0].username}</h5>
                  
                </div>
                
                <p className="card-text">{post?.desc}</p>
                <div className="d-flex">
                  <span className="postComment fs-6 text-muted">{post?.com} Commenti</span>
                  <span className='timeStamp fs-6 fw-light ms-auto'>{post.date}</span>
                </div>
                
                
            </div>
        </div>
  )
}
