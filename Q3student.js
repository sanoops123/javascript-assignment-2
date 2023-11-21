var readlineSync = require('readline-sync');
let mark = parseInt (readlineSync.question(' Enter your Mark  :'));

if(mark>90){
   console.log('A','CONGRATS...You are PASSED' );
}else if(mark>80){
   console.log('B','You are passed');    
}else if(mark>70){
    console.log('C','you are passed');
}else if(mark>60){
    console.log('D Grade');
}else if(mark>50){
    console.log('E Grade');
}else{(mark<50)
    console.log('SORRY Your result FAILED');
}