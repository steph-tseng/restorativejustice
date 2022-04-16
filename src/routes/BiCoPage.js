import { Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

const BiCoPage = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent={"center"}>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginTop: theme.spacing(12),
          marginBottom: theme.spacing(5),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Grid item>
            <Typography variant="h4" align="left" gutterBottom>
              Interviews
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              I conducted interviews with various members of the Bryn Mawr and
              Haverford community to better understand the current state of
              affairs within the BiCo. I wanted to better understand where the
              community currently stands so that we can better explore what we
              need to do to move forward: into a future where hopefully more
              restorative justice practices and principles will be included
              within processes. I would argue that the most concrete
              manifestation of BiCo values is the{" "}
              <a
                href="https://sga.blogs.brynmawr.edu/honor-board/honor-code/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Honor Code
              </a>
              , where these values seem to be codified. Thus, I asked questions
              specifically about my interviewees understanding and experiences
              with the Honor Code. As I was less concerned with academic
              violations than the social (since those should be addressed with
              traditional punitive measures), I chose to focus most of my
              questions on the Social Honor Code (see Appendix 1 for interview
              questions). The Social Honor Code acts largely as a Social
              Contract (both explicit and implicit), which guides the ways in
              which members of the community interact with one another.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginBottom: theme.spacing(5),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Senior STEM Major at Bryn Mawr, Chinese International Student
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              This interviewee generally viewed the (social) honor code as
              providing common sense guidance. They said that it creates an
              "underlying pressure of being nice and then being kind to each
              other." Before coming to BMC, this person believed that basic
              respect was enough to guide social interactions. After, they
              learned about racism in America and saw how basic respect was not
              enough. Though this knowledge has not influenced <i>who</i> they
              make friends with, it has shaped how they interact with those
              people. More specifically, it has made them more careful in how
              they approach certain topics and even whether they bring up those
              topics at all.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginBottom: theme.spacing(5),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Senior humanities major at Bryn Mawr, Asian-American
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              For this person, the honor code is largely academic.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginBottom: theme.spacing(5),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Junior humanities major at Bryn Mawr, white American
            </Typography>
            <Typography style={{ textIndent: "2rem" }}></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginBottom: theme.spacing(5),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Professor at Bryn Mawr, white European
            </Typography>
            <Typography style={{ textIndent: "2rem" }}></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginBottom: theme.spacing(5),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Administrator in the Dean’s office/faculty member at Haverford,
              Asian-American
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              This interviewee said that the honor code and the practices it
              allows means we can have "a community where people were trusted on
              their word."
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginBottom: theme.spacing(5),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Grid item>
            <Typography variant="h5">Appendix</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Appendix 1</Typography>
            <Typography>
              <ol>
                <li>
                  What does the social honor code mean to you? When did you
                  learn about it?
                </li>
                <li>
                  How does the honor code affect your life and relationships at
                  BMC/Haverford?
                </li>
                <li>
                  How does your positionality affect your relationship with the
                  honor code?
                </li>
                <li>
                  How may the honor code support the maintenance of a safe
                  environment in the bico?
                </li>
              </ol>
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BiCoPage;
