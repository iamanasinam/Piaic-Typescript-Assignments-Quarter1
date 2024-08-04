const monthNumber = (months: number) => {
    if (months === 1) {
      return `st`;
    } else if (months === 2) {
      return `nd`;
    } else if (months === 3) {
      return `rd`;
    } else {
      return `th`;
    }
  };
  
export default function findingDaysOfMonth (month: number, year: number) {
    let status = monthNumber(month);
    console.log(`\nTask 4\n\nGiven month: ${month}${status}, year: ${year}`);
  
  
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      console.log(`\n31 days in ${month}${status} month`);
    } else if (month == 2) {
      if (year % 4 == 0) {
        console.log(`\n29 days in ${month}${status} month`);
      } else {
        console.log(`\n28 days in ${month}${status} month`);
      }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      console.log(`\n30 days in ${month}${status} month`);
    } else {
      console.log(`\n\nInvalid Month: ${month}`);
    }
  };