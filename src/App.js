import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="about" element={<About />} />
        <Route path="modelsofrj" element={<ModelsOfRJ />} />
      </Routes>
    </div>
  );
}

export default App;

const Home = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item xs={12} style={{ margin: "auto" }}>
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <Grid item>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item>
            <Link to="/about">About</Link>
          </Grid>
          <Grid item>
            <Link to="/modelsofrj">Models of Restorative Justice</Link>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid item xs={12} style={{ backgroundColor: "#000" }}>
        <img
          src="https://images.unsplash.com/photo-1647730324427-80d96cb023cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="dark escalator"
          style={{
            width: "100vw",
            maxHeight: "96vh",
            overflow: "hidden",
            opacity: ".4",
            left: 0,
            zIndex: -5,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="h2"
          style={{
            position: "absolute",
            padding: "25px",
            top: "35vh",
            color: "#fff",
          }}
        >
          What is Restorative Justice?
        </Typography>
      </Grid>
      <Typography
        align="justify"
        paragraph="true"
        variant="body1"
        style={{
          padding: "25px",
          position: "absolute",
          color: "#fff",
          zIndex: 500,
          top: "50vh",
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
  return (
    <>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item>
          <Link to="/">Home</Link>
        </Grid>
        <Grid item>
          <Link to="/about">About</Link>
        </Grid>
        <Grid item>
          <Link to="/modelsofrj">Models of Restorative Justice</Link>
        </Grid>
      </Grid>
      <Grid container direction={"column"} style={{ padding: "20px" }}>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            About
          </Typography>
          <Typography>
            This project is focused on restorative justice, which is a
            well-defined field meant for reconceptualizing justice and community
            relationships.
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
            Furthermore, this approach ensures a humanization of the harm, where
            it gains a subjective dimension rather than remaining purely
            objective. I also find it interesting that this approach encourages
            more moral growth than punitive measures, as perpetrators are
            expected to participate in suggesting what they may do to repair
            harm and rebuild trust.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

const ModelsOfRJ = () => {
  return (
    <>
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item>
          <Link to="/">Home</Link>
        </Grid>
        <Grid item>
          <Link to="/about">About</Link>
        </Grid>
        <Grid item>
          <Link to="/modelsofrj">Models of Restorative Justice</Link>
        </Grid>
      </Grid>
      <Grid
        container
        direction={"column"}
        spacing={2}
        style={{ padding: "20px" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Models of Restorative Justice Practices
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Restorative Conferencing</Typography>
          <Typography>
            <b>Restorative conferencing</b> is a facilitated process guided by a
            scripted series of questions that help identify and repair harm. It
            has its roots in the indigenous Maori justice process in New
            Zealand. Conferencing became popularized worldwide in the 1990s as a
            result of research by the prominent Australian law professor John
            Braithwaite. In 1998 in Baltimore, Maryland, Lauren Abramson founded
            the Community Conference Center, now called Restorative Response
            Baltimore, one of the most active restorative justice centers in the
            U.S (USD 2022).
          </Typography>
          <Typography gutterBottom>
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
          <Typography variant="h6">Victim-Offender Conferencing</Typography>
          <Typography gutterBottom>
            <b>Victim-offender</b> dialogues are an unscripted variation of
            conferencing originating in 1978 with a small program in Elkhart,
            Indiana by Howard Zehr. Often called the grandfather of restorative
            justice, Zehr became a professor at Eastern Mennonite University and
            published many seminal books on RJ. In the 1980s, Mark Umbreit, a
            social work professor at the University of Minnesota, further
            developed VOD as an evidence-based practice and founded the Center
            for Restorative Justice and Peacemaking (USD 2022).
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Circle Practices</Typography>
          <Typography gutterBottom>
            <b>Circle practices</b> draw on Native American and Canadian First
            Nations traditions. Circle facilitators invite participants to
            answer questions by passing a talking piece that provides each
            person equal opportunity to participate. Circles became popular with
            the 1996 publication of Rupert Ross' Returning to the Teachings:
            Exploring Aboriginal Justice and the 2003 Peacemaking Circles: From
            Crime to Community, by Kay Pranis, Barry Stuart, and Mark Wedge.
            Circles are used widely as a means to build community, respond to
            crime or misconduct, and to offer support for people returning to a
            community after incarceration or suspension (USD 2022).
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Truth and Reconciliation Commissions
          </Typography>
          <Typography gutterBottom>
            <b>Truth and Reconciliation Commissions</b> are public inquiries
            into past harms, providing a community with the opportunity to
            explore the nature of the harm and for individuals to articulate the
            impact as well as express remorse. The first TRC took place in
            Uganda in 1974 and the most well-known is the South Africa TRC of
            the 1990s led by Bishop Desmond Tutu. He wrote about it in No Future
            Without Forgiveness (USD 2022).
          </Typography>
        </Grid>
        <br />
        <Grid item xs={12}>
          <Typography variant="h6">Bibliography</Typography>
          <Typography>
            University of San Diego. “Research and Theory.” Accessed April 12,
            2022.
            <a href="https://www.sandiego.edu/soles/restorative-justice/research-and-theory.php">
              https://www.sandiego.edu/soles/restorative-justice/research-and-theory.php.
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
