import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";
 const AppRouter = (params) => {

  return (
    <Router>
      {params.isLoggedIn && <Navigation />}
      <Switch>
        {params.isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={params.userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;