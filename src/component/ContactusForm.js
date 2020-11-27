import React, {Component} from 'react';

class ContactusForm extends Component {

    render() {

        return (
            <div>
                <form name='contact-form' id='sendMail'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" placeholder="Enter name..." /><br/>
                    <label htmlFor="telephone">Phone:</label>
                    <input type="tel" placeholder="Enter phone number..."/><br/>
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter e-mail..."/><br/>
                    <label htmlFor="message">Message:</label>
                    <input type="text" placeholder="Write your message..." size="500"/><br/>
                    <input type="submit" value='submit'/>
                </form>
            </div>
        );
    }
}

export default ContactusForm;