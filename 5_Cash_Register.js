function checkCashRegister(price, cash, cid) {

  var control = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];

  var output = {status: null, change: []};
  var change = cash - price;

  var registerTotals = cid.reduce((sum, curr) => {
    sum.total += curr[1];
    sum[curr[0]] = curr[1];
    return sum;
    },
    { total: 0 }
  );

  console.log(registerTotals)

  if(registerTotals.total === change){
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  var newArr = control.reduce((sum,curr)=>{
    var value = 0;
    while(registerTotals[curr.name] > 0 && change >= curr.val){
      change -= curr.val;
      registerTotals[curr.name] -= curr.val;
      value += curr.val;

      change = change.toFixed(2);
      console.log(change)
      }
    if (value > 0) {
      sum.push([curr.name, value]);
    }
    return sum;
  }, [])

  console.log(newArr)

  if(change > 0 || newArr.length < 1){
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  output.status = "OPEN";
  output.change = newArr;
  return output
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);