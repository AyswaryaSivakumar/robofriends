import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onsearch }) => {
	return(
		<div className='pa2'>
			<input 
				id='search'
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={onsearch} />
		</div>
	);
}

export default SearchBox;