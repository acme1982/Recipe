import React, { Component } from 'react';

const API_KEY = '571807c53fc4a12e08a5a15417b568ca';
class Recipe extends Component {
	state = {
		activeRecipe: []
	};
	componentDidMount = async () => {
		const title = this.props.location.state.recipe;
		const api_req = await fetch(
			`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
		);
		const res = await api_req.json();
		this.setState({ activeRecipe: res.recipes[0] });
		console.log(this.state.activeRecipe);
	};
	render() {
		const recipe = this.state.activeRecipe;
		return (
			<div className='container'>
				{this.state.activeRecipe.length !== 0 && (
					<div className='active-recipe'>
						<img
							className='active-recipe__img'
							src={recipe.image_url}
							alt={recipe.title}
						/>
						<h3 className='active-recipe__title'>{recipe.title}</h3>
						<h4 className='active-recipe__publisher'>
							Publisher <span>{recipe.publisher}</span>
						</h4>
						<p className='active-recipe__website'>
							Website:
							<span>
								<a href={recipe.publisher_url}>{recipe.publisher_url}</a>
							</span>
						</p>
						<button className='active-recipe__button'>Go Home</button>
					</div>
				)}
			</div>
		);
	}
}

export default Recipe;
