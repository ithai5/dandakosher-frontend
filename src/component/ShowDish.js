import React, {Component} from 'react';

class ShowDish extends Component {

    state={
        dish : this.props.menu.name,
        dishId : this.props.menu.id,
        isDisabled : this.props.isDisabled,
        isChecked : this.props.isChecked,
        menuName : this.props.menuName,
        chosenExtraDish : "notChosen",
    };

    clicking() {
       if (this.state.chosenExtraDish === "notChosen") {
           this.setState({chosenExtraDish : "chosen"})
       } else {
           this.setState({chosenExtraDish : "notChosen"})
       }
    }

    render() {
        return (
            <div>
                <label>
                    <input className={this.state.chosenExtraDish} type="checkbox" value={this.state.dishId} name={this.state.dish}
                           checked={this.state.isChecked} disabled={this.state.isDisabled} onChange={() => this.clicking()}/>
                    {this.state.dish}
                </label>
            </div>

        );
    }
}

export default ShowDish;