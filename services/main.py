from flask import Flask , request, jsonify
import os
from engine import *

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
  
  upload_folder = './uploads'
 
  file.save(os.path.join(upload_folder,file.filename))


  ### machine learnig
  run(f"./uploads/{file.filename}")

  return jsonify({'message':'Immagine caricata con successo'}), 200


if __name__ == '__main__':
    app.run(debug=True)