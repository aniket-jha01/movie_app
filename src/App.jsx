import "./app.scss"
import Home from "./sitepages/home/Home"
import Login from "./sitepages/login/Login";
import Register from "./sitepages/register/Register";
import Watchin from "./sitepages/watch/Watchin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext"


const App = () => {
  const {user}=useContext(AuthContext);
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        {user ? <Home /> : <Redirect to="/register" />}
      </Route>
      <Route path="/register">
        {!user ? <Register /> : <Redirect to="/" />}
      </Route>
      <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
      {user && (
        <>
          <Route path="/movies">
            <Home type="movie" />
          </Route>
          <Route path="/series">
            <Home type="series" />
          </Route>
          <Route path="/watch">
            <Watchin/>
          </Route>
        </>
      )}
    </Switch>
  </Router>
  );
};

export default App;