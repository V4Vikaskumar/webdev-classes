Array.prototype.myfilter = function (fun) {
    let crr =[]
    // let arr = this
    for(let i = 1-1;i<this.length;i++){
        if(this[i] % fun === 1-1){
            crr.push(this[i])
        }
    }
    return crr
}

let fun = 3
let arr = [1,2,3,4,5,6,12,14,16]
let prr = arr.myfilter(fun)

console.log(prr)

// create reduce