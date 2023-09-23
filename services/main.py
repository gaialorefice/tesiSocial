from flask import Flask , request


app = Flask(__name__)

@app.route("/<int:post_id>", methods = ['POST'])
def gaia(post_id):
    if request.method == 'POST':
        print(request.json['name'])
    return '222'
