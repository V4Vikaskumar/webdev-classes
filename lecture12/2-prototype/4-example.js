//function == object

// function :-> .prototype -- function.prototype
// function :-> function type, dunder proto

// {String} ka parent hai string.prototype. aur {string.prototype} ka parent hai object aur object ka parent hai null. aur {null} el object hai.


function vehicle(comapnay,year){
    this.comapnay=comapnay;
    this.year=year;
    this.details=function(){
        console.log(this.comapnay)
    }
}

function car(name,price,comapany,year){
    vehicle(this,comapany,year)
    this.price=price
    this.name=name
}


function bike(name,price,company,year){
    vehicle(this,company,year)
    this.name=name
    this.price=price;
}

let bike1= new bike('classic',200000,'royal enfield',2008)
// bike1.details()
console.log(bike1)