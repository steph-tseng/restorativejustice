import React from "react";
import { Typography, Grid, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1647730324427-80d96cb023cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)",
    backgroundSize: "auto",
    objectFit: "cover",
    padding: theme.spacing(10),
  },
  h1: {
    marginTop: theme.spacing(14),
    marginBottom: -theme.spacing(4),
    fontWeight: "10000px",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Typography align="center" variant="title">
        What is restorative justice?
      </Typography>
      <Typography align="justify" paragraph="true" variant="body1">
        Restorative justice (RJ) reconceptualizes the way justice is carried
        out. Rather than thinking about justice as punishment to be doled out by
        a neutral third party, it thinks about justice as fulfilling the needs
        of the victim. The criminal justice system focuses on the needs of the
        state to maintain law and order. Meanwhile, RJ focuses on the
        relationship between the victim and perpetrator, as well as their ties
        to the greater community. The two parties are given an opportunity to
        communicate, whether directly or indirectly, so that the victim is able
        to receive answers to any questions they may have surrounding the crime.
        In this communication, the perpetrator is also confronted with the harm
        that they have caused and must take responsibility for that harm. The
        focus, too, is on how to rebuild the relationship between the two
        involved parties and their community so that neither feels neglected or
        alienated.
      </Typography>
    </Grid>
  );
};

export default HomePage;

// rafce command
