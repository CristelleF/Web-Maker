import React, {Component} from 'react';

 export default class Login extends Component {
  render() {
    return (
      <div class="container">
      <h1> Login</h1>
      <form>
          <div class="form-group">
              <label for="username">Username</label>
              <input placeholder="Enter Username here..." class="form-control" type="text" id="username" name="username"/>
               
          </div>
          <div class="form-group">
              <label for="password">Password</label>
              <input placeholder="Enter your Password here..." type="password" class="form-control" id="password" name="password"/>
               
          </div>
           <a class="btn btn-primary btn-block" href="profile.html">Login</a>
           <a class="btn btn-success btn-block" href="register.html">Register</a>

      </form>
  </div> 

      
    )
  }
 }
