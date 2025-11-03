function isValidBracket(str){
    const stack = [];

    const bracketMap = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    const chars = str.split('');

    for(const char of chars){
        if(!bracketMap[char]){
            stack.push(char);
        }else{
            if(stack.length === 0){
                return false;
            }
            const lastBracket = stack.pop();
            if(bracketMap[char] !== lastBracket){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(`"()" -> ${isValidBracket("{[{()]}}")}`);