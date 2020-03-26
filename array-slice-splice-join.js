 const num = [0,1,2,3,4,5,6,7,8];

 const part = num.slice (2,5);
 console.log (part);
 console.log (num);

const removed =num.splice (2,6,45);
console.log (removed);
console.log (num);

const together = num.join ("hi ");
console.log (together);
console.log (num);
