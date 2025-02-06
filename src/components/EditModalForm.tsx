import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType } from '../interfaces'
import { editModalRemover, editProduct } from '../slices/crudSlice'
import { RootState } from '../store/store'

const EditModalForm = () => {
	const { isEditSection, currentProduct } = useSelector(
		(state: RootState) => state.crud
	)
	const [fields, setFields] = useState<ProductType>(
		currentProduct as ProductType
	)
	const { title, category, price, description } = fields
	const dispatch = useDispatch()

	useEffect(() => {
		setFields(currentProduct as ProductType)
	}, [currentProduct])

	// function send product to localStorage
	const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(editProduct(fields))
	}

	return (
		<>
			<div className={`edit-form-box ${isEditSection && 'show'}`}>
				<form onSubmit={handleEdit}>
					<div className='form-box'>
						<button
							className='remove-modal'
							type='button'
							onClick={() => dispatch(editModalRemover())}
						>
							x
						</button>
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
			<div className='modal-bg'></div>
		</>
	)
}

export default EditModalForm
