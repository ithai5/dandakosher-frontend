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

    render() {
        const { open } = this.state;
        return (

            <div>
                <button onClick={this.onOpenModal}>Press here</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <MenuContent menuName={this.props.menuName}/>
                </Modal>
            </div>
        );
    }
}