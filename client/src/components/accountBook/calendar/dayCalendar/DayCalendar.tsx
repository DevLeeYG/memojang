/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import Badge from '@mui/material/Badge';
import PickersDay from '@mui/lab/PickersDay';
import { makeStyles } from '@material-ui/core';
import PaidIcon from '@mui/icons-material/Paid';
const useStyles = makeStyles({
  root: {
    '& svg': { display: 'none' },
    opacity: 1,
  },
});

const DayCalendar = ({ monthData, date, setDate }: any) => {
  const classes = useStyles();
  const [highlightedDays, setHighlightedDays] = useState<any[]>([]);

  const mappingDayData = () => {
    const dayData = monthData?.map((el: any) => {
      return Number(el.date.slice(8, 10));
    });
    setHighlightedDays(dayData);
  };

  useEffect(() => {
    mappingDayData();
  }, [monthData]);

  return (
    <Box
      sx={{
        display: 'flex',
        pt: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
      }}
    >
      <CalendarPicker
        className={classes.root}
        views={['day']}
        date={date}
        onChange={(newValue: any) => setDate(newValue)}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;
          return (
            <Badge
              overlap="circular"
              badgeContent={isSelected ? '$' : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </Box>
  );
};

export default DayCalendar;
