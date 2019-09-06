import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
import UserNav from './Navbar/UserNav';
import KegList from './KegList/KegList';
import KegListEmployee from './KegListEmployee/KegListEmployee';
import KegAdd from './KegAdd/KegAdd';

function App() {
  return (
    <div className="App">
      <UserNav/>
      <Container>
        <Switch>
          <Route exact path='/' component={KegList}/>
          <Route exact path='/employee' component={KegListEmployee}/>
          <Route exact path='/keg_add' component={KegAdd}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
