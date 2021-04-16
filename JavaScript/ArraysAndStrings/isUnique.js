// Cracking the Coding Interview
// 1.1
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data strucutes?
// test case 1 input = "TEST";
// output = false
// test case 2 input = "abcd";
// output = true
//assumptions input will always be valid, but could be empty. We will return true in case of empty string

// O(n) time, with map data structure O(n) space
function isUniqueWithDS(input){
	if(input.length <= 1)
		return true;
		
	var map = {};
	for(var i = 0;i<input.length;i++){
		if(map[input[i]] !== undefined){
			return false;
		}
		
		//value is arbitrary
		map[input[i]] = 0;
	}
	
	return true;
}


//O(n^2) time, O(1) space
function isUniqueWithoutDS(input){
	if(input.length <= 1)
		return true;
	
	//check each element against all other elements in string
	for(var i = 0;i<input.length;i++){
		for(var j = i + 1;j<input.length;j++){
			if(input[i] === input[j])
				return false;
		}
	}
	
	return true;
}

//O(n) time with O(1) space IF string comes in as char array
function isUniqueCharArray(input){
	if(input.length <= 1)
		return true;
		
	//sort array
	input.sort();
	
	for(var i = 0;i<input.length;i++){
		//check if current char is the same as the next char
		if(input[i] === input[i + 1])
			return false;
	}
	
	return true;
}


//with DS
console.log("With DS:")
console.log(isUniqueWithDS("1234567")); //true
console.log(isUniqueWithDS("test")); //false
console.log(isUniqueWithDS("abcd")); //true
console.log(isUniqueWithDS("aaaaaaaa")); //false
console.log(isUniqueWithDS("1")); //true
console.log(isUniqueWithDS("")); //true

//without DS
console.log("Without DS:")
console.log(isUniqueWithoutDS("1234567")); //true
console.log(isUniqueWithoutDS("test")); //false
console.log(isUniqueWithoutDS("abcd")); //true
console.log(isUniqueWithoutDS("aaaaaaaa")); //false
console.log(isUniqueWithoutDS("1")); //true
console.log(isUniqueWithoutDS("")); //true

//as char array
console.log("As Char Array, Without DS:");
console.log(isUniqueCharArray("1234567".split(""))); //true
console.log(isUniqueCharArray("test".split(""))); //false
console.log(isUniqueCharArray("abcd".split(""))); //true
console.log(isUniqueCharArray("aaaaaaaa".split(""))); //false
console.log(isUniqueCharArray("1".split(""))); //true
console.log(isUniqueCharArray("".split(""))); //true



