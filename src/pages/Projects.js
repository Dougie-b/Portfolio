import React from 'react'
import { LogoLink } from '../components/logo/LogoLink2';
import { Container, Typography } from '@material-ui/core';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import DisplacementSphere from '../components/background/DisplacementSphere';
import Link from "@material-ui/core/Link";

export const Projects = () => {

  return (
    <Container component="main" maxWidth="sm">
      <DisplacementSphere />
      <LogoLink />
      <Typography variant="h2" component="h2">
        <div>Projects</div>
      </Typography>
      <Typography variant="h5" component="h2">
        <div>Potato Pan Handler</div>
      </Typography>
      <Typography variant="body2" component="body2">
        <div>Solo project building a game using JavaScript, HTML and CSS. I opted to design a game
          which was essentially a mix between a rhythm game and a block breaking game.
        </div>
        <Link href='https://dougie-b.github.io/Potato-Pan-Handler/' target='blank'>
          <div>Check it out!</div>
        </Link>
      </Typography>
      <Typography variant="h5" component="h2">
        <div>Quizzifi</div>
      </Typography>
      <Typography variant="body2" component="body2">
        <div>We created a quiz creation application that uses JavaScript + React. We used axios to pull questions and answers from a third party API and displayed them on our page.</div>
        <Link href='https://quizzifi.netlify.app/' target='blank'>
          <div>Check it out!</div>
        </Link>
      </Typography>
      <Typography variant="h5" component="h2">
        <div>Esperanto</div>
      </Typography>
      <Typography variant="body2" component="body2" paragraph='true'>
        <div>Group project consisting of 3 people using React, Node JS, Express JS and MongoDB (MERN stack). We built an app that served as a foreign language learning site with the ability to search for teachers by language + sign up yourself as a teacher. My contribution within the team was to write the Back End and acted as project manager for the Front End, offering assistance with functionality where needed and ensuring we were all on the same page style-wise.</div>
        <Link href='https://new-esperanto.herokuapp.com/' target='blank'>
          <div>Check it out!</div>
        </Link>
      </Typography>
      <Typography variant="h5" component="h2">
        <div>Warzone Loadout Builder Thingy</div>
      </Typography>
      <Typography variant="body2" component="body2">
        <div>Solo project building the Back End using Python and DjangoDB, as well as the Front End using React. I built an app that allows people (that play CoD: Warzone) to build + save a loadout that they can then share with friends. I utilised Insomnia to help build my database + styled using SCSS.</div>
        <Link href='https://quizzifi.netlify.app/' target='blank'>
          <div>Check it out!</div>
        </Link>
      </Typography>
      <ThemeToggle />
    </Container>
  )
}