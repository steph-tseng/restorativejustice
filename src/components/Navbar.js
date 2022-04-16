import { AppBar, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo2.jpg";

const Navbar = () => {
  const theme = useTheme();
  return (
    <div>
      <AppBar
        position="absolute"
        enableColorOnDark
        style={{
          backgroundColor: "#CF9FFF",
          padding: theme.spacing(1),
        }}
        id="back-to-top-anchor"
      >
        <Grid
          container
          spacing={3}
          style={{
            display: "flex",
            justifyContent: theme.breakpoints.down("lg") ? "center" : "left",
            // alignContent: "center",
            // alignItems: "center",
            overflow: "scroll",
            whiteSpace: "nowrap",
            flexWrap: "nowrap",
          }}
        >
          <Grid item>
            <Button style={{ paddingTop: theme.spacing(1) }}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography>About This Project</Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                {/* <img
                src={logo}
                alt="Restorative Justice Logo"
                style={{ height: theme.spacing(5), borderRadius: "10px" }}
              /> */}
                <Typography>Restorative Justice</Typography>
              </Link>
            </Button>
          </Grid>

          <Grid item>
            <Button style={{ paddingTop: theme.spacing(1) }}>
              <Link
                to="/modelsofrj"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography>Models of Restorative Justice</Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button style={{ paddingTop: theme.spacing(1) }}>
              <Link
                to="/bico"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography>Inside the BiCo</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
