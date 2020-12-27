import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IntroducePage from './pages/IntroducePage';
import SkillPage from './pages/SkillPage';

function App() {
	return (
		<>
			<Route path="/" component={MainPage} exact />
			<Route path="/introduce" component={IntroducePage} />
			<Route path="/skill" component={SkillPage} />
		</>
	);
}

export default App;
