
// let argument = process.argv.slice(2)

export function showPrimeNumbers(lowNumbers,highNumbers) {
    for(let i = lowNumbers; i <= highNumbers; i++)
    {
        let primeNumbers = true;

        for (let j=2; j <= i; j++){
            
            if(i % j === 0 && j !== i)
                primeNumbers = false
        }
         if (primeNumbers)
            console.log(i)
            
    }
}

//showPrimeNumbers(7,22)

// module export ediyoruz
//module.exports = showPrimeNumbers

// es6 ile module export ediyoruz
export default showPrimeNumbers()