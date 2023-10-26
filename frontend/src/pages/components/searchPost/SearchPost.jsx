 import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./searchpost.css"
import axios from "axios";

export default function SearchPost({post}){
   
    const [user, setUser] = useState({})
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext);

    useEffect(()=>{
        console.log("feed renderizzato");
        const fetchUser = async () =>{
          const res = await axios.get(`/users?userId=${post.userId}`);
          setUser(res.data)
        };
        
        fetchUser();
    
      },[post.userId])


    return(
        // <div className="card searchCard my-3 shadow-sm">
        //     <div className="row-2 ms-auto mt-3">
            
        //     </div>
        
        //     <img src={PF+"/postimg/"+post.img} className="card-img-top p-2"  alt="..."/> 

        //     <div className="card-body">
        
        //         <span className="likeCounter fw-bold"> <FavoriteBorderIcon fontSize='large'/>Mi piace</span>
                

        //         <div className="d-flex align-items-center postInfo">
        //             <Link to={`profile/${user.username}`}>
        //             <img src={user.profiePicture? PF+"pfp/"+user.profiePicture : PF+"pfp/pfp.png"} className="card-img-top profilePicturePost rounded-circle"  alt="..."/>
        //             </Link>
        //             <h5 className="card-title ms-2">{user.username}</h5>
        //         </div>
        //         <div className="d-flex">
        //             <span className='timeStamp fs-6 fw-light ms-auto'></span>
        //         </div>
            
        //     </div>
        // </div>
        <div className="row">
            <div className="card searchCard col-4 align-items-center mx-2 mb-5" style={{"width": 450}}>
            <div className="d-flex align-items-center postInfo">
                  <Link to={`profile/${user.username}`}>
                    <img src={user.profiePicture? PF+"pfp/"+user.profiePicture : PF+"pfp/pfp.png"} className="card-img-top profilePicturePost rounded-circle" alt="..."/>
                  </Link>
                  <h5 className="card-title ms-2">{user.username}</h5>
                </div>
            <img src={PF+"postimg/"+post.img} className='postImage img-fluid p-2 rounded-2'  alt=''/>
            <div className="card-body ">
                <div className="row justify-content-start">
                <span className="likeCounter fw-bold"> <FavoriteBorderIcon fontSize='large'/>Mi piace</span>
                </div>
                
                
            </div>
            </div>
        </div>
    )
}