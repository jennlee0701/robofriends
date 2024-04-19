import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div>
		   {
			    robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					);
				})
	// When doing a loop, key is in need so React will know which Card is which
		    }
		 </div>
	)
}

export default CardList;