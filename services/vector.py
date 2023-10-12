import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import requests
import json


url = "http://localhost:5000/"

def vector(path):
    # Carica il modello ResNet-50 preaddestrato
    resnet = models.resnet50(weights="IMAGENET1K_V2")
    # Imposta il modello in modalità di valutazione (non addestramento)
    # Rimuovi il classificatore finale (l'ultimo strato)
    modules = list(resnet.children())[:-1]
    resnet = nn.Sequential(*modules)

     # Trasformazioni dell'immagine
    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    
    # Carica un'immagine di esempio
   
    image = Image.open(path).convert('RGB')
     # Applica le trasformazioni all'immagine
    input_tensor = preprocess(image)
    input_batch = input_tensor.unsqueeze(0)  # Aggiunge una dimensione per creare un batch

    resnet.eval()

   
   

    # Esegui l'elaborazione con il modello ResNet-50
    with torch.no_grad():
        output = resnet(input_batch)

    # Estrai il vettore immagine dall'output
    image_vector = output.squeeze().numpy()

    # vector to list percheé python non ha problemi con json
    image_list = image_vector.tolist()
    # Ora puoi utilizzare image_vector per ulteriori elaborazioni o analisi
    # print(image_vector)
    # print(len(image_vector))
    # print(type(image_vector))

    return image_list
    # response = requests.post(url,json=image_vector)
    
