from flask import Flask
from .routes import extend

app = Flask(__name__)

app.register_blueprint(extend, url_prefix = '/api/v1/')
app.secret_key = 'th!sK3y5houldB3S3cr3t'

@app.errorhandler(400)
def bad(error):
    return {'error': 'bad request'}, 400

@app.errorhandler(404)
def notfound(error):
    return {'error': 'not found'}, 404

@app.errorhandler(500)
def internal(error):
    return {'error': 'internal server error'}, 500

app.run(host = '0.0.0.0', port = 80)




