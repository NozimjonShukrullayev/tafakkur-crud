import { useDispatch, useSelector } from 'react-redux'
import { addSectionHandler, editProduct } from '../slices/createSlice'
import { RootState } from '../store/store'

interface PropsType {
	btnName: string
}

const AddBtn = ({ btnName }: PropsType) => {
	const dispatch = useDispatch()
	const { isEdit } = useSelector((state: RootState) => state.create)

	return (
		<div>
			<button
				className='add-btn'
				onClick={() =>
					isEdit ? dispatch(editProduct()) : dispatch(addSectionHandler())
				}
			>
				{btnName}
			</button>
		</div>
	)
}

export default AddBtn
