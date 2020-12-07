import React, {Component} from 'react';
import ShowDish from "./ShowDish";
import axios from "axios";

class MenuContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            menuName: this.props.menuName,
            totalPeople : 4,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    //Methods handling state manipulation and form sending

    async componentDidMount(){  //get request form api and retrieve Json file

        //Info for loading fixedMenu
        const menuUrl = 'http://localhost:8080/api/menuContentDish/'+ this.state.menuName;
        const menuResponse = await fetch(menuUrl);
        const menuData = await menuResponse.json();

        //Info for loading extras available
        const extrasUrl = 'http://localhost:8080/api/extras/' + this.state.menuName;
        const extrasResponse = await fetch(extrasUrl);
        const extrasData = await extrasResponse.json();

        //Info for loading possible events
        const eventsUrl = "http://localhost:8080/api/events/";
        const eventsResponse = await fetch(eventsUrl);
        const eventsData = await eventsResponse.json();
        this.setState({menuContent : menuData, extrasContent : extrasData,
            possibleEvents : eventsData, eventName : eventsData[0].eventName,
            loading : false})
    }

    getSelectedCheckboxValues() {
        const checkboxes = document.getElementsByClassName('chosen')
        let extraNames = []
        for (const extra of checkboxes) {
            extraNames.push(extra.name)
        }
        return extraNames;
    }

    submitForm = event =>{
        event.preventDefault();
        console.log(this.state)
        const reservationInfo = {
            totalPeople: this.state.totalPeople,
            menuName: this.state.menuName,
            eventName: this.state.eventName,
            extras: this.getSelectedCheckboxValues(),
            email: this.state.email,
            content: this.state.content,
        }
        console.log(reservationInfo)
        axios
            .post('http://localhost:8080/api/createReservation', reservationInfo)
            .then( () =>{
                console.log('message sent')
            })
            .catch(error =>{
                console.log('error')
            })
    }

    handleInputChange(event){
        const target = event.target
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name] : value
        })
    }

    //Methods for initializing the form with data from the db

    loadEventList() {
        const eventsList = this.state.possibleEvents;
        if (eventsList != null) {
            return (<select name="eventName" value={eventsList.eventName} onChange={this.handleInputChange}>
                {eventsList.map((eventsList) => this.getEvents(eventsList))}
            </select>);
        } else {
            return <div>loading...</div>;
        }
    }

    getEvents(events) {
        return (<option value={events.eventName}>
            {events.eventName}
        </option>);
    }

    //Load the list of dishes associated with a certain menu
    loadMenuContent() {
        const menuList = this.state.menuContent
        if(menuList != null){
            return(
                menuList.map( menu => <ShowDish menu={menu} isChecked={true} isDisabled={true} menuName={this.state.menuName}/>)
                //<Product product = {product} />
            )
        }
        else
            return <div>loading</div>
    }

    //Load the list of dishes not associated with the specific menu
    //So they can be added as extras
    loadMenuExtras() {
        const extrasList = this.state.extrasContent;
        if (extrasList != null) {
            return (
                extrasList.map(extra => <ShowDish menu={extra} menuName={this.state.menuName}/>)
            )
        } else
            return <div>loading</div>
    }



    render(){
        return (
            <div>
                <br/>
                <form onSubmit={this.submitForm}>
                    <label>
                        How many people are you ordering for?
                        <input type="number" min="4"  name="totalPeople" value={this.state.totalPeople} onChange={this.handleInputChange}/>
                    </label>

                    <br/>
                    <label>
                        What event?
                        {this.loadEventList()}
                    </label>

                    <br/>
                        {this.loadMenuContent()}

                    <br/>
                        {this.loadMenuExtras()}
                    <br/>
                    <label>
                        Your email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="johnhansen@gmail.dk"/>
                    </label>
                    <textarea name="content" onChange={this.handleInputChange} placeholder="Any additional info here..." rows="5" cols="30"></textarea>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default MenuContent;