//write your code here
function stripUpperCase(str) {
    let newString = "";
    for (let i = 0; i <= str.length - 1; i++) {
        if (str.charAt(i) == str.charAt(i).toLowerCase()) {
            newString += str[i];
        }
    }
    return newString;
}

console.log(stripUpperCase('Hello!')); // 'ello!')
console.log(stripUpperCase("SevenEleven")); // 'evenleven'
console.log(stripUpperCase("Don't play with Me!")); // 'ont play with e!'