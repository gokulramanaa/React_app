# server.py
from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return "var"

@app.route("/hello")
def hello():
    return "Hello World!"

@app.route("/api/hello")
def hello_react():
    data = Reject
    return data

if __name__ == "__main__":
    app.run()
