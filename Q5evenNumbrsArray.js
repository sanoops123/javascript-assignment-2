var readlineSync = require('readline-sync');

let number= parseInt (readlineSync.question(' Enter the size of an array:'));

let array=[]
let even=0;

for(let i=0;i<number;i++){
    array[i]=parseInt (readlineSync.question('Enter of the values of an array='));
}
for (i=0;i<number;i++){
    if(array[i]%2===0){
      ++even
        
    }
}
console.log('Number of even number in the given array is',':',even)
        
