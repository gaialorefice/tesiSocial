import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
 
export default function Comment({postId, comm}){

    
    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext);
    
    const [postComments, setPostComments] = useState([]);

   useEffect(() =>{
      const fetchComments = async ()=>{

        
          const res = await axios.get("http://localhost:8800/api/posts/"+postId+"/comments");
       
            setPostComments(res.data)
       
        }
      
      fetchComments();
    },[])


    return(
        <div>
            <div className="boxComment">
            {comm && (<ul className="list-group list-group-flush">
             {postComments.map(comment => (
          <li className="list-group-item" key={comment.id}>
            <span className="fw-bold">{comment.username}</span> {comment.text}
          </li>
        ))}
      </ul>)}
          
   
            </div>
            
        </div>
    )

}