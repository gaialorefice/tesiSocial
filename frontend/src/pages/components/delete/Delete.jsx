import React, { useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

export default function Delete({post}) {

    const {user} = useContext(AuthContext);

    const deletePost = async () =>{
        
        await axios.delete("http://localhost:8800/api/posts/"+post._id, {data:{userId:user._id}});
        console.log("eliminato")
        window.location.reload();
    }


  return (

<div className="modal fade" id={"deleteModal-"+post._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Elimina</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       Vuoi eliminare questo post?

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={deletePost}>Elimina</button>
      </div>
    </div>
  </div>
</div>
  )
}
