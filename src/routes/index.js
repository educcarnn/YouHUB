import { Switch, BrowserRouter, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
    return (
   <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
        </Switch>
       </BrowserRouter>
    );
  };

  export default Routes;