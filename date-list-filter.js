/get name of days from current
export const weekDaysName = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var goBackDays = 7;

  var today = new Date();
  var daysSorted = [];

  for (var i = 0; i < goBackDays; i++) {
    var newDate = new Date(today.setDate(today.getDate() - 1));
    daysSorted.push(days[newDate.getDay()]);
  }
  return daysSorted;
};

//get list of years from current
export const YEAR_FILTER = () => {
  let yearsArr = [];
  let currentYear = new Date().getFullYear();
  let startYear = 1980;
  while (currentYear >= startYear) {
    yearsArr.push(currentYear);
    currentYear--;
  }
  return yearsArr;
};

//change date format UTC

export const convertTZ = (date, tzString) => {
  var data = new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
  return data;
};

//get list of dates in a year
export const getYearDates = (currentYear) => {
  var curr = new Date(); // get current date
  let endDate;
  let stopDate;
  let fullYear = new Date().getFullYear();
  if (currentYear == fullYear) {
    endDate = curr.getDate();
    stopDate = new Date(curr.setDate(endDate));
  } else {
    stopDate = new Date(currentYear, 11, 31);
  }
  var startDate = new Date(currentYear, 0, 1);
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return getDates(startDate, stopDate);
};

//create list of array start date to end date
export const getDates = (startDate, stopDate) => {
  let dateArray = new Array();
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    let convertDate = dateFormat(currentDate, "mm/dd/yyyy");

    dateArray.push(convertDate);
    let date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    currentDate = date;
  }
  return dateArray;
};

//get list of month dates from current to past
export const getMonthDates = (days) => {
  var curr = new Date(); // get current date
  let first = curr.getDate(); // First day is the day of the month - the day of the week
  var last = first - days; // last day is the first day + 6
  var stopDate = new Date(curr.setDate(first));
  var startDate = new Date(curr.setDate(last));
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  return getDates(startDate, stopDate);
};

//get list of week dates from current to past
export const getWeekDates = (days) => {
  let daysDate;
  if (days == 1) {
    daysDate = 6 * days;
  } else {
    daysDate = 7 * days - 1;
  }
  var curr = new Date(); // get current date
  let first = curr.getDate(); // First day is the day of the month - the day of the week
  var last = first - daysDate; // last day is the first day + 6

  var stopDate = new Date(curr.setDate(first));
  var startDate = new Date(curr.setDate(last));

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return getDates(startDate, stopDate);
};

//get current and last day dates
export const getDaysDate = (days) => {
  var curr = new Date(); // get current date
  let first = curr.getDate(); // First day is the day of the month - the day of the week
  var last = first - days; // last day is the first day + 6

  var stopDate = new Date(curr.setDate(first));
  var startDate = new Date(curr.setDate(last));

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return getDates(startDate, stopDate);
};

// user types:
// default: NORMAL_USER
// BUSINESS_USER

export const getWalletAddressFormate = (data) => {
  return `${data?.substring(0, 4)}...${data?.substring(
    data.length - 4,
    data.length
  )}`;
};

export const dateFormatChange = (date) => {
  const startDate = date;
  const startdateArray = startDate.split("/");
  return `${startdateArray[2]}-${startdateArray[0]}-${startdateArray[1]}`;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//get list of months from current current year
export const getListOfMonth = (currentYear) => {
  let fullYear = new Date().getFullYear();
  let currentMonth;
  let d;
  let month;
  let today = new Date();
  if (currentYear == fullYear) {
    currentMonth = today.getMonth() + 1;
  } else {
    currentMonth = 12;
  }
  let monthArr = [];
  for (var i = currentMonth; i > 0; i -= 1) {
    d = new Date(today.getFullYear(), currentMonth - i, 1);
    month = monthNames[d.getMonth()];
    monthArr.push(month);
  }
  return monthArr;
};

export const compareMonth = (date) => {
  const d = new Date(date);
  return monthNames[d.getMonth()];
};
