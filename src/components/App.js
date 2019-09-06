import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import UserNav from './Navbar/UserNav';
import KegList from './KegList/KegList';

function App() {
  return (
    <div className="App">
      <UserNav/>
      <Container>
        <KegList/>
      </Container>
    </div>
  );
}

export default App;
