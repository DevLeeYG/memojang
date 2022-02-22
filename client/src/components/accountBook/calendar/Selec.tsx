import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Selec = () => {
  const [select, setSelect] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: '150px' }}>
        <InputLabel id="demo-simple-select-label">선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="선택"
          onChange={handleChange}
        >
          <MenuItem value={10}>수입처</MenuItem>
          <MenuItem value={20}>지출처</MenuItem>
        </Select>
      </FormControl>
      <Formik
        initialValues={{ firstName: '', lastName: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            return;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="firstName" />
            <br />
            <ErrorMessage name="firstName" component="div" />
            <br />
            <Field type="text" name="lastName" />
            <br />
            <ErrorMessage name="lastName" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Selec;
