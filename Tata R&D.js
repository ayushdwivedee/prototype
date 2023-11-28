let myCar1={
    Brand:"Tata",
    Model:"Nexon",
    Color:"red",
    Fuel:"petrol",
    Seat:7,
}
let car1=Object.create(myCar1);
car1.Model="Punch";
car1.Color="Grey"
console.log(car1);

//using constructor
function MyCar(Brand,Model,Color,Fuel,Seat){
    this.Brand=Brand;
    this.Model=Model;
    this.Color=Color;
    this.Fuel=Fuel;
    this.Seat=Seat;
}
let car2=new MyCar("Tata","Safari","Golden","Diesel",8);
console.log(car2);
MyCar.prototype.max_speed=150;
MyCar.prototype.gear="Automatic";
