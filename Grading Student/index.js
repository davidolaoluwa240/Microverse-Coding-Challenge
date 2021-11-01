function gradingStudents(grades) {
  // create a new array where the new rounded grade will be store
  let studentRoundedGrade = [];

  // go through the array using the forEach method
  grades.forEach((grade) => {
    // check if the grade value is greater than 38
    if (grade >= 38) {
      // get the next multiple of of five for a grade
      let nextMultipleFive = Math.ceil(grade / 5) * 5;
      // get the difference between the next multiple of five and the student grade
      let gradeDiff = nextMultipleFive - grade;
      // check if the grade difference is less than 3
      // if it is less than 3 push the next multiple of five to the student rounded grade
      // if it is greater than or equal to the 3 then push the student actual grade to the student rounded grade
      gradeDiff < 3
        ? studentRoundedGrade.push(nextMultipleFive)
        : studentRoundedGrade.push(grade);
    } else {
      // if the student grade is less than 38 then the student actual grade should be push to the rounded student                   array
      studentRoundedGrade.push(grade);
    }
  });

  // return the student rounded grade
  return studentRoundedGrade;
}

console.log(gradingStudents([73, 67, 38, 22]));
