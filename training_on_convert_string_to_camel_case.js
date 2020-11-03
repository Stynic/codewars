/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){
  out = '';
  if (str.length > 0) {
    net_letter_upper = false;
    for (let key in str) {
      if (net_letter_upper === true) {
        out += str[key].toUpperCase();
        net_letter_upper = false;
        continue;
      }
      if (str[key] === '-' || str[key] === '_') {
        net_letter_upper = true;
      } else {
        out += str[key];
      }
    }
  }
  return out;
}
