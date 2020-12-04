import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import MenuContent from "./MenuContent";
//import 'react-responsive-modal/styles.css';

export default class Mdl extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    multipleDiv(number){
        const logo = [];
        for(let i=0; i<number; i++){
            logo.push(<i className="fas fa-star"/>)
        }
        return logo;
    }

    render() {
        const { open } = this.state;
        return (

            <div>
                <button className="buttonModal" onClick={this.onOpenModal}>{this.multipleDiv(this.props.level)}<h3>{this.props.menuName}</h3>{this.props.buttonText}</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <MenuContent menuName={this.props.menuName}/>
                </Modal>
            </div>
        );
    }
}