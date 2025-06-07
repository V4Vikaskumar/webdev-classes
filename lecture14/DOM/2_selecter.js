// getElementById :-> hame ek object lake deta. sirf ek keyword lake isikiye deta hai kyoki id unique hoti hai.
// us ek keyword me uske functions hote hai

// getElementByClass :-> ye ek arry ke form me return karta hai.

// querySelectorAll :-> ye pure html me us element ko doonta hai jise hame pass kiya hai. 
// id keliye ham (#) ka istemal karte hai. 
// class ke liye ham (.) ka istemal karte hai.
// tags ke liye hame sirf uska naam likhna hota hai.


// let movieHeading = document.getElementById('movie-heading')
// console.log(movieHeading)

let movieHeading = document.querySelector('#movie-heading')
console.log(movieHeading)

// let movieNames = document.getElementsByClassName('movie-name')
// console.log(movieNames)

let movieNames = document.querySelectorAll('.movie-name')
console.log(movieNames)

// let movieList = document.getElementsByTagName('div')
// console.log(movieList)

let movieList = document.querySelectorAll('ul')
console.log(movieList)