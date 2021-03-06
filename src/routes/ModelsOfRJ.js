import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Grid,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const ModelsOfRJ = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openHigherEd, setOpenHigherEd] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickH = () => {
    setOpenHigherEd(!openHigherEd);
  };

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
          spacing={2}
          style={{
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
            overflow: "auto",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Models of Restorative Justice Practices
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Outline</Typography>
            <List disablePadding>
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="RJ Practices" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                style={{ paddingLeft: theme.spacing(3) }}
              >
                <List component="div">
                  <ListItemButton component="a" href="#BasicOverview">
                    <ListItemText primary="Basic Overview" />
                  </ListItemButton>
                  <ListItemButton component="a" href="#RJConference">
                    <ListItemText primary="Restorative Conferencing" />
                  </ListItemButton>
                  <ListItemButton component="a" href="#VOC">
                    <ListItemText primary="Victim-Offender Conferencing" />
                  </ListItemButton>
                  <ListItemButton component="a" href="#CircleProcesses">
                    <ListItemText primary="Restorative Justice Circles" />
                  </ListItemButton>
                  <ListItemButton component="a" href="#TruthAndReconciliation">
                    <ListItemText primary="Truth and Reconciliation Commissions" />
                  </ListItemButton>
                </List>
              </Collapse>
              <List disablePadding>
                <ListItemButton onClick={handleClickH}>
                  <ListItemText primary="Restorative Justice in Higher Education" />
                  {openHigherEd ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openHigherEd}
                  timeout="auto"
                  unmountOnExit
                  style={{ paddingLeft: theme.spacing(3) }}
                >
                  <List component="div">
                    <ListItemButton component="a" href="#HighrEd">
                      <ListItemText primary="Why Higher Education?" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#HEConference">
                      <ListItemText primary="Restorative Conferencing" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#HECircles">
                      <ListItemText primary="Restorative Justice Circles" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#HEBoards">
                      <ListItemText primary="Restorative Justice Boards" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
              <ListItemButton component="a" href="#bib">
                <ListItemText primary="Bibliography" />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        elevation={3}
        style={{
          width: "80vw",
          marginTop: theme.spacing(6),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={4}
          style={{
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              marginTop: theme.spacing(2),
            }}
          >
            <Grid container style={{ marginBottom: theme.spacing(4) }}>
              <Grid item>
                <Typography variant="h5" id="BasicOverview" gutterBottom>
                  Basic Overview
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Here is a video from an instructor at University of San
                  Diego's Center for Restorative Justice introducing RJ.
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: "30px",
                  height: 0,
                  width: "100%",
                  marginTop: theme.spacing(2),
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/SKKhlCaf6ZQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Grid>
              <Grid item style={{ marginTop: theme.spacing(2) }}>
                <Typography style={{ textIndent: "2rem" }}>
                  One aspect of RJ that I would like to highlight is harm. Karp
                  (2015) provides an important distinction between the different
                  types of harm that RJ is meant to repair: ???material/physical,
                  emotional/spiritual, and relational/communal??? (34). This
                  differentiation acknowledges the disparities in the harm that
                  a single incident may cause and includes each of the involved
                  parties. These differences in form also mean that the offender
                  must perform different acts to make up for the harm they have
                  caused. These acts come in three corresponding forms: 1)
                  apology, 2) restitution, and 3) community service (40).
                  Apologies ???are expressions of remorse and the willingness to
                  take responsibility for a transgression??? (40). Meanwhile,
                  restitution ???is monetary payment or labor that pays for
                  financial losses??? (41). Finally, community service can achieve
                  two different ends: ???making amends to the community??? and
                  providing ???an opportunity to demonstrate good citizenship???
                  (42).
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container style={{ width: "100%" }}>
              <Typography variant="h6" id="RJConference">
                Restorative Conferencing
              </Typography>
              <Typography style={{ textIndent: "2rem" }}>
                <b>Restorative conferencing</b> is a facilitated process guided
                by a scripted series of questions that help identify and repair
                harm. It has its roots in the indigenous Maori justice process
                in New Zealand. Conferencing became popularized worldwide in the
                1990s as a result of research by the prominent Australian law
                professor John Braithwaite. In 1998 in Baltimore, Maryland,
                Lauren Abramson founded the Community Conference Center, now
                called Restorative Response Baltimore, one of the most active
                restorative justice centers in the U.S (USD 2022).
              </Typography>
              <Typography>
                Restorative Conferencing tends to follow a script, a template of
                which can be found here:{" "}
                <Link
                  href="https://www.iirp.edu/news/restorative-conference-facilitator-script"
                  target={"_blank"}
                  underline={"hover"}
                  rel={"noreferrer"}
                  color={"secondary"}
                >
                  RJ Conference Script
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: "30px",
                height: 0,
                width: "100%",
                marginTop: theme.spacing(2),
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/7xE8pIdoZNg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="VOC">
              Victim-Offender Conferencing
            </Typography>
            <Typography gutterBottom style={{ textIndent: "2rem" }}>
              <b>Victim Offender Conferences (VOC)</b> began because a probation
              officer and a coworker were frustrated with how offenders were
              able to remain insulated from the harm they had caused to their
              victims and their community. They began VOC as a way to ensure
              that the offenders would take accountability for their crimes. The
              offenders are sentenced by judges to meeting their victims and
              apologizing for their actions. Furthermore, they are expected to
              try to make amends and meet any needs that the harm they caused
              created. The meeting is led by a trained facilitator who can help
              maintain a safe and structured environment while the victim and
              offender are each able to share their sides of the story.
            </Typography>
            <Grid
              item
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: "30px",
                height: 0,
                width: "100%",
                marginTop: theme.spacing(2),
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/TxLxet6Q1ks"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="CircleProcesses">
              Restorative Justice Circles
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              <b>Circle practices</b> draw on Native American and Canadian First
              Nations traditions. Circle facilitators invite participants to
              answer questions by passing a talking piece that provides each
              person equal opportunity to participate. Circles became popular
              with the 1996 publication of Rupert Ross' Returning to the
              Teachings: Exploring Aboriginal Justice and the 2003 Peacemaking
              Circles: From Crime to Community, by Kay Pranis, Barry Stuart, and
              Mark Wedge. Circles are used widely as a means to build community,
              respond to crime or misconduct, and to offer support for people
              returning to a community after incarceration or suspension (USD
              2022).
            </Typography>
            <Grid
              item
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: "30px",
                height: 0,
                width: "100%",
                marginTop: theme.spacing(2),
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/1-RZYSTJAAo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="TruthAndReconciliation">
              Truth and Reconciliation Commissions
            </Typography>
            <Typography gutterBottom style={{ textIndent: "2rem" }}>
              <b>Truth and Reconciliation Commissions</b> are public inquiries
              into past harms, providing a community with the opportunity to
              explore the nature of the harm and for individuals to articulate
              the impact as well as express remorse. The first TRC took place in
              Uganda in 1974 and the most well-known is the South Africa TRC of
              the 1990s led by Bishop Desmond Tutu. He wrote about it in No
              Future Without Forgiveness (USD 2022).
            </Typography>
            <Grid
              item
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: "30px",
                height: 0,
                width: "100%",
                marginTop: theme.spacing(2),
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/W3taLI3moaM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
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
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid item>
            <Typography variant="h5" id="HighrEd">
              RJ in Higher Education
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              Conflicts necessarily arise when people are in close proximity
              with one another. Many of the students in higher education are
              only living away from home for the first time and are just
              learning how to communicate with others for the first time. They
              are also often meeting people from more diverse backgrounds than
              they have ever had the chance to before. Thus, small
              misunderstandings can easily escalate into major conflicts that
              seem unresolveable.
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              Even beyond these small conflicts, victims are still forced to
              interact and be in the same space as the people who have hurt
              them. Though perpetrators need to be given the benefit of the
              doubt and a chance to learn, they must be held accountable in a
              way that prevents future incidents. Existing policies for
              addressing these issues tend to be punitive in nature. Claims are
              brought to a board of existing authorities (e.g. Title IX) and an
              investigation is carried out. Unless the crime is truly egregious,
              the perpetrator often faces little to no consequences beyond
              perhaps having their positions of power taken from them. Thus,
              they do not face any real disincentives to act differently. Even
              if they do face consequences, they are often punished in a way
              that makes them feel more alienated from others on campus and then
              want to lash out against a punishment they feel is
              disproportionate to the crime. Meanwhile, victims feel even more
              unsafe. They often still have to occupy the same space as their
              aggressor and seeing that person may remind them of their negative
              experiences. Thus, it is important that institutions move toward
              practices which create a safe space to learn and grow for both
              involved parties rather than practices which alienate them. RJ
              works from these precise principles and seeks to help both victims
              and offenders better understand one another and form closer ties
              to their community. The section below will elaborate on the ways
              in which the existing literature has suggested how the basic RJ
              practices should be adapted to higher education (Karp 2015).
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="HEConference">
              Restorative Conferencing
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              RJ conferencing in higher education looks largely the same as it
              would otherwise. This RJ practice requires trained facillitators (
              <Link
                href="https://www.sandiego.edu/soles/restorative-justice/"
                underline="hover"
                rel={"noreferrer"}
                color={"secondary"}
              >
                USD
              </Link>{" "}
              is one of the programs that provides such training specific to
              higher education).
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              The biggest issue with RJ conferencing is that it requires a lot
              of time and also requires the aforementioned training. Thus, it is
              not accessible to groups that do not have access to such training.
              The process takes a lot of time because of how much preparation
              the facilitator(s) must do to prepare for the conference. Before
              the conference may occur, the facillitator(s) must meet with the
              two (or more) involved parties so that they are aware of the
              situation as well as come up with a preliminary list of actions
              for the offender to perform to meet the needs of the person they
              caused harm to. Because of how long the process takes, it is not
              necessarily helpful in a higher education setting. This is due to
              the high turnover rate.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="HECircles">
              Restorative Justice Circles
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              As seen in the video linked above for RJ circles, they are a
              useful method for helping communities bond and reconcile after a
              conflict between two (or more) parties has made the environment
              feel hostile.
            </Typography>
            <Typography gutterBottom style={{ textIndent: "2rem" }}>
              RJ circles can be especially useful within dorms or classrooms,
              when the parties are in constant contact. One example of a more
              specific type of incident that this practice may be useful for is
              microaggressions. If a member of a hall commits a microaggression
              against another member of the hall, it can make that member feel
              unwelcome and unsafe within their living space. It is also
              important to involve all of the members of the hall so that the
              perpetrator can be held accountable for future microaggressions.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="HEBoards">
              Restorative Justice Boards
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              Many higher education institions already have pre-existing boards
              (e.g. the Honor Board in the BiCo). This practice calls for
              integrating more RJ principles within their processes.
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              This is the most efficient RJ practice, but that efficiency also
              risks board members no longer treating the cases as individual.
              Because board members are able to act as stand-ins for the victim
              and community members, the victim does not need to be involved in
              the process. This resolves a problem with the other two practices,
              because they both require the victim's participation.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ModelsOfRJ;
