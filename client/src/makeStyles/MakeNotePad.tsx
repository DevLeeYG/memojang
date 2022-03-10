import { makeStyles } from '@material-ui/core';

export const NoteTop = makeStyles((theme) => ({
  root: {
    display: 'flex',

    height: '80px',
  },

  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gray',

    height: '100%',
    width: '25%',
  },
  right: {
    display: 'flex',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
    height: '100%',
    width: '100%',
    justifyContent: 'right',
  },

  colorChange: {
    fontSize: '15px',
    width: '65px',
    height: '22px',
  },

  button: {
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: '5px 5px 5px gray',
      backgroundColor: 'blue',
    },
  },
}));

export const NoteBody = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '90vh',
    borderBottom: '1px solid gray',
  },

  sidebar: {
    borderLeft: '1px solid gray',
    width: '25%',
    height: '90vh',
  },
  main: {
    borderLeft: '1px solid gray',
    borderRight: '1px solid gray',
    height: '90vh',
    width: '100%',
  },
}));
