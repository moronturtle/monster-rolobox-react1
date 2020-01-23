import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));
  }

  render() {
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monster"
          onChange={e =>
            this.setState({ searchField: e.target.value }, () => {
              console.log(this.state.searchField);
            })
          }
        /> */}
        <h1>MOnster Rolodox</h1>
        <SearchBox
          placeholder="search  monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        {/* <CardList monster={this.state.monster} /> */}
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
