import React from 'react';

function SearchBy (props) {
  return (
    <div>
      <form>
        <input></input>
          <select>
            <option>Author</option>
            <option>Date</option>
          </select>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBy;