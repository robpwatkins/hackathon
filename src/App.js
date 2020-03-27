import React from 'react';
import './App.css';
import Form from './Form';
import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    listChoice: ''
  }

  componentDidMount() {
    fetch('http://hn.algolia.com/api/v1/search?query=foo&tags=story').then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
    })
  }

  updateList = (props) => {
    this.setState({ listChoice: props })
    console.log(this.state.list);
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <Form updatelist={ this.updateList } />
        <ArticleList listchoice={ this.state.listChoice } />
      </header>
    </div>
  );
  }
}

export default App;
