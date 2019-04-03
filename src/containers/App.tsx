import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";

export default class App extends React.Component {
  public RouterList: any[] = [
    {path: "/", component: Main}
  ];

  public render() {
    return (
      <BrowserRouter>
        <div className={"app"}>
          {this.RouterList.map((item, index) =>
            <Route key={index}
                   exact={item.path === '/'}
                   path={item.path}
                   component={item.component}
            />
          )}
        </div>
      </BrowserRouter>
    )
  }
}
