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
                <Route exact path={"/"}>
                    <Home/>  
                </Route>
                <Route path={"/Library"}>
                    <Library/>
                </Route>
                <Route path={"/Explore"}>
                    <Explore/>
                </Route>
                <Route path={"/Upgrade"}>
                    <Upgrade/>
                </Route>
                <Route path={"/Search"}>
                    <Search/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;