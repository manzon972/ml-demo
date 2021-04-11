import React, {Component} from 'react';
import '../../styles/layout.scss';
import '../../styles/spacing.scss';

class WelcomeCard extends Component {
    render() {
        return (
            <div className="box full-screen white-bg mt-3">
                <h2 align="center" className="m-0 pt-4">Bienvenido, por favor busca un producto para continuar.</h2>
            </div>
        )
    }
}

export default WelcomeCard
