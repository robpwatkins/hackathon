import React from 'react';

function TestForm (props) {
  return (
    <div>
      <form>
        <input onChange={event => props.testupdate(event.target.value)} value={props.test}></input>
        <button onClick={event => props.testsubmit(event)}>test it</button>
      </form>
    </div>
  )
}

export default TestForm;