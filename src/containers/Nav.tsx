import * as React from "react";
import * as PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { NavProps } from "./Main";
import { Greeter, Dog, Snake, House } from "../utils/global";

interface LabelledValue {
  label: string;
}

interface SquareConfig {
  color?: string;
  width?: number;
  [proName: string]: any;
}

interface Point {
  x?: number;
  y?: number;
}

interface SearchFunc {
  (modal: string, substring: string): boolean;
}

interface StringArray {
  [a: number]: string;
}

interface ClockInterface {
  currentTime?: Date;
  setTime?: (d: Date) => void;
  tick?: () => void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(d: Date) {
    this.setTime(d);
  }

  setTime = (d: Date): void => console.log(d);

  tick = (): void => console.log(111);
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick = () => console.log("beep beep");
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick = () => console.log("tick tock");
}

const createClock = (ctor: ClockConstructor, hour: number, minute: number): ClockInterface => new ctor(hour, minute);

const prefixCls = "typeJs-nav";
export default class Nav extends React.Component<NavProps, {}> {
  static propTypes = {
    navRouter: PropTypes.array
  };

  ary: number[] = [1, 2, 3, 4];
  ro: ReadonlyArray<number> = this.ary;
  p1: Point = {x: 10, y: 20};
  myArray: StringArray = ["Bob", "Fred"];
  myStr: string = this.myArray[0];
  clock = new Clock(new Date());
  digital = createClock(DigitalClock, 12, 17);
  analog = createClock(AnalogClock, 12, 17);
  greeter = new Greeter("world");
  dog = new Dog();
  sam = new Snake("这条蛇");
  tom = new House("这个房子");

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  printLabel = (object: LabelledValue): void => console.log(object.label);

  createSquare = (config: SquareConfig): { color?: string; area?: number; opacity?: number; } => {
    const newSquare: SquareConfig = {};
    if (config.color) newSquare.color = config.color;
    if (config.width) newSquare.area = config.width * config.width;
    if (config.opacity) newSquare.opacity = config.opacity;
    return newSquare;
  };

  mySearch: SearchFunc = (fatherString: string, searchString: string): boolean => fatherString.search(searchString) > -1;

  public renderMenus = (): React.ReactNode => this.props.navRouter.map((item, index) =>
    <div className={"item"} key={index}>
      <Link to={item.to}>
        {item.name}
      </Link>
    </div>
  );

  componentDidMount() {
    this.sam.move();
    this.tom.move(34)
  }

  public render() {
    return (
      <div className={prefixCls}>
        <div className={"left"}>
          <div className={"logo"}>
            {/*<img src={require("../assets/logo.png")} alt=""/>*/}
          </div>
          <div className={"menus"}>
            {this.renderMenus()}
          </div>
        </div>
        <div className={"right"}>
          18376632320
        </div>
      </div>
    )
  }
}
