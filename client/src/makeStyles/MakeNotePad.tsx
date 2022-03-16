import { makeStyles } from '@material-ui/core';

export const NoteHome = makeStyles(() => ({
  Top: {
    display: 'flex',
    width: '80%',
    height: '65px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
  },
  body: {
    display: 'flex',
    width: '80%',
    height: '90vh',

    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
  },
  inner: {
    marginTop: '10px',
    height: '72vh',
    width: '100%',
    padding: '85px',
    overflow: 'scroll',
    '& :hover': {
      transition: '500ms',
      backgroundColor: '#f8f9fa',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    '& p': {
      height: '50px',
    },
  },
  list: {
    boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 0px 0px',
    paddingBottom: '30px',
    padding: '10px',
  },

  readtitle: {
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontSize: '2.5rem',
  },
}));

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
    justifyContent: 'space-between',
    backgroundColor: '#FCFDFC',

    paddingLeft: '112px',
    alignItems: 'center',
    display: 'flex',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
    borderLeft: 'none',
    height: '100px',
    width: '100%',
  },
  back: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'gray',
      cursor: 'pointer',
    },
  },

  writeFoot: {
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
    width: '100px',
    color: 'white',
    backgroundColor: '#63E5BD',
    margin: '10px',
    border: 'none',

    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#80f2ce',
      cursor: 'pointer',
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

  main: {
    boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 8px',
    height: '55vh',
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

export const NoteRead = makeStyles((theme) => ({
  Top: {
    display: 'flex',
    width: '80%',
    height: '65px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
  },
  body: {
    display: 'flex',
    width: '80%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
  },
  inner: {
    marginTop: '10px',

    width: '100%',
  },
  list: {
    boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 0px 0px',
    paddingBottom: '50px',
  },
  readtitle: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: '15px',
    fontSize: '2.5rem',
  },
  readFoot: {
    backgroundColor: '#FCFDFC',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
    borderLeft: 'none',
    height: '100px',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prvNextRead: {
    display: 'flex',
    margin: '10px',
    backgroundColor: '#f8f9fa',
    height: '80px',
    width: '300px',
    borderRadius: '5px',
    '& h3': {
      marginTop: '10px',
    },
  },
  option: {
    display: 'flex',
    boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
    justifyContent: 'right',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '& span': {
      margin: '10px',
    },
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
  },
  inContent: {
    width: '80%',
  },
  btn: {
    backgroundColor: '#f8f9fa',
    border: 'none',
    '&:hover': {
      backgroundColor: '#edf1f4',
      cursor: 'pointer',
    },
  },
}));
