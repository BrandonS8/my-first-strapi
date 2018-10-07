import React, { Component } from 'react'
import axios from 'axios'
import './BlogPosts.css'
class BlogPosts extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:1337/posts').then(res => {
      this.setState({
        posts: res.data
      })
    })
  }
  render() {
    let posts = this.state.posts.map((post, i) => {
      return (
        <div className="post" key={i}>
          <h2>{post.Title}</h2>
          <p>{post.Content}</p>
          <p>Author: {post.user.username}</p>
        </div>
      )
    })
    return (
      <div>
        <h1>Blog Posts</h1>
        {posts}
      </div>
    )
  }
}

export default BlogPosts
