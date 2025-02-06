import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { ProductType } from '../interfaces'

export interface crudProductState {
	addSectionToggle: boolean
	isEditSection: boolean
	isReadSection: boolean
	products: ProductType[]
	currentProduct: ProductType | undefined
	search: string | undefined
}

const initialState: crudProductState = {
	addSectionToggle: false,
	isEditSection: false,
	isReadSection: false,
	products: JSON.parse(localStorage.getItem('products') as string) || [],
	currentProduct: { title: '', category: '', price: null, description: '' },
	search: '',
}

export const crudProductSlice = createSlice({
	name: 'crud',
	initialState,
	reducers: {
		// add form toggle
		addSectionHandler: state => {
			state.addSectionToggle = !state.addSectionToggle
		},
		// edit form toggle
		editSectionHandler: (state, action: PayloadAction<string | undefined>) => {
			state.isEditSection = true
			state.currentProduct = state.products.find(
				product => action.payload === product.id
			)
		},
		editModalRemover: state => {
			state.isEditSection = false
		},
		// create a new product
		createProduct: (state, action: PayloadAction<ProductType>) => {
			state.products.push(action.payload)
			localStorage.setItem('products', JSON.stringify(state.products))
			toast.success('product successfully created')
			state.addSectionToggle = false
		},
		// edit the custom product
		editProduct: (state, action: PayloadAction<ProductType>) => {
			state.products = state.products.map(product => {
				if (state.currentProduct?.id === product.id) {
					return { ...action.payload, id: state.currentProduct?.id }
				} else {
					return product
				}
			})
			toast.success('product successfully edited')
			localStorage.setItem('products', JSON.stringify(state.products))
			state.isEditSection = false
		},
		// delete product
		deleteProduct: (state, action: PayloadAction<string | undefined>) => {
			if (confirm('Are you sure?')) {
				state.products = state.products.filter(product => {
					if (action.payload === product.id) {
						return
					} else {
						return product
					}
				})
				toast.success('product successfully deleted')
				localStorage.setItem('products', JSON.stringify(state.products))
			}
		},
		// read product
		readProduct: (state, action: PayloadAction<string | undefined>) => {
			state.isReadSection = true
			state.currentProduct = state.products.find(
				product => action.payload === product.id
			)
		},
		readModalRemover: state => {
			state.isReadSection = false
		},
		// search product
		searchProduct: (state, action: PayloadAction<string>) => {
			state.search = action.payload
			let searchArr = []
			if (state.search.length > 0 || action.payload) {
				searchArr = state.products.filter(
					product =>
						product.title
							.toLowerCase()
							.includes(action.payload?.toLowerCase()) ||
						product.price
							?.toString()
							.toLowerCase()
							.includes(action.payload?.toLowerCase()) ||
						product.category
							.toLowerCase()
							.includes(action.payload?.toLowerCase())
				)
				state.products = searchArr
			} else {
				state.products = JSON.parse(localStorage.getItem('products') as string)
			}
		},
	},
})

export const {
	createProduct,
	addSectionHandler,
	editSectionHandler,
	editProduct,
	editModalRemover,
	deleteProduct,
	readProduct,
	readModalRemover,
	searchProduct,
} = crudProductSlice.actions
export default crudProductSlice.reducer
