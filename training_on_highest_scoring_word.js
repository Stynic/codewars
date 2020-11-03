/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f',
                'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x',
                'y', 'z'],
  words = x.toLowerCase().split(' ');
  price_words = [];
  for (let key in words) {
    let sum = 0,
        word = words[key];
    for (let char_p in word) {
      sum += arr_en.indexOf(word[char_p]) + 1
    }
    price_words.push(sum);
  }
  return words[price_words.indexOf(Math.max.apply(null, price_words))]
}
