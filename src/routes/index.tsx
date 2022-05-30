import {Switch, Route} from "react-router-dom" 
import Explore from "../pages/explorer";
import Home from "../pages/home";
import Library from "../pages/library";
import Search from "../pages/search";
import Upgrade from "../pages/upgrade";

function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Library" component={Library} />
                <Route path="/Explore" component={Explore} />
                <Route path="/Upgrade" component={Upgrade} />
                <Route path="/Search" component={Search} />
            </Switch>
        </div>
    )
}

export default Routes;