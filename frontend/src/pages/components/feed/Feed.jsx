import React, { useEffect, useState } from 'react'
import './feed.css'
import SharePost from '../share/SharePost'
import Post from '../post/Post'
import axios from 'axios'
// import { Posts } from '../../../PostProva'

export default function Feed({profile}) {

  const [posts, setPosts] = useState([]);


  useEffect( ()=>{
    console.log("feed renderizzato");
  
    const fetchPosts = async () =>{
      const res = await axios.get("posts/feed/65285dbc1f784f6cb435f4f0");
      setPosts(res.data)
    }
    
    fetchPosts();

  },[]) //mettendo l'array vuoto renderizza una sola volta?, è una dipendenza

  return (
    <div className="col-10 bg-light">
      
      <div className='row'>
      
        <div className="col-6 offset-md-2 feedbox ">
             
             <SharePost/>
              {posts.map( (p) =>(<Post key={p._id} post ={p} />))}
             
             
        </div>
        <div className="col-auto">
        </div>
      </div>
      
    </div>
  )
}
