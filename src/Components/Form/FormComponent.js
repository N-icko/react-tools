import React from "react";
import "./FormComponent.scss";
//Material-UI Kits:
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        userName: "",
        userEmail: "",
        userMessage: "",
        checkbox: false
      },
      clickHandler: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCheckBoxHandler = this.onCheckBoxHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onAgainSubmitHandler = this.onAgainSubmitHandler.bind(this);
  }

  onChangeHandler = e => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  };

  onCheckBoxHandler = e => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.checked }
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ clickHandler: true });
  };

  onAgainSubmitHandler = e => {
    this.setState({ clickHandler: !this.state.clickHandler });
  };

  render() {
    const formClicked = this.state.clickHandler;
    if (formClicked) {
      return (
        <Box
          className="form__container"
          border={1}
          borderColor="primary.main"
          borderRadius={16}
        >
          <h1>Thanks for submit!</h1>
          <Button
            onClick={this.onAgainSubmitHandler}
            type="submit"
            value="submit"
            variant="outlined"
            color="primary"
          >
            Send another one?
          </Button>
        </Box>
      );
    } else
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
              name="checkbox"
              control={<Checkbox color="primary" />}
              label="Are you fine?"
              labelPlacement="end"
              onChange={this.onCheckBoxHandler}
            />
            <Button
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
