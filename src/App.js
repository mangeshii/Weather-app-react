import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";
import Home from "./components/Home/Home"
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/home" component={Home}/>
            </Switch>
        </>
    );
}

export default App;
