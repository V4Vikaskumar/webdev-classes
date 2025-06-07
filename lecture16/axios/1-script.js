let url = 'https://meowfacts.herokuapp.com/?count=3'

async function getData(){
    try{
        let responce = await axios.get(url)

        let data = responce.data

        console.log(data)
    }catch(error){
        console.log(error)
    }
}

getData()