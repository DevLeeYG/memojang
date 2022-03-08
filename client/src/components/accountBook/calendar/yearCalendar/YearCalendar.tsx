import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CalendarPicker, { CalendarPickerProps } from '@mui/lab/CalendarPicker';
import { CalendarProps, YmdData } from '../../../Type/Types';

const minDate = new Date('2018-01-01T00:00:00.000');
const maxDate = new Date('2023-01-01T00:00:00.000');

const YearCalendar = ({ yearData, date, setDate }: CalendarProps) => {
  const totalPrice = yearData?.map((el: YmdData) => {
    return el.iprice + el.eprice;
  });

  const yearGetPrice = totalPrice?.reduce(
    (prevPrice: number, curPrice: number) => {
      return prevPrice + curPrice;
    },
    0,
  );

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
          onChange={(changeYear: Date | unknown) => setDate(changeYear)}
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>연 현황 : {yearGetPrice}원</Box>
    </Box>
  );
};
export default YearCalendar;
