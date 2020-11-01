/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(str){
  let list_str = str.split(' '),
      out = [];
  for (let index in list_str) {
    if (list_str[index].length > 4) {
      out.push(list_str[index].split('').reverse().join(''));
    } else {
          out.push(list_str[index]);
    }
  }
  return out.join(' ');
}
