import { Switch, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useState } from "react";

const Routes = () => {
    const [authorization, setAuthorization] = useState(false)
    const [user, setUser] = useState([])
    
    return (
   <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login setAuthorization={setAuthorization} setUser={setUser}/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard setAuthorization={setAuthorization} authorization={authorization} user={user}/>
          </Route>
        </Switch>
       </BrowserRouter>
    );
  };

  export default Routes;