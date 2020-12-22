import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
	return (
		<>
			<Route path="/" component={MainPage} exact />
		</>
	);
}

export default App;
