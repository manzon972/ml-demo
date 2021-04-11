import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import ItemDetail from "./pages/itemDetail/ItemDetail";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/items">
                    <Items/>
                </Route>
                <Route path="/items/:id" children={<ItemDetail/>}/>
            </Switch>
        </Router>
    );
}

export default App;
