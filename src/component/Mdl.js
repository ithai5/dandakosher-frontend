import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import MenuContent from "./MenuContent";

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
            //deleted button with this.onOpenModal
            <div onClick={this.onOpenModal}>
                <Modal open={open} onClose={this.onCloseModal} little>
                    <MenuContent menuName={this.props.menuName}/>
                </Modal>
            </div>
        );
    }
}