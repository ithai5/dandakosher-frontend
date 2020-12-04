import React, {Component} from 'react';
import MenuContent from "./MenuContent";
import Mdl from './Mdl';

class EventsPage extends Component {

    render() {
        return (
            <div>
                <section id="boxes" >
                    <div className="container">
                        <div className="box">
                                <div>
                                    <Mdl menuName={'Basic'} buttonText={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.'} level={1}/>
                                </div>
                        </div>
                        <div className="box">
                                <div>
                                    <Mdl menuName={'Deluxe'} buttonText={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.'} level={'2'}/>
                                </div>
                        </div>
                        <div className="box">
                                <div>
                                    <Mdl menuName={'DeluxePlus'} buttonText={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.'} level={'3'}/>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default EventsPage;