import { formatDate } from "./formatDate";

export const getDateRange = (startDate, endDate) => {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : "Present";
  return `${formattedStartDate} - ${formattedEndDate}`;
};
