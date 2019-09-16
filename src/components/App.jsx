import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
import UserNav from './Navbar/UserNav';
import KegList from './KegList/KegList';
import KegListEmployee from './KegListEmployee/KegListEmployee';
import KegAdd from './KegAdd/KegAdd';
import KegEdit from './KegEdit/KegEdit';
import { useSelector } from 'react-redux';

function App() {
  const kegData = useSelector(state => state.kegData);

    return (
      <div className="App">
        <UserNav/>
        <Container>
          <Switch>
            <Route exact path='/' component={KegList} />
            <Route exact path='/employee' component={KegListEmployee}/>
            <Route exact path='/keg_add' component={KegAdd}/>
            <Route exact path='/keg_edit' component={KegEdit}/>
          </Switch>
        </Container>
      </div>
    );
}

export default App;
