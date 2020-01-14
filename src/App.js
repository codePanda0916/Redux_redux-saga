import React, { Fragment } from 'react';
import SetInput from './components/setInput/index';
import TodoList from './components/list/index';
import { getDataAction } from './store/actionCreator.js';
import store from './store/index';
import axios from 'axios';

class App extends React.Component {
  componentDidMount(){
    axios.get('https://www.fastmock.site/mock/3f94e62cde64a86aada771f535ea28b5/getList/api').then(res => {
      console.log(res,'res0-------')
      const data = res.data;
      const action = getDataAction(data);
      console.log('action=', action);
      store.dispatch(action);
    });
  }

  render(){
    return (
      <Fragment>
          <SetInput/>
          <TodoList/>
      </Fragment>
    );
  }
}

export default App;
