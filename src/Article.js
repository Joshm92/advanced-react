import React, { Component } from 'react';
import api from './api.js';
import Comments from './Comments.js'

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            notFound: false,
            article: {},
        };
    }

    componentDidMount() { 
        api.get(`/articles/${this.props.id}`).then(({ data }) => {

            this.setState({
                loaded: true,
                article: data.data,
            });
        });  
    } 

    render () {
        let { loaded, article, notFound } = this.state;
        let { id } = this.props;

        return !loaded ? <p>Loading ...</p> : (notFound ? <p>Not Found</p> : (
            <>
                <h2> {article.title} </h2>
                <p> {article.article} </p>
                <Comments Id={ id } />
            </>
            ));
        }
}


export default Article;