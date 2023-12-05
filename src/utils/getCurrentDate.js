export const getCurrentDate = () => {
  const now = new Date();

  // Define the options for formatting the date
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = now.toLocaleDateString("en-US", options);

  return formattedDate;
};
