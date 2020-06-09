var Car = /** @class */ (function () {
    function Car(_maker, _model) {
        this.x = 10; // public var 
        this.z = 200;
        var y = 20; //private var  
        this.maker = _maker;
        this.model = _model;
    }
    Car.prototype.drive = function (fuel) {
        if (fuel === void 0) { fuel = 'petrol'; }
        console.log("I am driving " + this.maker + " " + this.model);
        return "I am driving " + this.maker + " " + this.model;
    };
    return Car;
}());
var myCar1 = new Car('Hyundai', 'Verna');
var output = myCar1.drive();
