import React, {Component} from 'react';

class ContactUsPage extends Component {
    render() {
        return (
            <div>
                <section id="main">
                    <div className="container">
                        <article id="wh">
                            <h1>Who We Are</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <h1>What We Do</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </article>
                        <aside id="sidebar">
                            <h1>Write Us</h1>
                            <p>Please, fill out the following information:</p>
                            <div className="dark">
                                <form action="">
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" placeholder="Enter name..."/><br/>
                                    <label htmlFor="telephone">Phone:</label>
                                    <input type="tel" placeholder="Enter phone number..."/><br/>
                                    <label htmlFor="email">Email: </label>
                                    <input type="email" placeholder="Enter e-mail..."/><br/>
                                    <label htmlFor="message">Message:</label>
                                    <input type="text" placeholder="Write your message..." size="500"/><br/>
                                </form>
                            </div>
                        </aside>
                    </div>
                </section>

            </div>
        );
    }
}

export default ContactUsPage;