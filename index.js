const nbMonths = (priceOld, priceNew, savingPerMonth, percentLoss) => {
  let saving = 0

  for(let months=1; months < 99  ; months++) {
    if(months%2 === 0) {
      percentLoss += 0.5
    }

    saving += savingPerMonth
    priceOld = (100 - percentLoss) / 100 * priceOld
    priceNew = (100 - percentLoss) / 100 * priceNew

    let leftOver = priceOld + saving - priceNew

    if(leftOver >= 0) {
      return [months, Math.round(leftOver)]
    }
  }
}

console.log(nbMonths(2000, 8000, 1000, 1.5))
