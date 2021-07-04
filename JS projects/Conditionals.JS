// 1. Write a JavaScript program that accept two integers and display the larger in the console. 
let num1=1;
let num2=-1;
if (Number.isInteger(num1)===true && Number.isInteger(num2)===true) { 
    console.log(num1);
    console.log(num2);
if (num1>num2) {
    console.log("The biggest number is "+num1); 
   } 
   else {
    console.log("The biggest number is "+num2);
}
   } 
   else {
    console.log("Number 1 or 2 might not be integer numbers");
}

  /* 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display the specified sign in the console. 
Sample numbers : 3, -7, 2
Output : The sign is -  */

let x=1;
let y=-1;
let z=-2;
const productIs= x*y*z;
if (productIs<0) {
    console.log("The sign id-");
}
else {
    console.log("The sign is +");
}

/*3. Write a JavaScript conditional statement to sort three numbers. Display the result in the console
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

let a=3;
let b=-1;
let c=0;
let min = a;
let  mid = b;
let max = c;
if (min > mid) { 
        mid = a; min = b; 
}
if (mid > max) 
{
        max = mid;
        mid = c;
 if (min > mid)
        {
            mid = min;
            min = c;
        }
}
    console.log(min, mid, max);

/*4. Write a JavaScript conditional statement to find the largest of five numbers.Display the result in the console. 
Sample numbers : -5, -2, -6, 0, -1
Output : 0 */

let first=9;
let second=-5;
let third=-4;
let fourth=0;
let fifth=1;
let maxx;

if (first > second) {
   maxx = first;
   } 
   else  {
     maxx = second;
    }
if (third > maxx) {
    maxx = third;
}
if (fourth > maxx) {
        maxx = fourth;
}
if (fifth > maxx) {
  console.log (maxx=fifth);
}
  else {
   console.log(maxx);
   }





