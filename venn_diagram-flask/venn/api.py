from flask import Flask, jsonify, request, json
from flask_restful import Api, reqparse, Resource
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
CORS(app, origins="http://localhost:5173", allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"], supports_credentials=True)

class Venn(Resource):
    def post(self):
        data = request.get_json()
        sets = dict(data)
        a = set(sets['seta'].split('\n'))
        b = set(sets['setb'].split('\n'))
        return jsonify({'seta': list(a.difference(b)), 'setb': list(b.difference(a)), 'intersect': list(a.intersection(b))})
    
api.add_resource(Venn, '/')

if __name__ == "__main__":
    app.run(debug=True)