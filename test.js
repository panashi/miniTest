// 1. Declare a number called myNumber that is equal to your age and print it
myNumber = 16;
console.log(myNumber);

// 2. Declare a string called myName that contains your name and print it

name = "Rotavas"
console.log(name);
// 3. Declare an array named myArray that contains your age, your first name, and if it's true or false that you're a student
    
student = false;
myArray = [myNumber, name, student];


// 4. Write and call a function called printHello that prints your name to the console by accessing myArray
function printHello(){
    console.log(myArray[0]);
}


/* 5.
1)create a function called area that takes in two parameters, width and length
2) the function, area should return width times length
3) call the function and give two values for the parameters */
    width = 12;
    length = 10;
    function area(x,y){
        width * length;
        console.log(width*length)
    }

area(width,length);

/* 6. Use conditional statements to write fizzBuzz
1) if num is divisble by BOTH 3 and 5, console.log "FizzBuzz"
2) if num is divisible by 3, console.log "Fizz"
3)  if num is divisible by 5, console.log "Buzz"  */

num = 3
fizz = num % 3
buzz = num % 5

if(fizz == 0){
    console.log('fizz');
}
else if(buzz == 0){
    console.log('buzz');
}

else if(fizz != 0 && buzz != 0){
    console.log
}


// 7. Write a loop that prints hello to the console 4 times

for(i=0; i<4; i++){
    console.log('hello');
}

//8. write a nested for loop that reads the array and console.log each element
let nestedArray = [[2,1],[5,8],[3,9]]


for(let i=0; i < 3; i++){
    for(let x=0; x < 2; x++){
        console.log(nestedArray[i][x])
    }
}





//9. Command line problems (MAKE SURE TO ANSWER THESE IN THE COMMENTS)

//9a. make a directory called test

// write answer here: 

//9b. move to your test directory that you just created

// write answer here: 

//9c. make a file called test.js

// write answer here: 

//9d. what is the command to open a file to vscode? 

// write answer here: 

//9e. So you already did "git add ." and then you did git commit -m
// What is the last step of the process to push everything to github?

// write answer here: Yes