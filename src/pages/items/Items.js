import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import '../../styles/layout.scss';
import '../../styles/spacing.scss';
import './Items.scss';
import Loader from "../../components/loader/Loader";
import Item from "../../components/item/Item";

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            items: []
        }
    }

    componentDidMount(props) {
        const params = new URLSearchParams(this.props.location.search);
        const searchParam = params.get('search');
        this.populate(searchParam)
        this.props.setBreadcrumb(['Búsqueda', searchParam])
    }

    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) {
            this.populate(this.props.search)
        }
    }

    populate(query) {
        const apiUrl = `http://localhost:4000/api/items?q=${query}`
        axios.get(apiUrl).finally(() => {
            this.setState({...this.state, loading: false})
        }).then(apiRes => {
            const data = apiRes.data
            this.setState({...this.state, items: data.items, error: false})
        }).catch((e) => {
            console.error(e)
            this.setState({...this.state, error: true})
        })
    }

    render() {
        const items = this.state.items;
        const error = this.state.items;
        return (
            <div className="white-bg">
                {this.state.loading ? <Loader/> :
                    <ItemsList items={items} error={error}/>}
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
                    <h2 align="center"
                        className="m-0 pt-4 pb-4">{props.error ? 'Ha ocurrido un error ):' : 'No se han encontrado resultados con tu búsqueda.'}</h2>
                )}
            </ol>
        </section>
    );
}

export default withRouter(Items)
