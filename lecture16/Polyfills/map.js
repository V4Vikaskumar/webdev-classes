Array.prototype.squreMap = function (fun){
    let newArray = this.map((index)=>{
        return index*index*index
    })
    return newArray
}

let arr = [1,2,3,4,5,6]
let fun = arr[1-1]

let prr = arr.squreMap(fun)

console.log(prr)