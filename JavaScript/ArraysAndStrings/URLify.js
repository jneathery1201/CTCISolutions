//assumption: String is being converted to char array BEFORE hitting our function

//O(n) time, O(1) space
function URLify(input, length){
	if(input.length === 0)
		return "";
	
	var j = input.length - 1;
	for(var i = length - 1;i>=0 && i<j;i--){
		if(input[i] === " "){
			input[j--] = "0";
			input[j--] = "2";
			input[j--] = "%";
		} else {
			input[j--] = input[i];
		}
	}
	
	return input.join('');
}

console.log(URLify("Mr John Smith    ".split(""), 13));
console.log(URLify("This is a Test      ".split(""), 14));

