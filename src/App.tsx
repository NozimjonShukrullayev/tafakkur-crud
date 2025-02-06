import AddBtn from './components/AddBtn'
import AddForm from './components/AddForm'
import EditModalForm from './components/EditModalForm'
import Search from './components/Search'
import Table from './components/Table'

function App() {
	return (
		<div id='app-container'>
			<h1>CRUD Management</h1>
			<div className='section-header'>
				<Search />
				<AddBtn btnName='Add product +' />
			</div>
			<div>
				<AddForm />
				<EditModalForm />
			</div>
			<div>
				<Table />
			</div>
		</div>
	)
}

export default App
