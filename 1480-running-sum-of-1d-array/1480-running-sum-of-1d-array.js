/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const resultArray = [];
    let num = 0;
    nums.forEach((element) => {
        num = num + element;
        resultArray.push(num)
    })
    return resultArray;
};