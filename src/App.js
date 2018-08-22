import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Search, Tooltip, SearchFilterButton, SearchLayoutButton } from 'carbon-components-react';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React123123</h1>
          <div style={{ marginTop: '2rem' }}>
            <Tooltip clickToOpen={false} triggerText="Tooltip label">
              <p className="bx--tooltip__label">
                Tooltip subdddtitle
</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
            </Tooltip>
          </div>
          <Button>Hello worsssld</Button>

          <div style={{ display: 'flex' }}>
            <Search
              className="search-input"
              name=""
              value=""
              labelText="Search"
              closeButtonLabelText=""
              placeHolderText="Search"
              id="search-1"
            />
            <SearchFilterButton />
            <SearchLayoutButton />
          </div>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
