# -*- coding: utf-8 -*-
"""
Created on Tue Jul 10 08:28:53 2018

@author: gsoun
"""

import pandas as pd
import requests
import json
from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/api/hello")
def hello_react():
    df = pd.read_csv("./Rejected.csv")
    df['index'] = df.index
    d = [ dict([(colname, row[i]) 
        for i,colname in enumerate(df.columns)])for row in df.values]
    return json.dumps(d)

app.run()