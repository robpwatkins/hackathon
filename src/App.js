import React from 'react';
import './App.css';
import Form from './Form';
import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    list: ''
  }

  componentDidMount() {
    fetch('http://hn.algolia.com/api/v1/search?query=foo&tags=story').then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
    })
  }

  updateList = () => {
    this.setState({ list: this.state.input })
    console.log(this.state.list);
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <Form updatelist={ this.updateList } />
        <ArticleList />
      </header>
    </div>
  );
  }
}

export default App;
