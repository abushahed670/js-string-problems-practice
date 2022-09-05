//case sansative practice.....here doing practice k capital & small...


// const userName = 'blackpink';
// const userInput = 'blackpinK';
// if (userName === userInput) {
//     console.log('valid user');
// }
// else {
//     console.log('invalid user');
// }

//to make all lowercase and upercase....& make case valid. case sansative


const userName = 'blackpink';
const userInput = 'blackpinK';
console.log(userName.toLowerCase());//for lower case
console.log(userInput.toUpperCase());// for upper case
console.log(userName.toLocaleLowerCase());//for local upper case
if (userName.toLowerCase() === userInput.toLocaleLowerCase()) {
    console.log('valid user');
}
else {
    console.log('invalid user');
}

