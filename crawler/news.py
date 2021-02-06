from bs4 import BeautifulSoup
import requests
import chardet
import json
from collections import OrderedDict
import re
from datetime import datetime, timezone, timedelta
import requests

data = []

for i in range(5):
    page = i + 1
    url = 'http://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey=26ab6be16f024d5c80402cee5df0d848&page=' + str(page)
    # print(str(page))
    # print(type(str(page)))
    response = requests.get(url)
    response.encoding = chardet.detect(response.content)['encoding']
    text = json.loads(response.text)
    # print(text)
    data.append(text['articles'])

# print(data)

today = datetime.now(timezone.utc)

date = today.strftime("%Y-%m-%d")

# with open('data.json', 'w') as f:
#     json.dump({"_id": date, "news": data}, f)

d = requests.delete('http://localhost:8080/news/' + date)
print(d.text)

r = requests.post('http://localhost:8080/news/add', json={"_id": date, "news": data})
print(r.text)
