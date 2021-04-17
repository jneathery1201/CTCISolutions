//LinkedList helper class
class LinkedList{
	constructor(){
		this.head = null;
	}
	
	addNode(value){
		if(this.head === null){
			this.head = {value: value, next: null};
			return;
		}
		
		//traverse to end of list, (if we kept track of tail, we wouldnt need to traverse to add a nodeName
		var node = this.traverse();
		//add new node to end
		node.next = {value: value, next: null};
		
	}
	
    //TODO: Add a merge sort helper

	traverse(){
		if(this.head === null){
			return null;
		}
		
		var curr = this.head;
		while(curr.next !== null){
			if(curr.next !== null)
				curr = curr.next;
		}
		
		return curr;
	}
	
}


//Unsorted LinkedList
//assuming that list will be valid, but could be empty
//O(n) time, O(n) space for the map
function removeDups(list){
	if(list.head === null)
		return list;
	
	//map to keep track of visited values
	var map = {};
	var curr = list.head; //10
	var prev = null; 
	
	while(curr !== null){
		//add value to map
		if(map[curr.value] === undefined){
			//map value is arbitrary
			map[curr.value] = 0;
		}
		//we have alread found this value remove it
		else{
			//this is the last node, just remove it
			if(curr.next === null){
				prev.next = null;
			}else{
				prev.next = curr.next;
				curr = prev;
			}
		}
		prev = curr; //10
		curr = curr.next; //10
	}
	
	return list;
}


//assuming the list is valid, but could be empty, assuming that the list is pre-sorted
//O(n) time, but we can optimize space if the linkedlist is sorted
//O(n) time, O(1) space
function removeDupsOptimized(list){
	if(list.head === null)
	    return list;

    var curr = list.head;
    var prev = null;

    //we loop through the list and make sure that the current node value does not equal the previous node value
    while(curr !== null){
        if(prev !== null){
        	//found a duplicate
        	if(prev.value === curr.value){
                prev.next = curr.next;
                curr = prev;
        	}
        }

        prev = curr;
        curr = curr.next;
    }

    return list;
}

//init LinkedList
var linkedList = new LinkedList();
linkedList.addNode(10); //prev
linkedList.addNode(5); //curr
linkedList.addNode(20)	//curr.next
linkedList.addNode(5);
linkedList.addNode(5);
console.log(removeDups(linkedList));

var sortedList = new LinkedList();
sortedList.addNode(1);
sortedList.addNode(2);
sortedList.addNode(2);
sortedList.addNode(2);
sortedList.addNode(3);
console.log(removeDupsOptimized(sortedList));