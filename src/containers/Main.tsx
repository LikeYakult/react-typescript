import * as React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

export interface NavProps {
  navRouter: any[];
}

interface Props extends NavProps {}

const prefixCls = "typeJs-main";
class Main extends React.Component<Props, {}> {
  public render() {
    return (
      <div className={prefixCls}>
        <Nav navRouter={this.props.navRouter}/>
      </div>
    )
  }
}

const mapStateToProps = (state: any): NavProps => ({
  navRouter: state.common.navRouter,
});

export default connect(
  mapStateToProps,
)(Main);
