import React, {Component} from 'react';
import Box from "./Box";

class HomePicture extends Component {
    render() {
        return (
            <div>
                <section id="showcase">
                    <div className="container">
                        <Box
                            bigDisplay={'Kosher Catering Service'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse. Ea\n' +
                            'aut at, vero itaque quas architecto vitae quia voluptatum non, alias libero saepe. Animi,\n' +
                            'vero a!'}/>
                    </div>
                </section>

            </div>
        );
    }
}

export default HomePicture;