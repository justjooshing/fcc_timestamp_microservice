const dateResponse = (date) => {
  const checkDate = (d) => d instanceof Date && isFinite(d);
  let parsedDate = new Date(date);
  if (!checkDate(parsedDate)) {
    // check against both string and number version in case of '2015-02-05' or 1451001600000
    parsedDate = new Date(Number(date));
  }
  if (checkDate(parsedDate)) {
    return { unix: parsedDate.valueOf(), utc: parsedDate.toUTCString() };
  }
  return { error: "Invalid Date" };
};

module.exports = { dateResponse };
