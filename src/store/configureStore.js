import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from '../reducers/todos';
import visibilityReducer from '../reducers/visibility';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        combineReducers({
            todos: todosReducer,
            visibility: visibilityReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        );
};


