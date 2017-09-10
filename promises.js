var d=new Promise( (resolve,reject)=>{
    setTimeout(()=> {
        if(true)
            {
           resolve('hello world')
            }
            else 
            {
                reject('err');
        
            }
        
    }, 2000);
}
);
d.then((data)=>console.log('success', data))
 .then((data)=>console.log(data))
.catch((err)=>console.error('err',err))
console.log('this line will go first ');

// this line will go first 
// success hello world
// undefined
//d.catch((error) => console.error('error : ', error)); // sepatate instead of chained .Engine treats it as promise without handled promise rejection 