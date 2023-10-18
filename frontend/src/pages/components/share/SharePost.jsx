import React, { useRef } from 'react'
import { useState } from 'react';
import "./sharepost.css"
const url = "http://localhost:5000/";

export default function SharePost() {

  const description = useRef(null);
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
        // console.log(data);
        const arrayfl = data.slice(1,-1); //per rimuovere le parentesi [] ad inizio e fine
        const array = arrayfl.split(', '); // per rimuovere la separazione degli elementi
        

      var arrayDouble = array.map(function(string){
        var ciao = parseFloat(parseFloat(string).toFixed(2))
        return ciao
      });
      console.log(arrayDouble);
        //fetch per caricare il post in db
        var dbdata = JSON.stringify({
         vector: arrayDouble,
        });
        
        const option = {
          method: 'POST',
          credentials: 'include',
          headers: {
              "Accept": 'application/json',
              "Content-Type": "application/json",
            },
          body: dbdata,

      };

        fetch('posts/', option ).then().then(data =>{
           //console.log(dbdata);
           
        })    


        alert('Immagine caricata con successo!',data);
    })
    .catch(error => {
      console.log(error);
        alert('Si è verificato un errore durante il caricamento dell\'immagine.',error);
        
    });
  }
  
  const [selectedImage, setSelectedImage] = useState(null);


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
      const previewBox = document.getElementById("previewImage");
      previewBox.classList.remove('visually-hidden');
    }
  }


  const submitFunction =() => {
    upload();
  }

  
  return (
        <div className="modal fade" id="exampleModal" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div className="modal-dialog modal-lg">

              <div className="modal-content">

                <div className="modal-header">
                <input type="file" id='myImage' className='filetype'  onChange={onImageChange}/>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <img id='previewImage' alt=' '  className='visually-hidden' src={selectedImage}/>
                  <input type="text" id="descPost" ref={description} />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 
                  <button type="button" className="btn btn-primary" onClick={submitFunction}>Save changes</button>
                </div>

              </div>
            </div>
      </div>
  )
}
