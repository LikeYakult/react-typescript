import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import "./styles/index.scss";
import "./iconfont/iconfont.css";

const Index = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
