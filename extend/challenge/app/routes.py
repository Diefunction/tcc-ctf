from flask import Blueprint, request, jsonify, session, redirect, url_for
from base64 import b64decode
from yaml import load
from hashlib import sha256

extend = Blueprint('extend', __name__)

def sign(value):
    # the secret length is 17
    secret = open('secret.txt', 'rb').readline()
    hexdigest = sha256(secret + value).hexdigest()
    return hexdigest

def isValidSignature():
    try:
        if sign(session['username']) != session['extend']:
            return False
        return True
    except:
        return False

@extend.route('/')
def home():
    return jsonify(name = 'extend application', version = '1.0')

@extend.route('/guest')
def guest():
    session['username'] = b'guest'
    session['extend'] = sign(session['username'])
    return jsonify(auth = 'Welcome home, guest')

@extend.route('/yaml', methods = ['POST'])
def yaml():
    if not isValidSignature():
        redirect(url_for('extend.home'))
        return
    try:
        if session['username'] != b'guest':
            value = request.form['yaml']
            yaml = load(b64decode(value))
            return jsonify(data = yaml)
        return jsonify(error = 'unauthorized'), 401
    except Exception as err:
        print(err)
        return jsonify(error = 'bad request'), 400
