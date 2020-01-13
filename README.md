# redux + redux-saga
执行以下可进行查看浏览页面
```javascript
cnpm install
npm start
```
### redux-saga的安装
```javascript
cnpm install --save redux-saga
```
### 引入并创建redux-saga
```javascript
import createSagaMiddleware from 'redux-saga';  // 引入saga
const sagaMiddleware = createSagaMiddleware();  // 创建saga中间件
```