import React from 'react';

class Form extends React.Component {
  state = {
    query: '',
    list: []
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
  this.setState({ query: event.target.value })
  // console.log(this.state.query);
  // this.props.updatelist(this.state.input);
  this.props.updatelist(this.state.list);
  this.fetchData();
  this.setState({ query: '' });

}

  render() {
    return (
      <div>
        <form>
          <input onChange={ event => this.updateInput(event) } placeholder="type something" value={this.state.query}></input>
          <button onClick={ event => this.onSubmit(event) }>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;