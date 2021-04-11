import React, {Component, Fragment} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import '../../styles/layout.scss';
import '../../styles/spacing.scss';
import './ItemDetail.scss';
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import NumberFormat from "react-number-format";
import shippingIcon from "../../assets/images/free_shipping.png";

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            item: null
        }
    }

    componentDidMount(props) {
        const id = this.props.match.params.id;
        const apiUrl = `http://localhost:4000/api/items/${id}`
        axios.get(apiUrl).then(apiRes => {
            const data = apiRes.data
            this.setState({...this.state, item: data.item, loading: false})
            console.log(this.state)
        })
    }

    render() {
        const item = this.state.item;
        return (
            <div>
                <Header/>
                <div className="box full-screen white-bg mt-3">
                    {this.state.loading ? <Loader/> :
                        <Fragment>
                            <div className="detail-wrapper">
                                <div className="detail-image-wrapper">
                                    <img className="item-image" src={item.picture}/>
                                </div>
                                <div className="detail-content-wrapper">
                                    <span className="item-condition">
                                        {item.condition.toUpperCase()} · {item.sold_quantity} vendido{item.sold_quantity > 1 ? 's' : ''}
                                    </span>
                                    <h1 className="item-title">{item.title}</h1>
                                    <NumberFormat className="item-price" value={item.price.amount} displayType={'text'}
                                                  thousandSeparator={true} prefix={'$'}/>
                                    {item.free_shipping && (<span className="shipping-icon-wrapper ml-h">
                                    <img src={shippingIcon}/>
                                    </span>)}
                                    <div className="btn-container">
                                        <button className="btn-buy">
                                            <span>Comprar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="description-wrapper mt-1">
                                <h3 className="description-title">Descripción del producto</h3>
                                <p className="item-description">{item.description}</p>
                            </div>
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}


export default withRouter(ItemDetail)
