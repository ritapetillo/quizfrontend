import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
