import { makeStyles } from '@material-ui/core';

export const NoteTop = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
    height: '80px',
  },

  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
    height: '100%',
    width: '25%',
  },
  right: {
    backgroundColor: '#FCFDFC',
    display: 'flex',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
    borderLeft: 'none',
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
    color: 'white',
    backgroundColor: '#63E5BD',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#80f2ce',
    },
  },
}));

export const NoteBody = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '90vh',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 8px 8px',
  },

  sidebar: {
    boxShadow: 'rgb(0 0 0 / 30%) 0px 8px 8px',

    width: '25%',
    height: '90vh',
  },
  main: {
    boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 8px',
    height: '90vh',
    width: '100%',
  },
}));
