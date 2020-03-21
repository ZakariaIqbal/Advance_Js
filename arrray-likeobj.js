function add(num1, num2) {
    console.log([...arguments]);
    const arr = [...arguments];
    let sum = 0;
    for(let i=0 ;i<arr.length;i++)
    {
        sum+=arguments[i];

    }
    return sum;
}
const result = add(10, 15,14);
console.log(result);