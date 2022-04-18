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
          marginBottom: theme.spacing(6),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing="8"
          style={{ padding: theme.spacing(8), paddingTop: theme.spacing(4) }}
        >
          <Grid item xs>
            <Typography variant="h4" gutterBottom>
              About this project
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              This project is focused on restorative justice, which is a
              well-defined field meant for reconceptualizing justice and
              community relationships.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Why a website?</Typography>
            <Typography style={{ textIndent: "2rem" }}>
              I wanted this research to be available in a widely accessible
              format. I think that it is an important subject that has become
              widely popular, but people who discuss it often lack in-depth
              information.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">
              Why am I interested in this topic?
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
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
          <Grid item>
            <Typography variant="h6">Who am I?</Typography>
            <Typography style={{ textIndent: "2rem" }}>
              To say a bit about my positionality: I am a senior Asian
              international student at Bryn Mawr College. I am also a philosophy
              and international studies double major. I am including this
              information because I am hyperaware of the way in which my body
              may have shaped the conversations that I was able to have in these
              interviews even without my conscious awareness. Though I would
              have liked to include more voices in this project, I was rather
              limited in the number of people I was able to feasibly interview.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AboutPage;
