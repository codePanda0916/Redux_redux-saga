import { takeEvery } from 'redux-saga/effects';
// import axios from 'axios';
import * as Action from './actions';
// import { getDataAction } from './actionCreator';

function* getList(){
  // const res = yield axios.get('https://www.fastmock.site/mock/3f94e62cde64a86aada771f535ea28b5/getList/api');
  // console.log(res,'res-----')
  // const action = getDataAction();
  // yield put(action);
}

function* mySaga(){
  yield takeEvery(Action.GET_DATA, getList);
}

export default mySaga;