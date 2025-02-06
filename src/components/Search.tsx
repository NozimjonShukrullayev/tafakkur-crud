import { SearchIcon } from '../assets'

const Search = () => {
	return (
		<div>
			<div className='search-bar'>
				<img src={SearchIcon} alt='search-icon' />
				<input type='text' placeholder='Search product' />
			</div>
		</div>
	)
}

export default Search
