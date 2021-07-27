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

import ListItems from "./ListItems";

const styles = {
  root: {
    color: "#FFFFFF",
  },
};

class AddItem extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
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
                    To Do List
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Input
                    id="data"
                    type="text"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={(e) => console.log("Clicked")}>
                          <AddIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <ListItems />
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
