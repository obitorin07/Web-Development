/*
in this js file i will write code to greet message based on gender 
*/

let gender = 'Female';
let age = 50;

if(gender == 'Male' ){
    if (age >= 50){
        console.log('Hello Uncle how are you 😀')
    }
    else{
        console.log('Hello Young Man How are you :)')
    }
}

else if (gender == 'Female') {
    if (age >= 50) {
        console.log('Hello Aunty, how are you 😀');
    } else {
        console.log('Hello Young Lady, how are you :)');
    }
} else {
    console.log('Hello, how are you?');
}