const url = "https://localhost:5000/";

function ciao(){

    const imageElement = document.getElementById('myImage');


    const formData = new FormData();
    formData.append('file',imageElement.files[0]);

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
        alert('Immagine caricata con successo!');
    })
    .catch(error => {
        console.error(error);
        alert('Si è verificato un errore durante il caricamento dell\'immagine.');
    });

}