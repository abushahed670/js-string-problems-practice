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


// const userName = 'blackpink';
// const userInput = 'blackpinK';
// console.log(userName.toLowerCase());//for lower case
// console.log(userInput.toUpperCase());// for upper case
// console.log(userName.toLocaleLowerCase());//for local upper case
// if (userName.toLowerCase() === userInput.toLocaleLowerCase()) {
//     console.log('valid user');
// }
// else {
//     console.log('invalid user');
// }


//search..... single string among the sentence or the string...



const lyrics = 'tme bondhu kala pakHi ame jeno ki. bosonthu kale tmai bolte pare ni. kala kala sada sada';

const searchString = 'paKhi'

// const doesExist = lyrics.includes('paKhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLocaleLowerCase());//inline lower case both the searchString & lyrics...
console.log(doesExistOneLine);
console.log(doesExist);

//indexOf.....search.....to many same string it gives the first string in result

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));
// -1 ashle bojbo oi string ta nai...

// startswith...check to start with the string

console.log(lyrics.startsWith('tmi'));
console.log(lyrics.startsWith('tme'));

// endswith...its just check the last sring
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.fdf');
fileName.endsWith('.pdf');