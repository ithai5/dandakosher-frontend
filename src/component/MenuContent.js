import React, {Component} from 'react';
import ShowDish from "./ShowDish";
import ContactusForm from "./ContactusForm";

class MenuContent extends Component {
    state = {
        loading: true,
        menuContent: null,
        menuName: this.props.menuName
    };




    async componentWillMount(){  //get request form api and retrieve Json file
        const url = 'http://localhost:8080/api/menuContent/'+ this.state.menuName;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({menuContent : data, loading:false})

    }

    createList() {
        const menuList = this.state.menuContent
        if(menuList != null){
            return(
                menuList.map( menu => <ShowDish menu={menu} />)
                //<Product product = {product} />
            )
        }
        else
            return <div>loading</div>
    }

    render(){
        return (
            <div>
                <br/>
                <form>
                    <label>
                        <input type="number" min="4" name="totalPeople"/>
                        How many people are you ordering for?
                    </label>

                    <label>
                        <select>
                            <option value="Hannukkah">Hannukkah</option>
                            <option value="Bar Mitzvah">Bar Mitzvah</option>
                            <option value="Wedding">Wedding</option>
                        </select>
                        What event?
                    </label>

                    {this.createList()}
                    <label>
                        <ContactusForm/>
                        Fill in your personal info
                    </label>
                </form>
            </div>
        )
    }

}

export default MenuContent;