function reverseString(str){
    return str.split('').reverse().join('');
}


let name = "";
name = "sinta patmawati";
console.log(`variable ${name} reverse : ${reverseString(name)}`);



function findMax(numbers){
    if(numbers.length === 0){
        return "undefined";
    }

    let currentMax = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] > currentMax){
            currentMax = numbers[i];
        }
    }
    return currentMax;
}

console.log(`\n[5, 1, 9, 3] -> ${findMax([5, 1, 9, 3])}`);



function countVowels(str){
    str.split('');
    let count = 0;
    let vol = []
    const vowels = ["a", "i", "u", "e", "o"]
    for(const s of str){
        if(vowels.includes(s.toLowerCase())){
            count++;
            vol.push(s);
        }
    }
    console.log(vol.join(''))
    return count;
}

console.log(`string vowels ${countVowels("Sinta Patmawati")}`)
console.log(`string vowels ${countVowels("Hafiz Yazid Muhammad")}`)

