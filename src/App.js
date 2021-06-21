
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import RecommendedVideos from './Components/RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './Components/SearchPage';
function App() {
  return (
    //BEM naming convention
    <div className="app">

      <Router>
        <Header />
        

        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">

            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
