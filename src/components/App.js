import React from 'react';
import { Route, Switch } from 'react-router-dom'
import '../App.css';
import Container from 'react-bootstrap/Container';
import UserNav from './Navbar/UserNav';
import KegList from './KegList/KegList';
import KegListEmployee from './KegList/KegListEmployee';

function App() {
  return (
    <div className="App">
      <UserNav/>
      <Container>
        <Switch>
          <Route exact path='/' component={KegList}/>
          <Route exact path='/employee' component={KegListEmployee}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
