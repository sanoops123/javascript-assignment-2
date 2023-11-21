var readlineSync = require('readline-sync');

let limit= parseInt (readlineSync.question(' Enter a limit:'));
let sum=0
for(let i=1;i<=limit;i++){

    if(i%2!==0){
        console.log[i]
        sum=sum+i;
    }
}
     console.log('summ of odd numbers;',sum);
 
