import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import SubscribeOption from "./SubscribeOption";
import Box from "./Box";
import Changeable from "./Changeable";

class Layout extends Component {
    state ={
    }

    render() {

        console.log(this.state.currentPage)
        return (
            <div>
                <Header/>
                <section id="showcase">
                    <div class="container">
                    <Box
                        bigDisplay = {'Kosher Catering Service'}
                        text = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse. Ea\n' +
                        'aut at, vero itaque quas architecto vitae quia voluptatum non, alias libero saepe. Animi,\n' +
                        'vero a!'}/>
                    </div>
                </section>
                <SubscribeOption/>
                <section id="boxes">
                    <div className="container">
                        <Changeable/>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}
    export default Layout;