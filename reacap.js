// variable 

var favoriteBook = '4 hour work week'

// array 

var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog')
bookList[1] = 'Story Brand'
bookList.push('small Giants')
bookList.pop();

// conditional 

if (bookList[1] == 'hooked') {
    console.log('I am hooked')
}
else {
    console.log('I am not hooked')
}

// loop 

// while loop 
var i = 0; // loop variable

while (i < 20) {
    console.log(i);
    console.log('looping looping looping');
    i++;

}

// for loop 
for (var i = 0; i < 20; i++) {
    console.log(i)
    console.log('looping looping looping')
}


