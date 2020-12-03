import React, {Component} from 'react';
import MenuContent from "./MenuContent";
import Mdl from './Mdl';

class EventsPage extends Component {

    render() {
        return (
            <div>
                <section id="boxes" >
                    <div className="container">
                        <div className="box" onClick={this.onOpenModal}>
                            <div> <i className="fas fa-star"/><h3>Basic</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.</p>
                            </div>
                                <div>
                                    <Mdl menuName={'Basic'}/>
                                </div>
                        <div className="box">
                            <div> <i className="fas fa-star"></i><i className="fas fa-star"></i><h3>Deluxe</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.</p>
                            </div>
                                <div>
                                    <Mdl menuName={'Deluxe'}/>
                                </div>
                        </div>
                        <div className="box">
                            <div> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><h3>Deluxe Plus</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.</p>
                            </div>
                        </div>
                                <div>
                                    <Mdl menuName={'DeluxePlus'}/>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default EventsPage;