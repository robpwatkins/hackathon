import React from 'react';

class ArticleList extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    fetch('http://hn.algolia.com/api/v1/search?tags=author_moe').then(response => {
      return response.json();
    }).then(json => {
      this.setState({ list: [...json.hits] });
      console.log(this.state.list[0]);
    })
  }

  render() {
    // console.log(this.state.list);
  return (
    <div>
      { this.state.list.map((article, i) => {
        return (
          <div key={i} className="article">
            <h3>{article.title}</h3>
            <h4>Author: {article.author}</h4>
            <h4>{article.url}</h4>
          </div>
        )
      }) }
    </div>
  )
  }
}

export default ArticleList;