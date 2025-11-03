function lengthOfLongestSubstring(str){
    let maxLength = 0;

    const letters = new Set();

    let left = 0;
    for(let right = 0; right < str.length; right++){
        const charRight = str[right];

        while(letters.has(charRight)){
            const charLeft = str[left];
            letters.delete(charLeft);

            left++;
        }

        letters.add(charRight);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    console.log(letters);
    return maxLength;

}

console.log(`"abcabcbb" -> ${lengthOfLongestSubstring("abcabcbb")}`); // 3
console.log(`"pwwkew" -> ${lengthOfLongestSubstring("pwwkew")}`);   // 3
console.log(`"bbbbb" -> ${lengthOfLongestSubstring("bbbbb")}`);      // 1
console.log(`"" -> ${lengthOfLongestSubstring("")}`);