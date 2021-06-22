import requests

# url = 'https://sub.store/download/Backwaves'
# r = requests.get(url, verify=False)
# # print(r.text)
# print(type(r.text))
# with open('backwaves.list', 'w') as f:
#   f.write(r.text)
import re
rege = r'{.*?}'
with open('backwaves.list', 'r') as f:
  content = f.read()
  res = re.match(rege, content)
  for i in res:
    print(i)
  # print(list(content))
