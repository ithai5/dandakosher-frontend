import React, {Component} from 'react';

class ShowDish extends Component {

    state={
        dish : this.props.menu.dishName
    }


    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" value={this.state.dish} checked={true} disabled={true}/>
                    {this.state.dish}
                </label>
            </div>

        );
    }
}

export default ShowDish;