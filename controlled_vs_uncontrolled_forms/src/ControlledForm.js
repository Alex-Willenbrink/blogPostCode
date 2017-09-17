import React, { Component } from "react";

class ControlledForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      gender: "male",
      color: "red"
    };
  }

  onSubmitForm = e => {
    e.preventDefault();
    // console.log("form data: ", serialize(e.target, { hash: true }));
  };

  onChangeInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
        // validations
        if (this.state.name.length < 5)
          console.log("Name must be more than 5 characters");
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <h2>Controlled Form</h2>
        <br />
        <label>
          Name: <input name="name" type="text" onChange={this.onChangeInput} />
        </label>
        <br />
        <br />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.onChangeInput}
          />{" "}
          Male<br />
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.onChangeInput}
          />{" "}
          Female<br />
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={this.onChangeInput}
          />{" "}
          Other<br />
        </div>
        <br />
        <label>
          Favorite Color:
          <select name="color" onChange={this.onChangeInput}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ControlledForm;
