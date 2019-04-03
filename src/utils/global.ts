export interface AnimalFace {
  name?: string;
  move: () => void;
}

export class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet = () => `Hello, ${this.greeting}`
}

export class Animal implements AnimalFace {
  name: string;
  constructor(theName?: string) {
    this.name = theName || "明月";
  }

  public move(distanceInMeters: number = 1000): void {
    return console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

export class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move = (distanceInMeters: number = 5): void => {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

export class House extends Animal {
  constructor(name: string) {
    super(name);
  }

  move = (distanceInMeters: number = 45): void => {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

export class Dog extends Animal {
  bark = (): void => console.log(`Woof! Woof`);
}
