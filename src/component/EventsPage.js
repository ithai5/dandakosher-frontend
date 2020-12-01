import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MenuContent from "./MenuContent";

class EventsPage extends Component {



    render() {
        return (
            <div>
                <section id="boxes" >
                    <div className="container">
                        <div className="box">
                            <Popup className='popup-content' trigger={<div> <i className="fas fa-star"></i><h3>Basic</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                esse.</p></div>
                            } >
                                <div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci
                                        amet at consectetur cupiditate dicta facilis fugiat harum ipsa ipsum laboriosam
                                        magnam molestias mollitia, obcaecati placeat porro quos repudiandae veniam!
                                    </div>
                                    <div>Dicta eligendi, in ipsum magni nostrum nulla quas quia. Adipisci aperiam autem,
                                        culpa cum, eius esse ex illum laudantium rerum tempora velit voluptates? Alias
                                        deleniti hic modi nihil non perspiciatis?
                                    </div>
                                    <div>Accusamus, aliquam cum cupiditate deleniti dolor esse est, minima, natus nobis
                                        nostrum odio officia possimus provident quaerat quas quasi reiciendis
                                        repellendus sapiente sed similique tempora tenetur ullam velit veniam
                                        voluptatum!
                                    </div></div>
                            </Popup>

                        </div>
                        <div className="box">
                            <Popup trigger={<div> <i className="fas fa-star"></i><i className="fas fa-star"></i><h3>Deluxe</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                    esse.</p></div>
                            }>
                                <div >
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci
                                        amet at consectetur cupiditate dicta facilis fugiat harum ipsa ipsum laboriosam
                                        magnam molestias mollitia, obcaecati placeat porro quos repudiandae veniam!
                                    </div>
                                    <div>Dicta eligendi, in ipsum magni nostrum nulla quas quia. Adipisci aperiam autem,
                                        culpa cum, eius esse ex illum laudantium rerum tempora velit voluptates? Alias
                                        deleniti hic modi nihil non perspiciatis?
                                    </div>
                                    <div>Accusamus, aliquam cum cupiditate deleniti dolor esse est, minima, natus nobis
                                        nostrum odio officia possimus provident quaerat quas quasi reiciendis
                                        repellendus sapiente sed similique tempora tenetur ullam velit veniam
                                        voluptatum!
                                    </div></div>
                            </Popup>

                        </div>
                        <div className="box">
                            <Popup trigger={<div> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><h3>Deluxe Plus</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt
                                    esse.</p></div>
                            }>
                                <div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci
                                        amet at consectetur cupiditate dicta facilis fugiat harum ipsa ipsum laboriosam
                                        magnam molestias mollitia, obcaecati placeat porro quos repudiandae veniam!
                                    </div>
                                    <div>Dicta eligendi, in ipsum magni nostrum nulla quas quia. Adipisci aperiam autem,
                                        culpa cum, eius esse ex illum laudantium rerum tempora velit voluptates? Alias
                                        deleniti hic modi nihil non perspiciatis?
                                    </div>
                                    <div>Accusamus, aliquam cum cupiditate deleniti dolor esse est, minima, natus nobis
                                        nostrum odio officia possimus provident quaerat quas quasi reiciendis
                                        repellendus sapiente sed similique tempora tenetur ullam velit veniam
                                        voluptatum!
                                    </div></div>
                            </Popup>
                        </div>
                    </div>
                </section>
                <MenuContent menuName={'Deluxe'}/>
            </div>
        );
    }
}

export default EventsPage;