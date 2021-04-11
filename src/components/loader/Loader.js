import React, {Component} from 'react';
import '../../styles/layout.scss';
import '../../styles/spacing.scss';
import './Loader.scss';

class Loader extends Component {
    render() {
        return (
            <div align="center" className="pt-4">
                <div className="lds-dual-ring"/>
            </div>
        )
    }
}

export default Loader
