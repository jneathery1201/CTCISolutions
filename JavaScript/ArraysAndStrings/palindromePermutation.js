//for even length strings, palindromes must have equal number of each character
//for odd length strings, palindromes must have equal number of each character, except there can be ONE lone character
//we are assuming case and spacing dont matter, also assuming an empty string is NOT a palindrome 


//O(2n) ==> O(n) time, O(n) space
function palindromePermutation(input){
	if(input.length === 0)
		return false;
	else if(input.length === 1)
		return true;
	
	//convert to lowercase
	input = input.toLowerCase();
	
	//O(n) space
	var map = {};
	var numberOfChars = 0; //this will be the number of chars, excluding spaces
	
	//loop through and add each character to map, increment count of ones that appear multiple times
	//O(n)
	for(var i = 0;i<input.length;i++){
		//ignore spaces
		if(input[i] === " "){
			continue;	
		}
		
		//increment number of chars
		numberOfChars++;

		//add to map
		if(map[input[i]] === undefined){
			map[input[i]] = 1;
			continue;
		}

		//increment number of characters
		map[input[i]] = map[input[i]] + 1;
	}
	
	//loop through all the keys and check for all evens and at most one lone characters
	var moreThanOneLoneChar = false;
	//check if string is of even length, minus spaces
	var isEven = numberOfChars % 2 === 0;
	//O(n) time
	for(var key in map){
		//(even number length, char count is odd), or (length is odd, char count is odd and not equal to 1) or (length is odd, char count is one, but we already found a lone char)
		if((isEven === true && map[key] % 2 !== 0) || (isEven === false && map[key] % 2 !== 0 && map[key] !== 1) || (isEven === false && map[key] === 1 && moreThanOneLoneChar === true)){
		    return false;
		} 
        //length is odd, we havent found a lone char, so we set the flag equal to true
		else if(isEven === false && map[key] === 1 && moreThanOneLoneChar === false){
			moreThanOneLoneChar = true;
		}
	}
	
	return true;
	
}

console.log(palindromePermutation("Tact coa")); //true
console.log(palindromePermutation("Joseph Neathery")); //false
console.log(palindromePermutation("Racecar RACECAR")); //true
console.log(palindromePermutation("a")); //true
console.log(palindromePermutation("CAT CAT")); //true
console.log(palindromePermutation("joe")); //false