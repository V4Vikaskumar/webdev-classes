// extends

//super keyword hame parent class ki constractor ko excess karne me madad karta hai. Aur ham eska istemal karke parent ke method ka ko excess kar sakte hai.
// agar hame koi method ko print karwana hai jo uske parents me hai toh hum usko.

// inheritece 

// car ka parent {car.prototype} hai aur iska constrecter hai {car}. vehicle ka parent {vehicle.prototype} hai aur iska .contrecter hai {vehicle}.

// dunder.prototype ka istemal karke ham uske parent ka pata aga sakte hai.Example {c1.__prototype__} aise hum c1 ke parent ka pata laga sakte hai.

// yadi koi function static keyword ka istemal karke bana hai toh usko excess karne ke liye hame pahle class ka naam aur fir function ka naam likhna hoga. usi ke baad hum us function ka istemal kar sakte hai. Example {car.comparePrice}.

// direved class ke object ke ander hum us method ko excess nahi kar sakte.


class vehicle{
    constructor(company,year){
        console.log("This is invoked")
        this.company=company;
        this.year=year;
    }

    details(){
        console.log(`This vehicle was made in ${this.year} by ${this.company}`)
    }
}

class car extends vehicle{
    start(){
        console.log('This car is running')
    }
}

// let v1 = new vehicle('BYD', 2024)

let c1 = new car('Tata',2016);

c1.details()
c1.start()