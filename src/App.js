import './App.css'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import store from './store/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ChocolateContainer from './components/ChocolateContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <ItemContainer cake />
				<ItemContainer /> */}
				{/* <CakeContainer />
				<HooksCakeContainer />
				<IceCreamContainer />
				<ChocolateContainer />
				<NewCakeContainer /> */}
				<UserContainer />
			</div>
		</Provider>
	)
}

export default App
