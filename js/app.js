'use strict';

//welcoming alert
alert(' Guessing Game answer the following qustions with yes or no ');


let qcount = 0; // to count the correct answers
// Q num 1
let q1 = prompt('Is My Name Areej?').toUpperCase();
let q1answer = (q1 === 'YES' || q1 === 'Y');
if (q1answer) {
  alert(' correct My name is Areej ');
  qcount++;
}
else {
  alert(' Wrong answer, my name is Areej ');
}
// console.log('User answer '+ q1answer);



//Q num 2
let q2 = prompt('Am I biger than one hundred years?').toUpperCase();
let q2answer = (q2 === 'NO' || q2 === 'N');
if (q2answer) {
  alert(' correct I am twenty six years old');
  qcount++;

}
else {
  alert(' Wrong answer, are you kidding me!! ');
}
// console.log('User answer '+ q2answer);



// Q num 3
let q3 = prompt('Is purple my favorite color?').toUpperCase();
let q3answer = (q3 === 'YES' || q3 === 'Y');
if (q3answer) {
  alert('correct purple is my favorite color');
  qcount++;
}
else {
  alert(' Wrong answer, it is my favorite color ');
}
// console.log('User answer '+ q3answer);



// Q num 4
let q4 = prompt('Am I living in Jordan?').toUpperCase();
let q4answer = (q4 === 'YES' || q4 === 'Y');
if (q4answer) {
  alert('correct I am in Jordan');
  qcount++;
}
else {
  alert(' Wrong answer,  I am in Jordan  ');
}
// console.log('User answer '+ q4answer);


// Q num 5
let q5 = prompt('Am I like coding?').toUpperCase();
let q5answer = (q5 === 'YES' || q5 === 'Y');
if (q5answer) {
  alert('correct I Do');
  qcount++;

}
else {
  alert(' Wrong answer,  I like coding  ');
}
// console.log('User answer '+ q5answer);


let userName = prompt('What is your name ?');
alert(' Hello ' + userName);

// console.log('User name '+ userName);

//Q num 6
let Guessingnum;
for (let i = 0; i < 4; i++) {
  Guessingnum = Number(prompt('Guess the Number ?'));
  if (Guessingnum === 26) {
    alert('Great You Guess It  !');
    qcount++;
    break;
  }
  else if (Guessingnum < 26)
    alert('too low  !');
  else
    alert('too high  !');
}
alert('The Correct Number is 26 !');

// Q num 7
let webDevoLan = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'PHP'];
let GuessingWDL;
for (let i = 0; i < 6; i++) {
  GuessingWDL = prompt('What are the most common web development languages?').toUpperCase();
  for (let y = 0; y <= webDevoLan.length; y++) {
    if (GuessingWDL === webDevoLan[y]) {
      alert('Great You Guess It !');
      // eslint-disable-next-line no-unused-vars
      qcount++;
      i = 10;
      break;
    }
  }
  if (i !== 10) {
    alert('wrong Answer');
  }
}
let correct = 'The correct answers:';
for (let i = 0; i <= webDevoLan.length; i++) {
  correct = correct + '  ' + webDevoLan[i];
}
alert(correct);
alert(' Hello ' + userName + ' hope you enjoy the Guessing Game you got ' + qcount + ' correct answer /7 !');

