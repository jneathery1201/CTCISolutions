//we are assuming that input is valid and we will only recieve upper case and lower case letters, we could recieve an empty string.
//input = "aabcccccaaa";
//output = "a2b1c5a3";

//O(n) time, O(n) space
function strCompress(input){
	if(input.length <= 1)
		return input;

	//O(n) space
	var arr = [];
	var cnt = 1;
	//loop through string and add letter to array, then count of letter
	for(var i = 0;i<input.length;i++){
		//same letter, more than once in a row, increment count
		if(input[i] === input[i + 1]){
			cnt++;
		}
		//if a new letter is coming next, we add the current char and count to the array
		else{
			arr.push(input[i]);
			arr.push(cnt);
			//resent cnt to 1
			cnt = 1;
		}
	}
	
	//if compressed string is longer than orginial return the original
	if(arr.length >= input.length)
	    return input;
	else
	    return arr.join("");
}

console.log(strCompress("aabcccccaaa")); //a2b1c5a3
console.log(strCompress("ab")); //ab
console.log(strCompress("abcd")); //abcd
console.log(strCompress("aab")); //aab
console.log(strCompress("aaabbcc")); //a3b2c2
console.log(strCompress("")); // 
console.log(strCompress("a")); //a