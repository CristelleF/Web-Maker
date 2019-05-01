import React, { Component } from 'react'

export default class HeadingImage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
      <a href="widget-list.html"><i className="fas fa-chevron-left"></i></a>
      <span className="navbar-brand mb-0 h1">Widget Edit</span>
      <a href="widget-list.html"><i className="fas fa-check"></i></a>
    </nav>
    <div className="container">
      <form>
        <div className="form-group">
          <label for="Name">Name</label>
          <input
            placeholder="Enter widget name here..."
            name="name"
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label for="text">Text</label>
          <input
            placeholder="Enter text description of this image(optional)"
            className="form-control"
            type="text"
            name="text"
            id="text">

        </div>
        <div className="form-group">
          <label for="url">URL</label>
          <input
            placeholder="Enter image location here..." name="url" id="url" type="text"
            className="form-control">
        </div>
        <div className="form-group">
          <label for="width">Width</label>
          <div className="input-group">
          <input className="form-control"  placeholder="Image Width" type="number">
          <div className="input-group-append">
            <span className="input-group-text">%</span>
            </div>
            </div>
        <div className="form-group">
          <label for="file">File</label>
          <input name="file" id="file" type="file" className="form-control">
            </div>  
            <a href="login.html" className="btn btn-primary btn-block">Upload Image</a>
            <a href="login.html" className="btn btn-danger btn-block">Delete</a>   
          </form>
    </div>
    <nav className="navbar navbar-light fixed-bottom bg-light">
      <div className="full-width">
          <a className="float-right" href="../user/profile.html"><i className="fas fa-user text-primary"></i></a>
      </div>
  </nav>
      </div>
    )
  }
}
