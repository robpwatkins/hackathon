import React from 'react';

class Form extends React.Component {
  state = {
    input: '',
    isClicked: false
  }

updateInput = event => {
  this.setState({ input: event.target.value });
  // console.log(this.state.input);
}

onSubmit = event => {
  event.preventDefault();
  this.setState({ input: event.target.value });
  // console.log(this.state.input);
  this.setState({ input: '' });

}

  render() {
    return (
      <div>
        <form>
          <input onChange={ event => this.updateInput(event) } placeholder="type something" value={this.state.input}></input>
          <button onClick={ event => this.onSubmit(event) }>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;