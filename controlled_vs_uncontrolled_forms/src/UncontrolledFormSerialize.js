import React, { Component } from "react";
import serialize from "form-serialize";

class UncontrolledFormSerialize extends Component {
  onSubmitForm = e => {
    e.preventDefault();
    console.log("form data: ", serialize(e.target, { hash: true }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <h2>Uncontrolled Form with Serialize</h2>
        <br />
        <label>
          Name: <input name="name" type="text" />
        </label>
        <br />
        <br />
        <div>
          <input type="radio" name="gender" value="male" /> Male<br />
          <input type="radio" name="gender" value="female" /> Female<br />
          <input type="radio" name="gender" value="other" /> Other<br />
        </div>
        <br />
        <label>
          Favorite Color:
          <select name="color">
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

export default UncontrolledFormSerialize;
