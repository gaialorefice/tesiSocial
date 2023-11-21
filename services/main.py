from flask import Flask , request, jsonify
import os
from engine import *
from vector import *
import random
import json


app = Flask(__name__)

@app.route("/", methods = ['POST'])
def upload_image():
    
  if 'file' not in request.files:
    return jsonify({'error':'Nessun file inviato'}), 400
  
  file = request.files['file']

  if file.filename == '':
     return jsonify({'error':'Nome Fine vuoto'}), 400
  
  if not file.filename.endswith(('.jpg','.png','.jpeg')):
     return jsonify({'error': 'Il tipo non è supportato'}), 400
  
  upload_folder = '../frontend/public/assets/postimg' # Inserimento in cartella 


  new_name = str(random.randrange(0,10000,1)) + ".png" # Creazione  di un nome dato da numeri random
  file.save(os.path.join(upload_folder,new_name))# Salvataggio dell'immagine


  ### machine learnig
  datas = json.dumps(vector(f"../frontend/public/assets/postimg/{new_name}")) #Vettorizzazione dell'immagine

  r = {} #Creazione di un dizionario / oggetto
  r['vector'] = datas #da due campi
  r['name'] = new_name
  response = jsonify(r) #Conversione in stringa json
 

  response.headers.add('Access-Control-Allow-Origin','*')

  return response, 200


if __name__ == '__main__':
    app.run(debug=True)