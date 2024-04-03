// Code your solutions in this file


function writeCards(arrayNames, event) {
    let names = [];
    for (let i = 0; i < arrayNames.length; i++) {
        names.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`);
    }
    return names;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber += 1;
    }
    console.log( startingNumber );
  }
  console.log(countDown());