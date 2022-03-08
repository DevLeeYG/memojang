import { makeStyles } from '@material-ui/core';

export const NoteTop = makeStyles((theme) => ({
  root: {
    display: 'flex',

    height: '80px',
    border: '1px solid black',
  },

  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid yellow',
    height: '100%',
    width: '25%',
  },
  right: {
    display: 'flex',
    border: '1px solid green',
    height: '100%',
    width: '100%',
  },

  colorChange: {
    fontSize: '20px',
    width: '70px',
    height: '40px',
  },
}));

export const NoteBody = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '90vh',
    border: '1px solid red',
  },

  sidebar: {
    border: '1px solid green',
    width: '25%',
    height: '90vh',
  },
  main: {
    border: '2px solid green',
    height: '90vh',
    width: '100%',
  },
}));
