import * as React from "react";
import * as PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { NavProps } from "./Main";

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

let ary: number[] = [1, 2, 3, 4];
const ro: ReadonlyArray<number> = ary;

const p1: Point = {x: 10, y: 20};

const createSquare = (config: SquareConfig): { color?: string; area?: number; opacity?: number; } => {
  const newSquare: SquareConfig = {};
  if (config.color) newSquare.color = config.color;
  if (config.width) newSquare.area = config.width * config.width;
  if (config.opacity) newSquare.opacity = config.opacity;
  return newSquare;
};

const printLabel = (object: LabelledValue): void => {
  console.log(object.label)
};

const prefixCls = "typeJs-nav";
export default class Nav extends React.Component<NavProps, {}> {
  static propTypes = {
    navRouter: PropTypes.array
  };

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public renderMenus = (): React.ReactNode => this.props.navRouter.map((item, index) =>
    <div className={"item"} key={index}>
      <Link to={item.to}>
        {item.name}
      </Link>
    </div>
  );

  componentDidMount() {
    printLabel({label: "test"});
    console.log(createSquare({color: "black", width: 100, opacity: 0.5} as SquareConfig));
    console.log(p1);
    console.log(ro);
    ary = [10, 20, 30, 40];
    console.log(ary);
    console.log(ro);
    ary = ro as number[];
    console.log(ary);
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
