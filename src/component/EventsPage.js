import React, {Component} from 'react';

class EventsPage extends Component {

    render() {
        return (
            <div>
                <section id="boxes">
                    <div className="container">
                        <div className="box">
                            <i className="fas fa-star"></i>
                            <h3>Basic</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                esse.</p>
                        </div>
                        <div className="box">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <h3>Deluxe</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                esse.</p>
                        </div>
                        <div className="box">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <h3>Deluxe Plus</h3>
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