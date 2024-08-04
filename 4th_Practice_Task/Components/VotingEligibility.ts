export default function votingEligibility(age: number, nationality: string) {
  console.log("Task 2\n");
  console.log(`Age is ${age} and Nationality is ${nationality}`);
  if (age >= 18) {
    if (nationality == "Pakistani") {
      console.log(`\nYou are eligible to vote.`);
    } else {
      console.log(`\nPlease obtain a valid ID to vote.`);
    }
  } else {
    console.log(`\nYou are In-eligible to vote.`);
  }
}
