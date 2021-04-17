class LinkedList{
	constructor(){
		this.head = null;
	}
	
	add(value){
		if(this.head === null){
			this.head = {value: value, next: null};
			return;
		}
		
		var node = this.traverse();
		node.next = {value: value, next: null};
	}
	
	traverse(){
		var curr = this.head;
		while(curr.next !== null){
			curr = curr.next;
		}
		
		return curr;
	}
}

//assuming kth is zero-indexed: 0 - 1, 1 - 2, 2 - 3, .....
//O(n) time, O(1) space
function kThToLast(k, list){
	if(list.head === null)
		throw 'Invalid list';
	
	//traverse to kTh node
	var nodeCnt = 0;
	var curr = list.head;
	while(curr !== null){
		if(k === nodeCnt){
			return curr;
		}
		
		curr = curr.next;
		nodeCnt++;
	}
	
	return null;
}

var list = new LinkedList();
list.add(10);
list.add(50);
list.add(20);
list.add(30);
list.add(60);
console.log(kThToLast(2, list));