import React, { useEffect, useState } from 'react';
import './feed.css';


import Post from '../post/Post';
import axios from 'axios';
import ProfilePost from '../profilePost/ProfilePost';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

// import { Posts } from '../../../PostProva'

export default function Feed({username}) {

  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect( ()=>{
    console.log(user);
    
    const fetchPosts = async () =>{
      const res = username ? await axios.get("posts/profile/"+ username) : await axios.get("posts/feed/"+user._id) 
      
      setPosts(res.data)
    }
    
    fetchPosts();

  },[user]) //mettendo l'array vuoto renderizza una sola volta?, è una dipendenza

  const HomeFeed = () =>{

    return(
      <>
        <div className="col-10 bg-light">
        
        <div className='row'>
        
          <div className="col-6 offset-md-2 feedbox ">
              

                {posts.map( (p) => <Post key={p._id} post ={p} />)}
              
              
          </div>
          <div className="col-auto">
          </div>
        </div>
        
      </div>
    </>
    )
  }

  const ProfileFeed = () =>{

    return (

      <div className="row">
        {posts.map( (p) =>(<ProfilePost key={p._id} post ={p} />))}
       
      </div>

    )
  }

  return (
    // <div className="col-10 bg-light">
      
    //   <div className='row'>
      
    //     <div className="col-6 offset-md-2 feedbox ">
             
    //          <SharePost/>
    //           {posts.map( (p) =>(<Post key={p._id} post ={p} />))}
             
             
    //     </div>
    //     <div className="col-auto">
    //     </div>
    //   </div>
      
    // </div>
    <>
      {username ? <ProfileFeed/> : <HomeFeed/>}
    </>
      
   
  )
}
