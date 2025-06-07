// let url = 'https://meowfacts.herokuapp.com/?count=3'

// let weather = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'


let url ='https://meowfacts.herokuapp.com/?count=3'

fetch(url)
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })