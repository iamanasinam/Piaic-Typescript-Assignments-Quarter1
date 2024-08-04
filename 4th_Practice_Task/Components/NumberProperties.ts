const findNumberProperties = (number: number) => {
    console.log("Task 1\n");
    console.log(`Entered number: ${number}`);
    if (number % 2 === 0) {
      console.log(`\n1. It is Even Number`);
    } else {
      console.log(`\n1. It is Odd number`);
    }
  
    if (number > 0) {
      console.log(`\n2. It is Positive number`);
    } else if (number == 0) {
      console.log(`\n2. It is Zero `);
    } else {
      console.log(`\n2. It is Negative number`);
    }
  
    if (number % 2 === 0 && number % 3 === 0) {
      console.log(`\n3. It is Divisible by both 2 and 3`);
    } else if (number % 2 === 0 || number % 3 === 0) {
      console.log(`\n3. It is Divisible by either 2 or 3`);
    } else {
      console.log(`\n3. It is Not divisible by both 2 and 3`);
    }
  };


export default findNumberProperties;
