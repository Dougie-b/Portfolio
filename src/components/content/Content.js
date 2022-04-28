import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "auto",
    marginBottom: "auto",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={`${classes.main}`} maxWidth="sm">
      <Typography variant="h5" component="h2">
        <TextDecrypt text={`${FirstName} ${LastName}`} />
      </Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        <TextDecrypt text={`${Resume.basics.job1}`} />
      </Typography>
      <Typography variant="h15" component="h1" gutterBottom >
        <Link href='/projects'>
          <TextDecrypt text={'Projects'} underline='hover' />
        </Link>
      </Typography>
    </Container>
  );
};
