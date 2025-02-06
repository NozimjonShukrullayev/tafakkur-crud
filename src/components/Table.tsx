import { useDispatch, useSelector } from 'react-redux'
import { DeleteIcon, EditIcon, VisibilityIcon } from '../assets'
import {
	deleteProduct,
	editSectionHandler,
	readProduct,
} from '../slices/crudSlice'
import { RootState } from '../store/store'

const Table = () => {
	const { products } = useSelector((state: RootState) => state.crud)
	const dispatch = useDispatch()

	return (
		<div>
			<table className='products-table ' border={0}>
				<thead className='table-head'>
					<tr>
						<th></th>
						<th>Title</th>
						<th>Category</th>
						<th>Price</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody className='table-body'>
					{products.length ? (
						<>
							{products.map((product, idx) => (
								<tr key={product.id}>
									<td>{idx + 1}</td>
									<td>{product.title}</td>
									<td>{product.category}</td>
									<td>{product.price}$</td>
									<td>{product.description}</td>
									<td className='table-action'>
										<img
											src={EditIcon}
											alt='edit-icon'
											onClick={() =>
												dispatch(editSectionHandler(product.id as string))
											}
										/>
										<img
											src={DeleteIcon}
											alt='delete-icon'
											onClick={() =>
												dispatch(deleteProduct(product.id as string))
											}
										/>
										<img
											src={VisibilityIcon}
											alt='visibility-icon'
											onClick={() =>
												dispatch(readProduct(product.id as string))
											}
										/>
									</td>
								</tr>
							))}
						</>
					) : (
						<tr className='empty-row'>
							<td>Table is empty. Please, create product</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default Table
