import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Table from './Table';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'
import {connect} from 'react-redux'
import { getData } from './action/action';

function App(props) {
  return (
    <div className="App"> {props.data.user.length === 0 ?<Form onLogin={() => props.onLogin()} /> :<Table data={props.data}/> }</div>

  );
}
const mapStateToProps = (state, props) => ({
      data:state.login.data
})
const mapDispatchToProps = (dispatch, props) =>  ({
      onLogin:()=>dispatch(getData(true))
})

export default connect (mapStateToProps, mapDispatchToProps)(App)
