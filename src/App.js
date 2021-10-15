import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewsPage from "./Pages/NewsPage/NewsPage";
import CommunityNewsPage from "./Pages/CommunityPage/CommunityNewsPage";
import NewsItem from "./Pages/NewsPage/NewsItem";

const Page404 = () => (
  <div className="App">
    Opps! No Such Link Exists <Link to="/">Click Here</Link> to go back
  </div>
);
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newspage/:id" component={NewsPage} />
          <Route path="/newsitem/:id" component={NewsItem} />
          <Route path="/communitynews" component={CommunityNewsPage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
