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



// const lyrics = 'tme bondhu kala pakHi ame jeno ki. bosonthu kale tmai bolte pare ni. kala kala sada sada';

// const searchString = 'paKhi'

// // const doesExist = lyrics.includes('paKhi');
// // const doesExist = lyrics.includes(searchString);
// const lyricsLowerCase = lyrics.toLowerCase();
// // const doesExist = lyricsLowerCase.includes(searchString);
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLocaleLowerCase());//inline lower case both the searchString & lyrics...
// console.log(doesExistOneLine);
// console.log(doesExist);

// //indexOf.....search.....to many same string it gives the first string in result

// console.log(lyrics.indexOf('kailla'));
// console.log(lyrics.indexOf('Tumi'));
// // -1 ashle bojbo oi string ta nai...

// // startswith...check to start with the string

// console.log(lyrics.startsWith('tmi'));
// console.log(lyrics.startsWith('tme'));

// // endswith...its just check the last sring
// const fileName = 'mybiodata.pdf';
// const otherFile = 'mypic.png';
// fileName.endsWith('.fdf');
// fileName.endsWith('.pdf');



// split joining....that means it cut down string and also add string

// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
// // console.log(lyrics);
// const parts = lyrics.split(' '); //need space betwween ' ' here for separate word each other.

// const sentence = lyrics.split('.');// use it to separet with . to sentences
// const chars = lyrics.split('')// no gap between '' to separate every letter/character

// console.log(parts);
// console.log(sentence);
// console.log(chars);


// //slice ...to cut...ex from 5 to 8..

// const partial = lyrics.slice(5, 8);// cut from 5 run next 3.. then add 5+3=8
// console.log(partial);

// const partial2 = lyrics.substring(5, 8);// same to partial
// console.log(partial2);

// const lines = ['Tumi bondhu kala Pakhi ami jeno ki',
//     'bosonto kale tomai bolte pari ni',
//     'kala kala sada sada'];// take it from cosole.log(sentences); output. also cut the gap of before ' ...
// const newSong = lines.join('. ');
// console.log(newSong);



//math for js


// const result = Math.pow(2, 4);
// console.log(result);// to find the  2 to the power 4

// const num1 = 25;
// const num2 = 45;
// // const gap = num1 - num2;
// const gap = Math.abs(num1 - num2);//use math.abs to reduse the big & small number..abs= absolute ...it give positive gap..

// // console.log(gap);
// if (gap < 5) {
//     console.log('you guys can be friends');
// }
// else {
//     console.log('you guys stay apart');
// }



//to get full number of divided number...use round

// const number = 2.4567764;
// const fullNumber = Math.round(number);
// // console.log(fullNumber);
// const result2 = Math.ceil(2.00001);// ceil...Returns the smallest integer greater than or equal to its numeric argument.eta just dosomikm er boro porno sonka ta dei
// console.log(result2);

// const result3 = Math.floor(456.78688);//A numeric expression.Returns the greatest integer less than or equal to its numeric argument. eta just dosomoi bad diye porno sonkha ta dei..
// console.log(result3);


// // random...

// console.log(Math.random());//it gives random rumber

// // const random = Math.random() * 100;//it gives 1 to 100 number.
// const random = Math.round(Math.random() * 100);// to get full number
// console.log(random);



//swap...that means change the value... use temp...


// let first = 5;
// let second = 7;
// console.log(first, second);
// // this is wrong approch
// // first = second;
// // second = first;
// // console.log(first, second);// to solve this problem i have to use temp..
// const temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// // destruction... to change the opposite  to temp...using this as like swap...

// [first, second] = [second, first];

// console.log(first, second);

