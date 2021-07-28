import React, { Component } from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Grid,
  IconButton,
} from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  root: {
    color: "#FFFFFF",
  },
};
class ListItems extends Component {
  render() {
    console.log(this.props);
    const { classes, items, deleteItem } = this.props;
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <List>
              {items.map((_data) => {
                return (
                  <ListItem button key={_data.id}>
                    <ListItemText
                      primary={_data.name}
                      className={classes.root}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        onClick={(e) => deleteItem(_data.id)}
                      >
                        <DeleteIcon className={classes.root} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(ListItems);
