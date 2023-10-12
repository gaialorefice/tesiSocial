import torch
import torchvision.models as models
from torchvision import transforms
from PIL import Image




def run(path):

    #caricamento del modello pretrained di resnet50, impostando il parametro pretrained a true
    model = models.resnet50(pretrained = True) 

    #definizione della trasformazione preprocessata dell'immagine
    preprocess = transforms.Compose([
        transforms.Resize(256), #Resize the input image to the given size , If the image is torch Tensor it is expected to have […, H, W] shape, where … means an arbitrary number of leading dimensions
        transforms.CenterCrop(24), #Crops the given image at the center.
        transforms.ToTensor(), #Convert a PIL Image or ndarray to tensor and scale the values accordingly.
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),#Normalize a float tensor image with mean and standard deviation, non supporta PIL
    ])

    #caricamento dell'immagine e preprocessing
    image =Image.open(path) #catica l'immagine
    input_tensor = preprocess(image) #preprocessa l'immagine
    print(len(input_tensor))
    input_batch = input_tensor.unsqueeze(0) #aggiunge una dimensione di batch
    #setta il il modello in evaluation mode/ modalità di valutazione
    model.eval()

    # Perform inference: the process of running data points into a machine learning model to calculate an output such as a single numerical score
    with torch.no_grad(): #disabilita i calcoli del gradiente durante l'inferenza del modello, migliora la velocità
        output = model(input_batch)
    print((output[0]))
    print(output[0])
    # probabilities = torch.nn.functional.softmax(output[0],dim=0) #casse di probabilità, per la classificazione

    # predirected_class = torch.argmax(probabilities).item() #prende l'indice di della classe predetta

    # print("Classe Predittiva:", predirected_class)


    print(path)

    

if __name__ == "__main__":
    run("C:/Users/gaial/Documents/tesi2/services/uploads/ciao.jpg")