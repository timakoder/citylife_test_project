import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2)
    }
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();

  return <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    className={classes.root}
  >
    <Typography variant="h2">
      TEST APP
    </Typography>
  </Grid>
}

export default Header;
