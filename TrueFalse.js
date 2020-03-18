/*
                Falsy
value     0            is known as Falsy value ;
String   ""            is know as Falsy value;
setting as null and NaN is known as falsy value;

                Truthy
Any value besides 0 is known as Truthy value ;
String lenght bigger then 0 is known as Truthy value ;
"0",[]," " is known as Truthy value ;

*/


//let age = -1 ;
//let age = 0 ;

//const age ="Wassup";
//const age = "";
const age =[];

if (age)
{
    console.log("condition is true");
    
}
else {

    console.log ("condition is not true");
}

// if we want to take 0 as true then 

if (age|| age ==0)
{
    console.log("Now condition is true");
    
}
else {

    console.log ("condition is not true");
}