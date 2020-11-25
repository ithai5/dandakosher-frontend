import React, {Component} from 'react';

class SubscribeOption extends Component {
    render() {
        return (
            <section id="newsletter">
                <div className="container">
                    <h1>Subscribe To Our Newsletter</h1>
                    <form>
                        <input type="email" placeholder="Enter E-mail..."/>
                        <button type="submit" className="button_1">Suscribe</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default SubscribeOption;