const days = 6;
const limit = 30;
let studentReport = [11, 42, 33, 64 ,29, 37, 44]

//for loop
for( let i=0; i<studentReport.length; i++){
    if(studentReport[i] < limit){
        console.log(studentReport[i] + ' for loop')
    };
};
//while loop
let i = 0;

while( i < studentReport.length){
    if(studentReport[i] < limit){
        console.log(studentReport[i]+ ' while loop');
    }
    i += 1;
};
//foreach loop
studentReport.forEach(function(student){
    if (student < limit){
        console.log(student + ' foreach loop')
    }
});

//for in loop
for (let i in studentReport){
    if (studentReport[i] < limit){
        console.log(studentReport[i] + 'for in loop')
    }
};