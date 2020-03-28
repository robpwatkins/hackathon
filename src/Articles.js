import React from 'react';

class Articles extends React.Component {
  state = {
    query: '',
    list: []
  }

  render() {
  return (
    <div>
      { this.props.list.map((article, i) => {
        return (
          <div key={i} className="article">
            <h3>{article.title}</h3>
            <h5>Author: {article.author}</h5>
            <a href={article.url}>
              <h6>{article.url}</h6>
            </a>
          </div>
        )
      }) }
    </div>
  )
  }
}

export default Articles;