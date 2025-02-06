import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../interfaces'

export interface createProductState {
	addSectionToggle: boolean
	editSectionToggle: boolean
	products: ProductType[]
	currentProduct: ProductType | undefined
	isEdit: boolean
}

const initialState: createProductState = {
	addSectionToggle: false,
	editSectionToggle: false,
	products: JSON.parse(localStorage.getItem('products') as string) || [],
	currentProduct: { title: '', category: '', price: null, description: '' },
	isEdit: false,
}

export const createProductSlice = createSlice({
	name: 'create',
	initialState,
	reducers: {
		// add form toggle
		addSectionHandler: state => {
			state.addSectionToggle = !state.addSectionToggle
		},
		// edit form toggle
		editSectionHandler: (state, action: PayloadAction<string>) => {
			state.editSectionToggle = !state.editSectionToggle
			state.currentProduct = state.products.find(
				product => action.payload === product.id
			)
		},
		// create a new product
		createProduct: (state, action: PayloadAction<ProductType>) => {
			state.products.push(action.payload)
			localStorage.setItem('products', JSON.stringify(state.products))
		},
		// edit the custom product
		editProduct: state => {
			state.isEdit = true
			// console.log(action.payload, state.currentProduct)

			// state.products = state.products.filter(product => {
			// 	if (product) {
			// 		return { ...action.payload, id: state.currentProduct?.id }
			// 	} else {
			// 		return
			// 	}
			// })
		},
	},
})

export const {
	createProduct,
	addSectionHandler,
	editSectionHandler,
	editProduct,
} = createProductSlice.actions
export default createProductSlice.reducer
