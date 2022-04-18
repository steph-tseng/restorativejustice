import React from "react";
import { Typography, Grid, useTheme, Link } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Grid container direction={"column"}>
      <br />
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "#000",
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1495854544774-960863c76ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
          alt="pink and purple lavender field with low opacity"
          style={{
            width: "100vw",
            height: "100vh",
            opacity: ".4",
            objectFit: "cover",
            zIndex: "-5",
          }}
        />
      </Grid>
      <Grid
        item
        container
        style={{
          position: "absolute",
          marginTop: theme.breakpoints.down("md") ? "5rem" : "3rem",
          padding: "10vw",
          maxHeight: "80vh",
          overflowY: "scroll",
        }}
      >
        <Grid item xs={12} style={{}}>
          <Typography
            align="center"
            variant="h2"
            style={{
              zIndex: 500,
              color: "#fff",
              fontSize: theme.breakpoints.down("md") ? "3rem" : "5rem",
            }}
          >
            What is Restorative Justice?
          </Typography>
        </Grid>
        <Grid item style={{}}>
          <Typography
            align="justify"
            paragraph="true"
            variant="body1"
            style={{
              paddingTop: theme.breakpoints.down("lg") ? "3vh" : "3vh",
              color: "#fff",
              zIndex: 500,
              fontSize: "1rem",
              textIndent: "2rem",
            }}
          >
            Restorative justice (RJ) reconceptualizes the way justice is carried
            out. Rather than thinking about justice as punishment to be doled
            out by a neutral third party, it thinks about justice as fulfilling
            the needs of the victim. Furthermore, it does not think about
            justice as determining guilt or who is good/bad. The criminal
            justice system focuses on the needs of the state to maintain law and
            order. Meanwhile, RJ focuses on the relationship between the victim
            and perpetrator, as well as their ties to the greater community. The
            two parties are given an opportunity to communicate, whether
            directly or indirectly, so that the victim is able to receive
            answers to any questions they may have surrounding the crime. In
            this communication, the perpetrator is also confronted with the harm
            that they have caused and must take responsibility for that harm.
            The focus, too, is on how to rebuild the relationship between the
            two involved parties and their community so that neither feels
            neglected or alienated.
          </Typography>
        </Grid>
      </Grid>
      <Grid item style={{ padding: "15vh" }}>
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#672f9e" }}
          gutterBottom
        >
          Principles of RJ
        </Typography>
        <Grid
          container
          spacing={0}
          justifyContent={"center"}
          style={{
            marginTop: "5vh",
            borderTop: "5px solid #dccffe",
            borderBottom: "5px solid #dccffe",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              padding: "3vw",
              borderRight: "1px solid #dccffe",
              [theme.breakpoints.down("md")]: {
                borderRight: 0,
              },
              borderBottom: "1px solid #dccffe",
            }}
          >
            <Typography align="center" variant="h6" gutterBottom>
              Inclusive Decision-Making
            </Typography>
            <Typography align="center">
              "Restorative justice places decision-making in the hands of the
              people who care the most—offenders and harmed parties" (
              <Link
                href="/resources#bib"
                underline="hover"
                target={"_blank"}
                rel={"noreferrer"}
                color={"secondary"}
              >
                Karp 2015:
              </Link>
              9).
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: "3vw", borderBottom: "1px solid #dccffe" }}
          >
            <Typography align="center" variant="h6" gutterBottom>
              Active Accountability
            </Typography>
            <Typography align="center">
              "Restorative justice makes accountability active. Offenders must
              take responsibility and make amends. They cannot sit back and be
              judged and sanctioned" (9).
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              padding: "3vw",
              borderRight: "1px solid #dccffe",
              [theme.breakpoints.down("md")]: {
                borderRight: 0,
              },
            }}
          >
            <Typography align="center" variant="h6" gutterBottom>
              Repairing Harm
            </Typography>
            <Typography align="center">
              "Restorative justice focuses on reparation and healing to bring
              harmed parties up, not to drag the offender down" (9).
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ padding: "3vw" }}>
            <Typography align="center" variant="h6" gutterBottom>
              Rebuilding Trust
            </Typography>
            <Typography align="center">
              "Restorative justice rebuilds relationships so that offenders can
              be trusted again and harmed parties can again feel safe" (9).
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
// rafce command
