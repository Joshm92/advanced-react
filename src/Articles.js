import React, { Component } from 'react';
import { Link } from "react-router-dom"
import api from './api.js';

class Articles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        };
    }

    componentDidMount() {
        api.get("/articles").then(({ data }) => {

            this.setState({
                loaded: true,
                articles: data.data,
            });
        }); 
    }

    render () {
    let { articles, loaded } = this.state;

    return !loaded ? <p>Loading ...</p> : (
        <>
            <h2> My Articles </h2>
            <ul className="list-group">
            { articles.map(article => (
                <li 
                key={ article.id }
                className="list-group-item"
                >
                    <Link to={`/articles/${article.id}`}> { article.title } </Link>
                </li>     
            ))}
            </ul>
        </>        
    );
  }
}

export default Articles;