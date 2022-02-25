import { makeStyles } from '@material-ui/core';

export const MenuStyles = makeStyles((theme: any) => ({
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100vh',
    '&:hover': {
      color: 'red',
      cursor: 'pointer',
    },
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100vh',
    '&:hover': {
      color: 'blue',
      cursor: 'pointer',
    },
  },
}));
