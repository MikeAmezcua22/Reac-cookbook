import React, { Component } from 'react';

//Since we don't hace props, we can directly return our JSX.

const Footer = () => (
    <footer>&copy; CodeJobs {( new Date().getFullYear())}</footer>
)

export default Footer;