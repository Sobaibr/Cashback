function calculateCashback(amount, percent) {
    const cashback = amount * (percent / 100);

    return cashback;
}

const magazinePercent = 50;
const userAmount = 1000;

const result = calculateCashback(userAmount, magazinePercent);
console.log(result);
