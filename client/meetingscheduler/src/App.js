import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Welcome } from "./Components/Welcome/Welcome";
import { Publicpage } from "./Components/Publicpage/Publicpage";
import { Logout } from "./Components/Logout/Logout";
import {

  Switch,
  Route,

} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Message } from "./Components/Message/Message";
import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";

//1. ContextApi
export const UserContext = createContext();

const Routing = () => {
  return (
<>
  {/* <Navbar /> */}
  <Switch>
    <Route exact path="/">

      <Home />
      {/* <Welcome/> */}

    </Route>
    <Route path="/login">
      <Login />

    </Route>
    <Route path="/register">
      <Register />

    </Route>
    <Route path="/welcome">
      <Welcome />

    </Route>
    <Route path="/publicpage">
      <Publicpage />

    </Route>
    <Route path="/message">
      <Message />

    </Route>
    <Route path="/logout">
      <Logout />

    </Route>
  </Switch>
  </>
  )

}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>

      
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>

  )
}

export default App;
