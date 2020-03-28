import React from 'react';
import './App.css';
import Articles from './Articles';

class App extends React.Component {
  state = {
    query: '',
    author: '',
    querySubmitted: false,
    dropDown: '--choose--',
    list: [],
  }

  updateInput = event => {
    this.setState({ 
      [event.target.name]: event.target.value,
    });
  }

  fetchData = () => {
    const query = this.state.query;
    const author = this.state.author;
    const queryURL = `http://hn.algolia.com/api/v1/search?query=${query}`;
    const authorURL = `${queryURL}&tags=author_${author}`;
    const dateURL = `http://hn.algolia.com/api/v1/search_by_date?query=${query}`;
    let url;
    if (this.state.dropDown === '--choose--') {
      url = queryURL;
    } else {
      if (this.state.dropDown === 'author') {
      url = authorURL;
      } else {
        url = dateURL;
        console.log(this.state.list);
      }
    }
    fetch(url).then(response => response.json())
    .then(json => {
      this.setState({ list: [...json.hits] })
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ 
      [event.target.name]: event.target.value,
      querySubmitted: true
    })
    this.fetchData();
    this.setState({ 
      author: ''
    });
  }

  handleChange = event => {
    this.setState({ dropDown: event.target.value })
  }

  render () {
    return (
      <div className="App">
        { 
          !this.state.querySubmitted &&
          <form>
            <input name="query" onChange={ event => this.updateInput(event) } placeholder="Enter keyword" value={this.state.query}></input>
            <button onClick={ event => this.onSubmit(event) }>Submit</button>
          </form>
        }
        { 
          this.state.querySubmitted && 
          <form>
            <input name={this.state.dropDown} onChange={event => this.updateInput(event)} placeholder={
              this.state.dropDown === '--choose--'
              ? 'Search articles by' : `Enter ${this.state.dropDown}`
              } value={ this.state.author }>
              </input>
              <select onChange={event => this.handleChange(event)} >
                <option>--choose--</option>
                <option>author</option>
                <option>date</option>
              </select>
              <button onClick={event => this.onSubmit(event)}>Submit</button>
          </form>
        }
        <Articles list={this.state.list} />
      </div>
    );
  }
}

export default App;
