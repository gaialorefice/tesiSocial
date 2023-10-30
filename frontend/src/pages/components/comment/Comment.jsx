import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Comment({post}){
    
    const [postComments, setPostComments] = useState([]);

   useEffect(() =>{
      const fetchComments = async ()=>{

        
          const res = await axios.get("http://localhost:8800/api/posts/"+post._id+"/comments");
       
            setPostComments(res.data)
       
        }
      
      fetchComments();
    },[])
    return(
        <div>
            <span className="commento">{postComments}</span>
        </div>
    )

}