import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { FC } from "react";

const Calendar: FC<{ label: string }> = (props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="w-full h-full flex flex-col justify-start gap-2 text-white font-medium">
      <span>{props.label}</span>
      <DatePicker
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
      />
    </div>
  );
};

export default Calendar;
