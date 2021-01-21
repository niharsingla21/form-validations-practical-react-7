import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class ValidationForm extends Component {
  state = initialState;

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "enter name";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.passwordError) {
      passwordError = "enter password";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.emailError}
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.passwordError}
        </div>
        <textarea
          value={
            this.state.name +
            " " +
            this.state.email +
            "   " +
            this.state.password
          }
          readOnly
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
