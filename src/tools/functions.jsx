export const sliceText = (text, length) => {
  const maxLength = length ? length : 110;
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return truncatedText;
};

export const translateDate = (date) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "May",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "October",
    "Nov",
    "Dec",
  ];
  const dateString = new Date(date);
  const getMonth = month[dateString.getMonth()];
  return `${getMonth} , ${dateString.getDay()} , ${dateString.getFullYear()}`;
};
