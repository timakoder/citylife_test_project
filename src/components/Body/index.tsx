import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import PhotoList from '../PhotoList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    text: {
      color: theme.palette.grey[400]
    }
  }),
);

export default () => {
  const classes = useStyles();  

  return <div className={classes.root}>
    <PhotoList/>
  </div>
};