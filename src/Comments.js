import React, { Component } from 'react';

import api from './api.js';


class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        };
    }


    componentDidMount() {
        let { id } = this.props;

        api.get(`/articles/${id}/comments`).then(({ data }) => {

            this.setState({
                loaded: true,
                comments: data.data,
            });
        });
    }

    render () {
        let { loaded, comments } = this.state;

        return !loaded ? <p>Loading ...</p> : (
            <>
                <h2> Comments </h2>
                <ul className="list-group">
                    { comments.map(comment => (
                        <li key={ comment.id }
                        className="list-group-item"
                        >
                            <p className="list-group-item-text">{ comment.comment }</p>
                        </li>
                    ))}
                    </ul>
            </>
        );       
    }
}

export default Comments;