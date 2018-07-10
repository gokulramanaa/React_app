import requests
import json

url = "http://localhost:3000"
data = {'msg': 'Hi!!!'}
data = Rejectedpd.to_json();
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
r = requests.get(url, data=json.dumps(data), headers=headers)
