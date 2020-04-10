import React from "react";
import "./FormComponent.scss";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userEmail: "",
      userMessage: "",
      checkbox: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onCheckBoxHandler = this.onCheckBoxHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onCheckBoxHandler(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.setState({
      submit: this.state
    });
    console.log(this.state);
  }

  render() {
    return (
      <Box
        className="form__container"
        border={1}
        borderColor="primary.main"
        borderRadius={16}
      >
        <h1>Simple form</h1>
        <form className="form__box" onSubmit={this.onSubmitHandler}>
          <TextField
            onChange={this.onChangeHandler}
            className="form__input"
            id="outlined-basic"
            label="Your name"
            variant="outlined"
            name="userName"
          />
          <TextField
            onChange={this.onChangeHandler}
            className="form__input"
            id="outlined-basic"
            label="Your email"
            variant="outlined"
            name="userEmail"
          />
          <TextField
            onChange={this.onChangeHandler}
            className="form__input"
            id="outlined-basic"
            label="Your message"
            variant="outlined"
            multiline={true}
            rows={8}
            name="userMessage"
          />
          <FormControlLabel
            value="Unlicked"
            name="checkbox"
            control={<Checkbox color="primary" />}
            label="Are you fine?"
            labelPlacement="end"
            onChange={this.onCheckBoxHandler}
          />
          <Button
            onChange={this.onChangeHandler}
            name="isChecked?"
            type="submit"
            value="submit"
            variant="outlined"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Box>
    );
  }
}
