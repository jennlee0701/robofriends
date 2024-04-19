import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
// .. = leave the folder and /components access components folder

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

// constructor() method is used to initialize the component's state (this.state), setting it to an object with robots and searchfield properties. 
// super() calls the constructor of the parent class (Component).
// By assigning an initial state to this.state in the constructor() method, we're telling React that the App component needs to keep track of these two pieces of data (robots and searchfield). 
// Any changes to this.state will trigger a re-render of the component, updating the UI to reflect the new state.
// this.state refers to the 'state' property of the current instance of the App component class. It's a reference to the state object that holds the data managed by the component.
// this.state usually lives in the parent component that passes 'state' to different components.

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ robots: users})})
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})		
	}

//Everytime we make our own method on a component, use arrow function to make sure "this" = where it was created = App 
//Arrow functions do not have their own "this" context; instead, they inherit the this context from the enclosing lexical scope. Therefore, inside the arrow function, this will refer to the instance of the class where onSearchChange is defined.
//setState() is used whenever we want to change state
//We're updating the searchfield property of the component's state with the value entered into the input field. event.target.value represents the current value of the input field that triggered the change event. 

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

// this.state.robots refers to the value of the robots property within the state object of the current instance of the App component.
// It  represents a snapshot of the robot data stored in the component's state at a given moment.
// When we access this.state.robots within a component, we're retrieving the array of robot data from the component's state.

		return !robots.length ?
			<h1>Loading</h1> :
			(
			<div className='tc'>
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				{/*searchChange={this.onSearchChange} is a prop being passed to the SearchBox component.*/}
				{/*this.onSearchChange refers to the onSearchChange method of the current instance of the App component class.*/}
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
						{/*CardList component being rendered with a prop called robots.*/}
					</ErrorBoundry>
				</Scroll>
			</div>
			)
	}
}

export default App;

// State is an object that describes your application
// State is able to CHANGE
// In our case, State is the robot we put in the search box

// Props are simply things that come out of State
// A parent feeds State into child component
// Child components receive a State, it becomes a Property (which they cannot change)

// Smart component = Component that has State

