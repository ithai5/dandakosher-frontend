import React, {Component} from 'react';
import Header from "./Header";


class Layout extends Component {
    state ={
    }

    render() {

        console.log(this.state.currentPage)
        return (
            <div>
                    <Header/>
            </div>
        );
    }
}
    export default Layout;