import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import RootEpics from './epics';
import RootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();
let middlewares = [epicMiddleware];

const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  const loggerMiddleware = createLogger();
  middlewares = [...middlewares, loggerMiddleware];
}

const store = isDev
  ? createStore(
    RootReducer,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  )
  : createStore(RootReducer, applyMiddleware(...middlewares));

epicMiddleware.run(RootEpics);

export default store;
