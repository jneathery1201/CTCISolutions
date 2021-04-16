//O(n) time, O(n) space, no sort
function isPermutationNoSort(input1, input2){
	//if the lengths are not equal, its automatically not a permutation
	if(input1.length !== input2.length)
		return false;
		
	var map1 = {};
	for(var i = 0;i<input1.length;i++){
		//add char to map
		if(map1[input1[i]] === undefined){
			map1[input1[i]] = 1;
			continue;
		}
		
		map1[input1[i]] = map1[input1[i]] + 1;
	}
	
	//do the same thing for the second string
	var map2 = {};
		for(var i = 0;i<input2.length;i++){
		//add char to map
		if(map2[input2[i]] === undefined){
			map2[input2[i]] = 1;
			continue;
		}
		
		map2[input2[i]] = map2[input2[i]] + 1;
	}
	
	//check that the contents of the two maps is the same
	for(var key in map1){
	    if(map2[key] === undefined)
	       return false;
	    else if(map2[key] !== map1[key])
	       return false;
	}

	return true;
}


//O(nlogn) time, O(n) space
function isPermutationWithSort(input1, input2){
    
    if(input1.length !== input2.length)
        return false;

    //convert each string to a char array
    //O(2n) space
    var arr1 = input1.split("");
    var arr2 = input2.split("");

    //sort each array
    //O(2(nlogn))
    arr1.sort();
    arr2.sort();

    //compare the arrays
    return arr1.toString() === arr2.toString();
}


//without sort
console.log("Without Sort:");
console.log(isPermutationNoSort("test", "estt")); //true
console.log(isPermutationNoSort("abc", "abcd")); //false
console.log(isPermutationNoSort("abc", "cba")); //true
console.log(isPermutationNoSort("abc", "bda")); //false

//with sort
console.log("With Sort:");
console.log(isPermutationWithSort("test", "estt")); //true
console.log(isPermutationWithSort("abc", "abcd")); //false
console.log(isPermutationWithSort("abc", "cba")); //true
console.log(isPermutationWithSort("abc", "bda")); //false