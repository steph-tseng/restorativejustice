import { Grid, makeStyles, Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles((theme) => ({
  question: {
    fontStyle: "italics",
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Typography className={classes.question}>
        What is the focus of this project
      </Typography>
      <Typography>
        This project is focused on restorative justice, which is a well-defined
        field meant for reconceptualizing justice and community relationships.
      </Typography>
      <Typography className={classes.question}>Why a website?</Typography>
      <Typography>
        I wanted this research to be available in a widely accessible format.
      </Typography>
      <Typography className={classes.question}>
        Why am I interested in this topic?
      </Typography>
      <Typography>
        As a philosophy major, I am intrigued by the potential for both
        epistemological and moral education that RJ is able to provide. In other
        words, it is interesting to consider this framework for understanding
        harm and what it means to repair that harm. Furthermore, this approach
        ensures a humanization of the harm, where it gains a subjective
        dimension rather than remaining purely objective. I also find
        interesting that this approach encourages more moral growth than
        punitive measures, as perpetrators are expected to participate in
        suggesting what they may do to repair harm and rebuild trust.
      </Typography>
    </Grid>
  );
};

export default AboutPage;
