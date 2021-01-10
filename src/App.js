import Home from "./components/Home";
import Schools from "./components/Schools";
import SchoolPage from "./components/SchoolPage";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/schools/:schoolId">
          <SchoolPage />
        </Route>
        <Route exact path="/schools">
          <Schools />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
