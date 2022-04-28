import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { LogoLink } from "../components/logo/LogoLink2";
import { ThemeToggle } from '../components/theme/ThemeToggle';
import DisplacementSphere from '../components/background/DisplacementSphere';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "100px",
    marginBottom: "auto",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
      marginTop: "auto"
    },
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={`${classes.main}`} maxWidth="sm" align="center">
      <DisplacementSphere />
      <LogoLink />
      <Typography variant="h4" component="h2" paragraph="true">
        <div>Hi, I'm Dougie; a recent graduate of General Assembly</div>
      </Typography>
      <Typography variant="body1" component="h2" paragraph="true">
        <div>I'm looking for my first role in the field since graduation, I hope to learn and improve my skills along the way!</div>
      </Typography>
      <Typography variant="body1" component="h2" paragraph="true">
        <div>Outside of Software Development, I'm an avid climber and massive nerd for video games, having played competetively in the past.</div>
      </Typography>
      <Typography variant="h4" component="h2" paragraph="true">
        <div>Skills</div>
      </Typography>
      <Typography variant="body2" component="h2" paragraph="true">
        <div>JavaScript - Python - Git - GitHub - Django - PostgreSQL - NPM - HTML - CSS - Heroku - Node.js - MongoDB - React - VS Code - React Router DOM - SASS</div>
      </Typography>
      <ThemeToggle />
    </Container>
  )
};
