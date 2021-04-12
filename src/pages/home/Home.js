import React, {Component, Fragment} from "react";

class Home extends Component {
    componentDidMount(props) {
        this.props.setBreadcrumb(['Home'])
    }

    render() {
        return (
            <Fragment>
                <h2 align="center" className="m-0 pt-4">Bienvenido, por favor busca un producto para continuar.</h2>
            </Fragment>
        )
    }
}

export default Home
