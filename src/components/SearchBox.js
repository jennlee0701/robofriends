import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
				// Everytime the onChange event is triggered, call the searchChange function
				// searchChange is the prop = onSearchChange function that is defined in the App.js
				// This is how SearchBox communicates with the parent App: SearchBox triggers the event and the parent says "run the function"
			/>
		</div>
	);
}



export default SearchBox;