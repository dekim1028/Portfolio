import { Route } from 'react-router-dom';
import Page from './pages/Page';

function App() {
	return (
		<>
			<Route path="/Portfolio" component={Page} exact />
		</>
	);
}

export default App;
