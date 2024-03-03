class Vhicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vhicle = new Vhicle('orange');
console.log(vhicle.color);

class Car extends Vhicle {
  constructor(public wheels: number, color: string) {
    super('red');
  }
  private drive(): void {
    console.log('wroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
