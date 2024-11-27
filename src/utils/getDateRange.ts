import { formatDate } from "./formatDate";

export const getDateRange = (
  startDate: string,
  endDate: string | null = null
) => {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : "Present";
  return `${formattedStartDate} - ${formattedEndDate}`;
};
