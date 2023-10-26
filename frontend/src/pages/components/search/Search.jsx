import React from 'react'
import SearchPost from '../searchPost/SearchPost';

import "./search.css";


export default function Search({post, newId}) {

 
  
  //modale per vedere tutti i risultati

  return (
    <div>
     

      {/* <div className="modal fade" id="searchModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Ricerca effettuata...</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {post.map( (p) =>(<SearchPost key={p._id} post ={p} />))}
                {Array.isArray(post)? post.map( (p) => { return <SearchPost key={p._id} post ={p} />}) : ""}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div> */}

          <div>
                  <div className="modal fade" id={newId} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Ricerca effettuata...</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            {Array.isArray(post)? post.map( (p) => { return <SearchPost key={p._id} post ={p} />}) : ""}
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

    </div>
      

  )
}
