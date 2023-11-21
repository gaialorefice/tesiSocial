import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import requests
import json


url = "http://localhost:5000/"

def vector(path):
    # Caricamento del modello ResNet-50 preaddestrato
    resnet = models.resnet50(weights="IMAGENET1K_V2")
   
    # Rimozione del classificatore finale (l'ultimo strato)
    modules = list(resnet.children())[:-1]
    resnet = nn.Sequential(*modules)

     # Trasformazioni applicate all'immagine
    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    
    # Caricamento dell'immagine
    image = Image.open(path).convert('RGB')
     # Applicazione delle trasformazioni all'immagine
    input_tensor = preprocess(image)
    input_batch = input_tensor.unsqueeze(0)  # Aggiunta di una dimensione per creare un batch

    resnet.eval()

    # Esecuzione dell'elaborazione con il modello ResNet-50
    with torch.no_grad():
        output = resnet(input_batch)

    # Estrazione dell vettore immagine dall'output
    image_vector = output.squeeze().numpy()

    # Vector to list
    image_list = image_vector.tolist()
 

    return image_list
   
    
