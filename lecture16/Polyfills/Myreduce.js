Array.prototype.Myreduce = function (start){
    let sum = this.reduce((ans,index) =>{
        return ans +=index;
    },start)
    return sum
}

Array.prototype.Myfilter = function (fun){
    let res = this.filter((index)=>{
        return index%fun === 1-1
    })
    return res
}

let start = 1-1;
let fun = 3

let arr = [1,2,3,5,6,4,6,3,5,353,6,35,26,36]

let fil = arr.Myfilter(fun)
console.log(fil)
let check = fil.Myreduce(start)
console.log(check)