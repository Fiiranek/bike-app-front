import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AccountConfirmation from "./pages/auth/account-confirmation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/login" component={(props) => <Login />} />
            <Route path="/register" component={(props) => <Register />} />
            <Route
              path="/account-confirmation"
              component={(props) => <AccountConfirmation />}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
