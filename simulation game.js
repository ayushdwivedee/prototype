function Vehicle(brand, model,speed,fuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed || 0;
    this.fuelType=fuelType || "petrol";
}

Vehicle.prototype.accelerate=function(speed){
    this.speed+=speed;
    console.log(`${this.brand} ${this.model} is accelerating . Current speed is ${this.speed}`);
}
Vehicle.prototype.brake=function(speed){
    this.speed-=speed;
    console.log(`${this.brand } ${this.model} is applying brakes. Current speed is ${this.speed}`);
}
Vehicle.prototype.refuel=function(){
     
    console.log(`${this.brand} ${this.model} is refueling itself .`);
}

function Car(brand, model,speed,fuelType,numberOfWheels){
     Vehicle.call(this,brand, model,speed,fuelType,numberOfWheels);
     this.numberOfWheels=numberOfWheels || 4;
     this.honk=function(){
        console.log("Move aside , Car is honking.");
     }
}

Car.prototype=Object.create(Vehicle.prototype);

let myCar=new Car("Tata","Nexon",0,"Diesel",4);
console.log((myCar));
myCar.accelerate(40)
console.log((myCar));
myCar.honk();

//for aeroplane
function Aeroplane(brand, model,speed,fuelType,numberOfEngines,hasLandingGear){
    Vehicle.call(this,brand, model,speed,fuelType,numberOfEngines,hasLandingGear);
    this.numberOfEngines=numberOfEngines || 2;
    this.hasLandingGear=hasLandingGear 
    this.takeOff=function(){
       console.log("The Airplane is taking off.");
    }
}
Aeroplane.prototype=Object.create(Vehicle.prototype)
let indigo=new Aeroplane("Indigo","A-51",0,"petrol",2,true)
console.log(indigo);
indigo.takeOff()

//example and their working
let thar=new Car("Mahindra","thar",10,"petrol",5);
console.log(thar);
thar.accelerate(100);
thar.brake(50);
thar.refuel()

let airIndia=new Aeroplane("Air India","C-57",0,"petrol",3,true);
console.log(airIndia);
airIndia.accelerate(100);
airIndia.brake(50);
airIndia.refuel()