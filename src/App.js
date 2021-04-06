import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
            </Switch>
        </>
    );
}

export default App;
