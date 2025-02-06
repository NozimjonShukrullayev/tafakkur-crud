import { useDispatch } from 'react-redux'
import { addSectionHandler } from '../slices/crudSlice'

const AddToggleBtn = () => {
	const dispatch = useDispatch()

	return (
		<button className='add-btn' onClick={() => dispatch(addSectionHandler())}>
			Add product +
		</button>
	)
}

export default AddToggleBtn
