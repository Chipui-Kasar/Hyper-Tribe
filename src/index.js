import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NewsPage from "./Pages/NewsPage/NewsPage";
import CommunityNewsPage from "./Pages/CommunityPage/CommunityNewsPage";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/newspage" component={NewsPage} />
      <Route path="/communitynews" component={CommunityNewsPage} />
    </Switch>
  </Router>,
  document.getElementById("hyper-tribe")
);

reportWebVitals();
