import {createBrowserHistory} from 'history';
import {
	createStore,
	applyMiddleware,
	compose,
} from "redux";
import thunk from 'redux-thunk';
import createCartReducer from './reducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
	const store = createStore(
		createCartReducer(history),
		preloadedState,
		compose(
			applyMiddleware(
				// routerMiddleware(history),
				thunk,
				// ... other middlewares ...
			),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		),
	);
	return store
}