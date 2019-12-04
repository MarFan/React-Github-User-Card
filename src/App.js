import React from 'react';
import axios from 'axios';

import HeaderMenu from './components/HeaderMenu';
import UserCard from './components/UserCard';
import UserFollowers from './components/UserFollowersList';

import { Container, Grid } from 'semantic-ui-react'

import './App.css';

class App extends React.Component {
  state = {
    myDetails: [],
    myFollowers: [],
    userSearches: [],
    currentUser: ''
  }

  componentDidMount() {
    // get my details
    axios.get('https://api.github.com/users/marfan')
      .then(res => this.setState({myDetails: res.data}));

    //get my followers
    axios.get('https://api.github.com/users/MarFan/followers')
      .then(res => this.setState({myFollowers: res.data}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      this.setState({userSearches: [...this.state.userSearches, this.state.currentUser]});
      // Get new User Info
      axios.get(`https://api.github.com/users/${this.state.currentUser}`)
        .then(res => this.setState({myDetails: res.data}));

      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
        .then(res => this.setState({myFollowers: res.data}));
    }
  }

  searchUsers = search => {
    this.setState({currentUser: search});
  }

  render() {
    return (
      <>
        <HeaderMenu searchUsers={this.searchUsers} searches={this.state.userSearches} />
        <Container className="App">
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <UserCard myDetails={this.state.myDetails} />
              </Grid.Column>
              <Grid.Column width={10}>
                <UserFollowers myFollowers={this.state.myFollowers} searchUsers={this.searchUsers} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
