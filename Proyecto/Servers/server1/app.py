from flask import Flask, redirect, url_for, render_template, request
import json
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017")
mydb = myclient["Redes2"]
images = mydb["images"]
personas = mydb["personas"]
app = Flask(__name__)

@app.route('/')
def home():
    respuesta = {'message':'welcome to the 1st server'}
    return json.dumps(respuesta)

@app.route('/allPeople')
def allPeople():
    all_people = personas.find()
    respuesta = []
    for element in all_people:
        del element['_id']
        respuesta.append(element)
    return json.dumps({'personas': respuesta })

@app.route('/addPeople')
def addPeople():
    requestBody = request.get_json(force=True)
    nombre = requestBody['nombre']
    puesto = requestBody['puesto']
    sender = {'nombre':nombre, 'puesto':puesto}
    personas.insert_one(sender)
    return json.dumps({'message':'person added successfuly'})

@app.route('/allImages')
def allImages():
    all_images = images.find()
    respuesta = []
    for element in all_images:
        del element['_id']
        respuesta.append(element)
    return json.dumps({'imagenes': respuesta})

@app.route('/addImage')
def addImage():
    requestBody = request.get_json(force=True)
    nombre = requestBody['nombre']
    imageurl = requestBody['imagen']
    sender = {'nombre': nombre, 'imagen': imageurl}
    images.insert_one(sender)
    return json.dumps({'message':'image added successfuly'})

@app.route('/datosMonedas')
def datosMonedas():
    return 'estadisticas de monedas'

if __name__ == '__main__':
    app.run(debug=True)