import React from 'react';
import { Input, FormBtn } from '../../components/Form';
import API from '../../utils/API';

class SignUp extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };

  processForm = event => {
    event.preventDefault();
    API.signUp({
      firstName: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
      .then(res =>
        this.setState({ firstName: '', lastName: '', email: '', password: '' })
      )
      .catch(err => console.log(err));
  };

  testForm = event => {
    event.preventDefault();
    API.signUpGet()
      .then(res =>
        console.log("SIGNUPGET")
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
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
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
              <FormBtn onClick={this.testForm}>Submit</FormBtn>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
