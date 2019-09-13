import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
import UserNav from './Navbar/UserNav';
import KegList from './KegList/KegList';
import KegListEmployee from './KegListEmployee/KegListEmployee';
import KegAdd from './KegAdd/KegAdd';
import KegEdit from './KegEdit/KegEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kegData: [
        {
          id: 1,
          name: 'Hyper Bomb',
          brand: 'Galax',
          price: 3.99,
          alcoholContent: 7,
          inventory: 75
        },
        {
          id: 2,
          name: 'Tracks',
          brand: 'Green Woods',
          price: 3.79,
          alcoholContent: 6,
          inventory: 103
        },
        {
          id: 3,
          name: 'Cashin',
          brand: 'Pimplin',
          price: 5.29,
          alcoholContent: 8,
          inventory: 63
        },
        {
          id: 4,
          name: 'Sasquatch',
          brand: 'Twisties',
          price: 4.19,
          alcoholContent: 9,
          inventory: 10
        },
      ]
    };
  }

  handleSellPint = (kegId) => {
    const newKegData = this.state.kegData;
    if (newKegData.find(x => x.id === kegId).inventory - 1 >= 0) {
      newKegData.find(x => x.id === kegId).inventory = newKegData.find(x => x.id === kegId).inventory - 1;
      this.setState(
        {
          kegData: newKegData
        }
      );
    }
  };

  render() {
    return (
      <div className="App">
        <UserNav/>
        <Container>
          <Switch>
            <Route exact path='/' render={() => <KegList kegData={this.state.kegData}/>}/>
            <Route exact path='/employee'
                   render={() => <KegListEmployee kegData={this.state.kegData} onSellPint={this.handleSellPint}/>}/>
            <Route exact path='/keg_add' render={() => <KegAdd kegData={this.state.kegData}/>}/>
            <Route exact path='/keg_edit' component={KegEdit}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
