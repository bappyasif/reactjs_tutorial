import React, { Component } from 'react'
import { PostForm } from './PostForm'
import { PostsWithGetRequest } from './PostsWithGetRequest'

export class HttpRequestContainerComponent extends Component {
    render() {
        return (
            <div>
                <h4>HTTP Requests</h4>
                <PostsWithGetRequest />
                <PostForm />
            </div>
        )
    }
}
