/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
    let row = 1,
        count = 1,
        list_num_row = [];

    while (row <= n) {
        list_num_row = [];
        for (let index = 0; index < row; index++) {
            list_num_row.push(count)
            count += 2;
        }
        row++
    }
    return list_num_row.reduce((sum, current) => sum + current);
}
