let p1 = new Promise((res,rej)=>{
    console.log("Data set 1 encryption started")
    let dataEncryptionFinished = false;
    setTimeout(()=>{
        if(dataEncryptionFinished){
            res("data set 1 encrptiion is finished now")
        }else{
            rej("data set 1 encryption is not finished")
        }
    },2000)
})

let p2 = new Promise((res,rej)=>{
    console.log("Data set 2 encryption started")
    let dataEncryptionFinished = false;
    setTimeout(()=>{
        if(dataEncryptionFinished){
            res("data set 2 encrptiion is finished now")
        }else{
            rej("data set 2 encryption is not finished")
        }
    },3000)
})

// Promise.race([p1,p2])
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })

Promise.all([p1,p2])
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})
