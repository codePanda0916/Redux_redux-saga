import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; // 引入saga中间件
import mySaga from './sagas';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware(); // 创建saga中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga);
export default store;