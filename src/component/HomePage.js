import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div id="branding">
                            <h1>DAN<span className="highlight">kosher</span> <i className="fas fa-star-of-david"></i>
                            </h1>
                        </div>
                        <nav>
                            <ul>
                                <li className="current"><a href="index.html">Home</a></li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="takeaway.html">Take Away</a></li>
                                <li><a href="contactus.html">Contact us</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section id="showcase">
                    <div className="container">
                        <h1>Kosher Catering Service</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse. Ea
                            aut at, vero itaque quas architecto vitae quia voluptatum non, alias libero saepe. Animi,
                            vero a!</p>
                    </div>
                </section>

                <section id="newsletter">
                    <div className="container">
                        <h1>Suscribe To Our Newsletter</h1>
                        <form>
                            <input type="email" placeholder="Enter E-mail..."/>
                                <button type="submit" className="button_1">Suscribe</button>

                        </form>
                    </div>
                </section>

                <section id="boxes">
                    <div className="container">
                        <div className="box">
                            <i className="fas fa-utensils fa-3x"></i>
                            <h3>Events</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.
                                Ut enim ad minim veniam</p>
                        </div>
                        <div className="box">
                            <i className="fas fa-shipping-fast fa-3x"></i>
                            <h3>Take Away</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.
                                Ut enim ad minim veniam</p>
                        </div>
                        <div className="box">
                            <i className="fas fa-pen fa-3x"></i>
                            <h3>Write us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.
                                Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </section>

                <br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default HomePage;