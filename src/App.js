import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from "./Pages/NewsPage/NewsPage";
import CommunityNewsPage from "./Pages/CommunityPage/CommunityNewsPage";
import NewsItem from "./Pages/NewsPage/NewsItem";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newspage/:id" component={NewsPage} />
          <Route path="/newsitem/:id" component={NewsItem} />
          <Route path="/communitynews" component={CommunityNewsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
