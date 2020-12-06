import React, {Component} from 'react';

class NavBarButton extends Component {


    render(){
        const navBar = <li><
            button className = {this.props.className}>
            {this.props.name}</button></li>

        return (
            <span>
            {navBar}
            </span>
        );
    }
}

export default NavBarButton;