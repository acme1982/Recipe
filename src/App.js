import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '571807c53fc4a12e08a5a15417b568ca';
class App extends Component {
	state = {
		recipes: []
	};
	getSearch = async e => {
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();
		const api_call = await fetch(
			`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
		);
		const data = await api_call.json();
		this.setState({ recipes: data.recipes });
	};
	// Mounts data then when we click 'Go Home' data stays. Depending on ComponentDidUpdate.
	componentDidMount() {
		const json = localStorage.getItem('recipes');
		const recipes = JSON.parse(json);
		this.setState({ recipes: recipes }); // if the names of state and argument is the same the second bit can be amended.
	}
	// When component updates state updates (when press 'search').
	componentDidUpdate = () => {
		const recipes = JSON.stringify(this.state.recipes); // Takes only strings
		localStorage.setItem('recipes', recipes); // Assign to local storage.
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Recipe Search</h1>
				</header>
				<Form getSearch={this.getSearch} />
				<Recipes recipes={this.state.recipes} />
			</div>
		);
	}
}

export default App;
