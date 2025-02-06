import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { ProductType } from '../interfaces'
import { createProduct } from '../slices/crudSlice'
import { RootState } from '../store/store'

const AddForm = () => {
	const initialState = {
		title: '',
		category: '',
		price: null,
		description: '',
	}
	const [fields, setFields] = useState<ProductType>(initialState)
	const { title, category, price, description } = fields
	const { addSectionToggle } = useSelector((state: RootState) => state.crud)
	const dispatch = useDispatch()

	// function send product to localStorage
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(createProduct({ ...fields, id: uuidv4() }))
		setFields(initialState)
	}

	return (
		<div className={`section-form-box ${addSectionToggle && 'show'}`}>
			<form onSubmit={handleSubmit}>
				<div className='form-box'>
					<div className='form-inputs'>
						<input
							type='text'
							placeholder='title'
							name='title'
							value={title}
							required
							onChange={e => setFields({ ...fields, title: e.target.value })}
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
							setFields({ ...fields, description: e.target.value })
						}
					></textarea>
				</div>
				<button className='add-btn'>Submit</button>
			</form>
		</div>
	)
}

export default AddForm
