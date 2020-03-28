import React from 'react';
import './App.css';
import Articles from './Articles';

class App extends React.Component {
  state = {
    query: '',
    author: '',
    date: '',
    list: [],
    querySubmitted: false,
    dropDown: '--choose--',
  }

updateInput = event => {
  console.log(event.target.name, event.target.value);
  this.setState({ 
    [event.target.name]: event.target.value,
  });
}

fetchData = () => {
  console.log(this.state.date);
  const query = this.state.query;
  const author = this.state.author;
  const byQuery = `query=${query}`;
  const byAuthor = `tags=author_${author}`;
  const queryURL = `http://hn.algolia.com/api/v1/search?${byQuery}`;
  const authorURL = `http://hn.algolia.com/api/v1/search?${byQuery}&${byAuthor}`;
  let url;
  if (!this.state.querySubmitted) {
    url = queryURL;
  } else {
    url = authorURL;
  }
  fetch(url).then(response => response.json())
  .then(json => {
    // console.log(json.hits);
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
      <div>
        { 
          this.state.querySubmitted ? '' :
          <form>
            <input name="query" onChange={ event => this.updateInput(event) } placeholder="Enter keyword" value={this.state.query}></input>
            <button onClick={ event => this.onSubmit(event) }>Submit</button>
          </form>
        }
      <div>
        { 
          this.state.querySubmitted ? 
          <form>
            <input name={this.state.dropDown} onChange={event => this.updateInput(event)} placeholder={
              this.state.dropDown === '--choose--'
              ? 'Search articles by' : `Enter ${this.state.dropDown}`
              } value={ this.state.value }>
              </input>
              <select onChange={event => this.handleChange(event)} value={this.state.value}>
                <option>--choose--</option>
                <option>author</option>
                <option>date</option>
              </select>
              <button onClick={event => this.onSubmit(event)}>Submit</button>
          </form> 
          : '' 
        }
      </div>
        <Articles list={this.state.list} />
      </div>
    </div>
  );
  }
}

export default App;
