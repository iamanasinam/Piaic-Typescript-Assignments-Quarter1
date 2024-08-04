export default function ageGroup (_age: number) {
    console.log(`\nTask 3`);
    if (_age >= 0 && _age <= 12) {
      console.log(`\nChild: ${_age}`);
    } else if (_age >= 13 && _age <= 19) {
      console.log(`\nTeenager: ${_age}`);
    } else if (_age >= 20 && _age <= 59) {
      console.log(`\nAdult: ${_age}`);
    } else if (_age >= 60) {
      console.log(`\nSenior Citizen: ${_age}`);
    } else {
      console.log(`\nInvalid Age: ${_age}`);
    }
  };