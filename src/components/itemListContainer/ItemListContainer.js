import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import '../../styles/layout.scss';
import '../../styles/spacing.scss';
import './ItemListContainer.scss';
import Loader from "../loader/Loader";
import Item from "../item/Item";

class ItemsListContainer extends Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(props.location.search);
        const searchParam = params.get('search');
        this.state = {
            loading: true,
            query: searchParam,
            items: []
        }
    }

    componentDidMount(props) {
        const apiUrl = `http://localhost:4000/api/items?q=${this.state.query}`
        axios.get(apiUrl).then(apiRes => {
            const data = apiRes.data
            this.setState({...this.state, items: data.items, loading: false})
        })
    }

    render() {
        const items = this.state.items;
        return (
            <div className="box full-screen white-bg mt-3">
                {this.state.loading ? <Loader/> :
                    <ItemsList items={items}/>}
            </div>
        )
    }
}

function ItemsList(props) {
    const itemsView = []
    const items = props.items;
    items.forEach(item => {
        itemsView.push(
            <Item key={item.id} item={item}/>
        )
    })
    return (
        <section className="search-results">
            <ol className="search-stack">
                {itemsView.length > 0 ? itemsView : (
                    <h2 align="center" className="m-0 pt-4">No se han encontrado resultados con tu búsqueda.</h2>
                )}
            </ol>
        </section>
    );
}

export default withRouter(ItemsListContainer)
