import { makeStyles } from '@material-ui/core';

export const NoteTop = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
  },

  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',

    width: '25%',
  },
  right: {
    backgroundColor: '#FCFDFC',
    display: 'flex',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
    borderLeft: 'none',
    height: '100px',
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
    margin: '15px',
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
    height: '100%',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 8px 8px',
  },

  sidebar: {
    width: '25%',
    overflow: 'scroll',
  },
  main: {
    boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 8px',
    height: '75vh',
    width: '100%',
    overflow: 'scroll',
  },

  list: {
    padding: 5,
    marginBottom: 3,
    boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 8px 8px',
    height: '50px',
    width: '100%',
  },
  listT: {
    height: '50%',
    width: '100%',
  },
  listB: {
    height: '50%',
    width: '100%',
  },
}));
