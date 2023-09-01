/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const sumArr = [];
    accounts.forEach((subArr) => {
        let sumOfSubArr = 0;
        subArr.forEach((element) => {
            sumOfSubArr = sumOfSubArr + element;
        })
        sumArr.push(sumOfSubArr)
    });
    sumArr.sort(function(a,b) {return a-b})
    return sumArr[sumArr.length - 1];
};