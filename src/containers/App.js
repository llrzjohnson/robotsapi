import React, { Component } from 'react'
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import './App.css'


export class App extends Component {
    constructor(){
        super()
        //----------------State-------------------
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
//----------------API Fetch---------------------
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users})
        })
    }
//------------------SearchField Function---------------------
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

//------------------Filter state by searchfield ----------
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ? <h1>Loading</h1>:
        (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
        )
        }
    }

export default App




