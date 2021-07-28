import React, { Component } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Container,
  Card,
  CardContent,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";

import ListItems from "./ListItems";

const styles = {
  root: {
    color: "#FFFFFF",
  },
};

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      items: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addItem = () => {
    if (this.state.inputValue !== "") {
      let items = this.state.items;
      items.push({ id: uuidv4(), name: this.state.inputValue });
      localStorage.setItem("itemName", this.state.inputValue);
      this.setState({ items, inputValue: "" }, () => {
        console.log(this.state.items);
      });
    }
  };

  deleteItem = (id) => {
    let items = this.state.items;
    this.setState({ items: items.filter((_data) => _data.id !== id) });
  };

  render() {
    const { classes } = this.props;
    console.log(classes);
    console.log(localStorage.getItem("itemName"));
    return (
      <>
        <Container component="main" maxWidth="xs">
          <Card
            style={{
              marginTop: "20px",
              backgroundColor: "teal",
            }}
          >
            <CardContent>
              <Grid
                container
                spacing="0"
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12}>
                  <Typography variant="h5" className={classes.root}>
                    {this.state.items.length !== 0
                      ? `(${this.state.items.length})`
                      : ""}{" "}
                    To Do List
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Input
                    id="data"
                    type="text"
                    style={{ color: "#FFFFFF" }}
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.addItem}>
                          <AddIcon className={classes.root} />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <ListItems
                    items={this.state.items}
                    deleteItem={this.deleteItem}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(AddItem);
