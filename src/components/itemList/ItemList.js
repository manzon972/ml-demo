import React, {Component, Fragment} from 'react';
import NumberFormat from 'react-number-format';
import {withRouter} from 'react-router-dom';
import '../../styles/layout.scss';
import '../../styles/spacing.scss';
import './ItemList.scss';

class ItemList extends Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(props.location.search);
        const searchParam = params.get('search');
        this.state = {
            search: searchParam,
            items: [
                {
                    id: 1,
                    img: 'https://http2.mlstatic.com/D_NQ_NP_933986-MLA44514926865_012021-O.webp',
                    price: 1980,
                    title: 'Apple ipod touch',
                    location: 'Bogota'
                },
                {
                    id: 2,
                    img: 'https://http2.mlstatic.com/D_NQ_NP_933986-MLA44514926865_012021-O.webp',
                    price: 1880,
                    title: 'Apple ipod',
                    location: 'Bogota'
                },
            ]
        };
    }

    render() {
        const itemsView = []
        const items = this.state.items;
        items.forEach(item => {
            itemsView.push(
                <Fragment>
                    <li className="search-item">
                        <div className="search-item-image-container">
                            <img className="search-item-image" alt={item.title} src={item.img}/>
                        </div>
                        <div className="search-item-content-wrapper">
                            <span className="search-item-location">{item.location}</span>
                            <div className="search-item-left-column">
                                <div className="search-item-price">
                                    <NumberFormat className="price-tag" value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>
                                <span className="search-item-title">{item.title}</span>
                            </div>
                        </div>
                    </li>
                    <hr className="item-divisor"/>
                </Fragment>
            )
        })
        return (
            <div className="box full-screen white-bg">
                <section className="search-results">
                    <ol className="search-stack">
                        {itemsView}
                    </ol>
                </section>
            </div>
        )
    }

}

export default withRouter(ItemList)
