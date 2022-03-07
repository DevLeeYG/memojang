import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import { yearData } from '../../../Type/Types';

const minDate = new Date('2022-01-01T00:00:00.000');
const maxDate = new Date('2030-01-01T00:00:00.000');

const YearCalendar = ({ yearData, date, setDate }: yearData) => {
  // date.filter((el)=>{
  //   return yearData.date === el.date
  // })

  const a = yearData?.map((el: { eprice: number; iprice: number }) => {
    return el.iprice + el.eprice;
  });

  const yearDatas = a?.reduce((a: number, b: number) => {
    return a + b;
  }, 0);

  const CustomCalendarPicker = styled(CalendarPicker)<CalendarPickerProps<any>>`
    display: 'flex';
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
  `;
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',

          width: '80%',
          height: '300px',
        }}
      >
        <CustomCalendarPicker
          views={['year']}
          minDate={minDate}
          maxDate={maxDate}
          date={date}
          onChange={(newValue: Date | unknown) => setDate(newValue)}
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>연 현황 : {yearDatas}</Box>
    </Box>
  );
};
export default YearCalendar;
