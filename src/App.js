import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import store from './store/store'
import HooksCakeContsainer from './components/HooksCakeContsainer'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CakeContainer />
				<HooksCakeContsainer />
			</div>
		</Provider>
	)
}

export default App
