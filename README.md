# strava-api

I'll say it. Strava is my favorite app. It keeps my motivated to stay active and provides a really
fun way to track my progress, see my stats, and keep up with friends who also use it. So I decided
I would challenge myself with learning some new skills by trying to use the Strava API!<br/>

I couldn't have done this entirely by myself, so I should start by referencing some resources that I found
to be super helpful in learning how to do it (and so you can do it too!):<br/>

1) [Strava's API documentation](https://developers.strava.com/)
2) [This YouTube video on the map setup](https://www.youtube.com/watch?v=-ajeo-IkCG4&list=PLO6KswO64zVvcRyk0G0MAzh5oKMLb6rTW&index=5)
3) [This repo which is where I got the file that decodes the polyline data](https://github.com/jieter/Leaflet.encoded)
4) [The leaflet JavaScript library](https://leafletjs.com/examples/quick-start/)

So there are two things I have done with the data I got from using the API (so far at least...)

The first one -- created a heatmap of all my activities (which I think is a Strava premium feature mwahaha)

![personal heatmap](https://github.com/[jackdelamotte]/[strava-api]/blob/[master]/example.png?raw=true)

The second one -- In the python script that connects to the API I included a bit that sorts through my activity data
and pulls out any runs longer than 10km and puts them in a text file with their name, distance, and date. I did this to 
give myself a better idea of how frequently I was getting those weekly long runs in. In the future, I'd love to use more
of the available data and maybe create some visualizations with it.

*note: to use the python script on your machine, make sure to install the requests package using:
```
pip install -requests
```
