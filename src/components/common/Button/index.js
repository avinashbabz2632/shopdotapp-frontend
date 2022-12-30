/* eslint-disable react/require-default-props */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

function Button(props) {
    const button = (
        <StyledButton className={props.btnClassName} {...props}>
            {Children.toArray(props.children)}
        </StyledButton>
    );

    return button;
}

Button.propTypes = {
    handleRoute: PropTypes.func,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
    color: PropTypes.string,
    btnClassName: PropTypes.string,
};

export default Button;
