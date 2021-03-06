/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Badge from '@mui/material/Badge';
import PickersDay from '@mui/lab/PickersDay';
import { makeStyles } from '@material-ui/core';
import { CalendarProps } from '../../../Type/Types';

const useStyles = makeStyles({
  root: {
    '& svg': { display: 'none' },
    opacity: 1,
  },
});

const DayCalendar = ({ date, setDate, yearData }: CalendarProps) => {
  const classes = useStyles();
  const [highlightedDays, setHighlightedDays] = useState<number[]>([]);

  const mappingDayData = () => {
    const yearDate = yearData.map((el) => {
      return el.date;
    });

    const filteredDate = yearDate.filter((el) => {
      return new Date(el).getMonth() + 1 === new Date(date).getMonth() + 1;
    });

    const resultDay = filteredDate.map((el) => {
      return new Date(el).getDate();
    });

    setHighlightedDays(resultDay);
  };

  useEffect(() => {
    mappingDayData();
  }, [yearData]);

  return (
    <Box
      sx={{
        display: 'flex',
        p: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
      }}
    >
      <CalendarPicker
        className={classes.root}
        views={['day']}
        date={date}
        onChange={(changeDate: Date | null) => setDate(changeDate)}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) >= 0;

          return (
            <Badge
              key={DayComponentProps.key}
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
