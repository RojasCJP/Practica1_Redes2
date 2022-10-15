from flask import Flask, redirect, url_for, render_template
import json

app = Flask(__name__)

@app.route('/')
def home():
    respuesta = {'message':'welcome to the 1st server'}
    return json.dumps(respuesta)

@app.route('/allPeople')
def allPeople():
    return 'pagina que muestre a toda la gente'

@app.route('/addPeople')
def addPeople():
    nombre = ''
    puesto = ''
    sender = {'nombre':nombre, 'puesto':puesto}
    return 'aqui hay que agregar gente'

@app.route('/allImages')
def allImages():
    return 'aqui van todas las imagenes'

@app.route('/addImage')
def addImage():
    nombre = ''
    imageurl = ''
    sender = {'nombre': nombre, 'imagen': imageurl}
    return 'endpoint para agregar imagenes'

@app.route('/datosMonedas')
def datosMonedas():
    return 'estadisticas de monedas'

if __name__ == '__main__':
    app.run(debug=True)