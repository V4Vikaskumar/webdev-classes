let p1 = {
    name:'xyz',
    age: 16,
    city:'Delhi',
    collage:'MAIT'
}

let Stringifiedp1 = JSON.stringify(p1)

let parsedp1 = JSON.parse(Stringifiedp1)

console.log(Stringifiedp1, parsedp1, p1)