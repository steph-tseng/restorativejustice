import { Grid, Link, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

const ResourcesPage = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent={"center"}
      style={{ marginTop: theme.spacing(12) }}
    >
      <Grid item>
        <Paper
          elevation={3}
          style={{
            width: "80vw",
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
          }}
        >
          <Grid
            container
            direction={"column"}
            spacing={2}
            style={{
              padding: "5vw",
              paddingTop: "3vh",
              paddingBottom: "5vh",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h5" id="bib" gutterBottom>
                Bibliography
              </Typography>
              <Grid item xs={12}>
                <Typography
                  style={{ textIndent: "-36px", paddingLeft: "36px" }}
                >
                  Karp, David R. 2015{" "}
                  <i>
                    The Little Book of Restorative Justice for Colleges and
                    Universities.
                  </i>{" "}
                  New York, NY: Good Books.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{ textIndent: "-36px", paddingLeft: "36px" }}
                >
                  University of San Diego. 2022. “Research and Theory.” Accessed
                  April 12, 2022.{" "}
                  <Link
                    href="https://www.sandiego.edu/soles/restorative-justice/research-and-theory.php"
                    target={"_blank"}
                    rel={"noreferrer"}
                    color={"secondary"}
                  >
                    https://www.sandiego.edu/soles/restorative-justice/research-and-theory.php.
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{ textIndent: "-36px", paddingLeft: "36px" }}
                >
                  Zehr, Howard. <i>The Little Book of Restorative Justice.</i>{" "}
                  New York: Good Books, 2015.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          elevation={3}
          style={{
            width: "80vw",
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(6),
          }}
        >
          <Grid
            container
            spacing={2}
            direction={"column"}
            style={{
              padding: "5vw",
              paddingTop: "3vh",
              paddingBottom: "5vh",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <Grid item>
              <Typography variant="h5">Further Reading</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Links</Typography>
            </Grid>
            <Grid item>
              <Link
                href="https://sga.blogs.brynmawr.edu/honor-board/honor-code/"
                target={"_blank"}
                underline={"hover"}
                rel={"noreferrer"}
                color={"secondary"}
              >
                Bryn Mawr College Honor Code
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.brynmawr.edu/inside/academic-information/research/centers-institutes/teaching-learning-institute"
                underline="hover"
                target={"_blank"}
                rel={"noreferrer"}
                color={"secondary"}
              >
                Teaching and Learning Institute (TLI) at Bryn Mawr
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="http://tli-resources.digital.brynmawr.edu/programs-and-opportunities/pedagogy-circles-for-diversity-equity-and-inclusion/"
                underline="hover"
                target={"_blank"}
                rel={"noreferrer"}
                color={"secondary"}
              >
                Pedagogy Circles at Bryn Mawr and Haverford
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.sandiego.edu/soles/restorative-justice/"
                underline="hover"
                target={"_blank"}
                rel={"noreferrer"}
                color={"secondary"}
              >
                University of San Diego Center of Restorative Justice
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.youtube.com/channel/UC7xERE4CAI-GGow2EITsT5Q"
                underline="hover"
                target={"_blank"}
                rel={"noreferrer"}
                color={"secondary"}
              >
                USD Center of Restorative Justice Youtube Channel
              </Link>
            </Grid>
            <Grid item style={{ marginTop: "3vh" }}>
              <Typography variant="h6">Books</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Armour, Marilyn and Mark Umbreit. 2018.{" "}
                <i>Violence, Restorative Justice, and Forgiveness.</i>{" "}
                Philadelphia, PA: Jessica Kingsley Publishers.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Boyes-Watson, Carolyn. 2008.{" "}
                <i>Peacemaking Circles and Urban Youth.</i>
                St. Paul, MN: Living Justice Press.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Boyes-Watson, Carolyn and Kay Pranis. 2015.{" "}
                <i>Circle Forward: Building a Restorative School Community.</i>{" "}
                St. Paul, MN: Living Justice Press.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Braithwaite, John. 1989. <i>Crime, Shame, and Reintegration.</i>{" "}
                New York: Cambridge University Press.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Braithwaite, John. 2002.{" "}
                <i>Restorative Justice and Responsive Regulation.</i> New York:
                Oxford University Press.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Burnett, Nick and Margaret Thorsborne. 2015.{" "}
                <i>Restorative Practice and Special Needs.</i> Philadelphia, PA:
                Jessica Kingsley Publishers.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Davis, F. E. (2019).{" "}
                <i>
                  The Little Book of Race and Restorative Justice: Black Lives,
                  Healing, and US Social Transformation.
                </i>{" "}
                New York, NY: Good Books.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Llewellyn, Jennifer and Daniel Philpott. 2014.{" "}
                <i>Restorative Justice, Reconciliation, and Peacebuilding.</i>{" "}
                New York: Oxford.
              </Typography>
              <Typography style={{ textIndent: "-36px", paddingLeft: "36px" }}>
                Mills, Linda. 2008.{" "}
                <i>
                  Violent Partners: A Breakthrough Plan for Ending the Cycle of
                  Abuse.
                </i>{" "}
                New York: Basic Books.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ResourcesPage;
