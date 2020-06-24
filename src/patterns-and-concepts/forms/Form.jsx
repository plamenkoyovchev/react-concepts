import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("state", this.state);
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          name="name"
          value={this.state.value}
          onChange={this.onChangeHandler}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.onChangeHandler}
          placeholder="Age"
        />
        <select
          name="gender"
          value={this.state.gender}
          onChange={this.onChangeHandler}
        >
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
