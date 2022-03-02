import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useSelector, RootStateOrAny } from 'react-redux';

const InAndOutPost = ({ getTotalMoney, getTotalMoneyb }: any) => {
  const date = useSelector(
    (state: RootStateOrAny) => state.acReducer.calendar.date,
  );
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
          }
          getTotalMoney();
          getTotalMoneyb();
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
            getTotalMoney();
            getTotalMoneyb();
          }
        });

      values.expen = '';
      values.price = '';
    },
  });

  return (
    <>
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
    </>
  );
};
export default InAndOutPost;
