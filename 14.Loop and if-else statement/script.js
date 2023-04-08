// 3.Sum of even numbers(e.g:2,4,6...)in 10.
let sum = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i}`);
    sum = sum + i;
  }
}
console.log(sum)


// 4.Multiply the odd numbers(e.g:1,3,5) in 17(17 is not enter)
let multi = 1;
for (let i = 0; i < 17; i++) {
  if (i % 2 == 1) {
    console.log(`${i}`);
    multi = multi * i;
  }
}
console.log(multi);



// 4.Multiply numbers between 10 and 18. (10, 18 is enter)
let multiply=10
for(let i=10; i<=18; i++){

        console.log(`${i}`);
        multiply=multiply*i
    }
    console.log(multiply);



// 5.Sum numbers between 17 and 30. Except 19,20
let summ=17
for(let i=17; i<=30; i++){
    if(i==19 || i==20) continue;
    console.log(`${i}`);
    summ=summ+i
}
console.log(summ);



// 6.Sum of even(odd) numbers and assign this result a variable.
let n = 0;
while (n < 30) {
  n++;
  if (n % 2 == 0) {
    console.log(`${n}   is even`);
  } else {
    console.log(`${n}   is odd`);
  }
}


// 7.Find of even numbers(e.g:2,4,6...) in 16. And every number to the power of 2.
for(let i=1; i<=16; i++){
    if(i%2==0){
        console.log(`${i}   ${i**2}`);
    }
}

