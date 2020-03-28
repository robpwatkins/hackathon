import React from 'react';
import './App.css';
import Articles from './Articles';

class App extends React.Component {
  state = {
    query: '',
    list: [],
    querySubmitted: false
  }

updateInput = event => {
  this.setState({ query: event.target.value });
}

fetchData = () => {
  const query = this.state.query;
  const url = `http://hn.algolia.com/api/v1/search?query=${query}`;
  fetch(url).then(response => response.json())
  .then(json => {
    this.setState({ list: [...json.hits] })
  })
}

onSubmit = (event) => {
  event.preventDefault();
  this.setState({ 
    query: event.target.value,
    querySubmitted: true
   })
  this.fetchData();
  this.setState({ query: '' });
}

queryByAuthorDate = props => {
  this.setState({ query: props })
  this.fetchData();
}

  render () {
  return (
    <div className="App">
      <div>
        { this.state.querySubmitted ? '' :
          <form>
            <input onChange={ event => this.updateInput(event) } placeholder="Enter keyword" value={this.state.query}></input>
            <button onClick={ event => this.onSubmit(event) }>Submit</button>
          </form>
        }
      <div>
        { this.state.querySubmitted ? 
          <form>
          <input onChange={this.updateInput} placeholder={
            this.state.dropDown === '--choose--'
            ? 'Search articles by' : `Enter ${this.state.dropDown}`
            } value={ this.state.query }>
            </input>
            <select onChange={this.handleChange} value={this.state.value}>
              <option>--choose--</option>
              <option>author</option>
              <option>date</option>
            </select>
            <button onClick={event => this.onSubmit(event)}>Submit</button>
        </form> : ''
        }
      </div>
        <Articles list={this.state.list} />
      </div>
    </div>
  );
  }
}

export default App;
