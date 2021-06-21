'use strict';
//welcoming alert
alert(' Guessing Game answer the following qustions with yes or no ');


let qcount=0; // to count the correct answers
// Q num 1
let q1 = prompt('Is My Name Areej?').toUpperCase();
let q1answer=(q1 === 'YES' || q1 === 'Y');
if (q1answer){
  alert(' correct My name is Areej ');
  qcount++;
}
else {
  alert(' Wrong answer, my name is Areej ');
}
console.log('User answer '+ q1answer);



//Q num 2
let q2 = prompt('Am I biger than one hundred years?').toUpperCase();
let q2answer=(q2 === 'NO' || q2 === 'N');
if (q2answer){
  alert(' correct I am twenty six years old');
  qcount++;

}
else {
    alert(' Wrong answer, are you kidding me!! ');
}
console.log('User answer '+ q2answer);



// Q num 3
let q3 = prompt('Is purple my favorite color?').toUpperCase();
let q3answer=(q3 === 'YES' || q3 === 'Y');
if (q3answer){
  alert('correct purple is my favorite color');
  qcount++;
}
else {
  alert(' Wrong answer, it is my favorite color ');
}
console.log('User answer '+ q3answer);



// Q num 4
let q4 = prompt('Am I living in Jordan?').toUpperCase();
let q4answer=(q4 === 'YES' || q4 === 'Y');
if (q4answer){
  alert('correct I am in Jordan');
  qcount++;

}
else {
  alert(' Wrong answer,  I am in Jordan  ');
}
console.log('User answer '+ q4answer);


// Q num 5
let q5 = prompt('Am I like coding?').toUpperCase();
let q5answer=(q4 === 'YES' || q4 === 'Y');
if (q5answer){
  alert('correct I Do');
  qcount++;

}
else {
  alert(' Wrong answer,  I like coding  ');
}
console.log('User answer '+ q5answer);


let userName =prompt('What is your name ?');
alert(' Hello ' + userName +' hope you enjoy the Guessing Game you got '+ qcount + ' correct answer !');
