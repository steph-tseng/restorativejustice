import { Grid, Link, Paper, Typography, useTheme } from "@mui/material";
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
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
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
              <Link
                href="https://sga.blogs.brynmawr.edu/honor-board/honor-code/"
                target={"_blank"}
                underline={"hover"}
                rel={"noreferrer"}
                color={"secondary"}
              >
                Honor Code
              </Link>
              , where these values seem to be codified. Thus, I asked questions
              specifically about my interviewees understanding and experiences
              with the Honor Code. As I was less concerned with academic
              violations than the social (since those should be addressed with
              traditional punitive measures), I chose to focus most of my
              questions on the Social Honor Code (see{" "}
              <Link href="#questions" underline="hover" color="secondary">
                Appendix 1
              </Link>{" "}
              for interview questions). The Social Honor Code acts largely as a
              Social Contract (both explicit and implicit), which guides the
              ways in which members of the community interact with one another.
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              Through my informal discussions with other students about this
              project, I was surprised to learn that the Honor Code was no
              longer a key aspect of the application that all prospective
              students needed to read and reflect on. It feels like a sign that,
              on an institutional level, we are moving away from the Honor Code.
              This is something that I do not think is necessarily the case, but
              I cannot think of any other reason that the question would be
              removed.
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              The pandemic, too, seems to have been a major turning point in how
              students interact with one another. Before, there were many more
              opportunities for people to meet and support one another.
              In-person plenary also provided people an opportunity to bond over
              the shared misery of waiting until we finally(!) reached quorum.
              Reaffirming the Honor Code in-person also meant that people were
              forced to (at least) skim over the contents of the document every
              semester. I have seen a worrying decrease in the respect students
              hold for the college and each other. This lack of respect is
              perhaps most apparent in the chain of incidences that have occured
              on campus this year: slurs, graffiti, etc....
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              I will note that a common theme expressed by the interviewees
              (both the Haverford and Bryn Mawr faculty members and one of the
              students) was how difficult confrontation is. Even though the
              practice is part of the social honor code, very few people are
              actually comfortable with it. The college does not provide any
              training to incoming students for healthy and productive ways to
              confront their peers about their struggles with them. I would love
              it if the college would provide resources for such confrontation
              and perhaps include a unit on it in THRIVE.
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
              padding: "5vw",
              paddingTop: "5vh",
              paddingBottom: "5vh",
            }}
          >
            <Grid item>
              <Typography variant="h6">
                Senior STEM Major at Bryn Mawr, White American
              </Typography>
              <Typography style={{ textIndent: "2rem" }}>
                This interviewee was the only student I interviewed who actually
                held the (social) honor code in high regard. They said that, "to
                [them], the most important part of the social honor code is
                respecting one another and giving one another the benefit of the
                doubt." One common theme through this person's answers was
                trust, which they felt was integral to maintaining the honor
                code's role as a way to create a safe space on the campus. One
                thing that this interviewee highlighted was how easily that
                trust can be eroded and how one's positionality can determine
                their ability to trust the honor code. They also brought up an
                important point about ensuring that people who have caused harm
                are actually held accountable and removed from positions of
                power, as simply seeing those people in those positions can
                create an image that the institution should not want to create.
                Because this website is about restorative justice, it is
                important to acknowledge these negative feelings that people can
                harbor toward the people who erode their trust in the
                institution. The problem can deepen from a hurt that they feel
                from an action to a mistrust in the institution that should be
                protecting them.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
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
            <Typography variant="h6">
              Senior STEM Major at Bryn Mawr, Chinese International Student
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              This interviewee generally viewed the (social) honor code as
              providing guidance they thought of as being common sense. For
              them, the honor code was more so affirming their existing beliefs
              than imposing new ones upon them. They said that it creates an
              "underlying pressure of being nice and then being kind to each
              other." Before coming to BMC, this person believed that basic
              respect was enough to guide social interactions. After, they
              learned about the racism in America and saw how basic respect was
              not enough. Though this knowledge has not influenced <i>who</i>{" "}
              they make friends with, it has shaped how they interact with those
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
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Senior humanities major at Bryn Mawr, Asian-American
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              For this person, the honor code is mainly academic. They were not
              explicitly aware of the social component of the honor code before
              the interview, they seemed to be aware of certain aspects of the
              code: the part that encourages students to confront the people who
              have violated the honor code and the other people they may have
              other conflicts with. They describe how "people at the school
              including [them]...are very afraid of confrontation, because you
              don't want to burn bridges, especially when you're going to see
              some person over and over again and they'll just be awkward. If
              you confront them and make them feel like they're they're in a
              position where they have to be defensive...and it will affect our
              relationship." I found this comment insightful as it clearly shows
              why students are generally wary of confronting their peers,
              despite the practice being endorsed by the honor code.
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
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Junior humanities major at Bryn Mawr, white American
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              Though this interviewee remembers going over the honor code when
              they were applying and in THRIVE, they do not really remember much
              of it now. Thinking about what they think the honor code should
              be, they said that they wanted it to be about being "a decent
              human being considering your classmates feelings and creating a
              safe place for all students on campus." This interviewee also
              discussed how they felt more comfortable on this campus discussing
              their heritage, which they felt was a result of the safe
              environment BMC tries to foster.
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
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Professor at Bryn Mawr, white European
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              Though faculty and staff are not bound by the honor code and
              social honor code in the same way students are, the academic
              aspect, at least, does affect how they formulate their syllabus.
              This professor noted how their interactions could be guided by
              something in the spirit of the social honor code without
              explicitly being so. One poignant quote from this interview is
              from when I asked about their positionality, they said that they
              try to take it into account by trying to be aware of their own
              biases and even though that "can't make these biases completely go
              away...awareness is not the same is getting rid of [those biases]
              but it is at least a step in the right direction."
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
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid item>
            <Typography variant="h6">
              Administrator in the Dean???s office/faculty member at Haverford,
              Asian-American
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              This interviewee said that the honor code and the practices it
              allows means we can have "a community where people were trusted on
              their word." I also found what they said about the history of the
              college (and by extension the Honor Code), how it has changed, and
              how it may continue to change incredibly insightful. They said
              that "the model of confrontation was between a set of equals and I
              think you know they simply that if someone has acted in a racist
              or sexist manner towards another, hasn't that already been an
              establishment of a new sense of lack of lack of equality? And what
              happens in those particular situation if you're already in a
              situation where someone has demonstrated a lack of regard for you
              on a foundational way?"
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
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid item>
            <Typography variant="h5">Final Thoughts</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ textIndent: "2rem" }}>
              I found that these interviews revealed disconnect I expected to
              find between students and the administration. None of the students
              I interviewed really had much knowledge of the social Honor Code
              and thought much about it at all. This seems worrying for such a
              core component of the institution. I would love if there would be
              more communication between the administrators/faculty and the
              students on the core processes of the college.
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              I feel as though our existing systems would very much benefit from
              incorporating RJ values and practices to help address concerns
              rather than letting them fester. Restorative justice is
              fundamentally about building community and safety, things I feel
              have been lacking since the pandemic began. I really value the
              people that I met during my years at BMC and the connections that
              I made. I got to meet so many wonderful people that will
              definitely stay with me after graduating. Most of the sources of
              conflict that arose were because of poor communication and bad
              conflict resolution skills. I hope that future students will be
              able to have even better experiences than I did. I hope that they
              will have the tools to de-escalate and grow from the conflicts
              that naturally arise. Conflicts are inevitable. We get to choose
              whether we grow closer or further from one another based on how we
              respond to them.
            </Typography>
            <Typography style={{ textIndent: "2rem" }}>
              As a final note, I want to say that I am incredibly thankful to
              all of my interviewees for their contributions to my project. I am
              also thankful to everyone who has engaged with this website and
              hope that they have gotten something out of it.
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
            padding: "5vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid item>
            <Typography variant="h5">Appendix</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" id="questions">
              Appendix 1
            </Typography>
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
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BiCoPage;
