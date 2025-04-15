from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


tasks = [{'title': 'My first task', 'done': False}]

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)