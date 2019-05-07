import React from 'react';

const Form = props => (
	<form onSubmit={props.getSearch}>
		<input type='text' name='recipeName' />
		<button>Search</button>
	</form>
);
export default Form;
