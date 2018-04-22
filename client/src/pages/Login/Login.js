import React from 'react';
import { Input, FormBtn } from '../../components/Form';
import API from '../../utils/API';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  loginSubmit = event => {
    event.preventDefault();
    API.login({
      email: this.state.email,
      password: this.state.password
    })
      .then(res =>
        this.setState({ email: '', password: '' })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h1>Login</h1>
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Test@example.com"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
                type="password"
              />
              <FormBtn onClick={this.loginSubmit}>Submit</FormBtn>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
