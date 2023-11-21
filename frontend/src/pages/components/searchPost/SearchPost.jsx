 import React, { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./searchpost.css"
import axios from "axios";

export default function SearchPost({post}){
   
    const [user, setUser] = useState({})
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(()=>{
       
        const fetchUser = async () =>{
         
          const res = await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`);
          setUser(res.data)
        };
        
        fetchUser();
    
      },[post.userId])


    return(
       
        <div className="row">
            <div className="card searchCard col-4 align-items-center mx-2 mb-5" style={{"width": 450}}>
            <div className="d-flex align-items-center postInfo">
                  <Link to={`profile/${user.username}`}>
                    <img src={user.profiePicture? PF+"pfp/"+user.profiePicture : PF+"pfp/pfp.png"} data-bs-dismiss="modal" className="card-img-top profilePicturePost pt-2 rounded-circle"  alt="..."/>
                  </Link>
                  <h5 className="card-title ms-2">{user.username}</h5>
                </div>
            <img src={PF+"postimg/"+post.img} className='postImage img-fluid p-2 rounded-2'  alt=''/>
            <div className="card-body ">
              
                
                
            </div>
            </div>
        </div>
    )
}