import React, {Component} from 'react';

class ShowDish extends Component {

    render() {
        return (
            <div>
                <p>{this.props.menu.dishName}</p>
            </div>
        );
    }
}

export default ShowDish;