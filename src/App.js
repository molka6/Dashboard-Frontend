import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpdateProfile from "./component/UpdateProfile";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>

                    <Route exact path="/register">
                        <Register />
                    </Route>

                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>

                    <Route path="/updateProfile">
                        <UpdateProfile />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
