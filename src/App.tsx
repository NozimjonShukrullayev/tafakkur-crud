import AddForm from './components/AddForm'
import AddToggleBtn from './components/AddToggleBtn'
import EditModalForm from './components/EditModalForm'
import ReadModal from './components/ReadModal'
import Search from './components/Search'
import Table from './components/Table'

function App() {
	return (
		<div id='app-container'>
			<h1>CRUD Management</h1>
			<div className='section-header'>
				<Search />
				<AddToggleBtn />
			</div>
			<div>
				<AddForm />
				<EditModalForm />
				<ReadModal />
			</div>
			<div>
				<Table />
			</div>
		</div>
	)
}

export default App
