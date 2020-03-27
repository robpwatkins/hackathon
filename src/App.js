import React from 'react';
import './App.css';
import Form from './Form';
// import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    listChoice: []
  }

  updateList = (props) => {
    this.setState({ listChoice: [...props] })
    console.log(this.state.listChoice);
  }

  render () {
  return (
    <div className="App">
      <Form updatelist={ this.updateList } />
    </div>
  );
  }
}

export default App;
