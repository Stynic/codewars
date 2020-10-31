/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/


function isIsogram(str){
    let str_lower = str.toLowerCase();
    let str_object = {};
    for (let key in str_lower) {
        if (str_object[str_lower[key]]) {
            str_object[str_lower[key]] += 1;
        } else {
            str_object[str_lower[key]] = 1;
        }
    }
    for (let key in str_object) {
        if (str_object[key] > 1) {
            return false;
        }
    }
    return true;
}
