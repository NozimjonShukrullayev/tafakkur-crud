import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType } from '../interfaces'
import { editProduct } from '../slices/createSlice'
import { RootState } from '../store/store'
import AddBtn from './AddBtn'

const EditModalForm = () => {
	const { editSectionToggle, currentProduct } = useSelector(
		(state: RootState) => state.create
	)
	const [fields, setFields] = useState<ProductType>(
		currentProduct as ProductType
	)

	useEffect(() => {
		setFields(currentProduct as ProductType)
	}, [currentProduct])

	const { title, category, price, description } = fields
	const dispatch = useDispatch()

	// function send product to localStorage
	const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(editProduct())
	}

	return (
		<div className={`edit-form-box ${editSectionToggle && 'show'}`}>
			<form onSubmit={handleEdit}>
				<div className='form-box'>
					<div className='form-inputs'>
						<input
							type='text'
							placeholder='title'
							name='title'
							value={title}
							required
							onChange={e =>
								setFields({ ...fields, title: e.target.value.trim() })
							}
						/>
						<input
							type='number'
							placeholder='price'
							name='price'
							value={price || ''}
							required
							onChange={e =>
								setFields({ ...fields, price: +e.target.value.trim() })
							}
						/>

						<input
							list='categories'
							type='text'
							placeholder='category'
							name='category'
							value={category}
							required
							onChange={e =>
								setFields({ ...fields, category: e.target.value.trim() })
							}
						/>
						<datalist id='categories'>
							<option value='mobile'></option>
							<option value='gaming'></option>
						</datalist>
					</div>
					<textarea
						name='description'
						id='description'
						placeholder='description'
						value={description}
						required
						onChange={e =>
							setFields({ ...fields, description: e.target.value.trim() })
						}
					></textarea>
				</div>
				<AddBtn btnName='Submit' />
			</form>
		</div>
	)
}

export default EditModalForm
