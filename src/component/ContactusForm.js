import React, {Component} from 'react';
import axios from 'axios'
class ContactusForm extends Component {

    constructor(props) {
        super(props);
        this.state ={
            fullName :'',
            phone: '',
            isSubscribed: true,
            email:'',
            subject: '',
            content:'',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name] : value
        })
    }


    submitForm =event =>{
        alert("your mail has been sent")
        event.preventDefault();
        console.log(this.state)
        axios
            .post('http://localhost:8080/api/sendMessage',this.state)
            .then( response =>{
                console.log('message sent')
            })
            .catch(error =>{
                console.log('error')
            })
    }




    render() {

        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="name">Name: </label>
                    <input name='fullName' type="text" value={this.state.fullName} placeholder="Enter name..." onChange={this.handleInputChange}/><br/>
                    <label htmlFor="telephone">Phone:</label>
                    <input name='phone' type="tel" value={this.state.phone}placeholder="Enter phone number..." onChange={this.handleInputChange}/><br/>
                    <label htmlFor="email">Email: </label>
                    <input name='email' type="email" value={this.state.email} placeholder="Enter e-mail..." onChange={this.handleInputChange}/><br/>
                    <label htmlFor="isSubscribed">Subscribe to the newsletter</label>
                    <input name='isSubscribed' type="checkbox" value={this.state.isSubscribed} onChange={this.handleInputChange}/><br/>
                    <label htmlFor="message">Subject:</label>
                    <input name='subject' type="text" value={this.state.subject}placeholder="Write your message..." onChange={this.handleInputChange}/><br/>

                    <textarea id='content-box' name='content'  value={this.state.content}placeholder="Write your message..." rows='4' cols='40' onChange={this.handleInputChange}/><br/>
                    <input type="submit" value='submit' />
                </form>
            </div>
        );
    }
}

export default ContactusForm;