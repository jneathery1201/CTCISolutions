
//we can have at most 1 character difference between the two strings
//assuming both inputs are valid, but they could be empty

//O(n) time, O(2n) space ==> O(n) space
function oneAway(input1, input2){
	//if both inputs are empty, they are zero edits away
	if(input1.length === 0 && input2.length === 0)
		return true;

	//find the larger string, default to input1, but if input2 is larger we swap
	//O(2n) space
	var large = input1;
	var small = input2;
	if(input1.length < input2.length){
		large = input2;
		small = input1;
	}
	
	//the two strings can only be AT MOST one character more or less
	if(large.length - small.length > 1)
		return false;

    var j = 0;
    var isDifferenceFound = false;
    //loop through the larger string and check against smaller string
    //O(n) time
	for(var i = 0;i<large.length;i++){
		//the characters are different and we already found a difference
        if(large[i] !== small[j] && isDifferenceFound)
            return false;

        //we found a difference, so we turn the flag on
        if(large[i] !== small[j])
            isDifferenceFound = true;
        else
            j++;
	}

	return true;
}

//O(2n) ==> O(2n)

console.log(oneAway("", "")); //true
console.log(oneAway("pale", "ple")); //true
console.log(oneAway("pales", "pale")); //true
console.log(oneAway("pale", "bale")); //true
console.log(oneAway("pale", "bake")); //false
console.log(oneAway("pales", "ple")); //false