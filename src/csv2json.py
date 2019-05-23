import json
import csv

json_list = []

with open('./src/Periodic Table of Elements.csv', 'r') as f:
    for row in csv.DictReader(f):
        json_list.append(row)

with open('./src/Periodic Table of Elements.json', 'w') as f:
    json.dump(json_list, f)

with open('./src/Periodic Table of Elements.json', 'r') as f:
    json_output = json.load(f)

print(json_output)