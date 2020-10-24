import React from 'react';
// router
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
	<Router>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/:movieId" component={Movie} />
			<Route path="*" component={NotFound} />
		</Switch>
		<GlobalStyle />
	</Router>
);

export default App;
