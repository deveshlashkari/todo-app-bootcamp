import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class Nav extends Component {
  render() {
    return (
      <>
        <AppBar position="static" style={{ backgroundColor: "teal" }}>
          <Toolbar>
            <Typography variant="h5">To Do List</Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
