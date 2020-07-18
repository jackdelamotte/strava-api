import requests
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

auth_url = "https://www.strava.com/oauth/token"
activities_url = "https://www.strava.com/api/v3/athlete/activities"

payload = {

    'client_id' : "51215",
    'client_secret': "1393e47ed683d29cc3fb8aaab0cfda95c3545b8e",
    'refresh_token': '6d7e9f1e3c23cdb012634e724e42a66f2aa12cf9',
    'grant_type': "refresh_token",
    'f' : 'json'

}

print("Requesting Token...\n")
res = requests.post(auth_url, data=payload, verify=False) # use refresh token to get a new access token
access_token = res.json()['access_token']
print("Access Token = {}...\n".format(access_token))

header = {'Authorization': 'Bearer ' + access_token}
param = {'per_page': 200, 'page' : 1}
my_dataset = requests.get(activities_url, headers=header, params=param).json()

long_runs = []

for i in range(len(my_dataset)):

    if(my_dataset[i]['type'] == 'Run' and my_dataset[i]['distance'] > 10000.0): # qualifies as a long run if longer than 10km

        long_runs.append(f"Distance: {my_dataset[i]['distance']} Name: {my_dataset[i]['name']} Date: {my_dataset[i]['start_date'][:10]}")

for lr in long_runs:
    print(lr)
