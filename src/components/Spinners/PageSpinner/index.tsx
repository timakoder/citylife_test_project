import React from 'react';
import Spinner from '../Spinner';
import Grid from '@material-ui/core/Grid';

export default () =>
  <Grid
    container
    justify="center"
    alignItems="center"
  >
    <Spinner size="large" color="grey"/>
  </Grid>