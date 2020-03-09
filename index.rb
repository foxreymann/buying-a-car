def nbMonths(priceOld, priceNew, savingPerMonth, percentLoss)
  saving = 0

  for months in 1..999
    if months.even?
      percentLoss += 0.5
    end

    saving += savingPerMonth
    priceOld = (100 - percentLoss) / 100 * priceOld
    priceNew = (100 - percentLoss) / 100 * priceNew

    leftOver = priceOld + saving - priceNew

    if leftOver >= 0
      return [months, leftOver.round()]
    end
  end
end

puts(nbMonths(2000, 8000, 1000, 1.5))
