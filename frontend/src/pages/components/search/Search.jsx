import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SearchPost from '../searchPost/SearchPost';

import "./search.css";

import { AuthContext } from '../../context/AuthContext';

export default function Search({post, bool}) {

  const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext);

  const [search,setSearch] = useState([])


  function getVector(){
    const payload = {post:post}
    axios.post("posts/search", payload).then((res) =>{
      setSearch([]);
      res.data.forEach(element => {
        if(element.userId !== currentUser._id && element.userId !== post.userId){
          search.push(element);
        }
      });
      setSearch([...search]);
    });
    
  }

  


  return (
    <div>
          <div>
            <div className="modal fade" id={"modal-"+post._id} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Ricerca effettuata...</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <button className='btn btn-outline-primary mb-2' onClick={()=>{getVector()}}>Mostra risultati</button>
                      {search.map( (p) => { return <SearchPost key={p._id} post ={p} />})}
                  </div>
                  <div className="modal-footer">
                    
                    
                  </div>
                </div>
              </div>
            </div>
        </div>

    </div>
      

  )
}
