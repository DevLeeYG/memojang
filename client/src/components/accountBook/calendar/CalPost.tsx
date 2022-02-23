import React, { useMemo, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFormik } from 'formik';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';

const CalPost = () => {
  const [select, setSelect] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  const imports = useFormik({
    initialValues: {
      import: '',
      price: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const expendive = useFormik({
    initialValues: {
      expen: '',
      price: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
export default CalPost;
