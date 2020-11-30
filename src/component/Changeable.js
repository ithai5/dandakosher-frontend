import React, {Component} from 'react';
import Home from "./Home";
import EventsPage from "./EventsPage";
import ContactUsPage from "./ContactUsPage";
import TakeAwayPage from "./TakeAwayPage";

class Changeable extends Component {
    pageToShow(){
        if(this.props.currentPage === 'Home'){
            return <Home/>
        }
        if(this.props.currentPage === 'Menu'){
            return <EventsPage/>
        }
        if(this.props.currentPage ==='Contact Us'){
            return <ContactUsPage/>
        }
        if(this.props.currentPage === 'Take Away'){
            return <TakeAwayPage/>
        }
    }
        render() {
            return <span>{this.pageToShow()}</span>
    }
}

export default Changeable;