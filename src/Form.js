import React from 'react';
import ArticleList from './ArticleList';
import SearchBy from './SearchBy';

class Form extends React.Component {
  state = {
    query: '',
    list: [],
    querySubmitted: false
  }

updateInput = event => {
  this.setState({ query: event.target.value });
}

fetchData = () => {
  // this.setState({ query: this.props.listchoice });
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
  // console.log(this.state.query);
  // this.props.updatelist(this.state.input);
  // this.props.updatelist(this.state.list);
  this.fetchData();
  this.setState({ query: '' });

}

  render() {
    return (
      <div>
        Article Search:
        <form>
          <input onChange={ event => this.updateInput(event) } placeholder="Enter keyword" value={this.state.query}></input>
          <button onClick={ event => this.onSubmit(event) }>Search</button>
        </form>
        <SearchBy />
        <ArticleList list={this.state.list} />
      </div>
    );
  }
}

export default Form;