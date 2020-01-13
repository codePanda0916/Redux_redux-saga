import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; // 引入saga中间件
import reducer from './reducer';
const sagaMiddleware = createSagaMiddleware(); // 创建saga中间件

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
export default store;