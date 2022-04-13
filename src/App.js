import React from "react";
import {
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="modelsofrj" element={<ModelsOfRJ />} />
      </Routes>
    </div>
  );
}

export default App;

const Home = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      direction={"column"}
      style={{
        backgroundColor: "#000",
        maxHeight: "99vh",
        width: "101vw",
        marginLeft: "-1vw",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <br />
      <Grid item xs={12}>
        <img
          src="https://images.unsplash.com/photo-1495854544774-960863c76ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
          alt="dark escalator"
          style={{
            width: "100vw",
            maxHeight: "100vh",
            opacity: ".4",
            objectFit: "cover",
            zIndex: "-5",
          }}
        />
      </Grid>
      <Typography
        align="center"
        variant="h2"
        style={{
          position: "absolute",
          padding: theme.spacing(20),
          paddingTop: theme.spacing(10),
          top: theme.spacing(25),
          zIndex: 500,
          color: "#fff",
        }}
      >
        What is Restorative Justice?
      </Typography>
      <Typography
        align="justify"
        paragraph="true"
        variant="body1"
        style={{
          padding: theme.spacing(20),
          paddingTop: theme.spacing(10),
          position: "absolute",
          color: "#fff",
          zIndex: 500,
          top: theme.spacing(35),
        }}
      >
        Restorative justice (RJ) reconceptualizes the way justice is carried
        out. Rather than thinking about justice as punishment to be doled out by
        a neutral third party, it thinks about justice as fulfilling the needs
        of the victim. Furthermore, it does not think about justice as
        determining guilt or who is good/bad. The criminal justice system
        focuses on the needs of the state to maintain law and order. Meanwhile,
        RJ focuses on the relationship between the victim and perpetrator, as
        well as their ties to the greater community. The two parties are given
        an opportunity to communicate, whether directly or indirectly, so that
        the victim is able to receive answers to any questions they may have
        surrounding the crime. In this communication, the perpetrator is also
        confronted with the harm that they have caused and must take
        responsibility for that harm. The focus, too, is on how to rebuild the
        relationship between the two involved parties and their community so
        that neither feels neglected or alienated.
      </Typography>
    </Grid>
  );
};

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Paper
        elevation={3}
        style={{
          margin: theme.spacing(15),
        }}
      >
        <Grid
          container
          direction={"column"}
          style={{ padding: theme.spacing(6), paddingTop: theme.spacing(4) }}
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
    </>
  );
};

const ModelsOfRJ = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Paper
        elevation={3}
        style={{
          margin: theme.spacing(15),
          marginTop: theme.spacing(15),
          marginBottom: theme.spacing(0),
        }}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
          style={{
            padding: theme.spacing(6),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(4),
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
                <ListItemText primary="Basic Overview" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                style={{ paddingLeft: theme.spacing(3) }}
              >
                <List component="div">
                  <ListItemButton component="a" href="#RJConference">
                    <ListItemText primary="Restorative Conferencing" />
                  </ListItemButton>
                  <ListItemButton component="a" href="#VOC">
                    <ListItemText primary="Victim-Offender Conferencing" />
                  </ListItemButton>
                  <ListItemButton component="a" href="#CircleProcesses">
                    <ListItemText primary="Circle Practices" />
                  </ListItemButton>
                  <ListItemButton component="a" href="#TruthAndReconciliation">
                    <ListItemText primary="Truth and Reconciliation Commissions" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton component="a" href="#HighrEd">
                <ListItemText primary="Restorative Justice in Higher Education" />
              </ListItemButton>
              <ListItemButton component="a" href="#bib">
                <ListItemText primary="Bibliography" />
              </ListItemButton>
            </List>
          </Grid>
          <br />
          <Divider />
          <Grid item xs={12}>
            <Typography variant="h5" id="BasicOverview">
              Basic Overview
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="RJConference">
              Restorative Conferencing
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              <b>Restorative conferencing</b> is a facilitated process guided by
              a scripted series of questions that help identify and repair harm.
              It has its roots in the indigenous Maori justice process in New
              Zealand. Conferencing became popularized worldwide in the 1990s as
              a result of research by the prominent Australian law professor
              John Braithwaite. In 1998 in Baltimore, Maryland, Lauren Abramson
              founded the Community Conference Center, now called Restorative
              Response Baltimore, one of the most active restorative justice
              centers in the U.S (USD 2022).
            </Typography>
            <Typography gutterBottom>
              Restorative Conferencing tends to follow a script, a template of
              which can be found here:{" "}
              <a
                href="https://www.iirp.edu/news/restorative-conference-facilitator-script"
                target={"_blank"}
                rel={"noreferrer"}
              >
                RJ Conference Script
              </a>
            </Typography>
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
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" id="CircleProcesses">
              Circle Practices
            </Typography>
            <Typography gutterBottom style={{ textIndent: "2rem" }}>
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
            <Typography>
              One place that this method would be especially useful would be
              within higher education dorms or classrooms, when the parties are
              in constant contact. If a member of a hall commits a
              microaggression against another member of the hall, it can make
              that member feel unwelcome and unsafe within their living space.
              It is also important to involve all of the members of the hall so
              that the perpetrator can be held accountable for future
              microaggressions.
            </Typography>
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
          </Grid>
          <br />
          <Divider />
          <Grid item xs={12}>
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
              to their community.
            </Typography>
          </Grid>
          <br />
          <Divider />
          <Grid item xs={12}>
            <Typography variant="h5" id="bib">
              Bibliography
            </Typography>
            <Typography>
              University of San Diego. “Research and Theory.” Accessed April 12,
              2022.
              <a href="https://www.sandiego.edu/soles/restorative-justice/research-and-theory.php">
                https://www.sandiego.edu/soles/restorative-justice/research-and-theory.php.
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
