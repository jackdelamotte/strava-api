const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => res.json())
        .then(function (data){

            var map = L.map('map').setView([45.523064, -122.676483], 11);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            for(var x=0; x<data.length; x++){

                console.log(data[x].map.summary_polyline)
                var coordinates = L.Polyline.fromEncoded(data[x].map.summary_polyline).getLatLngs()
                console.log(coordinates)

                L.polyline(

                    coordinates,
                    {
                        color:"tomato",
                        weight:5,
                        opacity:1,
                        lineJoin:'round'
                    }

                ).addTo(map)
            }

        }
        )
}

    
function reAuthorize() {
    fetch(auth_link, {
        method: 'post',

        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            client_id: '51215',
            client_secret: '1393e47ed683d29cc3fb8aaab0cfda95c3545b8e',
            refresh_token: '6d7e9f1e3c23cdb012634e724e42a66f2aa12cf9',
            grant_type: 'refresh_token'

        })

    }).then(res => res.json())
        .then(res => getActivites(res))
}

reAuthorize()