import React, { useState } from "react"; // Replace 'your-datepicker-library' with the actual library you are using
import DatePicker from "tailwind-datepicker-react";
import { format } from "date-fns";

interface DatePickerProps {
  onChange: (selectedDate: Date) => void;
}

const getFormattedTodayDate = (): string => {
  const today = new Date();
  return format(today, "yyyy-MM-dd"); // Format the date as "yyyy-MM-dd"
};

const DatepickerComponent: React.FC<DatePickerProps> = ({ onChange }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (sDate: Date) => {
    // console.log(selectedDate);
    selectedDate = sDate;
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div>
      {/* Replace 'Datepicker' with the actual component you are using */}
      <DatePicker
        options={{
          title: "Date",
          autoHide: true,
          todayBtn: false,
          clearBtn: true,
          maxDate: new Date("2030-01-01"),
          minDate: new Date(getFormattedTodayDate()),
          icons: {
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>,
          },
          datepickerClassNames: "top-12",
          //   defaultDate: new Date("2022-01-01"),
          language: "en",
        }}
        onChange={onChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default DatepickerComponent;
