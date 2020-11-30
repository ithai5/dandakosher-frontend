import React, {Component} from 'react';
import NavBarButton from "./NavBarButton";
import Box from "./Box";
import SubscribeOption from "./SubscribeOption";
import Changeable from "./Changeable";
import Footer from "./Footer";
class Header extends Component {
    state = {
        list:[
            {
                "name": 'Home',
                "className": 'button-bar-current',
            },
            {
                "name": 'Events',
                "className": 'button-bar',
            },
            {
                "name": 'Take Away',
                "className": 'button-bar',
            },
            {
                "name": `Contact Us`,
                "className": 'button-bar'
            },
            {
                "name": 'Q&A',
                "className": 'button-bar'
            }
        ],
        currentPage:'Home'
        }


    changeCurrentPage(page){
        if (page === this.state.currentPage){
        }
        else {
            this.setState({currentPage: page})
        }

    }

    setIsCurrent(toChange){
        let newList = this.state.list
        for (const button of newList){
            if (button === toChange){
                this.setState({currentPage:button.name})
                this.forceUpdate()
                button.className ='button-bar-current'
            }
            else{
                button.className='button-bar'
                }
        }
        return newList
    }

    createNavButton() {
        const listButton = this.state.list
        return (listButton.map(
            button =>
                <span onClick={()=>this.setState({list:this.setIsCurrent(button)})}>
                    <NavBarButton name={button.name} className = {button.className}/>
                </span>))
    }
    render(){
        return (
            <div>
                <header id='nev-bar'>
                    <div className="container">
                        <nav>
                            <ul>
                                {this.createNavButton()}
                            </ul>
                        </nav>
                    </div>
                </header>
                <section id="showcase">
                    <div className="container">
                        <Box
                            bigDisplay={'Kosher Catering Service'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse. Ea\n' +
                            'aut at, vero itaque quas architecto vitae quia voluptatum non, alias libero saepe. Animi,\n' +
                            'vero a!'}/>
                    </div>
                </section>
                <SubscribeOption/>
                <section id="boxes">
                    <div className="container">
                        <Changeable currentPage = {this.state.currentPage}/>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Header;