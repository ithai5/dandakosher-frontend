import React, {Component} from 'react';

class Box extends Component {

    render() {
        const boxInfo = this.props
        return (
            <div>
                <div className={boxInfo.className}>
                    <i className={boxInfo.icon}></i>
                    <h1>{boxInfo.bigDisplay}</h1>
                    <h3>{boxInfo.displayName}</h3>
                    <p>{boxInfo.text}</p>
                </div>
            </div>
        );
    }
}

export default Box;