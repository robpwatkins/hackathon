import React from 'react';

class SearchBy extends React.Component {
  state = {
    dropDown: '--choose--'
  }

  handleChange = event => {
    this.setState({ dropDown: event.target.value })
    console.log(this.state.dropDown);
  }

  render() {
  return (
    <div>
      <form>
        <input placeholder={
          this.state.dropDown === '--choose--'
          ? 'Search articles by' : `Enter ${this.state.dropDown}`
          }>
          </input>
          <select onChange={this.handleChange} value={this.state.value}>
            <option>--choose--</option>
            <option>author</option>
            <option>date</option>
          </select>
          <button>Submit</button>
      </form>
    </div>
  )
  }
}

export default SearchBy;