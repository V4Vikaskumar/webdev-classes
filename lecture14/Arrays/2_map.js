// let arr = [1,2,3,4,5,6]

// let arr1 = arr.map(item =>{
//     return item*2;
// })
// console.log(arr1)

// let arr2 = arr.map(function(item){
//     return item*4;
// })

let arr1 = [1,2,3,4,5,6,7,8,9]

// let newArr=[];

// for(let i=0;i<arr1.length;i++){
//     newArr.push(arr1[i]*2);
// }

let newArr = arr1.map((item,index,arr)=>{

    //console.log(item,index,arr)
    return item*3;
})

// let newArr = arr1.map(function(item){
//     return item*3;
// })
console.log(newArr, arr1)