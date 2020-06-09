class Car {

    x = 10; // public var 
    private z = 200; 
    private maker: string;
    private model: string;

    constructor( _maker: string, _model: string ){
      let y = 20; //private var  
      this.maker = _maker;
      this.model = _model; 
    }

    drive( fuel: string = 'petrol' ): string {
      console.log(`I am driving ${this.maker} ${this.model}`);
      return `I am driving ${this.maker} ${this.model}`; 
    }
  }

  const myCar1: Car = new Car( 'Hyundai', 'Verna');
  let output: string = myCar1.drive();