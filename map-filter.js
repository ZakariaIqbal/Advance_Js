const number  = [3,4,5,6,7];
const output = [];

console.log (number);
for (let i=0;i<number.length;i++)
{
    const element = number [i];
    const result = element * element ;

    output.push(result);

}

console.log (output);

number.map(function(element,index,array)
    {

    console.log(element,index,array);

    }
)

const result = number.map(function(element)
    {
        
    return element*element;
    
    }
)
 console.log (result);

 const result2= number.map( x=>x*x );
 console.log ( result2);

 const bigger= number.filter(x => x>5 );
 console.log(bigger);
 
 const find = number.find (x=> x<3);