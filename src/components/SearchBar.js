import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";
import RenderToLayer from "material-ui/internal/RenderToLayer";

class SearchBar extends React.Component {
  state = {
    SearchTerm: '',
  }
  handleChange = (event) => this.setState({ SearchTerm: event.target.value });

  handleSubmit = (event) => {
    const { SearchTerm } = this.state;
    const { onformSumit } = this.props;

    // console.log(event.target.value);
    // this.setState({SearchTerm})
    onformSumit(SearchTerm);
    
    event.preventDefault();
  }
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    )
  }
}
export default SearchBar;