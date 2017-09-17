import React, { Component } from "react";

class UncontrolledFormRefs extends Component {
  onSubmitForm = e => {
    e.preventDefault();
    console.log("text input: ", this.textInput.value);
    console.log("options input: ", this.optionInput.value);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <h2>Uncontrolled Form with Refs</h2>
        <br />
        <label>
          Name:{" "}
          <input
            ref={input => {
              this.textInput = input;
            }}
            name="name"
            type="text"
          />
        </label>
        <br />
        <br />
        {/* Using radio buttons with refs is incredibly convoluted and 
        shouldn't be done if you want to keep your sanity. */}
        {/* <div>
          <input
            type="radio"
            name="gender"
            value="male"
            defaultChecked={true}
            ref={input => {
              this.radioInput = input;
            }}
          />{" "}
          Male<br />
          <input
            type="radio"
            name="gender"
            value="female"
            ref={input => {
              this.radioInput = input;
            }}
          />{" "}
          Female<br />
          <input
            type="radio"
            name="gender"
            value="other"
            ref={input => {
              this.radioInput = input;
            }}
          />{" "}
          Other<br />
        </div> */}
        <br />
        <label>
          Favorite Color:
          <select
            name="color"
            ref={input => {
              this.optionInput = input;
            }}
          >
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

export default UncontrolledFormRefs;
