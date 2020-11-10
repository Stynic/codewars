/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

let x_1 = 0;
let x_2 = 1;
let result = 0;

function zero(func='') {
    if (func === '') {
        x_1 = 0;
    }else{
        x_2 = 0;
        eval(`${func}()`);
        return result
        }
}
function one(func='') {
    if (func === '') {
        x_1 = 1;
    }else{
        x_2 = 1;
        eval(`${func}()`);
        return result
        }
}
function two(func='') {
    if (func === '') {
        x_1 = 2;
    }else{
        x_2 = 2;
        eval(`${func}()`);
        return result
        }
}
function three(func='') {
    if (func === '') {
        x_1 = 3;
    }else{
        x_2 = 3;
        eval(`${func}()`);
        return result
        }
}
function four(func='') {
    if (func === '') {
        x_1 = 4;
    }else{
        x_2 = 4;
        eval(`${func}()`);
        return result
        }
}
function five(func='') {
    if (func === '') {
        x_1 = 5;
    }else{
        x_2 = 5;
        eval(`${func}()`);
        return result
        }
}
function six(func='') {
    if (func === '') {
        x_1 = 6;
    }else{
        x_2 = 6;
        eval(`${func}()`);
        return result
        }
}
function seven(func='') {
    if (func === '') {
        x_1 = 7;
    }else{
        x_2 = 7;
        eval(`${func}()`);
        return result
        }
}
function eight(func='') {
      if (func === '') {
        x_1 = 8;
    }else{
        x_2 = 8;
        eval(`${func}()`);
        return result
        }
}
function nine(func='') {
        if (func === '') {
        x_1 = 9;
    }else{
        x_2 = 9;
        eval(`${func}()`);
        return result
        }
}

function plus() {
    result = x_2 + x_1
    return 'plus'
}
function minus() {
    result = x_2 - x_1
    return 'minus'
}
function times() {
    result = x_2 * x_1
    return 'times'
}
function dividedBy() {
    result = Math.floor(x_2 / x_1)
    return 'dividedBy'
}
