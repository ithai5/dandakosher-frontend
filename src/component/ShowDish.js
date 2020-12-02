import React, {Component} from 'react';

class ShowDish extends Component {

    state={
        dish : this.props.menu.name,
        dishId : this.props.menu.id,
        isDisabled : this.props.isDisabled,
        isChecked : this.props.isChecked,

    };


    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" name={this.state.isDisabled + this.state.dishId} value={this.state.dishId}
                           checked={this.state.isChecked} disabled={this.state.isDisabled} onChange={this.handleInputChange}/>
                    {this.state.dish}
                </label>
            </div>

        );
    }
}

export default ShowDish;