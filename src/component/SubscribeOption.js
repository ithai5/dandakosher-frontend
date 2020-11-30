import React, {Component} from 'react';
import axios from "axios";

class SubscribeOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            isSubscribed: 1,
            email: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name] : value
        })
    }

    submitForm =event =>{
        alert("Thank you for your subscription")
        event.preventDefault();
        axios
            .post('http://localhost:8080/api/createCustomer',this.state)
            .then( response =>{
                console.log('customer created')
            })
            .catch(error =>{
                console.log('error')
            })
    }


    render() {
        return (
            <section id="newsletter">
                <div className="container">
                    <h1>Subscribe To Our Newsletter</h1>
                    <form onSubmit={this.submitForm} >
                        <input name = 'fullName' value={this.state.fullName} type="text" placeholder='Enter Your Name....' onChange={this.handleInputChange}/>
                        <input name ='email' value={this.state.email} type="email" placeholder="Enter E-mail..." onChange={this.handleInputChange}/>
                        <input type="submit" className="button_1"/>
                    </form>
                </div>
            </section>
        );
    }
}

export default SubscribeOption;