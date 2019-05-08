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
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Recipe Title </h1>
				</header>
				<Form getSearch={this.getSearch} />
				<Recipes recipes={this.state.recipes} />
			</div>
		);
	}
}

export default App;
