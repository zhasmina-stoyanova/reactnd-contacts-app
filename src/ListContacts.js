import React from 'react';
import PropTypes from 'prop-types';

function ListContacts(props) {
    return (
        <ol className='contact-list'>
            {props.contacts.map(contact => {
                return <li key={contact.id} className='contact-list-item'>
                    <div
                        className='contact-avatar'
                        style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}
                    >
                    </div>
                    <div className='class-details'>
                        <p>{contact.name}</p>
                        <p>@{contact.handle}</p>
                    </div>
                    <button className='contact-remove' onClick={()=> props.onDeleteContact(contact)}>
                        Remove
                    </button>
                </li>
            })}
        </ol>
    )
}

ListContacts.PropTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;
