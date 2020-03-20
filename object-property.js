const student=[ 
    { id:16 , name :'zakaria'},
    { id:84 , name :'sakib'},
    { id:65 , name :'Rahim'},
    { id:27 , name :'Karim'}
];
    const output=[];
    const id=[]
    const big = [];
    
    for (let i=0; i<student.length;i++)  {output.push(student[i].name);}
    console.log (output);

    for (let i=0; i<student.length;i++)  { id.push(student[i].id);}
    console.log (id);

    for (let i=0; i<student.length;i++)
    {
        const a = student[i].id;
      
        if ( a>50)  {big.push(a);}
        
    }
    console.log (big);

    const name    = student.map(s =>s.name);
    const ids     = student.map(x =>x.id );
    const bigger  = student.filter(x=> x.id>50);
    const bigger1 = student.find(x=> x.id>50);
    console.log(name);
    console.log(id);
    console.log(bigger);
    console.log(bigger1);