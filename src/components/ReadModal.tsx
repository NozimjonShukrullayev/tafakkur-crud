import { useDispatch, useSelector } from 'react-redux'
import { readModalRemover } from '../slices/crudSlice'
import { RootState } from '../store/store'

const ReadModal = () => {
	const { currentProduct, isReadSection } = useSelector(
		(state: RootState) => state.crud
	)
	const dispatch = useDispatch()

	return (
		<>
			<div className={`read-modal-box ${isReadSection && 'show'}`}>
				<div>
					<div className='read-box'>
						<button
							className='remove-modal'
							type='button'
							onClick={() => dispatch(readModalRemover())}
						>
							x
						</button>
						<div className='read-modal'>
							<ul>
								<li>
									<p>title: {currentProduct?.title}</p>
								</li>
								<li>
									<p>price: {currentProduct?.price}</p>
								</li>
								<li>
									<p>category: {currentProduct?.category}</p>
								</li>
							</ul>
							<div>
								<h3>description</h3>
								<p>{currentProduct?.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='modal-bg'></div>
		</>
	)
}

export default ReadModal
