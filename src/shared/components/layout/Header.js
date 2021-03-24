import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from  '../images/logo.svg';

//we created a component with a simple arrow function

const Header = props => {
    const {
        title = 'Welcome to react',
        url = 'http://localhost:3000'
    } = props;

    return (
        <header className="App-header">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h1 className="App-title">{title}</h1>
        </header>
    );
};

//Even with functional components we are able to validate our propTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;