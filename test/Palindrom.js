function isPalindrom(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;

}

console.log(`"Kodok" -> ${isPalindrom("kodok")}`);
console.log(`"Asah Pikiran" -> ${isPalindrom("Asah Pikiran")}`);
console.log(`"katak" -> ${isPalindrom("katak")}`);

const complexSentence = "A man, a plan, a canal: Panama";
console.log(`"${complexSentence}" -> ${isPalindrom(complexSentence)}`); 