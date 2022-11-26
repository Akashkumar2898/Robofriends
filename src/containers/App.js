import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import Errorboundry from '../components/Errorboundary';
import './App.css'; 



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()})
        .then(users => {
            this.setState({robots: users})});
    }
    

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {robots , searchfield} = this.state;
        const filteredRobots=robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading</h1>:
            (
                <div className="tc">
                <h1 className='f1'>Robo-friends</h1>
                <Searchbox searchChange = {this.onsearchChange} />
                <Scroll>
                    <Errorboundry>
                        <CardList robots={filteredRobots} />
                    </Errorboundry>           
                </Scroll>       
                </div>
            );
        }
    }


export default App;