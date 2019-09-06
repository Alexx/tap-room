import React from 'react';
import { Route, Switch } from 'react-router-dom'
import '../App.css';
import Container from 'react-bootstrap/Container';
import UserNav from './Navbar/UserNav';
import KegList from './KegList/KegList';

function App() {
  return (
    <div className="App">
      <UserNav/>
      <Container>
            <Route exact path='/' component={KegList}/>
            <Route exact path='/employee' component={UserNav}/>
      </Container>
    </div>
  );
}

export default App;
