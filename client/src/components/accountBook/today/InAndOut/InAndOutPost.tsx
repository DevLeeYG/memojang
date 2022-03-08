import { Box, Typography } from '@mui/material';
import { useSelector, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { Inout } from '../../../Type/Types';

const InAndOutPost = ({ date, getCalendarData }: Inout) => {
  const userKey = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.id,
  );

  const imports = useFormik({
    initialValues: {
      import: '',
      price: '',
    },
    onSubmit: (values) => {
      axios
        .post(`http://localhost:8080/account`, {
          values,
          date,
          userKey,
        })
        .then((res) => {
          if (res.status === 200) {
            getCalendarData();
          }
        });

      values.import = '';
      values.price = '';
    },
  });

  const expendive = useFormik({
    initialValues: {
      expen: '',
      price: '',
    },
    onSubmit: (values) => {
      axios
        .post(`http://localhost:8080/account`, {
          values,
          date,
          userKey,
        })
        .then((res) => {
          if (res.status === 200) {
            getCalendarData();
          }
        });

      values.expen = '';
      values.price = '';
    },
  });

  return (
    <Box sx={{ borderRight: '1px solid black', width: '50%', height: '300px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          height: '50px',
        }}
      >
        <Typography sx={{ marginTop: '20px' }} variant="h3">
          오늘 수입과 지출
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '60px',
        }}
      >
        <Box>
          <form onSubmit={imports.handleSubmit}>
            <TextField
              label="수입처"
              id="import"
              name="import"
              type="text"
              onChange={imports.handleChange}
              value={imports.values.import}
            />

            <TextField
              label="금액"
              id="price"
              name="price"
              type="text"
              onChange={imports.handleChange}
              value={imports.values.price}
            />

            <Button sx={{ display: 'flex', height: '50px' }} type="submit">
              Submit
            </Button>
          </form>
          <form onSubmit={expendive.handleSubmit}>
            <TextField
              label="지출처"
              id="expen"
              name="expen"
              type="text"
              onChange={expendive.handleChange}
              value={expendive.values.expen}
            />

            <TextField
              label="금액"
              id="price"
              name="price"
              type="text"
              onChange={expendive.handleChange}
              value={expendive.values.price}
            />

            <Button sx={{ display: 'flex', height: '50px' }} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default InAndOutPost;
