from flask import Flask , request, jsonify
import os
from engine import *
from vector import *



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
  
  upload_folder = '../frontend/public/assets/postimg' #non inserisce più in database ma la mette nella cartella giusta
#  './uploads'
  file.save(os.path.join(upload_folder,file.filename))


  ### machine learnig
  # run(f"./uploads/{file.filename}")
  # datas = json.dumps(vector(f"./uploads/{file.filename}"))
  datas = json.dumps(vector(f"../frontend/public/assets/postimg/{file.filename}"))
 
  print(datas)
  print(len(datas)) # lungo perché conta adesso tutti i caratteri e non più il vettore
  print(type(datas))
  
  response = jsonify(datas)
  print(type(response))
  # response.headers.add('Access-Control-Allow-Origin','http://localhost:3000/') #per ottenere i permessi cors
  response.headers.add('Access-Control-Allow-Origin','*')

  return response, 200


if __name__ == '__main__':
    app.run(debug=True)