import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 2),
      marginTop: 'auto',
      borderTop: '1px solid',
      borderColor: theme.palette.grey[400],
      borderWidth: 2
    },
    text: {
      color: theme.palette.grey[400]
    }
  }),
);

export default () => {
  const classes = useStyles();

  return <footer className={classes.root}>
    <Container maxWidth="sm">
      <Typography variant="h6" align="center" className={classes.text}>
        © 2018-2019
      </Typography>
    </Container>
  </footer>
}
