import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IntroducePage from './pages/IntroducePage';

function App() {
	return (
		<>
			<Route path="/" component={MainPage} exact />
			<Route path="/introduce" component={IntroducePage} />
		</>
	);
}

export default App;
