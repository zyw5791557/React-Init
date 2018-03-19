import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/hello.less';

class Hello extends Component {
    render() {
        return (
            <div>
                <span style={{ color: this.props.color ? 'red' : 'yellow' }}>Hello</span>
            </div>
        );
    }
}

export default Hello;

Hello.propTypes = {
    color: PropTypes.bool.isRequired,
};
