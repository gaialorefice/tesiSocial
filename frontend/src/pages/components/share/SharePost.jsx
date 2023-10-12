import React from 'react'
const url = "http://localhost:5000/";

export default function SharePost() {

  function upload(){
    
    const imageElement = document.getElementById('myImage');
    console.log(imageElement);

    const formData = new FormData();
    formData.append('file', imageElement.files[0]);

    const options = {
        method: 'POST',
        body: formData
    };


    fetch(url,options).then(res =>{
            if(res.ok){
                return res.json()
            }else{
                console.log("errore")
            }
    }).then(data => {
        console.log(data);
        
        //fetch per mandare i dati a node
        const optionss = {
          method: 'GET'
        }

        fetch('http://localhost:8800/api/users/64eb6801e510512eb190f595', optionss).then().then(data =>{
          console.log(data);
        })    


        alert('Immagine caricata con successo!',data);
    })
    .catch(error => {
        
        alert('Si è verificato un errore durante il caricamento dell\'immagine.',error);
    });
  }



  return (
    <div>
   <div className="modal" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <input type="file" id='myImage'/>
        <button type="button" className="btn btn-primary" onClick={()=>{upload()}}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
