import React from 'react';

class SearchBy extends React.Component {
  state = {
    dropDown: '--choose--',
    query: ''
  }

  handleChange = event => {
    this.setState({ dropDown: event.target.value })
  }

  updateInput = event => {
    this.setState({ query: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ query: event.target.value });
    // console.log(this.state.query);
    this.props.updatelist(this.state.query);
    this.setState({ query: '' });
  }

  render() {
  return (
    <div>
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
      </form>
    </div>
  )
  }
}

export default SearchBy;