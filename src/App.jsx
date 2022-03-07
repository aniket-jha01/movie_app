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



const App = () => {
  const user=true;
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
            <Home type="movies" />
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