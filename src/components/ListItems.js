import React, { Component } from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Grid,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

export default class ListItems extends Component {
  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <List>
              <ListItem button>
                <ListItemText primary="Take Milk from Dairy" />
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Take Milk from Dairy" />
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Take Milk from Dairy" />
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </>
    );
  }
}
