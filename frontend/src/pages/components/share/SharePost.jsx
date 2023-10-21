import React, { useContext, useRef } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import "./sharepost.css"
import { AuthContext } from '../../context/AuthContext';

const url = "http://localhost:5000/";

export default function SharePost() {

  const description = useRef(null);
  const imgRef = useRef(null);
  const {user} = useContext(AuthContext);
  const [imgName, setImgName] = useState(null);

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
        const arrayfl = data.vector.slice(1,-1); //per rimuovere le parentesi [] ad inizio e fine prende il campo vector del file toprnato da python
        const array = arrayfl.split(', '); // per rimuovere la separazione degli elementi
        

      var arrayDouble = array.map(function(string){
        var arr = parseFloat(parseFloat(string).toFixed(2))
        return arr;
      });
      console.log(arrayDouble);
        //fetch per caricare il post in db
        var dbdata = JSON.stringify({
          userId: user._id,
          desc: description.current.value,
          img:data.name, //prende il campo nome dall'oggetto tornato da python
          vector: arrayDouble,
        });
        
        console.log(imgName);
        const option = {
          method: 'POST',
          credentials: 'include',
          headers: {
              "Accept": 'application/json',
              "Content-Type": "application/json",
            },
          body: dbdata,

      };


        fetch('posts/', option ).then(res =>{
          if(res.ok){
              return res.json()
          }else{
              console.log("errore")
          }
        }).then(data =>{
           console.log(dbdata);
           window.location.reload(false);

           
        })    


        // alert('Immagine caricata con successo!',data);
    })
  }
  
  const [selectedImage, setSelectedImage] = useState(null);


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgName(imgRef.current.files[0].name);
      
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

            <div className="modal-dialog ">

              <div className="modal-content">

                <div className="modal-header">
                    <label htmlFor='myImage'>
                       <span className='border p-2 border-primary rounded bg-primary ' style={{color : 'white'}}> <DriveFolderUploadIcon fontSize='large'  /> Scegli un immagine </span>
                      <input type="file" id='myImage' className='btn btn-primary filetype visually-hidden' ref={imgRef} accept='.png,.jpeg,.jpg'  onChange={onImageChange}/>
                    </label>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <img id='previewImage' alt=' '  className='visually-hidden img-fluid  mx-auto pb-3' src={selectedImage}/>
                  <textarea name="descPost" cols="50"  maxLength="250" placeholder="Aggiungi una descrizione..." id="descPost" ref={description}></textarea>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={submitFunction}>Save changes</button>
                </div>

              </div>
            </div>
      </div>
  )
}
