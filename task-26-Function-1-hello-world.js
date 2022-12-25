// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of?
//  What is a "hello world" solution you would want to show your friends?

function greet(){
    var firstWord =[];
    firstWord.push('h');
    firstWord.push('e');
    firstWord.push('l');
    firstWord.push('l');
    firstWord.push('o');
    
    var secondWord=[];
    secondWord.push('w');
    secondWord.push('o');
    secondWord.push('r');
    secondWord.push('l');
    secondWord.push('d');
    
    return firstWord.join('') + ' ' + secondWord.join('') + "!";
};