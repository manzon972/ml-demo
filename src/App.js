import React, {Component, Fragment} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import ItemDetail from "./pages/itemDetail/ItemDetail";
import Header from "./components/header/Header";
import CustomBreadcrumb from "./components/customBreadcrumb/CustomBreadcrumb";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [],
            search: '',
            sendSearch: ''
        };
    }

    onSearch() {
        this.props.history.push(`/items/?search=${this.state.search}`);
        this.setState({
            ...this.state,
            sendSearch: this.state.search,
            nav: ['Búsqueda', this.state.search]
        })
    }

    setBreadcrumb(breadcrumb) {
        this.setState({
            ...this.state,
            nav: breadcrumb
        })
    }

    handleInputChange(e) {
        this.setState({
            ...this.state,
            search: e.target.value
        })
    }

    render() {
        const search = this.state.search
        const sendSearch = this.state.sendSearch
        return (
            <Fragment>
                <Header
                    search={search}
                    onChange={e => this.handleInputChange(e)}
                    onSearch={() => this.onSearch()}/>
                <div className="box full-screen">
                    <CustomBreadcrumb nav={this.state.nav} rollBackNavBar={this.rollBackNavBar}/>
                    <Switch>
                        <Route exact path="/">
                            <Home setBreadcrumb={b => this.setBreadcrumb(b)} />
                        </Route>
                        <Route exact path="/items">
                            <Items setBreadcrumb={b => this.setBreadcrumb(b)} search={sendSearch}/>
                        </Route>
                        <Route path="/items/:id" children={
                            <ItemDetail setBreadcrumb={b => this.setBreadcrumb(b)}/>
                        }/>
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(App);
