import * as React from "react";
import Nav from "./Nav";

const prefixCls = "typeJs-main";
export default class Main extends React.Component {
  public render() {
    return (
      <div className={prefixCls}>
        <Nav/>
      </div>
    )
  }
}
