import * as Actions from './actions';

export const gotDataMiddleware = store => next => action => {
	if (action.type === Actions.ADD_GOOD_IN_BASKET) {
		alert("------------!");
		// store.dispatch(ACT.DATA_TASK_UPDATE)
	}
	return next(action);
};