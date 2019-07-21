import {
    createStore,
    applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';

// import fetchMiddleware from './middleware/fetchMiddleware';
import reducer from './reducer/reducers';

export const history = createHistory();

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});

const enhancer = composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
    )
);

export default function configStore(initialState) {
    const store = createStore(reducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('./reducer/reducers', () =>
            store.replaceReducer(require('./reducer/reducers').default)
        );
    }
    return store;
}