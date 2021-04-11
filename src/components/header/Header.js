import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/logo.png';
import '../../styles/layout.scss';
import '../../styles/spacing.scss';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            search: event.target.value
        })
    }
    handleSearchClick = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.history.push(`/items/?search=${this.state.search}`);
    }

    render() {
        return (
            <div className="nav">
                <div className="box navInner">
                    <div className="navHeader">
                        <a className="navBrand" href="/">
                            <img alt="React" src={logo} width="50"/>
                        </a>
                    </div>
                    <input className="navSearchInput ml-1" type="text"
                           onChange={this.handleInputChange}
                           placeholder="Nunca dejes de buscar" name="search"/>
                    <button onClick={this.handleSearchClick} type="submit" className="navSearchBtn">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)
