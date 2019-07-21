import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, { PureComponent, Fragment } from 'react';

// import { lineQRImage } from '../../config';
import { thai, eng } from '../../langues/lang';
import service from '../../services/APIServices';

import {

} from 'reactstrap';

class Template extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {

    }

    getLang(word) {
        const { lang } = this.props;
        return lang === 'thai' ? thai[word] : eng[word];
    }

    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.Lang.lang
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {

        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)