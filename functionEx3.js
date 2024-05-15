const costMonth = payment => (payment + 3) + (payment * 0.001);
const greetFrend = (frend1, frend2, frend3) => console.log('Welcome ' + frend1 + ', ' + frend3 + ', ' + frend2 + '.');
const ageCal = birthYear => 2024 - birthYear;
const welcomeAge = (fr1, fr2, fr3, b1, b2, b3) => {
    const age1 = ageCal(b1);
    const age2 = ageCal(b2);
    const age3 = ageCal(b3);
    console.log('Welcome ' + fr1 + ', you are ' + age1 + '.');
    console.log('Welcome ' + fr2 + ', you are ' + age2 + '.');
    console.log('Welcome ' + fr3 + ', you are ' + age3 + '.');
}
const gradeCheck = score => score > 11 ? "not within scope" : score === 11 ? "Perfect" : score > 8 ? "Excellent" : score >= 5 ? true : false;

