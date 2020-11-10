import React from "react";
import { Switch, Route } from "react-router-dom";
import { Auth, Dashboard } from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
