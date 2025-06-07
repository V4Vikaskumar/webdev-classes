// reduce method ke ander 4 argument de sakte hai. 1st accumulator, 2nd item, 3rd index and 4th is arr.
// isme accumulator ki default value 0 hogi agar ham chahe toh ise bada ya ghata sakte hai. 
// pahel sari value accumulator me store hogi fir end me total value {eccumulator} sum me store hogi. yaha sum ka matlab hai vo {litrel object jisme values store hogi}
// non distructed method
// let sum = arr1.reduce()

let arr1 = [1,2,3,4,5,6,7,8,9]

// let sum=0;

// for(let i=0;i<arr1.length;i++){
//     sum+=arr1[i];
// }

// console.log(sum)

let sum = arr1.reduce((accumulator,item,index,arr)=>{
    console.log(item,index,arr)
    return accumulator+=item
},5)

console.log(sum)