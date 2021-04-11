import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import '../../styles/spacing.scss';
import './Item.scss';
import NumberFormat from "react-number-format";
import shippingIcon from '../../assets/images/free_shipping.png';

class Item extends Component {

    handleItemClick = (item) => {
        this.props.history.push(`/items/${item.id}`);
    }

    render() {
        const item = this.props.item;
        return (
            <Fragment>
                <li onClick={() => this.handleItemClick(item)} className="search-item">
                    <div className="search-item-image-container">
                        <img className="search-item-image" alt={item.title} src={item.picture}/>
                    </div>
                    <div className="search-item-content-wrapper">
                        <div className="search-item-left-column mt-1">
                            <div className="search-item-price">
                                <NumberFormat className="price-tag" value={item.price.amount} displayType={'text'}
                                              thousandSeparator={true} prefix={'$'}/>
                                {item.free_shipping && (<span className="ml-h">
                                    <img src={shippingIcon} width="23px"/>
                                </span>)}
                            </div>
                            <span className="search-item-title">{item.title}</span>
                        </div>
                    </div>
                </li>
                <hr className="item-divisor"/>
            </Fragment>
        )
    }
}

export default withRouter(Item)
