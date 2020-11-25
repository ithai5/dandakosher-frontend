import React, {Component} from 'react';

class EventsPage extends Component {
    render() {
        return (
            <div>
                <section id="boxes">
                    <div className="container">
                        <div className="box">
                            <i className="fas fa-utensils fa-3x"></i>
                            <h3>Bar Mitzvah</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                esse.</p>
                        </div>
                        <div className="box">
                            <i className="fas fa-shipping-fast fa-3x"></i>
                            <h3>Hanukkah</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                esse.</p>
                        </div>
                        <div className="box">
                            <i className="fas fa-pen fa-3x"></i>
                            <h3>Wedding</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                esse.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default EventsPage;