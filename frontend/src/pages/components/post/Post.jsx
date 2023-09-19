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
    // <div className='row shadow-sm rounded-3 bg-white my-5'>
    //     <div className="col mt-2">
    //         <div className="row mb-2  align-items-center">
    //             <div className="col-1 me-3 ">
    //                 <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} className='profilePicturePost rounded-circle' alt=''/>
    //             </div>
    //             <div className="col-6 ">
    //                 <div className="d-flex flex-column">
    //                     <span className='usernameText fs-5 fw-bold'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
    //                     <span className='timeStamp fs-6 fw-light'>{post.date}</span>
    //                 </div>
    //             </div>   
    //             <div className="col-auto ms-auto offset-md-2 ">
    //                 <button type="button " className="btn btn-outline-primary"><SearchOutlinedIcon/></button>
    //                 <MoreVertIcon/>
    //             </div>
                    
                   
    //         </div>
            
    //         <div className="row ">
                
    //             <img src={post.img} className='postImage img-fluid' onClick={likeHandler} alt=''/>
    //         </div>
    //         <div className='row border-bottom'>
    //           <span className="likeCounter fw-bold"onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
          
    //         </div>
    //         <div className="row" >
    //             <div className="col fw-6">
    //                 <span className='usernameText fw-bold me-2'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
    //                 <span className='postDesc text-wrap'>{post?.desc}</span>
    //             </div>
                
    //         </div>
    //         <div className="row">
    //             <span className="postComment fs-6 text-muted">{post?.com} Commenti</span>
    //         </div>
    //     </div>
        
      
    // </div>

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
