/*
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of the person who will drink the n-th cola.

Input:
The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).

Output / Examples:
Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"
*/

function whoIsNext(names, r){
    let names_obs = {},
        count = 0,
        count_name = 0;

    for (let index = 0; index < names.length; index++) {
        names_obs[index] = 1;
    }
    while (true) {
        if (count < r) {
            if (r < (count + names_obs[count_name] * 2 - names_obs[count_name]) && r <= count + 1) {
                return names[count_name];
            }
            if (r === 1) {
                return names[0];
            }
            names_obs[count_name] = names_obs[count_name] * 2;
            if (count_name === names.length - 1) {
                if (count_name + 1 === r) {
                    return names[count_name];
                }
                count_name = 0;
            } else {
                count_name += 1;
            }
            count += names_obs[count_name];
        } else {
            if (count < names.length) {
                return names[count_name - 1]
            } else {
                return names[count_name]
            }
        }
    }
}


