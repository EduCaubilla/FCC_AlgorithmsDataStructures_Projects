function palindrome(str) {
//Erase any non digit or non letter and convert letters to lower case
return str.replace(/[^0-9a-z]/gi, '').toLowerCase() ===
//Compare with same string splitted to an array to reverse it and joined to an string
str
	.replace(/[^0-9a-z]/gi, '')
	.toLowerCase()
	.split('')
	.reverse()
	.join('')
}

console.log(palindrome("ana"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("not a palindrome"));

