import { configureStore } from '@reduxjs/toolkit'
import createProductReduser from '../slices/createSlice'
export const store = configureStore({
	reducer: { create: createProductReduser },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
