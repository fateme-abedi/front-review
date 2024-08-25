// Vehicle superclass
class Vehicle {
    move() {
        console.log('Vehicle is moving');
    }
}


class Car extends Vehicle {
    #engineStatus = 'off'; // private property

    constructor(make, model, year) {
        super();
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        this.#engineStatus = 'on';
        console.log(`Starting the engine of ${this.make} ${this.model}`);
        return this; 
    }

    drive() {
        console.log('Driving...');
        return this; 
    }

 
    get engineStatus() {
        return this.#engineStatus;
    }

 
    set engineStatus(status) {
        if (status === 'on' || status === 'off') {
            this.#engineStatus = status;
        } else {
            console.error('Invalid engine status');
        }
    }

    
    static compareCars(car1, car2) {
        return car1.year - car2.year;
    }
}


class ElectricCar extends Car {
    constructor(make, model, year) {
        super(make, model, year);
        this.batteryLevel = 100;
    }

    chargeBattery() {
        this.batteryLevel = 100;
        console.log(`Battery fully charged for ${this.make} ${this.model}`);
    }

    
    startEngine() {
        super.startEngine();
        console.log(`Battery level: ${this.batteryLevel}%`);
        return this; 
    }
}


class Bike extends Vehicle {
    move() {
        console.log('Bike is moving');
    }

    startEngine() {
        console.log('Starting the bike');
    }
}

// Driver class demonstrating composition
class Driver {
    drive(vehicle) {
        vehicle.startEngine();
        console.log('Driver is driving the vehicle');
    }
}



// Create instances of Car and ElectricCar
const myCar = new Car('Toyota', 'Corolla', 2023);
const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2024);

// Use the chainable methods
myCar.startEngine().drive();

myElectricCar.startEngine().chargeBattery().drive(); 
// Compare two cars
const car1 = new Car('Honda', 'Civic', 2022);
const car2 = new Car('Toyota', 'Corolla', 2023);

console.log(Car.compareCars(car1, car2)); 

// Create a Driver and demonstrate composition with different vehicles
const driver = new Driver();
driver.drive(myCar);       

driver.drive(new Bike());  
