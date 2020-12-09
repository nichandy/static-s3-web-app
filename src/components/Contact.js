import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {

    state = { 
        showContactInfo: false
    };

    onShowClick = (e) => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    }

    onDeleteClick = (e) => {
        this.props.deleteClickHandler();
    }

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>{contact.name} 
                    <i 
                        onClick={this.onShowClick.bind(this, contact.name)} className="fas fa-sort-down" style={{ cursor: 'pointer' }}  
                    />
                    <i 
                        className="fas fa-times" 
                        style={{ cursor: 'pointer', float: 'right', color: 'red' }} 
                        onClick={this.onDeleteClick}
                    />
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {contact.email}</li>
                        <li className="list-group-item">Phone: {contact.phone}</li>
                    </ul>
                ) : null}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;