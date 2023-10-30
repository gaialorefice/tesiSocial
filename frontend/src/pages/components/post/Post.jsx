import React, { useContext, useEffect, useRef, useState } from 'react'
import './post.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

// import { Users } from '../../../PostProva';
import axios from 'axios';
import Search from '../search/Search';
import Comment from '../comment/Comment';

import TimeAgo from "react-timeago";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';



export default function Post({post}) {
    
    const [like,setLike]=useState(post.likes.length)//hook
    const [isLiked,setIsLiked]=useState(false)//hook
    const [user, setUser] = useState({})
    const [comments, setComments] = useState([])

    

    const newCommentText = useRef(null);
    
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext);

    useEffect(()=>{
      setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes]);

    // useEffect(() =>{
    //   const fetchComments = async ()=>{

        
    //       const res = await axios.get("http://localhost:8800/api/posts/"+post._id+"/comments");
       
    //         setComments(res.data)
       
    //     }
      
    //   fetchComments();
    // },[post._id])

    useEffect( ()=>{
      console.log("feed renderizzato");
      const fetchUser = async () =>{
        const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`);
        setUser(res.data)
      };
      
      fetchUser();
  
    },[post.userId]) // è una dipendenza, quando cambia l'id deve renderizzare nuiovamente

    const likeHandler =()=>{ //arrow function
        try {
          axios.put("http://localhost:8800/api/posts/"+post._id+"/like",{userId:currentUser._id});
        } catch (error) {
          
        }
        setLike(isLiked? like-1: like+1)
        setIsLiked(!isLiked) 
    }

    function newComment(){
      var payload ={
          postId: post._id,
          userId: currentUser._id,
          username: currentUser.username,
          text: newCommentText.current.value,
      }

      axios.post("http://localhost:8800/api/posts/"+post._id+"/comments", payload);
      console.log(payload);
      console.log("commento aggiunto");
    }

    
       
  return ( 
    
            <div className="card my-3 shadow-sm">
              <div className="row-2 ms-auto mt-3">
                
                <button type="button" className="btn btn-outline-primary " data-bs-toggle="modal" data-bs-target={"#modal-"+post._id}><SearchOutlinedIcon/></button>
                <MoreVertIcon />
                <Search post = {post}/>



              </div>
             
              <img src={PF+"/postimg/"+post.img} className="card-img-top p-2" onClick={likeHandler} alt="..."/> 

              <div className="card-body " >
                <div className="d-flex justify-content-between ">
                <span className="likeCounter fw-bold mx-2" onClick={likeHandler}> <FavoriteBorderIcon fontSize='large'/>{like} Mi piace</span>
                 <InsertCommentIcon role="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample`} fontSize='large'/>
                 
                </div>
                

                <div className="d-flex align-items-center mt-2 postInfo">
                  <Link to={`profile/${user.username}`}>
                    <img src={user.profiePicture? PF+"pfp/"+user.profiePicture : PF+"pfp/pfp.png"} className="card-img-top profilePicturePost rounded-circle"  alt="..."/>
                  </Link>
                  <h5 className="card-title ms-2">{user.username}</h5>
                </div>
                
                <p className="card-text">{post?.desc}</p>
                <div className="d-flex">
                  {/* creare un collapse per vedere i post con map?*/}
                  <span className="postComment fs-6 text-muted"> {post?.comments.map((c) => { return <Comment key={c._id} post ={post}/>})} Commenti</span> 
                  
                  <span className='timeStamp fs-6 fw-light ms-auto'><TimeAgo date={post.createdAt}/></span>
                </div>
                
                {/* <div className="collapse" id = "commentCollapse">
                  {comment.map((c) => <Comment key={c._id} comm = {c}/>)}
                </div> */}

              
                  <div className="card card-body">
                    
                    <textarea name="descPost" cols="50" rows="2" style={{borderStyle: "none", width: "100%"}} maxLength="250" placeholder="Aggiungi un Commento..." id="descPost" ref={newCommentText}></textarea>
                    
                  </div>
                  <button type='button' className= "btn btn-outline-primary mt-2" onClick={() => {newComment()}}>Commenta</button>
                

            </div>
        </div>

  )
}
