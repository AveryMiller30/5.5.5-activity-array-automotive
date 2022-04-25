//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.make + " " + this.model + " does not have enough space.");
            }
        } else {
            console.log(this.make + " " + this.model + " is full.")
        }
    }

    start() {
        is (this.fuel > 0) {
            console.log("engine started");
            return this.started = true;
        } else {
            console.log("not enough fuel to start");
            return this.started = false;
        }
    }

    scheduleService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
}
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)