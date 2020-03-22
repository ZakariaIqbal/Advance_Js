 
 //global scope
 const bouns = 40

function sum (num1 ,num2 )
{
   if (num1>num2)
   {    //local scope
        let mood = "zak is not happy";
            mood = "it's time to do something";
        var wassup = "heyy wasssup it's var ";
            console.log (mood);
            
   }
             //console.log (mood);   //it won't work as it is known as local scope
             console.log (wassup);   // it's working as var is known as hoisting scope
      return num1 + num2 + bouns;
}

const result = sum (40,20);
      console.log (result);
//console.log (mood); //it won't work .
   
