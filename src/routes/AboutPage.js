import { Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

const AboutPage = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent={"center"}>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginTop: theme.spacing(12),
        }}
      >
        <Grid
          container
          direction={"column"}
          style={{ padding: theme.spacing(8), paddingTop: theme.spacing(4) }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              About this project
            </Typography>
            <Typography>
              This project is focused on restorative justice, which is a
              well-defined field meant for reconceptualizing justice and
              community relationships.
            </Typography>
          </Grid>
          <br />
          <Grid item>
            <Typography variant="h6">Why a website?</Typography>
            <Typography>
              I wanted this research to be available in a widely accessible
              format.
            </Typography>
          </Grid>
          <br />
          <Grid item>
            <Typography variant="h6">
              Why am I interested in this topic?
            </Typography>
            <Typography>
              As a philosophy major, I am intrigued by the potential for both
              epistemological and moral education that RJ is able to provide. In
              other words, it is interesting to consider this framework for
              understanding harm and what it means to repair that harm.
              Furthermore, this approach ensures a humanization of the harm,
              where it gains a subjective dimension rather than remaining purely
              objective. I also find it interesting that this approach
              encourages more moral growth than punitive measures, as
              perpetrators are expected to participate in suggesting what they
              may do to repair harm and rebuild trust.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AboutPage;
