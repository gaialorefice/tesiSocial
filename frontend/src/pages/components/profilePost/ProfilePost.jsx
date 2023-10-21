import React, { useState, useEffect, useContext } from 'react'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../../PostProva';
import './profilepost.css'

import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
export default function ProfilePost({post}) {
    
  const [like,setLike]=useState(post.likes)//hooks?
  const [isLiked,setIsLiked]=useState(false)//hooks?
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

  const {user} = useContext(AuthContext);
  const [posts, setPosts] = useState([]);


  // useEffect( ()=>{
  //   console.log("feed renderizzato");
  
  //   const fetchPosts = async () =>{
  //     const res = await axios.get("posts/profile/"+ user.username);
  //     setPosts(res.data)
  //   }
    
  //   fetchPosts();

  // },[]) //mettendo l'array vuoto renderizza una sola volta?, è una dipendenza


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
        
        <div className="card col-4 align-items-center mx-2 mb-5" style={{"width": 450}}>
          
          <img src={PF+"postimg/"+post.img} className='postImage p-2 rounded-2' onClick={likeHandler} alt=''/>
          <div className="card-body ">
            <div className="row justify-content-start">
              <span className="likeCounter fw-bold"onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
                <span className="card-text">{post?.desc}</span>
                <span className="postComment fs-6 text-muted">{post?.com} Commenti</span>
            </div>
              
            
          </div>
        </div>
    
    
  )
}
