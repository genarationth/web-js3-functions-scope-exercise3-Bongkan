// Exercise #3.1
// Maria has to calculate the cost of her payments for the month.For every transation there is a $3 fee and a 0.1 % (0.001) interest fee.Can you help her calculate her costs ? Return the value of what she should be paying.
const costMonth = payment => (payment + 3) + (payment * 0.001);

// Exercise #3.2
// Part 1
// Ed would like a way to input 3 names of his friends.The output should be a console greeting to his friends saying: Welcome { name1 }, { name2 }, { name3 }.
const greetFrend = (frend1, frend2, frend3) => console.log('Welcome ' + frend1 + ', ' + frend3 + ', ' + frend2 + '.');
// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.
//     i.e. 1990 returns 30
const ageCal = birthYear => 2024 - birthYear;
// Part 3
// Ed would like to create a function that prints out, Welcome { name1 }, you are { age1 }. Welcome { name2 }, you are { age2 }. Welcome { name3 }, you are { age3 }.
const welcomeAge = (fr1, fr2, fr3, a1, a2, a3) => {
    console.log('Welcome ' + fr1 + ', you are ' + a1 + '.');
    console.log('Welcome ' + fr2 + ', you are ' + a2 + '.');
    console.log('Welcome ' + fr3 + ', you are ' + a3 + '.');
}
// Challenge Yourself
// A teacher wants to create a rubric for grading.The rubric is from 0 - 11.
// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.
// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.
// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

const gradeCheck = score => score > 11 ? "not within scope" : score === 11 ? "Perfect" : score > 8 ? "Excellent" : score >= 5 ? true : false;
