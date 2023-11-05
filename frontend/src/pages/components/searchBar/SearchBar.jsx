import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SearchBar({value}) {

    const [user, setUser] = useState({})
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext);

    // useEffect( ()=>{
    //     console.log("feed renderizzato");
  
    //     const fetchUser = async () =>{
          
    //       const res = await axios.get(`http://localhost:8800/api/users?username=${value}`);
    //       setUsers(res.data)
    //     }
       
    //     fetchUser();
  
    
    //   },[value])
  return (
    <div>

            .
                  {/* <Link to={`profile/${user.username}`}>
                    <img src={user.profiePicture? PF+"pfp/"+user.profiePicture : PF+"pfp/pfp.png"} className="card-img-top profilePicturePost rounded-circle"  alt="..."/>
                  </Link>
                  <h5 className="card-title ms-2">{user.username}</h5> */}
                
    </div>
  )
}
