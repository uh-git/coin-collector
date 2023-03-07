// your code 
const coins = require("./coins.js")
function coinCollector(coins) {
  const onlyCoins = [];

  const desired = [
    'quarter',
    'dime',
    'nickel',
    'penny'
  ];

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    if (desired.includes(coin)) {
      onlyCoins.push(coins[i]);
    }
  }
  return onlyCoins;
}

coinCollector(coins);

// your code
module.exports = coinCollector