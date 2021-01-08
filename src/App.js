import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/quiz" render={(props) => <Quiz {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
