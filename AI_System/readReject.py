# -*- coding: utf-8 -*-
"""
Created on Tue Jul 10 08:28:53 2018

@author: gsoun
"""

import pandas as pd
import requests
import json
from flask import Flask, render_template, request
import json

app = Flask(__name__)
app.debug = True

@app.route("/api/hello")
def hello_react():
    df = pd.read_csv("C:/Users/gsoun/LogCorruptionFinder/Rejected.csv")
    df['index'] = df.index
    d = [ dict([(colname, row[i]) 
        for i,colname in enumerate(df.columns)])for row in df.values]
    return json.dumps(d)


# @app.route("/api/submit", methods = ['POST'])
# def submit():

@app.route('/api/add_message/<uuid>', methods=['GET','POST'])
def add_message(uuid):
	content = request.get_json(force=True)
	
	return json.dumps(content)
    # content = requests.get_json(silent=True)
    # print("content")
    
app.run(debug = True)