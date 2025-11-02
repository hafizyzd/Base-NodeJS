
const myRules = {
    3 : "CIMB",
    5 : "Niaga",
}

const fizzBuzzConfig = (n, rules) => {
    const result = [];

    const divisors = Object.keys(rules).sort((a,b) => a - b);

    for(let i = 1; i <= n; i++){
        let output = "";

        for(const divisor of divisors){
            if( i % divisor === 0){
                output += rules[divisor]
            }
        }

        if(output === ""){
            result.push(i);
        }else{
            result.push(output);
        }
    }

    return result;
}

const report = fizzBuzzConfig(15,myRules);
console.log(JSON.stringify(report,null,2));