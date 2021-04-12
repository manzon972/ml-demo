import React, {Fragment} from 'react'
import {Breadcrumb} from 'semantic-ui-react'
import {faChevronRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CustomBreadcrumb = (props) => {

    let content = []
    for (let i = 0; i < props.nav.length; i++) {
        if (i + 1 === props.nav.length) {
            content.push(
                <Fragment key={props.nav[i]}>
                    <Breadcrumb.Section>
                        {props.nav[i]}
                    </Breadcrumb.Section>
                </Fragment>
            )
        } else {
            content.push(
                <Fragment key={props.nav[i]}>
                    <Breadcrumb.Section>
                        {props.nav[i]}
                    </Breadcrumb.Section>
                    <FontAwesomeIcon className="breadcrumb-icon" icon={faChevronRight}/>
                </Fragment>
            )
        }
    }

    return (<Breadcrumb className="gray-text mb-0" size="massive">
        {content}
    </Breadcrumb>)
}

export default CustomBreadcrumb
