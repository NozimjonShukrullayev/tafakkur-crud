import { useDispatch, useSelector } from 'react-redux'
import { SearchIcon } from '../assets'
import { searchProduct } from '../slices/crudSlice'
import { RootState } from '../store/store'

const Search = () => {
	const dispatch = useDispatch()
	const { search } = useSelector((state: RootState) => state.crud)

	return (
		<div>
			<div className='search-bar'>
				<img src={SearchIcon} alt='search-icon' />
				<input
					type='text'
					placeholder='Search product'
					value={search}
					onChange={e => dispatch(searchProduct(e.target.value))}
				/>
			</div>
		</div>
	)
}

export default Search
