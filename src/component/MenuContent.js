import React, {Component} from 'react';
import ShowDish from "./ShowDish";

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
                menuList.map( menu => <li><ShowDish menu={menu} /></li>)
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
                {this.createList()}
            </div>
        )
    }

}

export default MenuContent;