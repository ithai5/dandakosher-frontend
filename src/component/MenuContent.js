import React, {Component} from 'react';
import ShowDish from "./ShowDish";
import ContactusForm from "./ContactusForm";
import axios from "axios";

class MenuContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            menuName: this.props.menuName,
            sendInformation : {},
            eventName : "Hanukkah",
            totalPeople : 4
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }




    async componentDidMount(){  //get request form api and retrieve Json file
        const menuUrl = 'http://localhost:8080/api/menuContentDish/'+ this.state.menuName;
        const menuResponse = await fetch(menuUrl);
        const menuData = await menuResponse.json();

        const extrasUrl = 'http://localhost:8080/api/extras/' + this.state.menuName;
        const extrasResponse = await fetch(extrasUrl);
        const extrasData = await extrasResponse.json();

        this.setState({menuContent : menuData, extrasContent : extrasData, loading : false})

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

    //Not yet
    loadEvents() {

    }

    submitForm =event =>{
        alert("button click cliiick")
        event.preventDefault();
        //console.log(this.state)
        this.getSelectedCheckboxValues()
        /*
        axios
            .post('http://localhost:8080/api/createReservation',this.state)
            .then( response =>{
                console.log('message sent')
            })
            .catch(error =>{
                console.log('error')
            })

         */
    }

    handleInputChange(event){
        alert("We in input change")
        const target = event.target
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name] : value
        })
    }

    getSelectedCheckboxValues() {
        const checkboxes = document.getElementsByClassName('chosen')
        console.log(checkboxes)
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
                        <select name="eventName" value={this.state.eventName} onChange={this.handleInputChange}>
                            <option value="Hanukkah">Hanukkah</option>
                            <option value="Bar Mitzvah">Bar Mitzvah</option>
                            <option value="Wedding">Wedding</option>
                        </select>
                    </label>
                    {this.loadMenuContent()}
                    {this.loadMenuExtras()}
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default MenuContent;