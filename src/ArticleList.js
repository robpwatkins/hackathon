import React from 'react';

class ArticleList extends React.Component {
  state = {
    query: '',
    list: []
  }

  render() {
  return (
    <div>
      { this.props.listchoice.map((article, i) => {
        return (
          <div key={i} className="article">
            <h3>{article.title}</h3>
            <h5>Author: {article.author}</h5>
            <h6>{article.url}</h6>
          </div>
        )
      }) }
    </div>
  )
  }
}

export default ArticleList;