import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py--0">            
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
            </div>
            <div>
                <ul className="navbar-nav mx-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};
export default Header;