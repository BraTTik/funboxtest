import React from 'react';
import './style.css';

const Footer = props => {
    return (
        <div className="card-footer">
            {props.children}
        </div>
    )
}

export default Footer;