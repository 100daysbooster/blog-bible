import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent, Fragment } from 'react';

import {

} from 'reactstrap';

import { } from '../../components';

import ReduxSweetAlert, { swal } from 'react-redux-sweetalert';

class Home extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <ReduxSweetAlert />
            </Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            swal
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)