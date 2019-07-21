import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { thai, eng } from '../../langues/lang';

import { Link } from "react-router-dom";

class TEMPLATE extends PureComponent {

    static propTypes = {

    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    getLang(word) {
        const { lang } = this.props;
        return lang === 'thai' ? thai[word] : eng[word];
    }

    render() {
        return (
            <div>

            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TEMPLATE)