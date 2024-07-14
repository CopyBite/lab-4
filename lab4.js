let n = parseInt(prompt("введіть натуральне число n: ")) , p = 0
for (i = 1;i < n;i++){
    if ( n % i === Math.floor(n / i)){
        p += 1
    }
}

console.log("кількіть натуральних дільників числа ",n," = " , p)
