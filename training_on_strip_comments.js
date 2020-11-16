/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
    function str_trim(str) {
        return str.trim();
    }
    let out = input;
    for (let index in markers) {
        let match = Number(index) + 1 !== markers.length ? new RegExp(`${markers[index]}.*\\n`) : RegExp('\\'+`${markers[index]}.*`);
        out = Number(index) + 1 !== markers.length ? out.replace(match, '\n') : out.replace(match, '').trim();
    }
    return out.split('\n').map(str_trim).join('\n');
};
