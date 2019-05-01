import React, { Component } from 'react'

export default class WebsiteList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
        <a href="../user/profile.html"><i className="fas fa-chevron-left"></i></a><span className="navbar-brand mb-0 h1">Websites<a href="website-new.html"></span><i className="fas fa-plus"></i></a>
      </nav>
      <section className="container">
            <ul className="list-group">
              <li className="list-group-item">
                  <a href="../page/page-list.html"> Address Book App</a>
                  <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
              </li>
              <li className="list-group-item">
                  <a href="../page/page-list.html"> Blogger</a>
                  <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
              </li>
        
              <li className="list-group-item">
                  <a href="../page/page-list.html"> Blogging App</a>
                  <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
              </li>
              <li className="list-group-item">
                  <a href="../page/page-list.html"> Script Testing App</a>
                  <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
              </li>
      </ul>
      </section>
                  <nav className="navbar navbar-dark bg-primary fixed-bottom">
                        <span className="navbar-brand mb-0 h1"></span>
                        <a href="profile.html"><i className="fas fa-user"></i></a>
                      </nav>
      </div>
    )
  }
}

