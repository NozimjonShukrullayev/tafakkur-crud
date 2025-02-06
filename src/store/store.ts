import { configureStore } from '@reduxjs/toolkit'
import crudProductReduser from '../slices/crudSlice'
export const store = configureStore({
	reducer: { crud: crudProductReduser },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
