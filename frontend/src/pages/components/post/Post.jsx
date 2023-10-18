import React, { useEffect, useState } from 'react'
import './post.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Users } from '../../../PostProva';
import axios from 'axios';
import Search from '../search/Search';

import TimeAgo from "react-timeago";
import { Link } from 'react-router-dom';

export default function Post({post}) {
    
    const [like,setLike]=useState(post.likes.length)//hook
    const [isLiked,setIsLiked]=useState(false)//hook
    const [user, setUser] = useState({})
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect( ()=>{
      console.log("feed renderizzato");
      const fetchUser = async () =>{
        const res = await axios.get(`users/${post.userId}`);
        setUser(res.data)
      }
      
      fetchUser();
  
    },[post.userId]) // è una dipendenza, quando cambia l'd deve renderizzare nuiovamente

    const likeHandler =()=>{ //arrow function
        setLike(isLiked? like-1: like+1)
        setIsLiked(!isLiked) 
    }

    
    function getVector(){
      const payload = {post:post}
      axios.post("posts/search", payload).then((res) =>{
        console.log(res);
      });
      console.log(payload);
      
    }
   
  return (
  
            <div className="card my-3 shadow-sm">
              <div className="row-2 ms-auto mt-3">
                
                <button type="button " className="btn btn-outline-primary " onClick={() => {getVector()}}><SearchOutlinedIcon/></button>
                 <Search /> 
                <MoreVertIcon />
               
              </div>
             
              <img src={PF+"postimg/"+post.img} className="card-img-top p-2" onClick={likeHandler} alt="..."/> 

              <div className="card-body">
            
                <span className="likeCounter fw-bold"onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
              

                <div className="d-flex align-items-center postInfo">
                  <Link to={`profile/${user.username}`}>
                    <img src={user.profiePicture || PF+"/pfp/pfp.png"} className="card-img-top profilePicturePost rounded-circle" onClick={likeHandler} alt="..."/>
                  </Link>
                  <h5 className="card-title ms-2">{user.username}</h5>
                </div>
                
                <p className="card-text">{post?.desc}</p>
                <div className="d-flex">
                  <span className="postComment fs-6 text-muted">{post?.com} Commenti</span>
                  <span className='timeStamp fs-6 fw-light ms-auto'><TimeAgo date={post.createdAt}/></span>
                </div>
                
            </div>
        </div>
  )
}
