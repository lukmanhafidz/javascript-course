const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

let bills = [22];
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (const bill of bills){
  // Calculate the tip for the given bill and add it to the start of the 'tips' array.
  // The push method returns the new length of the 'tips' array, so we subtract 1 to get the index of the newly added tip.
  // Add the corresponding tip to the original bill amount.
  // Insert this sum (tip + bill) at the end of the 'totals' array.
  totals.push(tips[(tips.push(calcTip(bill))) - 1]+bill);
}

function calcAverage(arr){
    let sum = 0;
    
    for (let val of arr){
        sum += val;
    }
    let avg = sum / arr.length;
    return avg;
}

console.log('totals: ',totals)
console.log('average: ',calcAverage(totals))
  